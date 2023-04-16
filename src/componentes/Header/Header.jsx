import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section id="Header">
      <nav id="menu">
        <Link to="/" className="logo">
          Anime luis angel ponce
        </Link>
        <Link to="/formulario">Nuevo Video</Link>
      </nav>
    </section>
  );
}

export default Header;
