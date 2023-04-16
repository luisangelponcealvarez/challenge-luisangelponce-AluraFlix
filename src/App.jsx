import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefauldPages from "./componentes/DefauldPages/DefauldPages";
import Error404 from "./componentes/404/404";
import Formulario from "./componentes/Formulario/Formulario";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<DefauldPages />} />
          <Route path="/Formulario" element={<Formulario />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
