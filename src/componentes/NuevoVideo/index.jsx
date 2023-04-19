import CampoTexto from "../CampoTexto";
import Header from "../Header/Header";
import "./NuevoVideo.css";

function NuevoVideo() {
  return (
    <>
      <Header />
      <form className="formulario">
        <h1>Nuevo video</h1>
        <CampoTexto placeholder="Titulo" />
        <CampoTexto placeholder="Link del video" required />
        <CampoTexto placeholder="Link imagem del video" required />
      </form>
    </>
  );
}

export default NuevoVideo;
