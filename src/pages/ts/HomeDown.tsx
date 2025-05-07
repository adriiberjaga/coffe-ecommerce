import "../css/HomeDown.css";

export default function HomeDown() {
  return (
    <main className="homeDown-main">
      <div className="homeDown-content">
        <div className="homeDown-header">
          <h3 className="homeDown-title">Por qué elegirnos</h3>
          <p className="homeDown-subtitle">Descubre la diferencia de nuestro café premium</p>
        </div>
        
        <div className="homeDown-divMain">
          <div className="homeDown-divMain-1">
            <div className="homeDown-divMain-left">
              <p className="homeDown-divMain-left__icon">✅</p>
              <p className="homeDown-divMain-left__text">Café 100% natural</p>
            </div>
            <div className="homeDown-divMain-rigth">
              <span className="homeDown-divMain-rigth__text">
                Tostado artesanalmente, sin aditivos ni conservantes.
              </span>
            </div>
          </div>
          <div className="homeDown-divMain-2">
            <div className="homeDown-divMain-left">
              <p className="homeDown-divMain-left__icon">🌍</p>
              <p className="homeDown-divMain-left__text">Comercio justo</p>
            </div>
            <div className="homeDown-divMain-rigth">
              <span className="homeDown-divMain-rigth__text">
                Apoyamos productores locales de origen con precios justos.
              </span>
            </div>
          </div>
          <div className="homeDown-divMain-3">
            <div className="homeDown-divMain-left">
              <p className="homeDown-divMain-left__icon">🚚</p>
              <p className="homeDown-divMain-left__text">
                Entrega en 24-48h en toda España
              </p>
            </div>
            <div className="homeDown-divMain-rigth">
              <span className="homeDown-divMain-rigth__text">
                Pagos contrarrembolso y métodos seguros online
              </span>
            </div>
          </div>
        </div>
        
        <div className="homeDown-testimonials">
          <h4 className="homeDown-testimonials-title">Lo que dicen nuestros clientes</h4>
          <div className="homeDown-testimonials-container">
            <div className="homeDown-testimonial">
              <div className="homeDown-testimonial-stars">★★★★★</div>
              <p className="homeDown-testimonial-text">"El mejor café que he probado. Ahora es parte de mi rutina diaria."</p>
              <p className="homeDown-testimonial-author">- María G.</p>
            </div>
            <div className="homeDown-testimonial">
              <div className="homeDown-testimonial-stars">★★★★★</div>
              <p className="homeDown-testimonial-text">"Increíble aroma y sabor. Se nota la calidad del producto."</p>
              <p className="homeDown-testimonial-author">- Carlos R.</p>
            </div>
            <div className="homeDown-testimonial">
              <div className="homeDown-testimonial-stars">★★★★★</div>
              <p className="homeDown-testimonial-text">"Servicio excelente y el café llegó perfectamente envasado."</p>
              <p className="homeDown-testimonial-author">- Elena M.</p>
            </div>
          </div>
        </div>
        
        <div className="homeDown-extra-info">
          <div className="homeDown-extra-info-item">
            <div className="homeDown-extra-info-icon">🌱</div>
            <h5 className="homeDown-extra-info-title">Sostenibilidad</h5>
            <p className="homeDown-extra-info-text">Utilizamos empaques reciclables para reducir nuestro impacto ambiental.</p>
          </div>
          <div className="homeDown-extra-info-item">
            <div className="homeDown-extra-info-icon">🔍</div>
            <h5 className="homeDown-extra-info-title">Trazabilidad</h5>
            <p className="homeDown-extra-info-text">Conoce el origen exacto de cada grano que llega a tu taza.</p>
          </div>
          <div className="homeDown-extra-info-item">
            <div className="homeDown-extra-info-icon">💯</div>
            <h5 className="homeDown-extra-info-title">Calidad garantizada</h5>
            <p className="homeDown-extra-info-text">Si no estás satisfecho, te devolvemos el dinero sin preguntas.</p>
          </div>
        </div>
        
        <div className="homeDown-cta">
          <h4 className="homeDown-cta-title">¿Listo para probar el mejor café?</h4>
          <button className="homeDown-cta-button">Ver nuestros productos</button>
        </div>
      </div>
    </main>
  );
}