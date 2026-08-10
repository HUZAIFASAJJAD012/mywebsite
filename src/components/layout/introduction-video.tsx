"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "motion/react";
import { Play, Volume2, VolumeX, X } from "lucide-react";

export function IntroductionVideo() {
  const [visible, setVisible] = useState(true);
  const [started, setStarted] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const musicRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const music = musicRef.current;
    if (!music) return;
    music.muted = false;
    music.volume = .1;
    void music.play().catch(() => undefined);
  }, []);

  function startMusic() {
    const music = musicRef.current;
    if (!music) return;
    music.volume = .1;
    void music.play().catch(() => undefined);
  }

  function toggleMusic() {
    const music = musicRef.current;
    if (!music) return;
    if (music.paused) startMusic();
    else music.pause();
  }

  function playWithSound() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.volume = 1;
    startMusic();
    void video.play();
  }

  function close() {
    setVisible(false);
  }

  return (
    <>
      <audio ref={musicRef} src="/soft-background-music.mp3" preload="metadata" loop aria-hidden="true" onPlay={() => setMusicPlaying(true)} onPause={() => setMusicPlaying(false)} />
      <AnimatePresence mode="wait">
        {visible ? (
        <m.aside
          key="introduction-video"
          className="introduction-video"
          aria-label="Introduction video"
          initial={false}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -10, y: 6 }}
          transition={{ duration: reduceMotion ? 0 : .22, ease: [.16, 1, .3, 1] }}
        >
          <div className="introduction-video-head">
            <span><i aria-hidden="true" /><b>Introduction</b></span>
            <div className="introduction-video-actions">
              <button type="button" onClick={toggleMusic} aria-label={musicPlaying ? "Pause website background music" : "Play website background music"}>{musicPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}</button>
              <button type="button" onClick={close} aria-label="Close introduction video"><X size={17} /></button>
            </div>
          </div>
          <div className="introduction-video-media">
            <video
              ref={videoRef}
              src="/intodcxiton%20vide.mp4"
              aria-label="Video introduction by Huzaifa Sajjad"
              playsInline
              controls
              preload="metadata"
              onPlay={() => { setStarted(true); startMusic(); }}
            />
            {!started ? <button className="introduction-play" type="button" onClick={playWithSound}><span><Play size={18} fill="currentColor" /> Play with sound</span><Volume2 size={17} /></button> : null}
          </div>
        </m.aside>
        ) : (
          <m.button
            key="background-music-control"
            className="background-music-control"
            type="button"
            onClick={toggleMusic}
            aria-label={musicPlaying ? "Pause website background music" : "Play website background music"}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {musicPlaying ? <Volume2 size={16} /> : <Play size={15} fill="currentColor" />}
            <span>{musicPlaying ? "Music on" : "Play music"}</span>
          </m.button>
        )}
      </AnimatePresence>
    </>
  );
}
