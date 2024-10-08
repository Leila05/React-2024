import React from "react";
import '../estilos/style.css';

function ListarNotas({ puntaje, eliminarNota }) {
    return (
        <ul className="lista-nota">
            {puntaje.map((punt) => (
                <li key={punt.id}>
                    <p>{punt.nota} - <strong>{punt.prioridad}</strong></p>
                    <button id="btn-listar" onClick={() => eliminarNota(punt.id)}>Eliminar</button>
                </li>
            ))}
        </ul>
    );
}

export default ListarNotas;