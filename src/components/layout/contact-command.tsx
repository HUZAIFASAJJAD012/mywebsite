"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { m } from "motion/react";
import { ArrowUpRight, Mail, MessageCircle, X } from "lucide-react";
import { profile } from "@/content/profile";

export function ContactCommand({ onClose }: { onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    returnFocusRef.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    function trap(event: KeyboardEvent) {
      if (event.key === "Escape") { onClose(); return; }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = Array.from(panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'));
      const first = focusable[0]; const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }
    window.addEventListener("keydown", trap);
    return () => { window.removeEventListener("keydown", trap); returnFocusRef.current?.focus(); };
  }, [onClose]);

  return (
    <m.div className="command-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onMouseDown={(event) => event.currentTarget === event.target && onClose()}>
            <m.div ref={panelRef} className="command-panel" role="dialog" aria-modal="true" aria-labelledby="command-title" initial={{ opacity: 0, y: 14, scale: .985 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8, scale: .99 }} transition={{ duration: .22 }}>
              <div className="command-head"><div><span className="project-kicker">Quick contact</span><h2 id="command-title">How would you like to connect?</h2></div><button ref={closeRef} className="icon-button" type="button" onClick={onClose} aria-label="Close contact shortcuts"><X size={18} /></button></div>
              <div className="command-options">
                <Link href="/contact" onClick={onClose} data-analytics-event="contact_click" data-analytics-context="contact_command"><span><ArrowUpRight size={18} /> Start a project</span><small>Share the scope and your goals</small></Link>
                <a href={`mailto:${profile.email}`} data-analytics-event="email_click" data-analytics-context="contact_command"><span><Mail size={18} /> Email Huzaifa</span><small>{profile.email}</small></a>
                <a href={profile.whatsappUrl} target="_blank" rel="noopener noreferrer" data-analytics-event="whatsapp_click" data-analytics-context="contact_command"><span><MessageCircle size={18} /> Message on WhatsApp</span><small>{profile.phoneDisplay}</small></a>
              </div>
            </m.div>
          </m.div>
  );
}
