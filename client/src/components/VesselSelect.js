import React, {useState} from "react";
import { Navigate } from "react-router-dom";
import "../css/vesselSelect.css";
import ProjectSection from "../pages/ProjectSection";

export default function VesselSelect({companion, vessel, setVessel, setCurrentStage, companionText}) {

  const [vesselClass, setVesselClass] = useState("")

  let delay = 5
  


  const rocketBtn = () => {
    setVessel("rocket-ship")
    setVesselClass("rocket-ship")
    setInterval(function () {
      delay--;
      if (delay == 0) {
        setCurrentStage(1)
      }
    }, 1000)
  }
  const shipBtn = () => {
    setVessel("ship")
    setVesselClass("ship")
    setInterval(function () {
      delay--;
      if (delay == 0) {
        setCurrentStage(1)
      }
    }, 1000)
  }
  const airplaneBtn = () => {
    setVessel("airplane")
    setVesselClass("airplane")
    setInterval(function () {
      delay--;
      if (delay == 0) {
        setCurrentStage(1)
      }
    }, 1000)
  }


  const renderPage = () => {
    switch (vesselClass) {
      case "rocket-ship":
        return (
          <div className="companion-home-background">
            <div className="d-flex justify-content-center vessel-robot-position">
              <img
                className="rounded-circle img-fluid bg-light"
                src={`https://robohash.org/${companionText}`}
                height="150"
                width="150"
                alt="avatar"
              />
            </div>
            <div className="d-flex justify-content-center">
            <div className = "animated-rocket shake">
              <img
                    className="rounded-circle img-fluid"
                    src="/images/big_rocketship.png"
                    height="500"
                    width="500"
                    alt="rocket-ship"
                    // value = "rocket-ship"
                  />
            </div>
            </div>
          </div>
        )
        case "ship": 
        return (
          <div className="companion-home-background">
            <div className="d-flex justify-content-center vessel-robot-position">
              <img
                className="rounded-circle img-fluid bg-light"
                src={`https://robohash.org/${companionText}`}
                height="150"
                width="150"
                alt="avatar"
              />
            </div>
            <div className="d-flex justify-content-center">
            <div className = "animated-rocket shake">
              <img
                    className="rounded-circle img-fluid"
                    src="/images/big_ship.png"
                    height="500"
                    width="500"
                    alt="rocket-ship"
                    // value = "rocket-ship"
                  />
            </div>
            </div>
          </div>
        )
        case "airplane": 
        return (
          <div className="companion-home-background">
            <div className="d-flex justify-content-center vessel-robot-position">
              <img
                className="rounded-circle img-fluid bg-light"
                src={`https://robohash.org/${companionText}`}
                height="150"
                width="150"
                alt="avatar"
              />
            </div>
            <div className="d-flex justify-content-center">
            <div className = "animated-rocket shake">
              <img
                    className="rounded-circle img-fluid"
                    src="/images/big_airplane.png"
                    height="500"
                    width="500"
                    alt="rocket-ship"
                    // value = "rocket-ship"
                  />
            </div>
            </div>
          </div>
        )
         default:
        return (
          <>
      <div className="companion-home-background">
        <div className="jumbo">
          <div className="move-banner"></div>
          <h1 className="companion-home-banner mb-5 display-1">
            Designing a Website 
          </h1>
          <h1 className="companion-home-odyssey text-center">Odyssey</h1>
        </div>
        <section className="companion-select-container">
          <h3 className="companion-home-consult text-center">
            What's Your Timeline?
          </h3>
          <h5 className="companion-home-lower-text mb-5 text-center">
            Choose Your <span className="special-text">Vessel</span>
          </h5>
          
            <div className="d-flex justify-content-center vessel-robot-position">
              <img
                className="rounded-circle img-fluid bg-light"
                src={`https://robohash.org/${companionText}`}
                height="150"
                width="150"
                alt="avatar"
              />
            </div>

            <div className="d-flex justify-content-center mt-5"> 
                  {/* {renderButton()} */}
              
                </div>
            <ul className="vessel-grid">
              
              <li>
                <figure>
                  <button className = "img-button" onClick = {rocketBtn}>
                  <img
                    className="rounded-circle img-fluid"
                    src="/images/big_rocketship.png"
                    height="300"
                    width="300"
                    alt="rocket-ship"
                    // value = "rocket-ship"
                  />
 
                  <figcaption>
                    <p>Let's Go FAST</p>
                  </figcaption>
             </button>
                </figure>
              </li>
              <li>
                <figure>
                  <button className = "img-button" onClick = {shipBtn}>
                  <img
                    className="rounded-circle img-fluid "
                    src="/images/big_ship.png"
                    height="300"
                    width="300"
                    alt="traditional-ship"
                    // value= "ship" 
                  />
                  

                  <figcaption>
                    <p>I Want To Enjoy The Views</p>
                  </figcaption>
                  </button>
                </figure>
              </li>
              <li>
                <figure>
                  <button className = "img-button" onClick = {airplaneBtn}>
                  <img
                    className="rounded-circle img-fluid "
                    src="/images/big_airplane.png"
                    height="300"
                    width="300"
                    alt="airplane"
                    // value = "airplane"
                  />

                  <figcaption>
                    <p>Let's Get There Fast But Comfortably</p>
                  </figcaption>
                  </button>
                </figure>
              </li>
            </ul>
        </section>
        <ProjectSection />
      </div>
    </>
        )
    }
  }

  



  // const renderButton = () => {
  //   switch(vessel) {
  //     case "rocket-ship": 
  //     return (
  //       <button onClick = {rocketBtn} className="btn-companion mt-4 btn-lg">
  //                 Blast Off
  //               </button>
  //     )
  //     case "ship": 
  //     return (
  //       <button onClick = {shipBtn} className="btn-companion mt-4 btn-lg">
  //                 Bon Voyage
  //               </button>
  //     )
  //     case "airplane": 
  //     return (
  //       <button onClick = {airplaneBtn} className="btn-companion mt-4 btn-lg">
  //                 Take Off
  //               </button>
  //     )
  //     default:
  //       return []
  //   }
  // }

  return (
    renderPage()
  )

}
