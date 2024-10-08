import { useState } from "react";
import '../estilos/style.css';

const Form = ({agregarNota}) => {

    const [nota, setNota] = useState("");
    const [prioridad, setPrioridad] = useState("Bajo");

    const manejarEnvio = (e) =>{
        e.preventDefault();
        if (nota.trim() != "") {
            agregarNota(nota, prioridad);
            setNota("");
            setPrioridad("Bajo");
        }
    }

    return (
        <form onSubmit={manejarEnvio}>
            <div className='titulo'>
                    <h1>Notas</h1>
            </div>
            <div className='contenedor2'>
                <div className="entrada">
                    <input
                        type = "text"
                        name = "notas"
                        placeholder = "Escribe tu nota"
                        value = {nota}
                        onChange = {(e) => setNota(e.target.value)}
                    />
                </div>
                <div className="entrada">
                    <select value={prioridad} onChange={(e) => setPrioridad(e.target.value)}>
                        <option value="Bajo">Bajo</option>
                        <option value="Medio">Medio</option>
                        <option value="Alto">Alto</option>
                    </select>
                </div>
                <div className="entrada">
                    <button id="btn-agregar" type="submit">Agregar Nota</button>
                </div>
            </div>
        </form>
    );
};
export default Form;