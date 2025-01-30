
const AboutUs = () => {
  return (
    <div className="container-xl mt-5">
      <h2 className="text-center">Sobre Nosotros</h2>
      <div className="row mt-5">
        <div className="col-md-6">
          <p>
            Somos una tienda especializada en guitarras de alta calidad. Nuestra misión es proporcionar a nuestros clientes los mejores instrumentos musicales para que puedan expresar su creatividad y pasión por la música.
          </p>
        </div>
        <div className="col-md-6">
          <img src="/img/about-us.jpg" alt="Sobre Nosotros" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;