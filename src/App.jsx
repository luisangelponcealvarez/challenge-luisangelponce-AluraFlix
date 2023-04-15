import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefauldPages from "./componentes/DefauldPages/DefauldPages";
import Error404 from "./componentes/404/404";

function App() {
  return (
    <div className="App">
      <h1>Sitio en mantenimiento</h1>
      <Router>
        <Routes>
          <Route path="/" element={DefauldPages} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
