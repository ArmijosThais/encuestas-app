import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import EndPage from "./views/EndScreen";
import StartPage from "./views/StartScreen";
import FormularioPublico from "./views/FormularioPublico";
import Reportes from "./views/Reportes";
import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/encuestas/endpage" element={<EndPage />} />
          <Route path="/encuestas/:for_alias" element={<StartPage />} />
          <Route
            path="/encuestas/:for_alias/:seccion"
            element={<FormularioPublico />}
          />
          <Route path="/reportes" element={<Reportes />} />
        </Routes>
      </Router>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
}

export default App;
