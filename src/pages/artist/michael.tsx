import React from 'react';
import './artist.css';

const ARTISTS_DATA = {
  michael: {
    name: 'michael',
    photo: 'https://images.unsplash.com/photo-1535644258845-185656906071?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGF0dWFqZXMlMjBnb3RpY29zJTIwaG9tYnJlfGVufDB8fDB8fHww',
    gallery: [
      'https://images.unsplash.com/photo-1641402027551-6a2fbf05b356?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGF0dWFqZXMlMjBnb3RpY29zfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1639545622950-72bd485b0706?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGF0dWFqZXMlMjBnb3RpY29zfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1719411279069-d7afb5fea704?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGF0dWFqZXMlMjBnb3RpY29zfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1627960630431-270d04164a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRhdHVhamVzJTIwZ290aWNvc3xlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1590246814883-55516d8c2afd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRhdHVhamVzJTIwZ290aWNvc3xlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1662753361921-e6784e43f88b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRhdHVhamVzJTIwZ290aWNvc3xlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1571877580234-0639a24f8c6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRhdHVhamVzJTIwZ290aWNvc3xlbnwwfHwwfHx8MA%3D%3D',
      'https://media.istockphoto.com/id/2052616301/es/foto/brazo-del-hombre-joven-que-se-estira-en-el-estudio-del-tatuaje.webp?a=1&b=1&s=612x612&w=0&k=20&c=cEjNTFY7WnS-7PBG7iMJ8TNMJA-ESMZ7nDFT7GsfhTo='
      
    ],
  
  },
  // Agrega más artistas aquí
};

const ArtistsSection1 = () => {

 
  return (
    <section className="artist-page">
      <div className="artist-info">
        <img src={ARTISTS_DATA.michael.photo} alt={ARTISTS_DATA.michael.name} className="artist-photo" />
        <h2 className="artist-name">{ARTISTS_DATA.michael.name}</h2>
      </div>

      <div className="artist-gallery">
        {ARTISTS_DATA.michael.gallery.map((img, idx) => (
          <img src={img} key={idx} alt={`Tattoo ${idx + 1}`} className="tattoo-img" />
        ))}
      </div>
    </section>
  );
};

export default ArtistsSection1;
