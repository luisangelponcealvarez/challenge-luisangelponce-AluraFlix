import "../NuevoVideo/NuevoVideo.css";

function Input(props) {
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
      <input type="color" className="inputcolor" />
    </>
  );
}
export default Input;
