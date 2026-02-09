"use client";
import { useEffect } from "react";

export default function SectionsObserver({ rootSelector = null, threshold = 0.65 }) {
  useEffect(() => {
    const root = rootSelector ? document.querySelector(rootSelector) : null;
    const opts = { root: root, rootMargin: "0px", threshold: threshold };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          el.classList.add("active");
        } else {
          el.classList.remove("active");
          // Si quieres animación solo 1 vez, comenta la siguiente línea:
          el.classList.remove("in-view");
        }
      });
    }, opts);

    const sections = document.querySelectorAll(".landing-section");
    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, [rootSelector, threshold]);

  return null; // solo ejecuta el observer
}
