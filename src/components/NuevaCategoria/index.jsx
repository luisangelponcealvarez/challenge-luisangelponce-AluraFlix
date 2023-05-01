import Button from "../Button";
import Header from "../Header/Header";
import "../NuevoVideo/NuevoVideo.css";
import Input from "./Input";

function NuevaCategoria(props) {
  const actualizarCategoria = props.actualizarCategoria;
  return (
    <>
      <Header />
      <form className="formulario">
        <h1>Nueva Categoria</h1>
        <Input
          placeholder="Titulo de la categoria"
          actualizarCategoria={actualizarCategoria}
        />
        <Button texto="Guardar" />
        <Button texto="Limpiar" />
      </form>
    </>
  );
}

export default NuevaCategoria;
