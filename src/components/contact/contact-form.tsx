"use client";

import { useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Send } from "lucide-react";
import { budgetRanges, contactPreferences, projectTimelines, projectTypes } from "@/content/contact-options";
import { readAttribution } from "@/lib/attribution";
import { trackPortfolioEvent } from "@/lib/analytics";

type FieldErrors = Record<string, string[]>;

export function ContactForm({ context, defaultProjectType = "" }: { context?: string; defaultProjectType?: string }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; message: string }>(null);
  const [errors, setErrors] = useState<FieldErrors>({});
  const startedAt = useRef<number | null>(null);
  const trackedStart = useRef(false);

  function markStarted() {
    if (trackedStart.current) return;
    trackedStart.current = true;
    startedAt.current = Date.now();
    trackPortfolioEvent("lead_form_start", context ? { context } : undefined);
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    setPending(true);
    setStatus(null);
    setErrors({});
    const form = event.currentTarget;
    const body = {
      ...Object.fromEntries(new FormData(form)),
      ...readAttribution(),
      context,
      startedAt: startedAt.current ?? Date.now(),
    };
    trackPortfolioEvent("lead_form_submit", context ? { context } : undefined);
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      const data = await response.json() as { message?: string; errors?: FieldErrors };
      if (!response.ok) {
        setErrors(data.errors ?? {});
        setStatus({ ok: false, message: data.message ?? "Your message could not be sent. Please email me directly." });
        trackPortfolioEvent("lead_form_error", { reason: response.status });
        return;
      }
      form.reset();
      trackPortfolioEvent("lead_form_success", context ? { context } : undefined);
      router.push("/contact/thank-you");
    } catch {
      setStatus({ ok: false, message: "The form is temporarily unavailable. Please use email or WhatsApp." });
      trackPortfolioEvent("lead_form_error", { reason: "network" });
    } finally {
      setPending(false);
    }
  }

  function errorFor(name: string) {
    return errors[name]?.[0];
  }

  return (
    <form className="contact-form" onSubmit={submit} onFocusCapture={markStarted} noValidate>
      <div className="honeypot" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
      <div className="field"><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" required aria-invalid={Boolean(errorFor("name"))} aria-describedby={errorFor("name") ? "name-error" : undefined} />{errorFor("name") ? <span className="field-error" id="name-error">{errorFor("name")}</span> : null}</div>
      <div className="field"><label htmlFor="email">Work email</label><input id="email" name="email" type="email" autoComplete="email" required aria-invalid={Boolean(errorFor("email"))} aria-describedby={errorFor("email") ? "email-error" : undefined} />{errorFor("email") ? <span className="field-error" id="email-error">{errorFor("email")}</span> : null}</div>
      <div className="field"><label htmlFor="company">Company <span className="muted">(optional)</span></label><input id="company" name="company" autoComplete="organization" /></div>
      <div className="field"><label htmlFor="phone">WhatsApp <span className="muted">(optional)</span></label><input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" /></div>
      <div className="field"><label htmlFor="projectType">Project type</label><select id="projectType" name="projectType" required defaultValue={defaultProjectType} aria-invalid={Boolean(errorFor("projectType"))} aria-describedby={errorFor("projectType") ? "project-type-error" : undefined}><option value="" disabled>Select one</option>{projectTypes.map((type) => <option key={type}>{type}</option>)}</select>{errorFor("projectType") ? <span className="field-error" id="project-type-error">{errorFor("projectType")}</span> : null}</div>
      <div className="field"><label htmlFor="timeline">Project timeline</label><select id="timeline" name="timeline" required defaultValue="" aria-invalid={Boolean(errorFor("timeline"))} aria-describedby={errorFor("timeline") ? "timeline-error" : undefined}><option value="" disabled>Select one</option>{projectTimelines.map((timeline) => <option key={timeline}>{timeline}</option>)}</select>{errorFor("timeline") ? <span className="field-error" id="timeline-error">{errorFor("timeline")}</span> : null}</div>
      <div className="field"><label htmlFor="budget">Estimated budget <span className="muted">(optional)</span></label><select id="budget" name="budget" defaultValue=""><option value="">Select a range</option>{budgetRanges.map((budget) => <option key={budget}>{budget}</option>)}</select></div>
      <div className="field"><label htmlFor="preferredContact">Preferred contact <span className="muted">(optional)</span></label><select id="preferredContact" name="preferredContact" defaultValue="Email">{contactPreferences.map((preference) => <option key={preference}>{preference}</option>)}</select></div>
      <div className="field full"><label htmlFor="message">Project details</label><textarea id="message" name="message" required placeholder="Tell me what you’re building, what needs to be improved, or what problem you’re trying to solve." aria-invalid={Boolean(errorFor("message"))} aria-describedby={errorFor("message") ? "message-error" : undefined} />{errorFor("message") ? <span className="field-error" id="message-error">{errorFor("message")}</span> : null}</div>
      {status ? <div className="form-status" role="status" style={{ border: `1px solid ${status.ok ? "rgba(45,212,191,.35)" : "rgba(251,113,133,.35)"}` }}>{status.message}</div> : null}
      <div className="field full"><button className="button button-primary" type="submit" disabled={pending}>{pending ? "Sending project details…" : <>Send Project Details <Send size={16} /></>}</button></div>
    </form>
  );
}
