import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import CompanionSelect from "./components/CompanionSelect";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

function App() {

  const [home, setHome] = useState(window.location.pathname === "/")
  return (
    <>
    <Router>
      <Navbar home = {home}/>
      <Routes>
        <Route path = "/"
        element = {<CompanionSelect />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
