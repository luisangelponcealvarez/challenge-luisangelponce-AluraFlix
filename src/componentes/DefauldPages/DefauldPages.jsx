import Header from "../Header/Header";
import Videos from "../Videos";

function DefauldPages(props) {
  const { containerVideo } = props.lista;

  return (
    <section id="DefauldPages">
      <Header />
      {containerVideo.map((index) => (
        <Videos datos={containerVideo} key={index} />
      ))}
    </section>
  );
}

export default DefauldPages;
