import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error404 from "./componentes/404/404";
/* import DefauldPages from "./componentes/DefauldPages/DefauldPages";
import NuevoVideo from "./componentes/NuevoVideo";
import NuevaCategoria from "./componentes/NuevaCategoria"; */

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<DefauldPages />} />
          <Route path="/NuevoVideo" element={<NuevoVideo />} />
          <Route path="/NuevaCategoria" element={<NuevaCategoria />} /> */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
