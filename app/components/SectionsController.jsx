"use client";

import { useEffect, useRef } from "react";

/**
 * SectionsController
 * - rootSelector: selector del contenedor (por defecto '#landingRoot')
 * - duration: bloqueo entre scrolls (ms)
 */
export default function SectionsController({ rootSelector = "#landingRoot", duration = 800 }) {
  const lockRef = useRef(false);
  const touchStartRef = useRef(null);

  useEffect(() => {
    const root = document.querySelector(rootSelector) || document.documentElement;
    if (!root) return;

    const sections = Array.from(document.querySelectorAll(".landing-section"));
    if (!sections.length) return;

    // Helper: obtener índice de la sección más cercana a la vista (top)
    function getCurrentIndex() {
      const viewportTop = 0;
      let minIndex = 0;
      let minDist = Infinity;
      sections.forEach((s, i) => {
        const rect = s.getBoundingClientRect();
        const dist = Math.abs(rect.top - viewportTop);
        if (dist < minDist) {
          minDist = dist;
          minIndex = i;
        }
      });
      return minIndex;
    }

    // Scroll to index smoothly and lock
    function scrollToIndex(idx) {
      if (idx < 0 || idx >= sections.length) return;
      lockRef.current = true;
      sections[idx].scrollIntoView({ behavior: "smooth", block: "start" });
      // ensure .in-view classes updated by intersection observer elsewhere
      setTimeout(() => {
        lockRef.current = false;
      }, duration + 120);
    }

    // Wheel handler
    function onWheel(e) {
      if (window.innerWidth <= 900) return; // no interceptar en móvil
      if (lockRef.current) return;
      const delta = e.deltaY;
      if (Math.abs(delta) < 30) return; // evitar activación con pequeños micro-scrolls
      const current = getCurrentIndex();
      if (delta > 0) {
        // scrollear hacia abajo
        const next = Math.min(sections.length - 1, current + 1);
        if (next !== current) scrollToIndex(next);
      } else {
        // scrollear hacia arriba
        const prev = Math.max(0, current - 1);
        if (prev !== current) scrollToIndex(prev);
      }
    }

    // Keyboard navigation
    function onKey(e) {
      if (window.innerWidth <= 900) return;
      if (lockRef.current) return;
      if (["ArrowDown", "PageDown"].includes(e.key)) {
        const idx = getCurrentIndex();
        const next = Math.min(sections.length - 1, idx + 1);
        if (next !== idx) {
          e.preventDefault();
          scrollToIndex(next);
        }
      } else if (["ArrowUp", "PageUp"].includes(e.key)) {
        const idx = getCurrentIndex();
        const prev = Math.max(0, idx - 1);
        if (prev !== idx) {
          e.preventDefault();
          scrollToIndex(prev);
        }
      }
    }

    // Touch (swipe) support
    function onTouchStart(e) {
      touchStartRef.current = e.touches ? e.touches[0].clientY : e.clientY;
    }
    function onTouchEnd(e) {
      if (window.innerWidth > 900) return;
      if (touchStartRef.current == null) return;
      const endY = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;
      const diff = touchStartRef.current - endY;
      const threshold = 40;
      const idx = getCurrentIndex();
      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          // swipe up -> next section
          const next = Math.min(sections.length - 1, idx + 1);
          if (next !== idx) scrollToIndex(next);
        } else {
          const prev = Math.max(0, idx - 1);
          if (prev !== idx) scrollToIndex(prev);
        }
      }
      touchStartRef.current = null;
    }

    // Attach listeners on the root (or window)
    // For wheel we listen on window to catch all inputs (touchpads, mice)
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    // cleanup
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [rootSelector, duration]);

  return null;
}
