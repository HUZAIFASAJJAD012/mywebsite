"use client";

import { useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "motion/react";
import { X } from "lucide-react";

export function IntroductionVideo() {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  function close() {
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible ? (
        <m.aside
          className="introduction-video"
          aria-label="Introduction video"
          initial={false}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -10, y: 6 }}
          transition={{ duration: reduceMotion ? 0 : .22, ease: [.16, 1, .3, 1] }}
        >
          <div className="introduction-video-head">
            <span><i aria-hidden="true" /> Introduction</span>
            <button type="button" onClick={close} aria-label="Close introduction video"><X size={17} /></button>
          </div>
          <video
            src="/intodcxiton%20vide.mp4"
            aria-label="Video introduction by Huzaifa Sajjad"
            playsInline
            controls
            preload="metadata"
          />
        </m.aside>
      ) : null}
    </AnimatePresence>
  );
}
