import { Link } from "react-router-dom";
import Button from "../Button";
import CampoTexto from "../CampoTexto";
import Header from "../Header/Header";
import ListaOpciones from "../ListaOpciones";
import "./NuevoVideo.css";
import { useState } from "react";

function NuevoVideo(props) {
  const [title, actualizarTitulo] = useState("");
  const [video, actualizarVideo] = useState("");
  const [categoria, actualizarCategoria] = useState("");

  function ManejandoEnvio(e) {
    e.preventDefault();
    let datosAEnviar = {
      title,
      video,
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
          valor={title}
          actualizarValor={actualizarTitulo}
        />
        <CampoTexto
          placeholder="Link del video"
          required
          valor={video}
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