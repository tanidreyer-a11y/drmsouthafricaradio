"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Nav.module.css";
import { nav } from "@/lib/content";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/images/logo-transparent.png" alt="DRM SA Group" width={352} height={139} className={styles.logoImg} priority />
        </Link>

        <nav className={styles.links}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.link} ${pathname === item.href ? styles.linkActive : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className={styles.cta}>
          Contact
        </Link>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className={`${styles.menuBtn} ${open ? styles.menuOpen : ""}`}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </header>

      <div className={`${styles.mobilePanel} ${open ? styles.mobilePanelOpen : ""}`}>
        {nav.map((item) => (
          <Link key={item.href} href={item.href} className={styles.mobileLink}>
            {item.label}
          </Link>
        ))}
        <Link href="/contact" className={styles.mobileLink} style={{ color: "var(--accent)" }}>
          Contact
        </Link>
      </div>
    </>
  );
}
