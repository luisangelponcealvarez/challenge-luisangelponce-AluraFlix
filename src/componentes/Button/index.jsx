import { Link } from "react-router-dom";
import "./Button.css";

function Button() {
  return (
    <div className="button">
      <Link>
        <button className="colorblue">Guardar</button>
      </Link>
      <Link>
        <button className="colorwhite">Limpiar</button>
      </Link>
      <Link to="/NuevaCategoria">
        <button className="colorblue">Nueva Categoria</button>
      </Link>
    </div>
  );
}

export default Button;
