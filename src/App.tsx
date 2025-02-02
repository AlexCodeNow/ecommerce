import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Guitar from "./components/Guitar";
import AboutUs from "./components/AboutUs";
import Header from './components/header';
import HeroSection from './components/HeroSection';
import Catalogo from './components/Catalogo';
import Opiniones from './components/Opiniones';
import { CartProvider, useCartContext } from './context/CartContext';
import CarruselGuitarras from './components/CarruselGuitarras';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
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
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;