import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const {
    cart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
    isEmpty,
    cartTotal,
  } = useCartContext();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={`py-5 header ${styles.customHeader}`}>
      <div className={`container-xl ${styles.customContainer}`}>
        <div className={`row justify-content-center justify-content-md-between ${styles.customRow}`}>
          <div className={`col-8 col-md-3 ${styles.customLogoContainer}`}>
            <Link to="/" className={styles.customLogo}>
              <img
                className="img-fluid"
                src="/img/logo6.png"
                alt="imagen logo"
              />
            </Link>

            <button className={styles.menuHamburguesa} onClick={toggleMenu}>
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>

          <nav
            ref={menuRef}
            className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}
          >
            <Link to="/" className={`home-link ${styles.customLink}`} onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/sobre-nosotros" className={`about-us-link ${styles.customLink}`} onClick={() => setIsMenuOpen(false)}>
              Conócenos
            </Link>
            <Link to="/catalogo" className={`catalogo-link ${styles.customLink}`} onClick={() => setIsMenuOpen(false)}>
              Catálogo
            </Link>
            <Link to="/faq" className={`faq-link ${styles.customLink}`} onClick={() => setIsMenuOpen(false)}>
              FAQ
            </Link>
          </nav>

          <nav className={`carrito-custom a mt-5 d-flex align-items-start justify-content-end ${styles.customCarritoContainer}`}>
            <div className={`carrito ${styles.customCarrito}`}>
              <img className={`img-fluid ${styles.customCarritoImg}`} src="/img/carrito.png" alt="imagen carrito" />
              <div id="carrito" className={`bg-white p-3 ${styles.customCarritoContent}`}>
                {isEmpty ? (
                  <p className="text-center">El carrito esta vacio</p>
                ) : (
                  <>
                    <table className="w-100 table">
                      <thead>
                        <tr>
                          <th>Imagen</th>
                          <th>Nombre</th>
                          <th>Precio</th>
                          <th>Cantidad</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((guitar) => (
                          <tr key={guitar.id}>
                            <td>
                              <img
                                className="img-fluid"
                                src={`/img/${guitar.image}.jpg`}
                                alt="imagen guitarra"
                              />
                            </td>
                            <td>{guitar.name}</td>
                            <td className="fw-bold">${guitar.price}</td>
                            <td className="flex align-items-start gap-4">
                              <button
                                type="button"
                                className="btn btn-dark"
                                onClick={() => decreaseQuantity(guitar.id)}
                              >
                                -
                              </button>
                              {guitar.quantity}
                              <button
                                type="button"
                                className="btn btn-dark"
                                onClick={() => increaseQuantity(guitar.id)}
                              >
                                +
                              </button>
                            </td>
                            <td>
                              <button
                                className="btn btn-danger"
                                type="button"
                                onClick={() => removeFromCart(guitar.id)}
                              >
                                X
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="text-end">Total pagar: <span className="fw-bold">${cartTotal}</span></p>
                  </>
                )}
                <button
                  className="btn btn-dark w-100 mt-3 p-2"
                  onClick={clearCart}
                >
                  Vaciar Carrito
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}