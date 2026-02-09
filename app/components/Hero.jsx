export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-inner">
        <div className="hero-left">
          <img src="/images/egg-left.png" alt="Huevo rojo grande" className="egg-left" />
        </div>

        <div className="hero-right">
          <p className="tagline">
            Gallinas libres, yema intensa y sabor real. Si vas a comer huevo, que valga la pena.
          </p>
          <button className="cta">Ver Productos</button>
        </div>

        <img src="/images/egg-right.png" alt="Huevo" className="egg-right" />
      </div>
    </section>
  );
}
