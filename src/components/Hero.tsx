"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import Link from "next/link";
import styles from "./Hero.module.css";
import { STATIC_QUERIES } from "@/lib/media";

const DEMO_VIDEO_URL = "https://youtu.be/a99veSmJXO8?si=uW2i8h1Qt0jZcQrg";
const DEMO_VIDEO_EMBED = "https://www.youtube-nocookie.com/embed/a99veSmJXO8?autoplay=1&rel=0";



export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [useStatic, setUseStatic] = useState(true);
  const [mounted, setMounted] = useState(false);
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  const openVideo = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!dialogRef.current) return;
    e.preventDefault();
    setVideoOpen(true);
    dialogRef.current.showModal();
  };
  const closeVideo = () => dialogRef.current?.close();

  // Remove the player whenever the dialog closes (button, backdrop or Escape)
  // so the video stops playing.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => setVideoOpen(false);
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  useEffect(() => {
    setMounted(true);
    const queries = STATIC_QUERIES.map((q) => window.matchMedia(q));
    const evaluate = () => setUseStatic(queries.some((mq) => mq.matches));
    evaluate();
    queries.forEach((mq) => mq.addEventListener("change", evaluate));
    return () => queries.forEach((mq) => mq.removeEventListener("change", evaluate));
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, [mounted, useStatic]);

  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        {mounted && !useStatic ? (
          <video
            ref={videoRef}
            className={styles.bgVideo}
            src="/videos/hero-journey.mp4"
            poster="/images/hero-radios.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src="/images/hero-radios.jpg" alt="" className={styles.bgVideo} />
        )}
      </div>
      <div className={styles.scrim} />

      <div className={styles.content}>
        <h1 className={`${styles.headline} ${styles.entrance}`}>
          The Static Is Over <em>&mdash; Digital Radio Has Arrived</em>
        </h1>
        <p className={`${styles.sub} ${styles.entrance} ${styles.entranceDelay1}`}>
          DRM SA Group is leading the charge to transform Africa&apos;s radio industry with
          crystal-clear, future-ready digital sound.
        </p>
        <div className={`${styles.ctaRow} ${styles.entrance} ${styles.entranceDelay2}`}>
          <Link href="/membership" className={styles.primary}>
            Become a Member
          </Link>
          <a href={DEMO_VIDEO_URL} onClick={openVideo} className={styles.secondary}>
            See the distance learning demonstration
          </a>
        </div>
      </div>

      <div className={styles.scrollCue} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span>Scroll</span>
      </div>

      <dialog
        ref={dialogRef}
        className={styles.videoDialog}
        aria-label="Distance learning demonstration video"
        onClick={(e) => e.target === e.currentTarget && closeVideo()}
      >
        <button type="button" className={styles.videoClose} onClick={closeVideo} aria-label="Close video">
          &times;
        </button>
        <div className={styles.videoFrame}>
          {videoOpen && (
            <iframe
              src={DEMO_VIDEO_EMBED}
              title="Distance learning demonstration"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
          )}
        </div>
      </dialog>
    </section>
  );
}
