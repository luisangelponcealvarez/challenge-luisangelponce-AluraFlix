import Header from "../Header/Header";
import Videos from "../Videos";

function DefauldPages(props) {
  const Lista = [
    {
      titulo: "",
      videos: "",
    },
  ];

  const { containerVideo } = props.datos;

  return (
    <section id="DefauldPages">
      <Header />
      {Lista.map((Lista, index) => (
        <Videos Lista={Lista} datos={containerVideo} key={index} />
      ))}
    </section>
  );
}

export default DefauldPages;
