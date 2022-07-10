import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/consultation.css";
import ProjectSection from "../pages/ProjectSection";
import ContactCard from "./ContactCard";

export default function Consultation({ companionText }) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  
  return (
    <>
      <div className="consult-home-background">
        <div className="jumbo">
          <div className="move-banner"></div>
          <div className="row">
            <h1 className="consult-home-banner text-center mb-5 display-1">
              Schedule <span className="special-text">Consultation</span>
            </h1>
          </div>
          <div className="d-flex justify-content-center consult-robot-position">
            <img
              className="rounded-circle img-fluid bg-light"
              src={`https://robohash.org/${companionText}`}
              height="150"
              width="150"
              alt="avatar"
            />
          </div>
        </div>
        <div className="container">
            <ContactCard />
        </div> 
      </div>
    </>
  );
}
