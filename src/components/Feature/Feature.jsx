import React from "react";
import feature1 from "../img/feature-1.jpg";
import feature2 from "../img/feature-2.jpg";
import feature3 from "../img/feature-3.jpg";

const Feature = () => {
  return (
    <div className="feature">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="section-header left">
              <p>Warum uns wählen?</p>
              <h2>Unsere umfassenden Dienstleistungen</h2>
            </div>
            <p>
              Wir bieten eine breite Palette von Dienstleistungen an, um alle
              Ihre Bedürfnisse zu erfüllen, einschließlich Grundpflege,
              Treppenhaus- und Glasreinigung, Malerarbeiten, Garten- und
              Landschaftsbau, Bauleistungen, Trockenbau, Möbelmontage und
              -demontage sowie Bodenverlegung. Mit über 10 Jahren Erfahrung
              haben wir das Fachwissen, um jedes Mal außergewöhnliche Ergebnisse
              zu liefern.
            </p>
            <a className="btn" href="">
              Erfahren Sie mehr
            </a>
          </div>
          <div className="col-md-7">
            <div className="row align-items-center feature-item">
              <div className="col-5">
                <img src={feature2} alt="Feature" />
              </div>
              <div className="col-7">
                <h3>Erfahrene Fachleute</h3>
                <p>
                  Unser erfahrenes Team bringt jahrelange Expertise in jedes
                  Projekt ein und garantiert erstklassige Ergebnisse, die auf
                  Ihre Bedürfnisse zugeschnitten sind.
                </p>
              </div>
            </div>
            <div className="row align-items-center feature-item">
              <div className="col-5">
                <img src={feature1} alt="Feature" />
              </div>
              <div className="col-7">
                <h3>Angemessene Preise</h3>
                <p>
                  Wettbewerbsfähige Preise, ohne die Qualität zu
                  beeinträchtigen, machen unsere Dienstleistungen für alle
                  zugänglich.
                </p>
              </div>
            </div>
            <div className="row align-items-center feature-item">
              <div className="col-5">
                <img src={feature3} alt="Feature" />
              </div>
              <div className="col-7">
                <h3>Schnelle und zuverlässige Dienstleistungen</h3>
                <p>
                  Schnelle, effiziente und qualitativ hochwertige
                  Dienstleistungen, maßgeschneidert auf Ihre Bedürfnisse,
                  garantieren Zufriedenheit und ein beruhigtes Gemüt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
