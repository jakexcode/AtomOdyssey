import React, {useState} from "react";
import axios from "axios";
import { CONTACT_FORM } from "../utils/mutations";
import "../css/contactCard.css"
import { useMutation } from "@apollo/client";


export default function ContactCard() {

  const [contactForm] = useMutation(CONTACT_FORM)

  const [formData, setFormData] = useState({});
  const [status, setStatus] = useState("Submit")


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
    setStatus("Sending...")
    sendEmail();
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };


  const sendEmail = async() => {
    try {
   const response = await contactForm({variables: {...formData}})
      console.log(response)
      setStatus("Submit")
   }catch (err) {
    console.log(err);
    setStatus("Submit")
   }
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
              {status}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
