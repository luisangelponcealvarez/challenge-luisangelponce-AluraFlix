import "./404.css";
import image from "../../../public/img/404.gif"

function Error404() {
  return (
    <main className="container flex flex--center flex--column">
      <img className="dog-image" src={image} alt="Doguito" />
      <p className="notfound-text">Esta página no existe estamos en mantenimiento</p>
    </main>
  );
}

export default Error404;
