import React, { useState } from 'react';
import styles from './FAQ.module.css';

const FAQ: React.FC = () => {

  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  const faqData = [
    {
      question: '¿Cómo puedo realizar una compra?',
      answer:
        'Para realizar una compra, simplemente navega por nuestro catálogo, selecciona la guitarra que te interese y haz clic en "Agregar al carrito". Luego, ve a tu carrito y completa el proceso de compra.',
    },
    {
      question: '¿Qué métodos de pago aceptan?',
      answer:
        'Aceptamos tarjetas de crédito, débito y PayPal. También ofrecemos la opción de pago contra entrega en algunas regiones.',
    },
    {
      question: '¿Cuánto tiempo tarda el envío?',
      answer:
        'El tiempo de envío depende de tu ubicación. Por lo general, los pedidos dentro de la ciudad tardan de 1 a 3 días hábiles, mientras que los envíos nacionales pueden tardar de 3 a 7 días hábiles.',
    },
    {
      question: '¿Puedo devolver un producto?',
      answer:
        'Sí, aceptamos devoluciones dentro de los 30 días posteriores a la compra. Asegúrate de que el producto esté en su empaque original y en perfectas condiciones.',
    },
    {
      question: '¿Ofrecen garantía en los productos?',
      answer:
        'Sí, todas nuestras guitarras tienen una garantía de 1 año contra defectos de fabricación. Si encuentras algún problema, contáctanos y te ayudaremos.',
    },
  ];

  return (
    <div className={`container-xl ${styles.faqContainer}`}>
      <h2 className={`text-center ${styles.faqTitle}`}>Preguntas Frecuentes (FAQ)</h2>
      <div className={`row ${styles.faqContent}`}>
        {faqData.map((faq, index) => (
          <div className="col-md-12 mb-4" key={index}>
            <div
              className={`card ${styles.faqCard} ${openIndices.includes(index) ? styles.open : ''}`}
              onClick={() => toggleCard(index)}
            >
              <div className="card-body">
                <div className={styles.faqHeader}>
                  <h3 className={`card-title ${styles.faqQuestion}`}>{faq.question}</h3>
                  <span className={`${styles.arrow} ${openIndices.includes(index) ? styles.rotate : ''}`}>
                    ▼
                  </span>
                </div>
                {openIndices.includes(index) && (
                  <p className={`card-text ${styles.faqAnswer}`}>{faq.answer}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;