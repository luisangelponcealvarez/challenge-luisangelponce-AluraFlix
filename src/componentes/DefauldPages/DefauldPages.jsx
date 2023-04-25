import Header from "../Header/Header";
import { Lista } from "../Videos/lista";
import Videos from "../Videos";

function DefauldPages() {
  return (
    <section id="DefauldPages">
      <Header />
      {Lista.map((Lista, index) => (
        <Videos lista={Lista}  key={index} />
      ))}
    </section>
  );
}

export default DefauldPages;
