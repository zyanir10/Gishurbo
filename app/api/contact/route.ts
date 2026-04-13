import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const TO_EMAIL = process.env.TO_EMAIL ?? "placeholder@example.com";

  try {
    const body = await req.json();
    const { name, phone, email, subject, message, firm, profession, certification, years } =
      body as Record<string, string>;

    // Build a clean Hebrew email body
    const lines: string[] = [
      `<h2 style="color:#1E2A38;font-family:Arial,sans-serif;">פנייה חדשה — מרכז הבוררות והגישור באילת</h2>`,
      `<table dir="rtl" style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif;font-size:14px;">`,
    ];

    const addRow = (label: string, value?: string) => {
      if (!value) return;
      lines.push(
        `<tr>
          <td style="padding:8px 12px;background:#f9fafb;font-weight:bold;color:#1E2A38;border:1px solid #e5e7eb;width:160px;">${label}</td>
          <td style="padding:8px 12px;border:1px solid #e5e7eb;color:#374151;">${value}</td>
        </tr>`
      );
    };

    addRow("שם", name);
    addRow("טלפון", phone);
    addRow("אימייל", email);
    addRow("נושא", subject);
    addRow("שם המשרד", firm);
    addRow("מקצוע", profession);
    addRow("הסמכה", certification);
    addRow("שנות ניסיון", years);

    lines.push(`</table>`);

    if (message) {
      lines.push(
        `<h3 style="color:#1E2A38;font-family:Arial,sans-serif;margin-top:20px;">הודעה:</h3>`,
        `<div dir="rtl" style="background:#f9fafb;padding:16px;border-right:4px solid #C9A646;font-family:Arial,sans-serif;font-size:14px;color:#374151;line-height:1.6;">${message.replace(/\n/g, "<br/>")}</div>`
      );
    }

    const html = lines.join("\n");

    const { error } = await resend.emails.send({
      from: "מרכז הבוררות והגישור <onboarding@resend.dev>",
      to: [TO_EMAIL],
      replyTo: email,
      subject: `פנייה חדשה: ${subject ?? "ללא נושא"} — ${name ?? ""}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "שגיאת שרת" }, { status: 500 });
  }
}
