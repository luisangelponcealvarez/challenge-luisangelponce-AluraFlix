import Header from "../Header/Header";
import Videos from "../Videos";
import datos from "../Videos/Lista";

function DefauldPages(props) {
  const { containerVideo } = props.archivos;

  return (
    <section id="DefauldPages">
      <Header />
      {datos.map((datos, index) => (
        <Videos datos={containerVideo} key={index} />
      ))}
    </section>
  );
}

export default DefauldPages;
