import React from 'react';
import './inicio.css'; // Asegúrate de crear este archivo CSS

const TattooPortfolio = () => {
  return (
    <div className="tattoo-portfolio-container">
      <div className="tattoo-logo-section">
        {/* Puedes reemplazar 'your-gothic-logo.png' con la ruta de tu imagen */}
        <img 
          src="https://plus.unsplash.com/premium_photo-1707057704991-1f0cec6e9a3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIxfHxsb2dvcyUyMGRlJTIwdGF0dWFqZXN8ZW58MHx8MHx8fDA%3D" // Ejemplo de logo gótico, reemplaza con el tuyo
          alt="Tatuaje Gótico Logo" 
          className="tattoo-logo" 
        />
        <h1 className="tattoo-title">TattooGoth</h1> {/* Puedes personalizar el nombre */}
      </div>
      <div className="tattoo-description-section">
        <p className="description-heading">Sobre Nosotros</p>
        <p className="description-text">
          En TattooGoth, transformamos tus ideas en obras de arte permanentes. Nos especializamos en una amplia gama de estilos, desde el intrincado <span>gótico y el blackwork</span> hasta el vibrante neotradicional y el detallado realismo. 
          Cada tatuaje es una expresión única de tu personalidad, y nos dedicamos a capturar esa esencia con pasión.
        </p>
        <p className="description-text">
          Somos artistas expertos  que utilizan las técnicas más avanzadas y los materiales de la más alta calidad para garantizar un resultado impecable y duradero. 
          La <span>seguridad y la higiene</span> son nuestras máximas prioridades; trabajamos en un ambiente esterilizado, cumpliendo con todas las normativas sanitarias para tu tranquilidad.
        </p>
        <p className="description-text">
          Ofrecemos <span>consultas personalizadas</span> para entender tu visión y asesorarte en cada paso del proceso, desde el diseño inicial hasta los cuidados posteriores. 
          Ven y descubre por qué somos la elección perfecta para tu próximo tatuaje. ¡Tu lienzo nos espera!
        </p>
      </div>
    </div>
  );
};

export default TattooPortfolio;