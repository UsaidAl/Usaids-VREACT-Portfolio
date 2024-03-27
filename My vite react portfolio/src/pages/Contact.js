import React, { useState } from "react";
import "../CSS/Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setIsNameValid(!!value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    // Basic email validation
    setIsEmailValid(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isNameValid && isEmailValid) {
      // Handle form submission
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", message);
    } else {
      // Display validation errors or messages to the user
    }
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
          {!isNameValid && <span className="error">Name is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          {!isEmailValid && <span className="error">Invalid email</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;