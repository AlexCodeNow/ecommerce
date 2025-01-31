import React from 'react';
import Slider from 'react-slick';
import { useCartContext } from '../context/CartContext';
import styles from './CarruselGuitarras.module.css';
import { FlechaDerecha, FlechaIzquierda } from './FlechasCarrusel';

const CarruselGuitarras: React.FC = () => {
  const { data } = useCartContext();
  const { addToCart } = useCartContext();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
    prevArrow: <FlechaIzquierda />,
    nextArrow: <FlechaDerecha />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.carruselContainer}>
      <h2 className={styles.tituloCarrusel}>Los más vendidos</h2>
      <Slider {...settings}>
        {data.slice(0, 5).map((guitar) => (
          <div key={guitar.id} className={styles.carruselItem}>
            <img
              src={`/img/${guitar.image}.jpg`}
              alt={guitar.name}
              className={styles.carruselImage}
            />
            <h5 className={styles.carruselTitle}>{guitar.name}</h5>
            <p className={styles.carruselPrice}>${guitar.price}</p>
            <button
              className={styles.addToCartButton}
              onClick={() => addToCart(guitar)}
            >
              Añadir al carrito
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarruselGuitarras;