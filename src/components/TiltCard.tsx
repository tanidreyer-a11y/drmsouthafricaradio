"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";
import gsap from "gsap";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  max?: number;
};

/**
 * Mouse-tracked 3D tilt via gsap.quickTo — the recommended pattern for hover
 * targets on a grid (avoids re-creating a tween on every mousemove, unlike a
 * plain gsap.to()/raw rAF loop). Reduced-motion is handled by the CSS rule
 * on .tilt-card-inner (transform: none !important), so the quickTo setters
 * simply become no-ops visually under that media query.
 */
export default function TiltCard({ children, className = "", style, max = 8 }: TiltCardProps) {
  const outerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const quickRef = useRef<{
    rotX: ReturnType<typeof gsap.quickTo>;
    rotY: ReturnType<typeof gsap.quickTo>;
    glowX: ReturnType<typeof gsap.quickTo>;
    glowY: ReturnType<typeof gsap.quickTo>;
  } | null>(null);

  useEffect(() => {
    const inner = innerRef.current;
    const glow = glowRef.current;
    if (!inner || !glow) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    quickRef.current = {
      rotX: gsap.quickTo(inner, "rotationX", { duration: 0.5, ease: "power3.out" }),
      rotY: gsap.quickTo(inner, "rotationY", { duration: 0.5, ease: "power3.out" }),
      glowX: gsap.quickTo(glow, "--glow-x", { duration: 0.3, ease: "power2.out" }),
      glowY: gsap.quickTo(glow, "--glow-y", { duration: 0.3, ease: "power2.out" }),
    };

    gsap.set(inner, { transformPerspective: 900, transformOrigin: "center" });
  }, []);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = outerRef.current;
    const q = quickRef.current;
    if (!el || !q) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    q.rotY((px - 0.5) * max * 2);
    q.rotX((0.5 - py) * max * 2);
    q.glowX(px * 100);
    q.glowY(py * 100);
  }

  function onMouseLeave() {
    const q = quickRef.current;
    if (!q) return;
    q.rotX(0);
    q.rotY(0);
  }

  return (
    <div
      ref={outerRef}
      className={`tilt-card ${className}`}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div ref={glowRef} className="tilt-card-glow" aria-hidden="true" />
      <div ref={innerRef} className="tilt-card-inner">
        {children}
      </div>
    </div>
  );
}
