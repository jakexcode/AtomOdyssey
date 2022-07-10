import React from 'react'
import ContactCard from './ContactCard'
import "../css/contact.css";

export default function ContactMe() {
  return (
    <div className="contact-home-background">
        <div className="jumbo">
          {/* <div className="move-banner"></div> */}
          <div className="row">
            <h1 className="contact-home-banner text-center mt-5 mb-5 display-1">
              Contact <span className="special-text">Us</span>
            </h1>
            <div className="d-flex justify-content-center">
            < ContactCard />
            </div>
          </div>
          </div>
          </div>
          
  )
}
