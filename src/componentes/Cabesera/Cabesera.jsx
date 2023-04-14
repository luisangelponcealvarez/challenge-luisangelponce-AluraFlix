import "./Cabesera.css";
import pecadosMiniatura from "../../../public/img/7pecadosCapitalesPoster.png";

function Cabesera() {
  return (
    <section id="baner">
      <div className="text">
        <h1>titulo</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nihil
          perferendis aspernatur maiores nesciunt, quae corporis ullam quaerat
          veritatis accusantium at sed cum quidem nam delectus quos atque!
          Maxime, alias?
        </p>
      </div>
      <div className="img">
        <img src={pecadosMiniatura} alt="7PecadosCapitales" />
      </div>
    </section>
  );
}

export default Cabesera;
