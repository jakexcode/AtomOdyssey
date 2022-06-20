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
            <h1 className="consult-home-banner mb-5 ms-5 display-1">
              Schedule <span className="special-text">Consultation</span>
            </h1>
          </div>
          <div className="d-flex justify-content-center robot-position">
            <img
              className="rounded-circle img-fluid bg-light"
              src={`https://robohash.org/${companionText}`}
              height="150"
              width="150"
              alt="avatar"
            />
          </div>
        </div>
        <section className="consult-select-container">
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </section>
        <ProjectSection />
      </div>
    </>
  );
}
