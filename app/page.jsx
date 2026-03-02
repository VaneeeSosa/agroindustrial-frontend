import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./styles/globals.css";
import "./styles/about.css"
import AboutPage from "./about/AboutPage";
import SectionsController from "./components/SectionsController";
import ProductsPage from "./products/ProductsPage";
import ContactPage from "./contact/ContactPage";


export default function Home() {
  return (
    <>
      <Navbar />
      <SectionsController rootSelector="#landingRoot" duration={800} />

      <main className="landing-root" id="landingRoot">
        {/* SECCION HERO */}
        <section id="home" className="landing-section">
          <div className="container">
            <Hero />
          </div>
        </section>

        <section id="about" className="landing-section">
          <div className="container">
            <AboutPage /> 
          </div>
        </section>

        <section id="products" className="landing-section">
          <ProductsPage />
        </section>

        <section id="contact" className="landing-section">
          <ContactPage />
        </section>


        
      </main>
    </>
  );
}
