import { Link } from "react-router-dom";
import "./Button.css";

function Button(props) {
  return (
    <>
      <Link to={props.sitio}>
        <button className="colorblue">{props.texto}</button>
      </Link>
    </>
  );
}

export default Button;
