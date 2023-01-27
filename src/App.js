import Home from "./Home";
import Services from "./Services";
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="component_container">
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/services" element={<Services />}></Route>
          </Routes>
    </div>
  );
}

export default App;