import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "emails@flowqualify.app";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email is not configured. Set RESEND_API_KEY." },
      { status: 500 }
    );
  }

  let body: { name?: string; email?: string; company?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const company = typeof body.company === "string" ? body.company.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required" },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address" },
      { status: 400 }
    );
  }

  const html = [
    `<p><strong>Name:</strong> ${escapeHtml(name)}</p>`,
    `<p><strong>Email:</strong> ${escapeHtml(email)}</p>`,
    company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : "",
    message ? `<p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>` : "",
  ]
    .filter(Boolean)
    .join("");

  try {
    const { error } = await resend.emails.send({
      from: `FlowQualify Contact <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `FlowQualify: New contact from ${name}`,
      html: html || "<p>No message provided.</p>",
    });

    if (error) {
      console.error("Resend error:", error);
      const isNetwork =
        error.message?.includes("could not be resolved") ||
        error.message?.includes("fetch") ||
        error.message?.includes("ECONNREFUSED") ||
        error.message?.includes("ENOTFOUND") ||
        error.message?.includes("ETIMEDOUT");
      return NextResponse.json(
        {
          error: isNetwork
            ? "Email service is unreachable. Check your network (try without VPN) and RESEND_API_KEY, then try again."
            : "Failed to send email. Please try again.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Contact API error:", err);
    const isNetwork =
      /could not be resolved|fetch|ECONNREFUSED|ENOTFOUND|ETIMEDOUT/i.test(message);
    return NextResponse.json(
      {
        error: isNetwork
          ? "Email service is unreachable. Check your network (try without VPN) and RESEND_API_KEY, then try again."
          : "Failed to send email. Please try again.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
