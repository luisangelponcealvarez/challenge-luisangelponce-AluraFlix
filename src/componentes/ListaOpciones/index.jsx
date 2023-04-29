import "./ListaOpciones.css";
import { categorias } from "./categorias";

function ListaOpciones(props) {
  function manejarCambio(e) {
    props.actualizarCategoria(e.target.value);
  }

  return (
    <div>
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar categoria
        </option>
        {categorias.map((categoria, index) => (
          <option key={index}>{categoria}</option>
        ))}
      </select>
    </div>
  );
}

export default ListaOpciones;
