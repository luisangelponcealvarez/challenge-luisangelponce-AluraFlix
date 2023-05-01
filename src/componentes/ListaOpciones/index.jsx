import "./ListaOpciones.css";

function ListaOpciones(props) {
  function manejarCambio(e) {
    props.actualizarCategoria(e.target.value);
  }

  const categoria = props.ListaCategorias;
  const listaCategorias = props.listaCategorias;
  return (
    <div>
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar categoria
        </option>
        {categoria.map((listaCategorias, index) => (
          <option key={index}>{categoria}</option>
        ))}
      </select>
    </div>
  );
}

export default ListaOpciones;
