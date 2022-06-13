import React from "react";
import {Link} from "react-router-dom"

export default function Navbar({home}) {
  return (
    <>
      <nav
        className={
          home
            ? "navbar navbar-light navbar-expand-lg bg-light sticky-top"
            : "navbar navbar-light navbar-expand-lg sticky-top bg-light"
        }
      >
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">
            <span className="text-uppercase fw-light title">Buy</span>
            <img
              className="main-logo inline-block"
              src="/images/logo.png"
              alt="main-logo"
              height="60"
            />{" "}
            <span className="text-uppercase fw-light title">Postage</span>
          </Link> */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <div className="navbar-nav justify-content-end mb-2 mb-lg-0">
              <div className="nav-item nav-item-text">
                <Link
                  to="/"
                  id="home-nav-link"
                  className="nav-link text-center"
                >
                  <strong>Home</strong>
                </Link>
              </div>
              <div className="nav-item nav-item-text">
                <Link
                  to="/about"
                  id="home-nav-link"
                  className="nav-link text-center"
                >
                  <strong>About</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
