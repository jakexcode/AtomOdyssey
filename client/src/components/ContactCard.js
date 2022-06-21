import React, {useState} from "react";
import axios from "axios";
import "../css/contactCard.css"


export default function ContactCard() {

  const [formData, setFormData] = useState({});


  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData("")
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail();
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  const sendEmail = () => {
    axios
      .post(
        "/email",
       formData
      )
      
  };
  return (
    <div className="contact-card col-6">
      <h4 className="card-header text-center form-header-text">Contact Form</h4>
      <div className="card-body">
        <form id="contact-form" onSubmit={handleSubmit} method="POST">
          <div className="form-group mb-3 ">
            <label className="mb-2 form-text" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={updateInput}
              className="form-control"
              value={formData.name || ""}
            />
          </div>
          <div className="form-group mb-3">
            <label className="mb-2 form-text " htmlFor="exampleInputEmail1">
              Email address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={updateInput}
              className="form-control"
              value={formData.email || ""}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group mb-3">
            <label className="mb-2 form-text" htmlFor="message">
              Message
            </label>
            <textarea
              type="text"
              name="message"
              placeholder="Message"
              onChange={updateInput}
              value={formData.message || ""}
              className="form-control"
              rows="5"
            ></textarea>
          </div>
          <div className="col-sm-2 ms-auto d-grid my-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
