import { Link } from 'react-router-dom';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={`container-xl ${styles.aboutUsContainer}`}>
      <h2 className={`text-center ${styles.aboutUsTitle}`}>Sobre Nosotros</h2>
      <div className="row mt-5">
        <div className="col-md-6">
          <p className={`lead ${styles.aboutUsText}`}>
            En <strong>Guitar Shop</strong>, nos apasiona la música y creemos que cada guitarra tiene una historia que contar. Fundada en el año <strong>2012</strong>, nuestra tienda nació con el propósito de ofrecer a músicos y amantes de la música instrumentos de alta calidad que inspiren creatividad y pasión.
          </p>
          <p className={`lead ${styles.aboutUsText}`}>
            Desde nuestros inicios, nos hemos comprometido a seleccionar cuidadosamente cada guitarra que llega a nuestras manos. Trabajamos directamente con los mejores fabricantes y luthiers para garantizar que nuestros clientes reciban productos que no solo suenan increíble, sino que también están construidos para durar.
          </p>
          <p className={`lead ${styles.aboutUsText}`}>
            En <strong>Guitar Shop</strong>, no solo vendemos guitarras; creamos experiencias. Nuestro equipo está formado por músicos expertos que están siempre dispuestos a asesorarte y ayudarte a encontrar el instrumento perfecto para tus necesidades, ya seas un principiante o un profesional.
          </p>
          <p className={`lead ${styles.aboutUsText}`}>
            Además de nuestra amplia gama de guitarras, ofrecemos servicios de mantenimiento, reparación y personalización. Creemos que cada guitarrista es único, y nos esforzamos por brindar un servicio personalizado que se adapte a tus gustos y estilo.
          </p>
          <p className={`lead ${styles.aboutUsText}`}>
            Gracias por ser parte de nuestra historia. ¡Esperamos verte pronto en nuestra tienda o en nuestro catálogo en línea!
          </p>
          <div className="text-center mt-4">
            <Link to="/catalogo" className={`btn-custom-amarillo btn-lg ${styles.aboutUsButton}`}>
              Ver Catálogo
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <img 
            src="/img/about-us.jpg" 
            alt="Sobre Nosotros" 
            className={`img-fluid ${styles.aboutUsImage}`}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;