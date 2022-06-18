import React from 'react'
import "../css/consultation.css"
import ProjectSection from "../pages/ProjectSection";

export default function Consultation({companionText}) {
  return (
    <>
      <div className = "consult-home-background">
        
        <div className = "jumbo">
          <div className = "move-banner"></div>
          <div className="row">
          <h1 className="consult-home-banner mb-5 ms-5 display-1">
            Schedule <span className="special-text">Consultation</span></h1>
           
        </div>
                    <div className="d-flex justify-content-center robot-position">
                      <img
                      className="rounded-circle img-fluid bg-light"
                      src= {`https://robohash.org/${companionText}`}
                      height="150"
                      width="150"
                      alt="avatar"
                    />
                  </div>
                  </div>
                  <section className = "consult-select-container">
                  

        
        </section>
        <ProjectSection />
      </div>
    </>
  )
}
