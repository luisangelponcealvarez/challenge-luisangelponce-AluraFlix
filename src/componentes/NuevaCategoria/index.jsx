import Button from "../Button";
import CampoTexto from "../CampoTexto";
import Header from "../Header/Header";
import "../NuevoVideo/NuevoVideo.css";
import Input from "./Input";

function NuevaCategoria() {
  return (
    <>
      <Header />
      <form className="formulario">
        <h1>Nueva Categoria</h1>
        <CampoTexto placeholder="Titulo" />
        <Input />
        <Button texto="Guardar" />
        <Button texto="Limpiar" />
      </form>
    </>
  );
}

export default NuevaCategoria;
