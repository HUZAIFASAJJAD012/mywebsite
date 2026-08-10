"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

type FieldErrors = Record<string, string[]>;

const projectTypes = ["New web application", "Existing application improvement", "Mobile application", "Backend/API development", "UI implementation", "WordPress project", "Ongoing technical partnership", "Remote role or contract"];
const projectStages = ["Idea / discovery", "Planning and design", "In development", "Existing product", "Ready to launch"];

export function ContactForm() {
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; message: string }>(null);
  const [errors, setErrors] = useState<FieldErrors>({});

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setPending(true); setStatus(null); setErrors({});
    const form = event.currentTarget;
    const body = Object.fromEntries(new FormData(form));
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      const data = await response.json() as { message?: string; errors?: FieldErrors };
      if (!response.ok) {
        setErrors(data.errors ?? {});
        setStatus({ ok: false, message: data.message ?? "Your message could not be sent. Please email me directly." });
        return;
      }
      form.reset();
      setStatus({ ok: true, message: "Thanks — your message has been sent. I’ll get back to you soon." });
    } catch {
      setStatus({ ok: false, message: "The form is temporarily unavailable. Please use email or WhatsApp." });
    } finally { setPending(false); }
  }

  function errorFor(name: string) { return errors[name]?.[0]; }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="honeypot" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
      <div className="field"><label htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" required aria-describedby={errorFor("name") ? "name-error" : undefined} />{errorFor("name") ? <span className="field-error" id="name-error">{errorFor("name")}</span> : null}</div>
      <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required aria-describedby={errorFor("email") ? "email-error" : undefined} />{errorFor("email") ? <span className="field-error" id="email-error">{errorFor("email")}</span> : null}</div>
      <div className="field"><label htmlFor="company">Company <span className="muted">(optional)</span></label><input id="company" name="company" autoComplete="organization" /></div>
      <div className="field"><label htmlFor="projectType">Project type</label><select id="projectType" name="projectType" required defaultValue=""><option value="" disabled>Select one</option>{projectTypes.map((type) => <option key={type}>{type}</option>)}</select>{errorFor("projectType") ? <span className="field-error">{errorFor("projectType")}</span> : null}</div>
      <div className="field"><label htmlFor="projectStage">Current project stage</label><select id="projectStage" name="projectStage" required defaultValue=""><option value="" disabled>Select one</option>{projectStages.map((stage) => <option key={stage}>{stage}</option>)}</select>{errorFor("projectStage") ? <span className="field-error">{errorFor("projectStage")}</span> : null}</div>
      <div className="field"><label htmlFor="budget">Estimated budget <span className="muted">(optional)</span></label><select id="budget" name="budget" defaultValue=""><option value="">Not decided</option><option>Under $2,000</option><option>$2,000–$5,000</option><option>$5,000–$10,000</option><option>$10,000+</option></select></div>
      <div className="field full"><label htmlFor="message">Tell me about the project</label><textarea id="message" name="message" required placeholder="What are you building, where does it stand, and what outcome do you need?" aria-describedby={errorFor("message") ? "message-error" : undefined} />{errorFor("message") ? <span className="field-error" id="message-error">{errorFor("message")}</span> : null}</div>
      {status ? <div className="form-status" role="status" style={{ border: `1px solid ${status.ok ? "rgba(45,212,191,.35)" : "rgba(251,113,133,.35)"}` }}>{status.message}</div> : null}
      <div className="field full"><button className="button button-primary" type="submit" disabled={pending}>{pending ? "Sending…" : <>Send project enquiry <Send size={16} /></>}</button></div>
    </form>
  );
}
