// src/app/about/page.jsx
import Navbar from "../components/Navbar";
import AboutPage from "./AboutPage";
import "../styles/about.css";
import "../styles/globals.css";


export const metadata = {
  title: "Sobre nosotros - Huevo Rojo",
  description: "Somos un rancho dedicado a la producción de huevos de libre pastoreo."
};

export default function Page() {
  return (
    <>
      <Navbar />
      <AboutPage />
    </>
  );
}
