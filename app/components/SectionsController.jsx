"use client";

import { useEffect, useRef } from "react";

export default function SectionsController({
  rootSelector = "#landingRoot",
  duration = 800,
}) {
  const lockRef = useRef(false);

  useEffect(() => {
    // 🔥 Detectar desktop REAL (mouse físico)
    const isDesktop =
      window.matchMedia("(pointer: fine)").matches &&
      window.innerWidth > 900;

    if (!isDesktop) {
      // 🚨 En móvil no activamos absolutamente nada
      return;
    }

    const sections = Array.from(
      document.querySelectorAll(".landing-section")
    );

    if (!sections.length) return;

    function getCurrentIndex() {
      let minIndex = 0;
      let minDist = Infinity;

      sections.forEach((s, i) => {
        const rect = s.getBoundingClientRect();
        const dist = Math.abs(rect.top);
        if (dist < minDist) {
          minDist = dist;
          minIndex = i;
        }
      });

      return minIndex;
    }

    function scrollToIndex(idx) {
      if (idx < 0 || idx >= sections.length) return;

      lockRef.current = true;

      sections[idx].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setTimeout(() => {
        lockRef.current = false;
      }, duration);
    }

    function onWheel(e) {
      if (lockRef.current) return;

      const delta = e.deltaY;
      if (Math.abs(delta) < 30) return;

      const current = getCurrentIndex();

      if (delta > 0) {
        const next = Math.min(sections.length - 1, current + 1);
        if (next !== current) scrollToIndex(next);
      } else {
        const prev = Math.max(0, current - 1);
        if (prev !== current) scrollToIndex(prev);
      }
    }

    function onKey(e) {
      if (lockRef.current) return;

      const current = getCurrentIndex();

      if (["ArrowDown", "PageDown"].includes(e.key)) {
        e.preventDefault();
        const next = Math.min(sections.length - 1, current + 1);
        if (next !== current) scrollToIndex(next);
      }

      if (["ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        const prev = Math.max(0, current - 1);
        if (prev !== current) scrollToIndex(prev);
      }
    }

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
    };
  }, [rootSelector, duration]);

  return null;
}