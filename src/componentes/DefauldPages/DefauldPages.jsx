import Header from "../Header/Header";
import Videos from "../Videos";
import { Lista } from "../lista";
import "./DefauldPages.css";

function DefauldPages() {
  return (
    <section id="DefauldPages">
      <Header />
      {Lista.map((Lista, index) => (
        <Videos lista={Lista} key={index} />
      ))}
    </section>
  );
}

export default DefauldPages;
