import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import NuevoVideo from "./components/NuevoVideo";
import Error404 from "./components/404";
import Footer from "./components/Footer";

function App() {
  const [lista, actualizarLista] = useState([
    {
      titulo: "Aprende React en 45 Minutos",
      video: "https://www.youtube.com/watch?v=PWF5SgnNdp4&pp=wgIGCgQQAhgB",
    },
    {
      titulo: "Aprende JavaScript en 60 minutos",
      video: "https://www.youtube.com/watch?v=bmGPv687toc&t=588s",
    },
    {
      titulo: "Curso Básico de HTML5 y CSS3 Desde Cero",
      video: "https://youtu.be/Y-OhzQpsRwI",
    },
  ]);

  const containerVideo = (datos) => {
    actualizarLista([...lista, datos]);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home file={lista} />} />
          <Route
            path="/NuevoVideo"
            element={<NuevoVideo datos={containerVideo} />}
          />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
