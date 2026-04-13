# מרכז הבוררות והגישור באילת — אתר רשמי

אתר Next.js מלא עבור מרכז הבוררות והגישור באילת, בהנהלת עו"ד מיכל זמרן.

---

## דרישות מערכת

- Node.js 18 ומעלה
- npm או yarn

---

## התקנה

### 1. שכפול הפרויקט

```bash
git clone <repo-url>
cd eilat-adr
```

### 2. התקנת חבילות

```bash
npm install
```

### 3. הגדרת משתני סביבה

צרו קובץ `.env.local` בתיקיית הבסיס של הפרויקט:

```bash
cp .env.local.example .env.local
```

ערכו את הקובץ והוסיפו את הערכים הבאים:

```
RESEND_API_KEY=your_resend_api_key_here
TO_EMAIL=your_email@example.com
```

**איך מקבלים מפתח Resend?**
1. היכנסו לאתר [resend.com](https://resend.com)
2. צרו חשבון חינמי
3. צרו מפתח API תחת "API Keys"
4. הדביקו את המפתח בקובץ `.env.local`

### 4. הפעלת שרת פיתוח

```bash
npm run dev
```

האתר יהיה זמין בכתובת: [http://localhost:3000](http://localhost:3000)

---

## בנייה לייצור

```bash
npm run build
npm run start
```

---

## מבנה הפרויקט

```
eilat-adr/
├── app/
│   ├── layout.tsx          # תבנית גלובלית: פונטים, RTL, Navbar, Footer
│   ├── page.tsx            # דף הבית (8 סקציות)
│   ├── about/              # עמוד אודות
│   ├── services/           # עמוד שירותים
│   ├── process/            # עמוד תהליך
│   ├── for-lawyers/        # עמוד לעורכי דין
│   ├── join/               # עמוד הצטרפות
│   ├── sectors/            # עמוד קהלי יעד
│   ├── contact/            # עמוד צור קשר
│   └── api/contact/        # API Route — שליחת מייל עם Resend
├── components/
│   ├── Navbar.tsx          # ניווט עליון (sticky, RTL, mobile-friendly)
│   ├── Footer.tsx          # כותרת תחתונה
│   ├── Button.tsx          # כפתור גמיש (primary / outline / dark)
│   ├── FadeIn.tsx          # אנימציית כניסה על גלילה
│   ├── SectionWrapper.tsx  # עטיפה אחידה לסקציות
│   ├── ServiceCard.tsx     # כרטיס שירות
│   └── StatCard.tsx        # כרטיס סטטיסטיקה
├── .env.local.example      # דוגמת משתני סביבה
└── README.md               # קובץ זה
```

---

## ערימת טכנולוגיות

| טכנולוגיה | גרסה | שימוש |
|---|---|---|
| Next.js | 16.x | App Router, SSR, Route Handlers |
| React | 19.x | ממשק משתמש |
| Tailwind CSS | 4.x | עיצוב (RTL) |
| Resend | 6.x | שליחת מיילים מטפסי קשר |
| TypeScript | 5.x | בטיחות טיפוסים |

---

## פרסום (Deployment)

האתר תואם לפרסום ב:

- **Vercel** (מומלץ) — `vercel deploy`
- **Netlify**
- כל שרת Node.js

בעת פרסום, הוסיפו את משתני הסביבה לפאנל הניהול של פלטפורמת הפרסום.

---

## הוספת פרטי קשר אמיתיים

חפשו בקוד את הכיתוב `יתעדכן בקרוב` ועדכנו:

1. [components/Footer.tsx](components/Footer.tsx) — כתובת, טלפון, מייל
2. [app/contact/page.tsx](app/contact/page.tsx) — פרטי קשר בדף צור קשר
3. [app/layout.tsx](app/layout.tsx) — מספר WhatsApp (`wa.me/972XXXXXXXXX`)
4. [app/contact/page.tsx](app/contact/page.tsx) — קישור WhatsApp

---

© 2026 מרכז הבוררות והגישור באילת
