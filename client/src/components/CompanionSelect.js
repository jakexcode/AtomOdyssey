import React, {useEffect, useState} from 'react'
import axios from "axios"
import "../css/companionSelect.css"
import { useNavigate } from 'react-router-dom';
import ProjectSection from '../pages/ProjectSection';


export default function CompanionSelect({companion, setCompanion, currentStage, setCurrentStage, companionText, setCompanionText}) {

  const navigate = useNavigate();
  

  useEffect(() => {
    setCurrentStage(0)
  }, [])
  
  

  const handleChange = (e) => {
    setCompanionText(e.target.value)
  }

  const getStarted = () => {
    setCompanion(`https://robohash.org/${companionText}`)
    navigate("/odyssey")
    console.log(companion)
  }


  return (
    <>
      <div className = "companion-home-background">
        <div className = "jumbo">
          <div className = "move-banner"></div>
          <h1 className="companion-home-banner text-center mb-5 display-1">
            Designing a Website</h1>
           <h1 className = "companion-home-odyssey text-center">Odyssey</h1> 
        </div>
        <section className = "companion-select-container">
        <h3 className="companion-home-consult text-center">Ready To Start Yours?</h3>
          <h5 className="companion-home-lower-text mb-5 text-center">Find Your <span className = "special-text">Companion</span></h5>
        <div className="d-flex justify-content-center">
        <input
        className="col-sm-4 text-center"
            name="companion-name"
            placeholder="Write Your Name or Your Company Name Here"
            type="text"
            onChange={handleChange} 
            value = {companionText}
            />
            <br/>
            </div>
            
        <div className="row">
          {companionText ? (
          <div className="card-body">
                    <div className="d-flex justify-content-center">
                      <img
                      className="rounded-circle img-fluid bg-light"
                      src= {`https://robohash.org/${companionText}`}
                      height="300"
                      width="300"
                      alt="avatar"
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                  <button className = "btn-companion mt-5 btn-lg" onClick={getStarted}>Start</button>
           </div>
        </div>): []}

        </div>
        </section>
        <ProjectSection />
      </div>
      
    </>
  )
}