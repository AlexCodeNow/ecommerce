

const AboutUs: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Texto descriptivo */}
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 mb-4">
              Bienvenido a nuestra tienda en línea, donde la pasión por la moda y la calidad se encuentran. 
              Fundada en 2020, nuestra misión ha sido ofrecer productos únicos y de alta calidad que reflejen 
              nuestro compromiso con la excelencia y la satisfacción del cliente.
            </p>
            <p className="text-gray-600 mb-4">
              Todo comenzó como un pequeño sueño en mi garaje, donde pasaba horas seleccionando cuidadosamente 
              cada producto para asegurarme de que cumpliera con nuestros estándares. Hoy, gracias al apoyo 
              de nuestra comunidad, hemos crecido y nos hemos convertido en un referente en el mundo del ecommerce.
            </p>
            <p className="text-gray-600">
              ¡Gracias por ser parte de nuestra historia!
            </p>
          </div>

          {/* Foto */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="/header.jpg" // Reemplaza con la ruta de tu foto
              alt="Fundador de la tienda"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;