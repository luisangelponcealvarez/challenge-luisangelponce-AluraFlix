import Header from "../Header/Header";
import Videos from "../Videos";
import { Lista } from "../Videos/lista";
import "./DefauldPages.css";

function DefauldPages() {
  return (
    <section id="DefauldPages">
      <Header />
      {Lista.map((Lista, index) => (
        <Videos lista={Lista} actualizarVideos={Videos} key={index} />
      ))}
    </section>
  );
}

export default DefauldPages;
