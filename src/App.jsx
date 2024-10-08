import { useState } from "react";
import Form from "./componentes/Form";
import ListarNotas from "./componentes/ListarNotas";
import FiltrarNotas from "./componentes/FiltrarNotas";

function App() {

  const [puntaje, setPuntaje] = useState([]);
  const [filtroPrioridad, setFiltroPrioridad] = useState("Todas");
  const [id, setId] = useState(1);

  const agregarNota = (nota, prioridad) => {
    const nuevaNota = { id: id, nota, prioridad };
    setPuntaje([...puntaje, nuevaNota]);
    setId(id+1);
  };

  const eliminarNota = (id) => {
    setPuntaje(puntaje.filter((punt) => punt.id !== id));
  };

  const notasFiltradas = puntaje.filter((punt) =>
    filtroPrioridad === "Todas" ? true : punt.prioridad === filtroPrioridad
  );

  return (
    <>
      <div className="cont-general">
        <Form agregarNota={agregarNota}/>
        <FiltrarNotas setFiltroPrioridad={setFiltroPrioridad} />
        <ListarNotas puntaje={notasFiltradas} eliminarNota={eliminarNota}/>
      </div>
    </>
  )
}

export default App
