import React, {useState} from "react";
import { Navigate } from "react-router-dom";
import "../css/VesselSelect.css";

export default function VesselSelect({ companionText, voyage, setVoyage, setCurrentStage }) {

  


  const rocketBtn = () => {
    setVoyage("rocket-ship")
    setCurrentStage(1)
  }
  const shipBtn = () => {
    setVoyage("ship")
    setCurrentStage(1)
  }
  const airplaneBtn = () => {
    setVoyage("airplane")
    setCurrentStage(1)
  }
  



  const renderButton = () => {
    switch(voyage) {
      case "rocket-ship": 
      return (
        <button onClick = {rocketBtn} className="btn-companion mt-4 btn-lg">
                  Blast Off
                </button>
      )
      case "ship": 
      return (
        <button onClick = {shipBtn} className="btn-companion mt-4 btn-lg">
                  Bon Voyage
                </button>
      )
      case "airplane": 
      return (
        <button onClick = {airplaneBtn} className="btn-companion mt-4 btn-lg">
                  Take Off
                </button>
      )
      default:
        return []
    }
  }

  return (
    <>
      <div className="companion-home-background">
        <div className="jumbo">
          <div className="move-banner"></div>
          <h1 className="companion-home-banner mb-5 ms-5 display-1">
            Designing a Website is an
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
          
            <div className="d-flex justify-content-center robot-position">
              <img
                className="rounded-circle img-fluid bg-light"
                src={`https://robohash.org/${companionText}`}
                height="150"
                width="150"
                alt="avatar"
              />
            </div>

            <ul className="photo-grid">
              
              <li>
                <figure>
                  <button className = "img-button" onClick = {() => setVoyage("rocket-ship")}>
                  <img
                    className="rounded-circle img-fluid bg-light"
                    src="/images/rocketship.png"
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
                  <button className = "img-button" onClick = {() => setVoyage("ship")}>
                  <img
                    className="rounded-circle img-fluid bg-light"
                    src="/images/ship.png"
                    height="300"
                    width="300"
                    alt="traditional-ship"
                    value= "ship"
                    onClick={() => setVoyage("ship")}
                  />
                  

                  <figcaption>
                    <p>I Want To Enjoy The Views</p>
                  </figcaption>
                  </button>
                </figure>
              </li>
              <li>
                <figure>
                  <button className = "img-button" onClick = {() => setVoyage("airplane")}>
                  <img
                    className="rounded-circle img-fluid bg-light"
                    src="/images/airplane.png"
                    height="300"
                    width="300"
                    alt="airplane"
                    value = "airplane"
                    // onClick={setVoyage("airplane")}
                  />

                  <figcaption>
                    <p>Let's Get There Fast But Comfortably</p>
                  </figcaption>
                  </button>
                </figure>
              </li>
            </ul>
            
              
                <div className="d-flex justify-content-center"> 
                  {renderButton()}
              
                </div>
              
           
          
        </section>
      </div>
    </>
  );
}
