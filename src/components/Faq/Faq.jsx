import React from "react";
import faq from "../img/faqs.jpg";

const Faq = () => {
  const year = new Date().getFullYear();
  const total = year - 2017;
  return (
    <div className="faqs">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="section-header left">
              <p>Sie könnten fragen</p>
              <h2>Häufig gestellte Fragen</h2>
            </div>
            <img src={faq} alt="not avaiable" />
          </div>
          <div className="col-md-7">
            <div id="accordion">
              <div className="card">
                <div className="card-header">
                  <a
                    className="card-link collapsed"
                    data-toggle="collapse"
                    href="#collapseOne"
                    aria-expanded="true"
                  >
                    <span>1</span> Bieten Sie maßgeschneiderte Preise für
                    bestimmte Dienstleistungen an?
                  </a>
                </div>
                <div
                  id="collapseOne"
                  className="collapse show"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Ja, wir passen unsere Preise anhand des Leistungsumfangs und
                    Ihrer spezifischen Anforderungen an, um faire und
                    transparente Kosten sicherzustellen.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <a
                    className="card-link"
                    data-toggle="collapse"
                    href="#collapseTwo"
                  >
                    <span>2</span> Wie gewährleisten Sie die Sicherheit und den
                    Schutz meines Eigentums während der Dienstleistungen?
                  </a>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Unser Team ist darauf geschult, Ihr Eigentum sorgfältig zu
                    behandeln, und wir sind vollständig versichert gegen
                    unvorhergesehene Zwischenfälle, um Ihnen Sicherheit zu
                    bieten.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <a
                    className="card-link"
                    data-toggle="collapse"
                    href="#collapseThree"
                  >
                    <span>3</span>
                    Kann ich Dienstleistungen am Wochenende oder nach
                    Geschäftsschluss planen?
                  </a>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Ja, wir bieten flexible Terminplanungsoptionen,
                    einschließlich Wochenenden und Abenden, um Ihren
                    Bedürfnissen gerecht zu werden und Unterbrechungen Ihres
                    Alltags zu minimieren.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <a
                    className="card-link"
                    data-toggle="collapse"
                    href="#collapseFour"
                  >
                    <span>4</span> Was unterscheidet Ihr Unternehmen von anderen
                    in der Branche?
                  </a>
                </div>
                <div
                  id="collapseFour"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Mit über{total} Jahren Erfahrung verbinden wir
                    Fachkenntnisse mit einem Qualitätsanspruch und gewährleisten
                    so, dass jedes Projekt nach höchsten Standards abgeschlossen
                    wird.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <a
                    className="card-link"
                    data-toggle="collapse"
                    href="#collapseFour"
                  >
                    <span>5</span>
                    Bieten Sie eine Zufriedenheitsgarantie für Ihre
                    Dienstleistungen an?
                  </a>
                </div>
                <div
                  id="collapseFour"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Ja, wir stehen hinter unserer Arbeit und bieten eine
                    Zufriedenheitsgarantie. Wenn Sie mit den Ergebnissen nicht
                    zufrieden sind, werden wir daran arbeiten, es richtig zu
                    machen.
                  </div>
                </div>
              </div>
            </div>
            <a
              className="btn"
              href="mailto:floriannauendorff.service@gmail.com"
            >
              Fragen Sie mehr
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
