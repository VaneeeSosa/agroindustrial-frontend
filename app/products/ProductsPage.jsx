"use client";

import "../styles/products.css";

export default function ProductsPage() {
  return (
    <section className="products-root">

      <div className="products-container">

        <header className="products-header">
          <h2>Nuestros Productos</h2>
          <p>
            De gallinas libres, bien cuidadas y sin estrés. Huevos rojos con
            yema intensa y sabor que sí responde cuando hay que cocinar con huevos.
          </p>
        </header>

        <div className="products-grid">

          <article className="product-card">
            <img src="/images/product-6.png" alt="Huevera de 6" />
            <h3>Huevera de 6</h3>
            <p>Pocos huevos, pero con carácter.</p>
            <span>Ideal para bajo consumo.</span>
          </article>

          <article className="product-card">
            <img src="/images/product-30.png" alt="Huevera de 30" />
            <h3>Huevera de 30</h3>
            <p>Para los que no se andan con pocos huevos.</p>
            <span>Presentación familiar.</span>
          </article>

          <article className="product-card">
            <img src="/images/product-12.png" alt="Huevera de 12" />
            <h3>Huevera de 12</h3>
            <p>Ni muchos, ni pocos. Los huevos exactos.</p>
            <span>El balance perfecto.</span>
          </article>

        </div>

      </div>

      <div className="products-bg"></div>

    </section>
  );
}
