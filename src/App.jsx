import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./componentes/Home";
import NuevoVideo from "./componentes/NuevoVideo";
import NuevaCategoria from "./componentes/NuevaCategoria";
import Error404 from "./componentes/404/404";
import { useState } from "react";

function App() {
  const [lista, actualizarLista] = useState([
    {
      titulo: "luis angel ponce",
      video: "https://www.youtube.com/watch?v=Y-OhzQpsRwI&t=632s",
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
          <Route path="/NuevaCategoria" element={<NuevaCategoria />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
