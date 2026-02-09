// src/app/about/AboutPage.jsx
"use client";

import { useEffect, useRef } from "react";

export default function AboutPage() {
  const rootRef = useRef(null);

  useEffect(() => {
    // IntersectionObserver para animaciones
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            // opcional: quitar clase al salir, coméntalo si prefieres animación solo 1 vez
            // entry.target.classList.remove("in-view");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.18, // cuando ~18% entra en viewport
      }
    );

    const animated = rootRef.current.querySelectorAll(".animate-on-scroll");
    animated.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="about-root" ref={rootRef}>
      {/* Section 1 — Hero / mensaje grande */}
      <section className="about-section about-hero">
        <div className="container">
          <div className="col left animate-on-scroll slide-in-left">
            <h1>
              Cuando las cosas se hacen con <span className="accent">huevos</span>, el sabor habla solo.
            </h1>
            <p className="lead animate-on-scroll fade-up">
              Somos un rancho dedicado a la producción agropecuaria de calidad, donde el respeto por la tierra, los animales y los procesos bien hechos es lo primero.
            </p>
          </div>

          <div className="col center">
            {/* imagen grande del huevo: posicionada para sobreponerse (decorativa) */}
            <img src="/images/about-egg.png" alt="Huevo a la mitad" className="about-egg animate-on-scroll zoom-in" />
          </div>

          <aside className="col right">
            <article className="card animate-on-scroll slide-in-right">
              <img src="/images/about-card1.png" alt="Calidad" />
              <h4>Creemos que la calidad no se improvisa.</h4>
              <p>Por eso cuidamos cada etapa del proceso: bienestar de las gallinas, alimentación y recolección.</p>
            </article>

            <article className="card animate-on-scroll slide-in-right" style={{ transitionDelay: "140ms" }}>
              <img src="/images/about-card2.png" alt="Trabajo diario" />
              <h4>Cada huevo refleja el trabajo diario.</h4>
              <p>Constancia y respeto por lo natural en cada paso.</p>
            </article>
          </aside>
        </div>
      </section>
    </main>
  );
}
