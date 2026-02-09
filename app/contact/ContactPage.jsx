"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";
import "../styles/contact.css";

export default function ContactPage() {
  const [open, setOpen] = useState(false);

  const whatsappNumber = "446 127 4796";
  const whatsappLink = `https://wa.me/524461274796?text=Hola,%20quiero%20información%20sobre%20sus%20huevos%20de%20libre%20pastoreo`;

  return (
    <section className="contact-root">

      {/* HERO CONTACTO */}
      <div className="contact-hero">
        <h2>
          <span>Huevos</span> hay muchos... buenos, no tantos
        </h2>
        <p>
          Escríbenos para cotizaciones, pedidos o cualquier duda.
        </p>
      </div>

      {/* CONTENIDO */}
      <div className="contact-content">

        {/* IZQUIERDA: CTAs */}
        <div className="contact-actions">

          <a
            href={whatsappLink}
            target="_blank"
            className="btn-whatsapp"
          >
            <img src="/images/whatsapp.png" alt="" />
            Escríbenos por WhatsApp
          </a>

          <button
            className="btn-form"
            onClick={() => setOpen(true)}
          >
            <img src="/images/Message.png" alt="" />
            O cotiza directamente aquí
          </button>

        </div>

        {/* DERECHA: info */}
        <div className="contact-info">

          {/* FILA HORIZONTAL: dirección - teléfono - email */}
          <div className="info-row">
            <div className="info-item">
              <img src="/images/phone.png" alt="teléfono" />
              <span>(446) 127-4796</span>
            </div>

            <div className="info-item">
              <img src="/images/mail.png" alt="correo" />
              <span>agroindustrialgar3@gmail.com</span>
            </div>
          </div> {/* <- cerramos info-row aquí */}

          {/* MAPA interactivo (Google Maps embed) */}
          <iframe
            title="Mapa - Río Ayutla, La Piedad, Querétaro"
            className="contact-map"
            src={`https://www.google.com/maps?q=${encodeURIComponent('Río Ayutla, La Piedad, Querétaro')}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
      </div>
      </div>

      {open && <ContactModal onClose={() => setOpen(false)} />}
    </section>
  );
}
