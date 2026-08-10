"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ContactCommand = dynamic(() => import("./contact-command").then((module) => module.ContactCommand), { ssr: false });

export function ContactCommandLauncher() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setOpen(true); }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return <><button className="command-trigger" type="button" onClick={() => setOpen(true)} aria-label="Open contact shortcuts"><span>Contact</span><kbd>⌘ K</kbd></button>{open ? <ContactCommand onClose={() => setOpen(false)} /> : null}</>;
}
