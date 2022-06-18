import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Odyssey from "./pages/Odyssey";
// import Home from "./components/Home";
import Navbar from "./components/Navbar";
import CompanionSelect from "./components/CompanionSelect";
import VesselSelect from "./components/VesselSelect"
import ProjectSelect from "./components/ProjectSelect"
import Consultation from "./components/Consultation"
import ProjectSection from "./pages/ProjectSection";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

function App() {

  const [currentStage, setCurrentStage] = useState(0)
  const [companion, setCompanion] = useState("")
  const [companionText, setCompanionText] = useState ("")

  const [home, setHome] = useState(window.location.pathname === "/")
  return (
    <>
    <Router>
      <Navbar setCurrentStage = {setCurrentStage} home = {home}/>
      <Routes>
        {/* <Route path = "/" 
        element = {<Home />} /> */}
       <Route path = "/" 
       element = {<CompanionSelect companionText = {companionText} setCompanionText = {setCompanionText} setCurrentStage = {setCurrentStage} companion = {companion} setCompanion = {setCompanion} /> }/>
        <Route path = "/odyssey"
        element = {<Odyssey companion = {companion} setCompanion = {setCompanion} companionText = {companionText} currentStage = {currentStage} setCurrentStage = {setCurrentStage}/>} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
