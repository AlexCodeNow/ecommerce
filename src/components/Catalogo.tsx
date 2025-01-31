import React from 'react';
import Guitar from './Guitar';
import { useCartContext } from '../context/CartContext';

const Catalogo: React.FC = () => {
  const { data } = useCartContext();

  return (
    <main className="container-xl mt-5">
      <h2 className="text-center">Catálogo de Guitarras</h2>
      <p className="text-center lead">Explora nuestra amplia selección de guitarras para todos los niveles y estilos.</p>
      <div className="row mt-5">
        {data.map((guitar) => (
          <Guitar 
            key={guitar.id}
            guitar={guitar}
          />
        ))}
      </div>
    </main>
  );
};

export default Catalogo;