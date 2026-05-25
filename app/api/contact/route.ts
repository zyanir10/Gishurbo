import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

function row(label: string, value?: string) {
  if (!value) return "";
  return `<tr>
    <td style="padding:8px 12px;background:#f9fafb;font-weight:bold;color:#1E2A38;border:1px solid #e5e7eb;width:160px;">${label}</td>
    <td style="padding:8px 12px;border:1px solid #e5e7eb;color:#374151;">${value}</td>
  </tr>`;
}

function msgBlock(message?: string) {
  if (!message) return "";
  return `<h3 style="color:#1E2A38;font-family:Arial;margin-top:20px;">הודעה:</h3>
  <div dir="rtl" style="background:#f9fafb;padding:16px;border-right:4px solid #C9A646;font-family:Arial;font-size:14px;color:#374151;line-height:1.6;">
    ${message.replace(/\n/g, "<br/>")}
  </div>`;
}

export async function POST(req: NextRequest) {
  const toEmail = process.env.TO_EMAIL ?? "gishurbo@gmail.com";

  try {
    const body = await req.json();
    const {
      name, phone, email, subject, message,
      firm, profession, certification, years,
    } = body as Record<string, string>;

    const isJoin   = !!profession;
    const isLawyer = !!firm && !profession;

    let emailSubject: string;
    let html: string;

    if (isJoin) {
      emailSubject = "בקשת הצטרפות חדשה — מגשר/בורר";
      html = `<div dir="rtl" style="font-family:Arial;padding:20px;">
        <h2 style="color:#1E2A38;">בקשת הצטרפות חדשה</h2>
        <table style="border-collapse:collapse;width:100%;font-size:14px;">
          ${row("שם", name)}
          ${row("מקצוע", profession)}
          ${row("הסמכה", certification)}
          ${row("שנות ניסיון", years)}
        </table>
        ${msgBlock(message)}
      </div>`;
    } else if (isLawyer) {
      emailSubject = "פנייה חדשה — עורך דין";
      html = `<div dir="rtl" style="font-family:Arial;padding:20px;">
        <h2 style="color:#1E2A38;">פנייה חדשה מעורך דין</h2>
        <table style="border-collapse:collapse;width:100%;font-size:14px;">
          ${row("שם", name)}
          ${row("שם המשרד", firm)}
          ${row("טלפון", phone)}
          ${row("אימייל", email)}
        </table>
        ${msgBlock(message)}
      </div>`;
    } else {
      emailSubject = `פנייה חדשה — צרו קשר${subject ? `: ${subject}` : ""}`;
      html = `<div dir="rtl" style="font-family:Arial;padding:20px;">
        <h2 style="color:#1E2A38;">פנייה חדשה מהאתר</h2>
        <table style="border-collapse:collapse;width:100%;font-size:14px;">
          ${row("שם", name)}
          ${row("טלפון", phone)}
          ${row("אימייל", email)}
          ${row("נושא", subject)}
        </table>
        ${msgBlock(message)}
      </div>`;
    }

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: toEmail,
      ...(email ? { replyTo: email } : {}),
      subject: emailSubject,
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
