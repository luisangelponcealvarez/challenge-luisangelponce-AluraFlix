import "../NuevoVideo/NuevoVideo.css";

function CampoTexto(props) {
  function manejarCambio(e) {
    props.actualizarValor(e.target.value);
  }
  return (
    <>
      <input
        placeholder={props.placeholder}
        className="InputCampoTexto"
        value={props.valor}
        onChange={manejarCambio}
        required={props.required}
      />
    </>
  );
}

export default CampoTexto;
