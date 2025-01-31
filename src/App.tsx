import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Guitar from "./components/Guitar";
import AboutUs from "./components/AboutUs";
import Header from './components/header';
import HeroSection from './components/HeroSection';
import Catalogo from './components/Catalogo';
import Opiniones from './components/Opiniones'; 
import { CartProvider, useCartContext } from './context/CartContext';
import CarruselGuitarras from './components/CarruselGuitarras';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const { data } = useCartContext();

  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <CarruselGuitarras /> 
              <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>
                <div className="row mt-5">
                  {data.map((guitar) => (
                    <Guitar 
                      key={guitar.id}
                      guitar={guitar}
                    />
                  ))}
                </div>
              </main>
              <HeroSection />
              <Opiniones /> 
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
      </CartProvider>
    </Router>
  );
}

export default App;