import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom"
import "../css/Navbar.css"

export default function Navbar({home, setCurrentStage}) {

  
  return (
    <>
      <nav
        className={
          home
            ? "navbar navbar-expand-lg sticky-top main-nav"
            : "navbar navbar-expand-lg sticky-top main-nav"
        }
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
            
              className="main-logo inline-block"
              src="/images/AtomOdyssey_LOGO.png"
              alt="main-logo"
              height="100"
            />{" "}
            <span className="title">AtomOdyssey</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"><span className="material-symbols-outlined">
menu
</span></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <div className="navbar-nav">
              <div className="nav-item nav-item-text mt-3">
                <Link
                  to="/"
                  id="home-nav-link"
                  className="nav-link text-center"
                >
                  <strong>Projects</strong>
                </Link>
              </div>
              <div className="nav-item nav-item-text mt-3">
                <Link
                  to="/about"
                  id="home-nav-link"
                  className="nav-link text-center"
                >
                  <strong>About</strong>
                </Link>
              </div>
              <div className="nav-item nav-item-text mt-3">
                <Link
                  to="/contact"
                  id="home-nav-link"
                  className="nav-link text-center"
                >
                  <strong>Contact</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
