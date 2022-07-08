/*  */
import "./App.css";
import { BrowserRouter, Route, Routes, NavLink} from "react-router-dom";
import styled from "styled-components";
import Intro from "./pages/Intro";
import Home from "./pages/Home";
import AllCircuits from './pages/AllCircuits';
import CircuitDT from './pages/CircuitDT';
import CircuitsDetails from './pages/CircuitDetail';
import GpCircuitsPage from "./pages/gpCarrouselPage";
import Navigation from "./pages/navigation";
import GpCircuitDescription from "./components/Gp_description_circuit";
import GpSubscribe from "./components/Gp_subscribe";




import Map from './pages/Map';
import CreateCircuits from './pages/CreateCircuits';




import { AccountBox } from "./components/accountBox";

import { useState } from 'react';
import {Profile} from './pages/Profile';

const AppContainer = styled.div`

height: 100%;
width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
`;

function App() {
  const [authState, setAuthState] = useState({
    pseudo: "nani",
    id_user: 0,
    status: false,
  });

  const logout = () =>{
    localStorage.removeItem("accessToken");
    setAuthState({pseudo: "", id_user: 0, status: false});
  };

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

    <Route path="/profile/:id_user" element={<Profile pseudo={authState.pseudo}/>} />
      <Route path="/login" element={<div className="bodycontain"><AppContainer><AccountBox /></AppContainer></div>} />
    <Route path="/Map" element={<Map />} />
    <Route path="/CreateCircuits" element={<CreateCircuits />} />
</Route>
    
    </Routes>
  </BrowserRouter>
  
  </div>
  );
}

export default App;
