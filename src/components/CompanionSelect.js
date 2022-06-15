import React, {useState} from 'react'
import "../css/companionSelect.css"


export default function CompanionSelect() {

  const [currentForm, setCurrentForm] = useState(0)
  return (
    <>
      <div className = "companion-home-background">
        <div className = "jumbo">
          <div className = "move-banner">

          </div>
          <h1 className="companion-home-banner mb-5 ms-5 display-1 fw-bold">
            Designing a Website is an<br/></h1>
           <h1 className = "companion-home-odyssey">Odyssey</h1> 
        </div>
      </div>
    </>
  )
}