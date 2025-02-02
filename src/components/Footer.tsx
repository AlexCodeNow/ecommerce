import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>

        <div className={styles.footerLinks}>
          <Link to="/" className={styles.footerLink}>Home</Link>
          <Link to="/sobre-nosotros" className={styles.footerLink}>Conócenos</Link>
          <Link to="/catalogo" className={styles.footerLink}>Catálogo</Link>
          <Link to="/faq" className={styles.footerLink}>FAQ</Link>
        </div>

        <div className={styles.socialIcons}>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
        </div>

        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Guitar Shop - Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;