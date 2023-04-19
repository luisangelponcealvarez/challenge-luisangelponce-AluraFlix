import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefauldPages from "./componentes/DefauldPages/DefauldPages";
import Error404 from "./componentes/404/404";
import NuevoVideo from "./componentes/NuevoVideo";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<DefauldPages />} />
          <Route path="/NuevoVideo" element={<NuevoVideo />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
