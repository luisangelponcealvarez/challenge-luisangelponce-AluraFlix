import { Link } from "react-router-dom";
import Button from "../Button";
import CampoTexto from "../CampoTexto";
import Header from "../Header/Header";
import ListaOpciones from "../ListaOpciones";
import "./NuevoVideo.css";
import Btncategoria from "../Button/BtnNuevaCategoria";

function NuevoVideo() {
  return (
    <>
      <Header />
      <form className="formulario">
        <h1>Nuevo video</h1>
        <CampoTexto placeholder="Titulo" />
        <CampoTexto placeholder="Link del video" required />
        <CampoTexto placeholder="Link imagem del video" required />
        <ListaOpciones />
        <Button />
        <Link to="/NuevaCategoria">
          <Btncategoria />
        </Link>
      </form>
    </>
  );
}

export default NuevoVideo;
