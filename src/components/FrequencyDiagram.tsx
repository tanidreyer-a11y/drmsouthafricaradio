"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./FrequencyDiagram.module.css";

const bands = [
  { label: "Long wave", width: 8, modes: "Modes A–D" },
  { label: "Medium wave", width: 22, modes: "Modes A–D" },
  { label: "Short wave", width: 55, modes: "Modes A–D" },
  { label: "FM / VHF", width: 85, modes: "Mode E" },
];

export default function FrequencyDiagram() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${styles.wrap} ${visible ? styles.visible : ""}`}>
      {bands.map((b) => (
        <div className={styles.row} key={b.label}>
          <span className={styles.label}>{b.label}</span>
          <span className={styles.track}>
            <span className={styles.fill} style={{ width: `${b.width}%` }} />
          </span>
          <span className={styles.modes}>{b.modes}</span>
        </div>
      ))}
      <div className={styles.axis}>
        <span>Below 30 MHz — regional to international coverage</span>
        <span>Above 30 MHz — local to regional</span>
      </div>
    </div>
  );
}
