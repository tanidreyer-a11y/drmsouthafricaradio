"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./Hero.module.css";

// Static hero is the default on phones, coarse pointers and reduced-motion —
// the 15MB looping journey video is an enhancement, not the baseline.
const STATIC_QUERIES = [
  "(max-width: 720px)",
  "(orientation: portrait) and (max-width: 1024px)",
  "(orientation: portrait) and (pointer: coarse)",
  "(orientation: landscape) and (pointer: coarse) and (max-height: 560px)",
  "(prefers-reduced-motion: reduce)",
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [useStatic, setUseStatic] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const queries = STATIC_QUERIES.map((q) => window.matchMedia(q));
    const evaluate = () => setUseStatic(queries.some((mq) => mq.matches));
    evaluate();
    queries.forEach((mq) => mq.addEventListener("change", evaluate));
    return () => queries.forEach((mq) => mq.removeEventListener("change", evaluate));
  }, []);

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
          The Static Is Over <em>— Digital Radio Has Arrived</em>
        </h1>
        <p className={`${styles.sub} ${styles.entrance} ${styles.entranceDelay1}`}>
          DRM SA Group is leading the charge to transform Africa&apos;s radio industry with
          crystal-clear, future-ready digital sound.
        </p>
        <div className={`${styles.ctaRow} ${styles.entrance} ${styles.entranceDelay2}`}>
          <Link href="/membership" className={styles.primary}>
            Become a Member
          </Link>
          <Link href="/news" className={styles.secondary}>
            See the FM Demonstration
          </Link>
        </div>
      </div>

      <div className={styles.scrollCue} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  );
}
