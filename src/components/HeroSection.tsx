import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-dark text-white py-5">
      <div className="container-xl">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="display-4 fw-bold">¿Por qué comprar una guitarra?</h2>
            <p className="lead p-separacion-boton">
              La guitarra es más que un instrumento; es una forma de expresión, creatividad y conexión. 
              Ya seas un principiante o un músico experimentado, una guitarra puede ser tu compañera 
              en cada etapa de tu viaje musical. ¡Encuentra la tuya hoy mismo!
            </p>
            <Link to="/catalogo" className="btn-custom-amarillo btn-lg">
                Ver Catálogo
            </Link>
          </div>
          <div className="col-md-6">
            <img 
              src="/img/chico-tocando-guitarra.jpg" 
              alt="Chico tocando guitarra" 
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;