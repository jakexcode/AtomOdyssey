import React, {useState} from 'react'
import axios from "axios"
import "../css/CompanionSelect.css"


export default function CompanionSelect(setCurrentStage) {
  
  const [companion, setCompanion] = useState("")
  const [companionText, setCompanionText]= useState ("");

  const handleChange = (e) => {
    setCompanionText(e.target.value)
  }

  const letsBegin = () => {
    setCompanion(companionText)
    setCurrentStage(1)
    console.log(companion)
  }


  return (
    <>
      <div className = "companion-home-background">
        <div className = "jumbo">
          <div className = "move-banner">
          </div>
          <h1 className="companion-home-banner mb-5 ms-5 display-1">
            Designing a Website is an<br/></h1>
           <h1 className = "companion-home-odyssey text-center">Odyssey</h1> 
        </div>
        <section className = "companion-select-container">
        <h3 className="companion-home-consult text-center">Ready To Start Yours?</h3>
          <h5 className="companion-home-lower-text mb-5 text-center">Type Something Below To Find Your <span className = "special-text">Companion</span></h5>
        <div className="d-flex justify-content-center">
        <input
        className="col-sm-4 text-center"
            name="companion-name"
            placeholder="Write Something Awesome"
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
                  <button className = "btn-companion mt-4 btn-lg" onClick={letsBegin}>Begin</button>
           </div>
        </div>): []}

        </div>
        </section>
      </div>
    </>
  )
}