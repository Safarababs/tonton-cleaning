import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  function handleClick(event) {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_2o5rq45",
        "template_q2xb5y5",
        event.target,
        "V8T-BnQcnCg_dNTxt"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    event.target.reset();
  }

  return (
    <section className="contact" id="contact">
      <div className="section-header">
        <p>Kontaktiere uns</p>
        <h2>Senden Sie uns eine Nachricht</h2>{" "}
      </div>

      <form onSubmit={handleClick}>
        <div className="inputBox">
          <input type="text" name="fname" placeholder="Vorname" required />
          <input type="text" name="lname" placeholder="Nachname" required />
        </div>

        <div className="inputBox">
          <input type="email" name="email" placeholder="your email" required />
          <input type="text" name="tel" placeholder="Telefonnummer" required />
        </div>

        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Nachricht"
        ></textarea>

        <button type="submit" value="message" className="btn">
          Absenden
        </button>
      </form>
    </section>
  );
};

export default Contact;
