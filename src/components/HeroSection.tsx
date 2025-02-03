import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <section className={`bg-dark text-white py-5 ${styles.heroSection}`}>
      <div className="container-xl">
        <div className="row align-items-center">
          <div className="col-md-6 order-md-1 order-2">
            <h2 className={`display-4 fw-bold ${styles.heroTitle}`}>¿Por qué comprar una guitarra?</h2>
            <p className={`lead ${styles.heroText}`}>
              La guitarra es más que un instrumento; es una forma de expresión, creatividad y conexión. 
              Ya seas un principiante o un músico experimentado, una guitarra puede ser tu compañera 
              en cada etapa de tu viaje musical. ¡Encuentra la tuya hoy mismo!
            </p>
            <Link to="/catalogo" className={`btn-custom-amarillo btn-lg ${styles.heroButton}`}>
              Ver Catálogo
            </Link>
          </div>

          <div className="col-md-6 order-md-2 order-1 mb-4 mb-md-0">
            <img 
              src="/img/chico-tocando-guitarra.jpg" 
              alt="Chico tocando guitarra" 
              className={`img-fluid ${styles.heroImage}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;