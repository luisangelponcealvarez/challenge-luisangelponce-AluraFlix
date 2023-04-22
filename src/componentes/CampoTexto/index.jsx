import { useState } from "react";
import "../NuevoVideo/NuevoVideo.css";

function CampoTexto(props) {
  
  const [valor, actualizarValor] = useState("");

  const manejarCambio = (e) => {
    actualizarValor(e.target.value);
  };

  return (
    <>
      <input
        placeholder={props.placeholder}
        className="InputCampoTexto"
        required={props.required}
        value={valor}
        onChange={manejarCambio}
      />
    </>
  );
}

export default CampoTexto;
