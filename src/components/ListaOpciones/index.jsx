import "./ListaOpciones.css";

function ListaOpciones(props) {
  function manejarCambio(e) {
    props.actualizarCategoria(e.target.value);
  }

  const listCategoris = props.listaCategorias;

  console.log(listCategoris);

  return (
    <div>
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar categoria
        </option>
        {listCategoris.map((categoria, index) => (
          <option key={index}>{listCategoris}</option>
        ))}
      </select>
    </div>
  );
}

export default ListaOpciones;
