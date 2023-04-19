import { Link } from "react-router-dom";
import "./Button.css";

function Btncategoria() {
  return (
    <div className="button">
      <Link to="/NuevaCategoria">
        <button className="colorblue">Nueva Categoria</button>
      </Link>
    </div>
  );
}

export default Btncategoria;
