"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, m } from "motion/react";
import { profile } from "@/content/profile";
import { cn } from "@/lib/utils";

const links = [
  ["Work", "/#work"],
  ["Expertise", "/#expertise"],
  ["Experience", "/#experience"],
  ["Services", "/gigs"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sentinel = document.getElementById("scroll-sentinel");
    if (!sentinel) return;
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;
    const sections = ["work", "expertise", "experience", "about"].map((id) => document.getElementById(id)).filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: "-24% 0px -55%", threshold: [0, .1, .25] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const openButton = openButtonRef.current;
    document.body.style.overflow = open ? "hidden" : "";
    if (open) closeButtonRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab" || !open || !menuRef.current) return;
      const focusable = Array.from(menuRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'));
      const first = focusable[0]; const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      if (open) openButton?.focus();
    };
  }, [open]);

  function isActive(href: string) {
    if (href.startsWith("/#")) return pathname === "/" && activeSection === href.slice(2);
    return pathname === href;
  }

  return (
    <>
      <header className={cn("site-header", scrolled && "scrolled")}>
        <div className="container nav-shell">
          <Link className="brand" href="/" aria-label="Huzaifa Sajjad, home">
            <span className="brand-mark">{profile.initials}</span>
            <span className="brand-name">{profile.name}</span>
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {links.map(([label, href]) => <Link className={cn("nav-link", isActive(href) && "active")} href={href} key={label}>{label}{isActive(href) ? <m.span className="active-nav" layoutId="active-nav" transition={{ type: "spring", stiffness: 420, damping: 34 }} /> : null}</Link>)}
            <Link className="button button-primary" href="/contact">Start a project</Link>
          </nav>
          <button ref={openButtonRef} className="menu-toggle" type="button" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}>
            <Menu size={20} />
          </button>
        </div>
      </header>
      <AnimatePresence>
        {open ? (
          <m.div ref={menuRef} className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-label="Mobile navigation">
            <div className="mobile-menu-top">
              <Link className="brand" href="/" onClick={() => setOpen(false)}><span className="brand-mark">HS</span></Link>
              <button ref={closeButtonRef} className="menu-toggle" type="button" onClick={() => setOpen(false)} aria-label="Close menu"><X size={20} /></button>
            </div>
            <nav aria-label="Mobile navigation">
              {links.map(([label, href], index) => (
                <m.div key={label} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .05 }}>
                  <Link href={href} onClick={() => setOpen(false)}>{label}</Link>
                </m.div>
              ))}
            </nav>
          </m.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
