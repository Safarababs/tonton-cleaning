import React from "react";
import logo from "../images/logo1.png";
import emailjs from "emailjs-com";

const Header = () => {
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
    <div className="header home">
      <div className="container-fluid">
        <div className="header-top row align-items-center">
          <div className="col-lg-3 topbar">
            <div className="brand">
              <a href="/home">
                <img src={logo} alt="Logo" />
              </a>
            </div>
          </div>
          <div className="col-lg-9 topbar">
            <div className="topbar">
              <div className="topbar-col">
                <a href="tel:+012 345 67890">
                  <i className="fa fa-phone-alt"></i>+49 176 57919746
                </a>
              </div>
              <div className="topbar-col">
                <a href="mailto:floriannauendorff.service@gmail.com">
                  <i className="fa fa-envelope"></i>
                  floriannauendorff.service@gmail.com
                </a>
              </div>
              <div className="topbar-col">
                <div className="topbar-social">
                  <a href="https://www.facebook.com/profile.php?id=61556755342072">
                    <i className="fab fa-facebook-f"></i>
                  </a>

                  <a href="https://www.instagram.com/firmanaundorff?igsh=MXc3NTU3c3JxeXI5bw==">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="navbar navbar-expand-lg bg-light navbar-light">
              <a href="/home" className="navbar-brand">
                MENU
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav ml-auto">
                  <a href="#home" className="nav-item nav-link active">
                    Heim
                  </a>
                  <a href="#about" className="nav-item nav-link">
                    Über uns
                  </a>
                  <a href="#service" className="nav-item nav-link">
                    Dienstleistungen
                  </a>

                  <a href="#contact" className="nav-item nav-link">
                    Kontaktiere uns
                  </a>

                  <a href="#contact" className="btn">
                    Ein Angebot erhalten
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero row align-items-center">
          <div className="col-md-7">
            {/* <h2>Der beste und</h2> */}
            <h2>Zahlung ausstehend</h2>
            <h2>
              <span>
                Bezahlen Sie Ihre offene Rechnung und / oder melden
                Sie sich bei uns
              </span>
            </h2>
            {/* <h2>
              <span>vertrauenswürdigste Service</span> in Ihrer Fläche
            </h2> */}

            {/* <p>Vertrauen und Qualitätssteigerung – unser Versprechen an Sie.</p>
            <a className="btn" href="#service">
              {" "}
              Jetzt erkunden
            </a> */}
          </div>
          <div className="col-md-5">
            <div className="form">
              <h3>Ein Angebot erhalten</h3>
              <form onSubmit={handleClick}>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                <input
                  className="form-control"
                  type="text"
                  name="phone"
                  placeholder="Handynummer"
                />
                <div className="control-group">
                  <select defaultValue="" name="service">
                    <option value="" disabled hidden>
                      Eine Dienstleistung wählen
                    </option>
                    <option value="1">Grundpflege</option>
                    <option value="2">Treppenhausreinigung</option>
                    <option value="3">Glasreinigung</option>
                    <option value="4">Malerarbeiten</option>
                    <option value="5">Garten und Landschaftsbau</option>
                    <option value="6">Baudienstleistung</option>
                    <option value="7">Trockenbau</option>
                    <option value="8">Auf und Abbau von Möbeln</option>
                    <option value="9">Verlegen von Böden</option>
                  </select>
                </div>
                <textarea
                  className="form-control"
                  placeholder="Nachricht"
                  name="message"
                ></textarea>
                <button className="btn btn-block">Ein Angebot erhalten</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
