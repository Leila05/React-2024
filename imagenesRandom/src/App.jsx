import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

function App() {

  const [cargando, setCargando] = useState(true);
  const [paginacion, setPaginacion] = useState(null);
  const [imagen, setImagen] = useState(null);
  const [error, setError] = useState(null);

  const obtenerImagenes = async () => {
    try {
      //Clave para tener acceso a la API de Pexels
      const API_KEY = '0IhLcOjA9U3TdhellwLBdSq95BNCZY5wi6GfV80QAL0202yRoGeqjEZK';
      const respuesta = await axios.get('https://api.pexels.com/v1/curated', {
        headers: {
          Authorization: API_KEY
        },
        params: {
          per_page: 15
        }
      });
      setPaginacion(respuesta.data.photos);
      const imgAlea = respuesta.data.photos[Math.floor(Math.random() * respuesta.data.photos.length)];
      setImagen(imgAlea);
    } catch (error) {
      setError('Error al obtener la imagen. Inténtalo de nuevo.');
    } finally {
      setCargando(false);
    }
  };

  useEffect(() =>{
    obtenerImagenes();
  }, []);

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

