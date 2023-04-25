import { Link } from "react-router-dom";
import Button from "../Button";
import CampoTexto from "../CampoTexto";
import Header from "../Header/Header";
import ListaOpciones from "../ListaOpciones";
import "./NuevoVideo.css";
import { useState } from "react";

function NuevoVideo(props) {
  const [Title, actualizarTitulo] = useState("");
  const [Video, actualizarVideo] = useState("");
  const [categoria, actualizarCategoria] = useState("");

  function ManejandoEnvio(e) {
    e.preventDefault();
    let datosAEnviar = {
      Title,
      Video,
      categoria,
    };
    props.containerVideo(datosAEnviar);
  }

  return (
    <>
      <Header />
      <form onSubmit={ManejandoEnvio} className="formulario">
        <h1>Nuevo video</h1>
        <CampoTexto
          placeholder="Titulo"
          required
          valor={Title}
          actualizarValor={actualizarTitulo}
        />
        <CampoTexto
          placeholder="Link del video"
          required
          valor={Video}
          actualizarValor={actualizarVideo}
        />
        <ListaOpciones
          valor={categoria}
          actualizarCategoria={actualizarCategoria}
        />
        <Button texto="Guardar" />
        <Button texto="Limpiar" />
        <Link to="/NuevaCategoria">
          <Button texto="Nueva Categoria" />
        </Link>
      </form>
    </>
  );
}

export default NuevoVideo;
