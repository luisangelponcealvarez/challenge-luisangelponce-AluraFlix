import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <section id="Header">
      <nav id="menu">
        <Link to="/" className="logo">
          Anime luis angel ponce
        </Link>
        <Link to="/NuevoVideo">Nuevo Video</Link>
      </nav>
    </section>
  );
}

export default Header;
