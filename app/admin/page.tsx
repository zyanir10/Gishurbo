"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface ArticleRow {
  slug: string;
  title: string;
  category: string;
  dateISO: string;
  featured: boolean;
  uploaded: boolean;
}

const IMAGES = [
  { value: "/bridge-mediation.jpeg", label: "גשר בין שני צדדים" },
  { value: "/table-painting.png", label: "חתימה על הסכם סביב שולחן" },
  { value: "/net-characters.jpeg", label: "רשת דמויות מחוברות" },
  { value: "/scales-arbitration.jpeg", label: "מאזני צדק — בוררות" },
  { value: "/handshake-photo.jpeg", label: "לחיצת יד" },
  { value: "/handshake-painting.png", label: "לחיצת יד — איור" },
  { value: "/puzzle-joined.png", label: "פאזל מחובר" },
  { value: "/puzzle-touching.png", label: "פאזל נוגע" },
  { value: "/puzzle-broken.png", label: "פאזל שבור" },
  { value: "/Family-Holding.png", label: "משפחה" },
  { value: "/Lecture.png", label: "הרצאה" },
];

const AUTHORS = [
  { value: "/Logo.png", label: "המרכז ליישוב סכסוכים באילת" },
  { value: "/osnat.png", label: "אסנת אדלר" },
  { value: "/eyal.png", label: "אייל שמריהו" },
  { value: "/michal.png", label: "מיכל" },
];

const field =
  "w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-gold focus:outline-none";
const label = "block text-sm font-semibold text-navy mb-1.5";

