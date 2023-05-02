import { Link } from "react-router-dom";
import Button from "../Button";
import CampoTexto from "../CampoTexto";
import Header from "../Header/Header";
import "./NuevoVideo.css";
import { useState } from "react";

function NuevoVideo(props) {
  const [titulo, actualizarTitulo] = useState("");
  const [video, actualizarVideo] = useState("");

  function ManejandoEnvio(e) {
    e.preventDefault();
    let datosAEnviar = {
      titulo,
      video,
    };
    props.datos(datosAEnviar);
  }

  return (
    <>
      <Header />
      <form onSubmit={ManejandoEnvio} className="formulario">
        <h1>Nuevo video</h1>
        <CampoTexto
          placeholder="Titulo"
          required
          valor={titulo}
          actualizarValor={actualizarTitulo}
        />
        <CampoTexto
          placeholder="Link del video"
          required
          valor={video}
          actualizarValor={actualizarVideo}
        />
        <Button texto="Guardar" onSubmit={ManejandoEnvio} />
        <Button texto="Limpiar" />
      </form>
    </>
  );
}

export default NuevoVideo;
