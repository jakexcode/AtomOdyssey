import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import CompanionSelect from "./components/CompanionSelect";
import VesselSelect from "./components/VesselSelect"
import ProjectSelect from "./components/ProjectSelect"
import Consultation from "./components/Consultation"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

function App() {

  const [currentStage, setCurrentStage] = useState(0)

  const [home, setHome] = useState(window.location.pathname === "/")
  return (
    <>
    <Router>
      <Navbar home = {home}/>
      <Routes>
        <Route path = "/"
        element = {<CompanionSelect currentStage = {currentStage} setCurrentStage = {setCurrentStage}/>} />
        <Route path = "/"
        element = {<Home currentStage = {currentStage} setCurrentStage = {setCurrentStage}/>} />
        <Route path = "/"
        element = {<VesselSelect currentStage = {currentStage} setCurrentStage = {setCurrentStage} />} />
        <Route path = "/"
        element = {<ProjectSelect currentStage = {currentStage} setCurrentStage = {setCurrentStage} />} />
        <Route path = "/"
        element = {<Consultation currentStage = {currentStage} setCurrentStage = {setCurrentStage} />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
