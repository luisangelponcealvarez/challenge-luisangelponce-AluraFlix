import "../NuevoVideo/NuevoVideo.css";

function CampoTexto(props) {
  return (
    <>
      <input placeholder={props.placeholder} className="InputCampoTexto" />
    </>
  );
}

export default CampoTexto;
