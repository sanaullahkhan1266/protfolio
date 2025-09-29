"use client";

import { useEffect, useState } from "react";

export default function NavBar() {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const ids = ["home", "work", "about", "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const link = (href: string, label: string, id: string) => (
    <a
      href={href}
      className={`nav-link transition-colors ${
        active === id ? "text-sky-300" : "hover:text-sky-300"
      }`}
      aria-current={active === id ? "page" : undefined}
    >
      {label}
    </a>
  );

  return (
    <header className="pointer-events-auto fixed inset-x-0 top-0 z-20 opacity-0 animate-fade-up [animation-delay:40ms] supports-[backdrop-filter]:backdrop-blur-xl bg-background/10 border-b border-white/10 shadow-[0_1px_0_0_rgba(255,255,255,0.06)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between py-4">
          <a href="#home" className="text-[18px] font-medium tracking-wide bg-gradient-to-r from-sky-400 to-fuchsia-400 bg-clip-text text-transparent">
            Sanaullah
          </a>
          <nav className="text-sm flex items-center gap-6">
            {link("#work", "Work", "work")}
            {link("#about", "About", "about")}
            {link("#contact", "Contact", "contact")}
          </nav>
        </div>
      </div>
    </header>
  );
}
