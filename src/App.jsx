import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error404 from "./componentes/404/404";
import Header from "./componentes/Header/Header";
import Videos from "./componentes/Videos";
import { useState } from "react";
import { Lista } from "./componentes/Videos/lista";
import NuevoVideo from "./componentes/NuevoVideo";
import NuevaCategoria from "./componentes/NuevaCategoria";

function App() {
  const [video, actualizarvideos] = useState([]);

  const containerVideo = (videos) => {
    console.log(video);
    actualizarVideos([...videos, actualizarvideos]);
  };

  return (
    <div className="App">
      <Header />
      {Lista.map((Lista, index) => (
        <Videos lista={Lista} key={index} />
      ))}

      <Router>
        <Routes>
          <Route path="/" />
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
