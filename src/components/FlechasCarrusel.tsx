import React from 'react';
import styles from './CarruselGuitarras.module.css'; 


export const FlechaIzquierda: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <button
      className={styles.flechaIzquierda}
      onClick={onClick}
      aria-label="Anterior"
    >
      &lt; 
    </button>
  );
};


export const FlechaDerecha: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <button
      className={styles.flechaDerecha}
      onClick={onClick}
      aria-label="Siguiente"
    >
      &gt; 
    </button>
  );
};