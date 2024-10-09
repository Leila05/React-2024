import React, { useState, useEffect } from 'react';
import { createClient } from 'pexels';
import './style.css';

function App() {

  const [cargando, setCargando] = useState(true);
  const [paginacion, setPaginacion] = useState(null);
  const [imagen, setImagen] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    //Clave para tener acceso a la API de Pexels
    const cliente = createClient('0IhLcOjA9U3TdhellwLBdSq95BNCZY5wi6GfV80QAL0202yRoGeqjEZK');
    cliente.photos.curated({ per_page: 15 })
    .then((res) =>{
      setPaginacion(res.photos);
      const imgAlea = res.photos[Math.floor(Math.random() * res.photos.length)];
      setImagen(imgAlea);
    }).catch((error) => setError('Error al obtener la imagen. Inténtalo de nuevo.', error))
      .finally(() => setCargando(false));
  },[]);

  const cambiarImagen = () => {
    if (paginacion) {
      const imgAlea = paginacion[Math.floor(Math.random() * paginacion.length)];
      setImagen(imgAlea);
    }
  };

  return(
    <>
    <div className='contenedor'>
      <h1>Imagenes Aleatorias</h1>
      {cargando ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className='contenido'>
          {imagen && (
            <>
              <img src={imagen.src.large} alt={imagen.alt}/>
              <p>{imagen.alt}</p>
            </>
          )}
          <button onClick={cambiarImagen}>Cambiar Imagen</button>
        </div>
      )}
    </div>
    </>
  )
}

export default App;

