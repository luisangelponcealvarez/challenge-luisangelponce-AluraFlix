import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error404 from "./componentes/404/404";
import NuevoVideo from "./componentes/NuevoVideo";
import NuevaCategoria from "./componentes/NuevaCategoria";
import { useState } from "react";
import Header from "./componentes/Header/Header";
import Videos from "./componentes/Videos";

function App() {
  const [lista, actualizarLista] = useState([
    {
      titulo: "luis angel ponce",
      video: "https://www.youtube.com/watch?v=Y-OhzQpsRwI&t=632s",
    },
  ]);

  const containerVideo = (datos) => {
    actualizarLista([lista, datos]);
  };

  return (
    <div className="App">
      {lista.map((containerVideo, index) => (
        <Videos datos={containerVideo} key={index} />
      ))}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={NuevoVideo} />
          <Route
            path="/NuevoVideo"
            element={<NuevoVideo datos={containerVideo} />}
          />
          <Route path="/NuevaCategoria" element={<NuevaCategoria />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
