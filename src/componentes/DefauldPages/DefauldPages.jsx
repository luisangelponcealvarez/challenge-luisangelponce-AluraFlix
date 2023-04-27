import Header from "../Header/Header";
import Videos from "../Videos";

function DefauldPages(props) {
  const { containerVideo } = props.lista;

  return (
    <section id="DefauldPages">
      <Header />
      {videos.map((_videos, index) => (
        <Videos datos={containerVideo} items={lista} key={index} />
      ))}
    </section>
  );
}

export default DefauldPages;
