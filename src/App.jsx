import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefauldPages from "./componentes/DefauldPages/DefauldPages";
import Error404 from "./componentes/404/404";
import NuevoVideo from "./componentes/NuevoVideo";
import NuevaCategoria from "./componentes/NuevaCategoria";
import { useState } from "react";
import Header from "./componentes/Header/Header";

function App() {
  const [videos, actualizarvideos] = useState([]);

  const containerVideo = () => {
    actualizarvideos([...videos, actualizarvideos]);
  };

  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<DefauldPages />} />
          <Route
            path="/NuevoVideo"
            element={<NuevoVideo containerVideo={containerVideo} />}
          />
          <Route path="/NuevaCategoria" element={<NuevaCategoria />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
