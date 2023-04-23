import Header from "../Header/Header";
import { Lista } from "../Videos/lista";
import Videos from "../Videos";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NuevoVideo from "../NuevoVideo";
import NuevaCategoria from "../NuevaCategoria";

function DefauldPages() {
  const [videos, actualizarvideos] = useState([]);

  const containerVideo = (videos) => {
    console.log(videos);
    actualizarVideos([...videos, actualizarvideos]);
  };

  return (
    <section id="DefauldPages">
      <Header />
      {Lista.map((Lista, index) => (
        <Videos lista={Lista} containerVideo={containerVideo} key={index} />
      ))}
      <Router>
        <Routes>
          <Route path="/NuevoVideo" element={<NuevoVideo />} />
          <Route path="/NuevaCategoria" element={<NuevaCategoria />} />
        </Routes>
      </Router>
    </section>
  );
}

export default DefauldPages;
