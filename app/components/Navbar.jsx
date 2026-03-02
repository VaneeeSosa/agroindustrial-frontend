"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth"
  });
};

  return (
    <header className="navbar">
      <div className="navbar-inner">

        <nav className={`nav-left ${open ? "open" : ""}`}>
          <button onClick={() => scrollToSection("home")}>Inicio</button>
          <button onClick={() => scrollToSection("about")}>Sobre nosotros</button>
          <button onClick={() => scrollToSection("products")}>Productos</button>
          <button onClick={() => scrollToSection("contact")}>Contacto</button>
        </nav>

        <div className="nav-logo">
          <img src="/images/OvoroLogo.png" alt="logo"/>
        </div>

        <div className="nav-right">
          <a href="https://www.facebook.com/share/18VxrCLLhx/?mibextid=wwXIfr"><img src="/images/facebook.png" /></a>
          <a href="https://www.instagram.com/ovoro.mx/"><img src="/images/instagram.png" /></a>

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
