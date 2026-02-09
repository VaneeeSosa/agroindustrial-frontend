"use client";

export default function ContactModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <h3>Habla con nosotros</h3>

        <form className="contact-form">
          <label>¿Compras para?</label>
          <div className="check-grid">
            <label><input type="checkbox" /> Negocio local</label>
            <label><input type="checkbox" /> Empresa / Distribuidor</label>
            <label><input type="checkbox" /> Restaurante</label>
            <label><input type="checkbox" /> Uso personal</label>
          </div>

          <label>Volumen aproximado</label>
          <div className="check-grid">
            <label><input type="checkbox" /> 1-5 charolas</label>
            <label><input type="checkbox" /> 5-20 charolas</label>
            <label><input type="checkbox" /> Más de 20</label>
          </div>

          <label>Teléfono</label>
          <input placeholder="Número de contacto" />

          <label>Email</label>
          <input placeholder="Correo electrónico" />

          <button type="submit" className="send-btn">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
