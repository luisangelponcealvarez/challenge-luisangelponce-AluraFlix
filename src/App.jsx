import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import NuevoVideo from "./components/NuevoVideo";
import NuevaCategoria from "./components/NuevaCategoria";
import Error404 from "./components/404";

function App() {
  const [lista, actualizarLista] = useState([
    {
      titulo: "luis angel ponce",
      video: "si jala el video",
    },
  ]);

  const containerVideo = (datos) => {
    actualizarLista([...lista, datos]);
  };

  const [listaCategorias, actualizarCategorias] = useState([
    {
      categoria: "Anime",
      color: "#000",
    },
  ]);

  const categorias = (categorias) => {
    actualizarCategorias([...listaCategorias, categorias]);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home file={lista} />} />
          <Route
            path="/NuevoVideo"
            element={
              <NuevoVideo
                datos={containerVideo}
                listaCategorias={listaCategorias}
                categorias={categorias}
              />
            }
          />
          <Route path="/NuevaCategoria" element={<NuevaCategoria />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
