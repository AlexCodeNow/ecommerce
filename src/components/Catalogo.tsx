import React from 'react';
import Guitar from './Guitar';
import { useCart } from '../hooks/useCart';

const Catalogo: React.FC = () => {
  const { data, addToCart } = useCart();
  return (
    <main className="container-xl mt-5">
      <h2 className="text-center">Catálogo de Guitarras</h2>
      <p className="text-center lead">Explora nuestra amplia selección de guitarras para todos los niveles y estilos.</p>
      <div className="row mt-5">
        {data.map((guitar) => (
          <Guitar 
            key={guitar.id}
            guitar={guitar}
            addToCart={addToCart} 
          />
        ))}
      </div>
    </main>
  );
};

export default Catalogo;