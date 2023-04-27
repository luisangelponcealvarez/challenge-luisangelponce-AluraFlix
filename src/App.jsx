import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefauldPages from "./componentes/DefauldPages/DefauldPages";
import Error404 from "./componentes/404/404";
import NuevoVideo from "./componentes/NuevoVideo";
import NuevaCategoria from "./componentes/NuevaCategoria";
import { useState } from "react";

function App() {
  const [lista, actualizarLista] = useState([
    {
      titulo: "luis",
      videos: "https://www.youtube.com/watch?v=8zKFjWRrIME",
    },
    {
      titulo: "luis",
      videos: "https://www.youtube.com/watch?v=8zKFjWRrIME",
    },
  ]);

  const containerVideo = () => {
    actualizarLista([...lista, listas]);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<DefauldPages lista={containerVideo} />} />
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
