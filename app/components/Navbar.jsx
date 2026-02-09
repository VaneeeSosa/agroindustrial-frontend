"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">

        <nav className={`nav-left ${open ? "open" : ""}`}>
          <a href="/">Inicio</a>
          <a href="/about">Sobre nosotros</a>
          <a href="/products">Productos</a>
          <a href="/contact">Contacto</a>
        </nav>

        <div className="nav-logo">
          <img src="/images/logo.png" alt="logo"/>
        </div>

        <div className="nav-right">
          <a href="#"><img src="/images/facebook.png" /></a>
          <a href="#"><img src="/images/instagram.png" /></a>

          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

      </div>
    </header>
  );
}