export default function AdminPage() {
  const [state, setState] = useState<"loading" | "locked" | "ready">("loading");
  const [configured, setConfigured] = useState(true);
  const [password, setPassword] = useState("");
  const [articles, setArticles] = useState<ArticleRow[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const loadArticles = useCallback(async () => {
    const res = await fetch("/api/admin/articles");
    if (res.ok) setArticles((await res.json()).articles);
  }, []);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/admin/session");
      const data = await res.json();
      setConfigured(data.configured);
      if (data.authenticated) {
        setState("ready");
        await loadArticles();
      } else {
        setState("locked");
      }
    })();
  }, [loadArticles]);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const res = await fetch("/api/admin/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setBusy(false);
    if (res.ok) {
      setPassword("");
      setState("ready");
      await loadArticles();
    } else {
      setError((await res.json()).error ?? "ההתחברות נכשלה");
    }
  }

  async function logout() {
    await fetch("/api/admin/session", { method: "DELETE" });
    setState("locked");
    setArticles([]);
  }

  async function upload(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError("");
    setNotice("");

    const res = await fetch("/api/admin/articles", {
      method: "POST",
      body: new FormData(e.currentTarget),
    });
    const data = await res.json();
    setBusy(false);

    if (res.ok) {
      setNotice(`המאמר פורסם בהצלחה (${data.blocks} פסקאות). הכתובת: /knowledge/${data.slug}`);
      formRef.current?.reset();
      await loadArticles();
    } else {
      setError(data.error ?? "ההעלאה נכשלה");
    }
  }

  async function remove(slug: string) {
    if (!confirm(`למחוק את המאמר "${slug}"? הפעולה אינה הפיכה.`)) return;
    setBusy(true);
    setError("");
    setNotice("");
    const res = await fetch(`/api/admin/articles?slug=${slug}`, {
      method: "DELETE",
    });
    const data = await res.json();
    setBusy(false);
    if (res.ok) {
      setNotice("המאמר נמחק.");
      await loadArticles();
    } else {
      setError(data.error ?? "המחיקה נכשלה");
    }
  }

  if (state === "loading") {
    return (
      <main className="min-h-screen bg-gray-50 pt-32 px-6 text-center text-gray-500">
        טוען…
      </main>
    );
  }

  if (state === "locked") {
    return (
      <main className="min-h-screen bg-gray-50 pt-32 px-6">
        <div className="max-w-[420px] mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h1 className="text-2xl font-bold text-navy mb-2">ניהול מאמרים</h1>
          <p className="text-gray-500 text-sm mb-6">
            אזור מוגן. יש להזין את סיסמת הניהול.
          </p>

          {!configured && (
            <p className="mb-4 rounded bg-amber-50 border border-amber-200 p-3 text-sm text-amber-800">
              לא הוגדרה סיסמת ניהול. יש להוסיף משתנה סביבה בשם{" "}
              <code className="font-mono">ADMIN_PASSWORD</code> בהגדרות הפרויקט
              ב-Vercel.
            </p>
          )}

          <form onSubmit={login}>
            <label className={label} htmlFor="password">
              סיסמה
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={field}
              autoComplete="current-password"
              required
            />
            {error && <p className="text-red-600 text-sm mt-3">{error}</p>}
            <button
              type="submit"
              disabled={busy || !configured}
              className="mt-5 w-full bg-gold text-navy font-semibold py-3 rounded hover:bg-gold/90 transition-colors disabled:opacity-60"
            >
              {busy ? "מתחבר…" : "כניסה"}
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-28 pb-20 px-6">
      <div className="max-w-[900px] mx-auto">
        <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
          <h1 className="text-3xl font-bold text-navy">ניהול מאמרים</h1>
          <button
            onClick={logout}
            className="text-sm font-semibold text-gray-500 hover:text-navy transition-colors"
          >
            התנתקות
          </button>
        </div>

        {error && (
          <p className="mb-5 rounded bg-red-50 border border-red-200 p-3 text-sm text-red-700">
            {error}
          </p>
        )}
        {notice && (
          <p className="mb-5 rounded bg-green-50 border border-green-200 p-3 text-sm text-green-800">
            {notice}
          </p>
        )}

        {/* Upload */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 mb-10">
          <h2 className="text-xl font-bold text-navy mb-1">העלאת מאמר חדש</h2>
          <p className="text-gray-500 text-sm mb-6">
            בחרו קובץ Word ‎(.docx)‎ — האתר ימיר אותו אוטומטית לעמוד מאמר מעוצב.
            כותרות שהוגדרו ב-Word יזוהו כראשי פרקים.
          </p>

          <form ref={formRef} onSubmit={upload} className="grid gap-5">
            <div>
              <label className={label} htmlFor="file">
                קובץ המאמר (.docx)
              </label>
              <input
                id="file"
                name="file"
                type="file"
                accept=".docx"
                required
                className={field}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={label} htmlFor="title">
                  כותרת המאמר
                </label>
                <input id="title" name="title" className={field} required />
              </div>
              <div>
                <label className={label} htmlFor="slug">
                  כתובת באתר (אנגלית)
                </label>
                <input
                  id="slug"
                  name="slug"
                  className={field}
                  pattern="[a-z0-9]+(-[a-z0-9]+)*"
                  placeholder="family-mediation"
                  required
                />
                <p className="text-gray-400 text-xs mt-1">
                  אותיות אנגליות קטנות, ספרות ומקפים בלבד
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={label} htmlFor="category">
                  קטגוריה
                </label>
                <input
                  id="category"
                  name="category"
                  className={field}
                  placeholder="גישור ויישוב סכסוכים"
                />
              </div>
              <div>
                <label className={label} htmlFor="dateISO">
                  תאריך פרסום
                </label>
                <input
                  id="dateISO"
                  name="dateISO"
                  type="date"
                  className={field}
                  defaultValue={new Date().toISOString().slice(0, 10)}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={label} htmlFor="image">
                  תמונה
                </label>
                <select id="image" name="image" className={field}>
                  {IMAGES.map((img) => (
                    <option key={img.value} value={img.value}>
                      {img.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={label} htmlFor="authorImage">
                  מחבר
                </label>
                <select
                  id="authorImage"
                  name="authorImage"
                  className={field}
                  onChange={(e) => {
                    const author = AUTHORS.find(
                      (a) => a.value === e.target.value
                    );
                    const input = document.getElementById(
                      "author"
                    ) as HTMLInputElement | null;
                    if (input && author) input.value = author.label;
                  }}
                >
                  {AUTHORS.map((a) => (
                    <option key={a.value} value={a.value}>
                      {a.label}
                    </option>
                  ))}
                </select>
                <input
                  id="author"
                  name="author"
                  type="hidden"
                  defaultValue={AUTHORS[0].label}
                />
              </div>
            </div>

            <div>
              <label className={label} htmlFor="imageAlt">
                תיאור התמונה (לנגישות)
              </label>
              <input id="imageAlt" name="imageAlt" className={field} />
            </div>

            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-2.5 text-sm text-gray-700">
                <input type="checkbox" name="featured" value="true" />
                להציג כמאמר נבחר בראש מרכז הידע
              </label>
              <label className="flex items-center gap-2.5 text-sm text-gray-700">
                <input
                  type="checkbox"
                  name="original"
                  value="true"
                  defaultChecked
                />
                לסמן בתגית &quot;מאמר מקורי&quot;
              </label>
              <label className="flex items-center gap-2.5 text-sm text-gray-700">
                <input
                  type="checkbox"
                  name="dropFirstHeading"
                  value="true"
                  defaultChecked
                />
                הכותרת הראשונה במסמך היא שם המאמר — אל תציג אותה שוב בגוף הטקסט
              </label>
            </div>

            <button
              type="submit"
              disabled={busy}
              className="justify-self-start bg-gold text-navy font-semibold px-8 py-3 rounded hover:bg-gold/90 transition-colors disabled:opacity-60"
            >
              {busy ? "מעלה…" : "פרסום המאמר"}
            </button>
          </form>
        </section>

        {/* Existing articles */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
          <h2 className="text-xl font-bold text-navy mb-5">
            מאמרים באתר ({articles.length})
          </h2>
          <ul className="flex flex-col divide-y divide-gray-100">
            {articles.map((a) => (
              <li
                key={a.slug}
                className="flex items-center justify-between gap-4 py-3.5 flex-wrap"
              >
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <a
                      href={`/knowledge/${a.slug}`}
                      className="font-semibold text-navy hover:text-gold transition-colors"
                    >
                      {a.title}
                    </a>
                    {a.featured && (
                      <span className="bg-gold text-navy text-xs font-bold px-2 py-0.5 rounded-full">
                        נבחר
                      </span>
                    )}
                    {!a.uploaded && (
                      <span className="bg-gray-100 text-gray-500 text-xs font-semibold px-2 py-0.5 rounded-full">
                        מובנה
                      </span>
                    )}
                  </div>
                  <span className="text-gray-400 text-xs">
                    {a.category} · {a.dateISO}
                  </span>
                </div>
                {a.uploaded ? (
                  <button
                    onClick={() => remove(a.slug)}
                    disabled={busy}
                    className="text-sm font-semibold text-red-600 hover:text-red-700 transition-colors disabled:opacity-60"
                  >
                    מחיקה
                  </button>
                ) : (
                  <span className="text-xs text-gray-400">
                    ניתן לעדכן בהעלאה עם אותה כתובת
                  </span>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
