import Home from "./components/Home";
import Services from "./components/Services";
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="component_container">
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/components/services" element={<Services />}></Route>
          </Routes>
    </div>
  );
}

export default App;