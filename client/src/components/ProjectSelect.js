import React, {useState} from "react";
import "../css/projectSelect.css"
import ProjectSection from "../pages/ProjectSection";

export default function ProjectSelect({
  companionText,
  currentStage,
  setCurrentStage,
  voyage,
  setVoyage,
  projectType,
  setProjectType
}) {

  const [selectedProject, setSelectedProject] = useState(false);

  const backendBtnNext = () => {
    setProjectType("backend")
    setCurrentStage(2)
  }
  const frontendBtnNext = () => {
    setProjectType("frontend")
    setCurrentStage(2)
  }
  const fullstackBtnNext = () => {
    setProjectType("fullstack")
    setCurrentStage(2)
  }


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
          <button onClick = {backendBtnNext} className="btn-companion mt-4 btn-lg">
                  Let's Talk About BackEnd
                </button>
        );
      // case "backend" && "ship":
      //   return (
      //     <button onClick = {backendBtn} className="btn-companion mt-4 btn-lg">
      //             Let's Talk About These Winds and Currents
      //           </button>
      //   );
      // case "backend" && "airplane":
      //   return (
      //     <button onClick = {backendBtn} className="btn-companion mt-4 btn-lg">
      //             Let's Talk About These Jet Engines
      //           </button>
      //   );
      case "frontend":
        return (
          <button onClick = {frontendBtnNext} className="btn-companion mt-4 btn-lg">
          Let's Talk About FrontEnd
        </button>
        );
      // case ("frontend" && "ship"):
      //   return (
      //     <button onClick = {frontendBtn} className="btn-companion mt-4 btn-lg">
      //     Let's Line Her Up With The Stars
      //   </button>
      //   );
      // case ("frontend" && "airplane"):
      //   return (
      //     <button onClick = {frontendBtn} className="btn-companion mt-4 btn-lg">
      //     Let's Talk About The Pilot's Quarters
      //   </button>
      //   );
      case "fullstack":
        return (
          <button onClick = {fullstackBtnNext} className="btn-companion mt-4 btn-lg">
          Let's Talk About Both BackEnd and FrontEnd
        </button>
        );
      // case ("fullstack" && "ship"):
      //   return (
      //     <button onClick = {fullstackBtn} className="btn-companion mt-4 btn-lg">
      //     Let's Talk About The Odyssey 
      //   </button>
      //   );
      // case ("fullstack" && "airplane"):
      //   return (
      //     <button onClick = {fullstackBtn} className="btn-companion mt-4 btn-lg">
      //     Let's Talk About The Flight Plan
      //   </button>
      //   );
      default:
        return [];
    }
  };

  const renderVoyage = () => {
    switch (voyage) {
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
            <div className="voyage-icon">
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
