import React from "react";
import about from "../img/about.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6">
            <div className="about-img">
              <img src={about} alt="not available" />
            </div>
          </div>
          <div className="col-lg-7 col-md-6">
            <div className="about-text">
              <h2>
                <span>7</span> Jahre Erfahrung
              </h2>
              <p>
                Seit unserer Gründung haben wir uns darauf spezialisiert,
                erstklassige Hausmeister- und Reinigungsdienste anzubieten. Mit
                einem Fokus auf Qualität sind wir stolz darauf, unsere Kunden
                zufriedenzustellen und ihre Erwartungen zu übertreffen.
              </p>
              <p>
                Unsere Dienstleistungen umfassen eine breite Palette von
                Aufgaben, von der regelmäßigen Reinigung bis hin zur Pflege und
                Instandhaltung von Häusern. Wir arbeiten hart daran, eine
                saubere und gepflegte Umgebung für unsere Kunden zu schaffen,
                damit sie sich in ihrem Zuhause, Büro oder Garten
                wohl fühlen können.
              </p>

              <a className="btn" href="/home">
                Erfahren Sie mehr
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
