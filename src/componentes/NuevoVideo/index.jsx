import Button from "../Button";
import CampoTexto from "../CampoTexto";
import Header from "../Header/Header";
import ListaOpciones from "../ListaOpciones";
import ManejandoEnvio from "../ManejandoEnvio";
import "./NuevoVideo.css";

function NuevoVideo() {
  return (
    <>
      <Header />
      <form onSubmit={ManejandoEnvio} className="formulario">
        <h1>Nuevo video</h1>
        <CampoTexto placeholder="Titulo" required />
        <CampoTexto placeholder="Link del video" required />
        <CampoTexto placeholder="Link imagem del video" required />
        <ListaOpciones />
        <Button texto="Guardar"/>
        <Button texto="Limpiar" />
        <Button texto="Nueva Categoria" sitio="/NuevaCategoria"></Button>
      </form>
    </>
  );
}

export default NuevoVideo;
