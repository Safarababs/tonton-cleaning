import React from "react";
import service1 from "../images/Basic care.jpeg";
import service2 from "../images/Starecase.jpg";
import service3 from "../images/Glass Cleaning.jpg";
import service4 from "../images/painting work.jpg";
import service5 from "../images/garden and landscaping.jpg";
import service6 from "../images/Construction Services (Baudienstleistung).jpg";
import service7 from "../images/Assembly and Disassembly of Furniture (Auf und Abbau von Möbeln).jpg";
import service8 from "../images/Flooring Installation (Verlegen von Böden).jpg";
import service9 from "../images/Drywall Construction (Trockenbau).jpg";

const Services = () => {
  return (
    <div className="service" id="service">
      <div className="container">
        <div className="section-header">
          <p>Unsere Dienstleistungen</p>
          <h2>Weltweite Dienste anbieten.</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="service-item">
              <img src={service1} alt="Service" />
              <h3>Grundpflege</h3>
              <p>
                Unsere Grundpflegedienste umfassen regelmäßige Reinigung,
                Desinfektion und Instandhaltung, um Ihren Raum sauber, sicher
                und komfortabel zu halten.
              </p>
              <a
                className="btn"
                href="mailto:floriannauendorff.service@gmail.com"
              >
                Mehr erfahren
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-item">
              <img src={service2} alt="Service" />
              <h3>Treppenhausreinigung</h3>
              <p>
                Wir sind spezialisiert auf gründliche Treppenhausreinigung und
                sorgen dafür, dass jeder Schritt makellos und sicher für Ihre
                Nutzung ist.
              </p>
              <a
                className="btn"
                href="mailto:floriannauendorff.service@gmail.com"
              >
                Mehr erfahren
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-item">
              <img src={service3} alt="Service" />
              <h3>Glasreinigung</h3>
              <p>
                Unsere professionellen Glasreinigungsdienste lassen Ihre
                Fenster, Spiegel und Glasflächen kristallklar und streifenfrei
                aussehen.
              </p>
              <a
                className="btn"
                href="mailto:floriannauendorff.service@gmail.com"
              >
                Mehr erfahren
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-item">
              <img src={service4} alt="Service" />
              <h3>Malerarbeiten</h3>
              <p>
                Von Wänden bis hin zu Decken verleihen unsere Malerarbeiten
                Ihrem Raum einen frischen Anstrich in Farbe und Stil, verwandeln
                ihn in eine schöne Umgebung.
              </p>
              <a
                className="btn"
                href="mailto:floriannauendorff.service@gmail.com"
              >
                Mehr erfahren
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="service-item">
              <img src={service5} alt="Service" />
              <h3>Garten- und Landschaftsbau</h3>
              <p>
                Verschönern Sie Ihren Außenbereich mit unseren Garten- und
                Landschaftsbau-Dienstleistungen, einschließlich Design,
                Bepflanzung und Pflege.
              </p>
              <a
                className="btn"
                href="mailto:floriannauendorff.service@gmail.com"
              >
                Mehr erfahren
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="service-item">
              <img src={service6} alt="Service" />
              <h3>Baudienstleistungen</h3>
              <p>
                Unsere Baudienstleistungen umfassen eine Vielzahl von Projekten,
                von Renovierungen bis hin zu Neubauten, und garantieren
                hochwertige Handwerkskunst und Liebe zum Detail.
              </p>
              <a
                className="btn"
                href="mailto:floriannauendorff.service@gmail.com"
              >
                Mehr erfahren
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="service-item">
              <img src={service7} alt="Service" />
              <h3>Auf- und Abbau von Möbeln</h3>
              <p>
                Überlassen Sie uns den lästigen Auf- und Abbau von Möbeln und
                stellen Sie sicher, dass Ihre Möbel effizient und korrekt
                aufgebaut oder abgebaut werden.
              </p>
              <a
                className="btn"
                href="mailto:floriannauendorff.service@gmail.com"
              >
                Mehr erfahren
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="service-item">
              <img src={service8} alt="Service" />
              <h3>Verlegen von Böden</h3>
              <p>
                Unsere Bodenverlegungsdienste umfassen eine Vielzahl von
                Bodenbelagsoptionen, die fachmännisch verlegt werden, um die
                Schönheit und Funktionalität Ihres Raumes zu verbessern.
              </p>
              <a
                className="btn"
                href="mailto:floriannauendorff.service@gmail.com"
              >
                Mehr erfahren
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="service-item">
              <img src={service9} alt="Service" />
              <h3>Trockenbau</h3>
              <p>
                Wir sind spezialisiert auf Trockenbau und bieten fachgerechte
                Montage und Fertigstellung für glatte und nahtlose Wände.
              </p>
              <a
                className="btn"
                href="mailto:floriannauendorff.service@gmail.com"
              >
                Mehr erfahren
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
