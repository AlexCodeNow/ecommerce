import React from 'react';
import styles from './Opiniones.module.css';

const Opiniones: React.FC = () => {
  const opiniones = [
    {
      id: 1,
      nombre: "Juan Pérez",
      imagen: "/img/clientes/cliente1.jpg",
      opinion: "¡Excelente servicio! Las guitarras son de alta calidad y el envío fue muy rápido.",
    },
    {
      id: 2,
      nombre: "Maria Cruz",
      imagen: "/img/clientes/cliente2.jpg",
      opinion: "Mi nueva guitarra suena increíble. Definitivamente volveré a comprar aquí.",
    },
    {
      id: 3,
      nombre: "Carlos López",
      imagen: "/img/clientes/cliente3.jpg",
      opinion: "Muy contento con mi compra. El equipo de atención al cliente fue muy amable.",
    },
  ];

  return (
    <section className={styles.opinionesSection}>
      <div className="container-xl">
        <h2 className={styles.opinionesTitle}>Opiniones de Nuestros Clientes</h2>
        <div className={styles.opinionesContainer}>
          {opiniones.map((opinion) => (
            <div key={opinion.id} className={styles.opinionCard}>
              <img
                src={opinion.imagen}
                alt={opinion.nombre}
                className={styles.opinionImage}
              />
              <h5 className={styles.opinionName}>{opinion.nombre}</h5>
              <p className={styles.opinionText}>{opinion.opinion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Opiniones;