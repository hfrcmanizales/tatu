import React from 'react';
import './ubicacion.css'; // Estilos aparte

const UbicacionGótica = () => {
  return (
    <section className="ubicacion-gotica">
      <h2>Nuestra Ubicación</h2>
      <p>Ven a plasmar tu arte en piel en nuestro templo del tatuaje.</p>
      
      <div className="mapa-container">
        <iframe
          title="Mapa del estudio de tatuajes"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.373454452886!2d20.908393576393674!3d52.23660005717333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecb1fb4832e55%3A0x55ad49715d679433!2sStudio%20tatua%C5%BCu%20Goat%20Tattoo!5e0!3m2!1ses-419!2sco!4v1751319492461!5m2!1ses-419!2sco" 
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default UbicacionGótica;
