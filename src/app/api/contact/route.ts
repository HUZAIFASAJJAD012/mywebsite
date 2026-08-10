import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type { ContactInput } from "@/lib/validation";
import { contactSchema } from "@/lib/validation";

export const runtime = "nodejs";

const attempts = new Map<string, { count: number; resetAt: number }>();
const WINDOW = 10 * 60 * 1000;
const LIMIT = 5;

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character] ?? character);
}

async function sendWithSmtp(data: ContactInput) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;
  const recipient = process.env.CONTACT_TO_EMAIL ?? user;
  if (!host || !user || !password || !recipient) return false;

  const port = Number(process.env.SMTP_PORT ?? 465);
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE !== "false",
    auth: { user, pass: password },
  });
  const safe = Object.fromEntries(Object.entries(data).map(([key, value]) => [key, escapeHtml(value ?? "")])) as Record<keyof ContactInput, string>;
  const subjectName = data.name.replace(/[\r\n]/g, " ").slice(0, 80);

  await transporter.sendMail({
    from: `Huzaifa Sajjad Portfolio <${user}>`,
    to: recipient,
    replyTo: data.email,
    subject: `New portfolio enquiry from ${subjectName}`,
    text: [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Company: ${data.company || "Not provided"}`,
      `Project type: ${data.projectType}`,
      `Project stage: ${data.projectStage}`,
      `Budget: ${data.budget || "Not decided"}`,
      "",
      data.message,
    ].join("\n"),
    html: `<h2>New portfolio enquiry</h2><p><strong>Name:</strong> ${safe.name}</p><p><strong>Email:</strong> ${safe.email}</p><p><strong>Company:</strong> ${safe.company || "Not provided"}</p><p><strong>Project type:</strong> ${safe.projectType}</p><p><strong>Project stage:</strong> ${safe.projectStage}</p><p><strong>Budget:</strong> ${safe.budget || "Not decided"}</p><hr><p>${safe.message.replace(/\n/g, "<br>")}</p>`,
  });
  return true;
}

async function sendWithWebhook(data: ContactInput) {
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) return false;
  const response = await fetch(webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, website: undefined, receivedAt: new Date().toISOString() }), signal: AbortSignal.timeout(8000) });
  if (!response.ok) throw new Error("Contact delivery failed");
  return true;
}

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 20_000) return NextResponse.json({ message: "Request is too large." }, { status: 413 });
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now(); const record = attempts.get(ip);
  if (record && record.resetAt > now && record.count >= LIMIT) return NextResponse.json({ message: "Too many requests. Please try again later." }, { status: 429 });
  if (!record || record.resetAt <= now) attempts.set(ip, { count: 1, resetAt: now + WINDOW }); else record.count += 1;
  let json: unknown;
  try { json = await request.json(); } catch { return NextResponse.json({ message: "Invalid request." }, { status: 400 }); }
  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) return NextResponse.json({ message: "Please review the highlighted fields.", errors: parsed.error.flatten().fieldErrors }, { status: 400 });
  if (parsed.data.website) return NextResponse.json({ message: "Message received." });
  try {
    const sent = await sendWithSmtp(parsed.data) || await sendWithWebhook(parsed.data);
    if (!sent) return NextResponse.json({ message: "Online enquiries are being configured. Please use email or WhatsApp for now." }, { status: 503 });
    return NextResponse.json({ message: "Message sent." });
  } catch { return NextResponse.json({ message: "Your message could not be delivered. Please email me directly." }, { status: 502 }); }
}
