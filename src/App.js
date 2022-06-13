import React, { useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {

  const [home, setHome] = useState(window.location.pathname === "/")
  return (
    <>
    <Router>
      <Navbar home = {home}/>
      <Routes>
        <Route path = "/"
        element = {<Home />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
