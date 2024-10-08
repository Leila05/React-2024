import React from "react";
import '../estilos/style.css';

function FiltrarNotas({ setFiltroPrioridad }) {
    const manejarCambioFiltro = (e) => {
        setFiltroPrioridad(e.target.value);
    };

    return (
        <div className="cont-filtro">
            <select onChange={manejarCambioFiltro}>
                <option value="Todas">Todas</option>
                <option value="Alto">Alto</option>
                <option value="Medio">Medio</option>
                <option value="Bajo">Bajo</option>
            </select>
        </div>
    );
}

export default FiltrarNotas;