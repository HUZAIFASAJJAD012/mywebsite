"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const ContactCommand = dynamic(() => import("./contact-command").then((module) => module.ContactCommand), { ssr: false });

export function ContactCommandLauncher() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [shortcut, setShortcut] = useState<string | null>(null);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setOpen(true); }
    }
    // Only show a keyboard hint on devices with a precise pointer, using the platform's own modifier key.
    const timer = window.setTimeout(() => {
      if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
      setShortcut(/Mac|iPhone|iPad/i.test(navigator.userAgent) ? "⌘ K" : "Ctrl K");
    }, 0);
    window.addEventListener("keydown", onKey);
    return () => { window.clearTimeout(timer); window.removeEventListener("keydown", onKey); };
  }, []);

  const onContactPage = pathname === "/contact" || pathname.startsWith("/contact/");

  return (
    <>
      {onContactPage ? null : <button className="command-trigger" type="button" onClick={() => setOpen(true)} aria-label="Open contact shortcuts"><span>Contact</span>{shortcut ? <kbd>{shortcut}</kbd> : null}</button>}
      {open ? <ContactCommand onClose={() => setOpen(false)} /> : null}
    </>
  );
}
