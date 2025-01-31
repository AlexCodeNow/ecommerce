import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Guitar from "./components/Guitar";
import AboutUs from "./components/AboutUs";
import { useCart } from "./hooks/useCart";
import Header from './components/header';
import HeroSection from './components/HeroSection';
import Catalogo from './components/Catalogo'; 

function App() {
  const { data, cart, addToCart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart, isEmpty, cartTotal } = useCart();

  return (
    <Router>
      <Header 
        cart={cart}
        removeFromCart={removeFromCart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        clearCart={clearCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      />
      <Routes>
        <Route path="/" element={
          <>
            <main className="container-xl mt-5">
              <h2 className="text-center">Nuestra Colección</h2>
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
            <HeroSection />
          </>
        } />
        <Route path="/sobre-nosotros" element={<AboutUs />} />
        <Route path="/catalogo" element={<Catalogo />} /> 
      </Routes>
      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">Guitar Shop - Todos los derechos Reservados</p>
        </div>
      </footer>
    </Router>
  );
}

export default App;