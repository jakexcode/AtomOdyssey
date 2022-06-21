import React, {useState} from "react";
import axios from "axios";
import "../css/consultation.css";
import ProjectSection from "../pages/ProjectSection";

export default function Consultation({ companionText }) {


  const [name, setName ] = useState("");
  const [email, setEmail ] = useState("");
  const [message, setMessage ] = useState("");

  const onNameChange = (e) => {
    setName(e.target.value);
  }
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const onMessageChange = (e) => {
    setMessage(e.target.value);
  }

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  }

  const handleSubmit = ( e ) => {
    e.preventDefault();
    
    const response = axios.post("http://localhost:3002/send");
    if (response.data.status === "success" ) {
      alert("Message Sent");
      resetForm()
    }
    if (response.data.status === "fail") {
      alert("Message Failed to Send")
    }
    resetForm();
  }


  return (
    <>
      <div className="consult-home-background">
        <div className="jumbo">
          <div className="move-banner"></div>
          <div className="row">
            <h1 className="consult-home-banner mb-5 display-1">
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
        <div className="consult-card col-6">
        <h4 className="card-header text-center form-header-text">
    Contact Form
  </h4>
        <div className="card-body">
        
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            method="POST"
          >
            <div className="form-group mb-3 ">
              <label className = "mb-2 form-text" htmlFor="name">Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group mb-3">
              <label className = "mb-2 form-text " htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group mb-3">
              <label className = "mb-2 form-text" htmlFor="message">Message</label>
              <textarea className="form-control" rows="5"></textarea>
            </div>
            <div className="col-sm-2 ms-auto d-grid my-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button></div>
          </form>
        
        </div>
        </div>
        </div>
        <ProjectSection />
      </div>
    </>
  );
}
