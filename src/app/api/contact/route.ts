import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";

const attempts = new Map<string, { count: number; resetAt: number }>();
const WINDOW = 10 * 60 * 1000;
const LIMIT = 5;

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
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) return NextResponse.json({ message: "Online enquiries are being configured. Please use email or WhatsApp for now." }, { status: 503 });
  try {
    const response = await fetch(webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...parsed.data, website: undefined, receivedAt: new Date().toISOString() }), signal: AbortSignal.timeout(8000) });
    if (!response.ok) throw new Error("Contact delivery failed");
    return NextResponse.json({ message: "Message sent." });
  } catch { return NextResponse.json({ message: "Your message could not be delivered. Please email me directly." }, { status: 502 }); }
}
