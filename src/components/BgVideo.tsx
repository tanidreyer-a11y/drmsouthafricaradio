"use client";

import { useEffect, useState } from "react";
import { STATIC_QUERIES } from "@/lib/media";

export default function BgVideo({ src, poster, className }: { src: string; poster: string; className?: string }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const queries = STATIC_QUERIES.map((q) => window.matchMedia(q));
    const evaluate = () => setEnabled(!queries.some((mq) => mq.matches));
    evaluate();
    queries.forEach((mq) => mq.addEventListener("change", evaluate));
    return () => queries.forEach((mq) => mq.removeEventListener("change", evaluate));
  }, []);

  if (!enabled) return null;
  return (
    <video
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
