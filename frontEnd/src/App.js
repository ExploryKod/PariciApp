
import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Intro from "./pages/Intro";
import Home from "./pages/Home";
import AllCircuits from './pages/AllCircuits';
import CircuitDT from './pages/CircuitDT';
import CircuitsDetails from './pages/CircuitMap';
import GpCircuitsPage from "./pages/gpCarrouselPage";
import Navigation from "./pages/navigation";
import GpCircuitDescription from "./components/Gp_description_circuit";
import GpSubscribe from "./components/Gp_subscribe";

import CreateCircuits from './pages/CreateCircuits';


function App() {
  
  return (
    <div className="App">
      
    <BrowserRouter>
      
    <Routes>
    <Route path="/" element={<Navigation />}>
    <Route index element={<Intro />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/circuitDetail" element={<CircuitsDetails />} />

    <Route path="/CircuitDT/:id_circuit" element={<CircuitDT />} />
    <Route path="circuits-de-groupe/*" element={<GpCircuitsPage />} />
    <Route path="circuits-de-groupe/:id_circuit" element={<GpCircuitDescription />} />
    <Route path="circuits-de-groupe/:id_circuit/:subscribe" element={<GpSubscribe />} />

    <Route path="/AllCircuits" element={<AllCircuits />} />
    <Route path="/CreateCircuits" element={<CreateCircuits />} />
</Route>
    
    </Routes>
  </BrowserRouter>
  
  </div>
  );
}

export default App;
