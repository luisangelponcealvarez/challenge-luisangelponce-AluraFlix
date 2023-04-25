import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error404 from "./componentes/404/404";
import Header from "./componentes/Header/Header";
import { useState } from "react";
import NuevoVideo from "./componentes/NuevoVideo";
import NuevaCategoria from "./componentes/NuevaCategoria";
import Videos from "./componentes/Videos";
import { Lista } from "./componentes/Videos/lista/Lista";

function App() {
  const [video, actualizarvideos] = useState([]);

  const containerVideo = () => {
    actualizarVideos([...video, actualizarvideos]);
  };

  {
    {
      Lista.map((Lista, index) => <Videos Lista={Lista} key={index} />);
    }
  }

  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
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
