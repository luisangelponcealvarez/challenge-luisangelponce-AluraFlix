import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./componentes/Header/Header";
import DefauldPages from "./componentes/DefauldPages/DefauldPages";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={DefauldPages}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
