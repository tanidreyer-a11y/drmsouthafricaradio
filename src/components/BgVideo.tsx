"use client";

import { useEffect, useRef, useState } from "react";
import { STATIC_QUERIES } from "@/lib/media";

export default function BgVideo({ src, poster, className }: { src: string; poster: string; className?: string }) {
  const [enabled, setEnabled] = useState(false);
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const queries = STATIC_QUERIES.map((q) => window.matchMedia(q));
    const evaluate = () => setEnabled(!queries.some((mq) => mq.matches));
    evaluate();
    queries.forEach((mq) => mq.addEventListener("change", evaluate));
    return () => queries.forEach((mq) => mq.removeEventListener("change", evaluate));
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, [enabled]);

  if (!enabled) return null;
  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    />
  );
}
