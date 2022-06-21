import React, {useState} from "react";
import "../css/projectSelect.css"
import ProjectSection from "../pages/ProjectSection";
import BackendFunction from "./BackendFunction";
import FrontendFunction from "./FrontendFunction";
import FullstackFunction from "./FullstackFunction";

export default function ProjectSelect({
  companionText,
  companion,
  currentStage,
  setCurrentStage,
  vessel,
  setVessel,
  projectType,
  setProjectType
}) {

  const [selectedProject, setSelectedProject] = useState(false);

  


  const backendBtn = () => {
    setProjectType("backend")
    setSelectedProject(true)
  
  }
  const frontendBtn = () => {
    setProjectType("frontend")
    setSelectedProject(true)

  }
  const fullstackBtn = () => {
    setProjectType("fullstack")
    setSelectedProject(true)

  }

  


  const renderProjectTypeButton = () => {
    switch (projectType) {
      case "backend":
       return (
        <BackendFunction  setProjectType = {setProjectType} vessel = {vessel} currentStage = {currentStage} setCurrentStage = {setCurrentStage} />
       ) 
      case "frontend":
        return (
        <FrontendFunction  setProjectType = {setProjectType} vessel = {vessel}  currentStage = {currentStage} setCurrentStage = {setCurrentStage} />
        )
      case "fullstack":
        return (
          <FullstackFunction  setProjectType = {setProjectType} vessel = {vessel}  currentStage = {currentStage} setCurrentStage = {setCurrentStage} />
        )
      default:
        return [];
    }
  };

  const renderVoyage = () => {
    switch (vessel) {
      case "rocket-ship":
        return (
          <img
            className="rounded-circle "
            src="/images/big_rocketship.png"
            height="150"
            width="150"
            alt="rocket-ship"
          />
        );
      case "ship":
        return (
          <img
            className="rounded-circle"
            src="/images/big_ship.png"
            height="150"
            width="150"
            alt="traditional-ship"
          />
        );
      case "airplane":
        return (
          <img
            className="rounded-circle"
            src="/images/big_airplane.png"
            height="150"
            width="150"
            alt="airplane"
          />
        );
      default:
        return [];
    }
  };

  return (
    <>
      <div className="project-home-background">
        <div className="jumbo">
          <div className="move-banner"></div>
          <h1 className="project-home-banner mb-5 ms-5 display-1 text-center">
            "Pleasure in the job puts<br/> 
            <span className="special-text">perfection</span> 
            in the work."
          </h1>
          <h1 className="project-home-tagline text-center">We Love What We Do and Take Pride In Our Designs</h1>
        </div>
        <section className="project-select-container">
          <h3 className="project-home-consult text-center mb-5">
            What is Your Project <span className = "special-text">Odyssey</span>
          </h3>

          <div className="d-flex flex-row">
          
            <div className="d-flex justify-content-center robot-position">
              <img
                className="rounded-circle img-fluid bg-light"
                src={`https://robohash.org/${companionText}`}
                height="150"
                width="150"
                alt="avatar"
              />
            </div>
            <div className="vessel-icon">
            {renderVoyage()}
            </div>
            </div>

            <ul className="project-grid mt-5">
              
              <li>
                <figure>
                  <button className = "img-button"onClick = {backendBtn}>
                  <img
                    className="rounded-circle img-fluid"
                    src="/images/backend_secure.png"
                    height="300"
                    width="300"
                    alt="rocket-ship"
                    // value = "rocket-ship"
                  />
 
                  <figcaption>
                    <p>BackEnd</p>
                  </figcaption>
             </button>
                </figure>
              </li>
              <li>
                <figure>
                  <button className = "img-button" onClick = {fullstackBtn}>
                  <img
                    className="rounded-circle img-fluid"
                    src="/images/fullstack_design.png"
                    height="300"
                    width="300"
                    alt="traditional-ship"
                    // value= "ship" 
                  />
                  

                  <figcaption>
                    <p>FullStack</p>
                  </figcaption>
                  </button>
                </figure>
              </li>
              <li>
                <figure>
                  <button className = "img-button" onClick = {frontendBtn}>
                  <img
                    className="rounded-circle img-fluid"
                    src="/images/frontend_html.png"
                    height="300"
                    width="300"
                    alt="airplane"
                    // value = "airplane"
                  />

                  <figcaption>
                    <p>FrontEnd</p>
                  </figcaption>
                  </button>
                </figure>
              </li>
            </ul>
            <div className="d-flex justify-content-center mt-5"> 
                  {renderProjectTypeButton()}
              
                </div>
         
        </section>
      <ProjectSection /> 
      </div>
    </>
  );
}
