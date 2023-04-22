import "./ListaOpciones.css";
import { categorias } from "./categorias";

function ListaOpciones() {
  return (
    <div>
      <select>
        {categorias.map((categoria, index) => (
          <option key={index}>{categoria}</option>
        ))}
      </select>
    </div>
  );
}

export default ListaOpciones;
