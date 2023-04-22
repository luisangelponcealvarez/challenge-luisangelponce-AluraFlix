import Button from "../Button";
import CampoTexto from "../CampoTexto";
import Header from "../Header/Header";
import ListaOpciones from "../ListaOpciones";
import "./NuevoVideo.css";

function NuevoVideo() {
  return (
    <>
      <Header />
      <form className="formulario">
        <h1>Nuevo video</h1>
        <CampoTexto placeholder="Titulo" required />
        <CampoTexto placeholder="Link del video" required />
        <CampoTexto placeholder="Link imagem del video" required />
        <ListaOpciones />
        <Button />
      </form>
    </>
  );
}

export default NuevoVideo;
