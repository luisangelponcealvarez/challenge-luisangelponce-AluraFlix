import CampoTexto from "../CampoTexto/CampoTexto";
import Header from "../Header/Header";
import "./Formulario.css";

function Formulario() {
  return (
    <>
      <Header />
      <form>
        <CampoTexto/>
        <CampoTexto/>
        <CampoTexto/>
      </form>
    </>
  );
}

export default Formulario;
