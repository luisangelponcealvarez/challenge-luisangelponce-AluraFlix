import Header from "../Header/Header";
import "./Formulario.css";

function Formulario() {
  return (
    <>
      <Header />
      <form action="">
        <h1>Nuevo video</h1>
        <input type="text" placeholder="Titulo" />
        <input type="url" placeholder="Link del video" />
        <input type="url" placeholder="Link de la imagen del video" />
        <input type="text" placeholder="Escoja una categoria" />
        <textarea></textarea>
      </form>
    </>
  );
}

export default Formulario;
