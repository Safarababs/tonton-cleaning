import React from "react";
import testimonial1 from "../img/testimonial-1.jpg";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="container">
        <div className="section-header">
          <p>Kundenbewertung</p>
          <h2>Kunde sagt über den Service</h2>
        </div>
        <div className="owl-carousel testimonials-carousel">
          <div className="testimonial-item">
            <div className="testimonial-img">
              <img src={testimonial1} alt="" />
            </div>
            <div className="testimonial-content">
              <p>
                Sehr netter, zuvorkommender und freundlicher junger Mann. Das
                Ergebnis tip top. Jederzeit wieder. Werde ihn auf jeden Fall
                wieder engagieren. Der nächste Auftrag für ein größeres Objekt
                ist auch bereits besprochen. Vielen Dank für die tolle, sehr
                saubere und perfekte Arbeit.
              </p>
              <h3>Anna Raunitschke</h3>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-img">
              <img src={testimonial1} alt="" />
            </div>
            <div className="testimonial-content">
              <p>Sehr guter und freundlicher Service! Gern wieder.</p>
              <h3>Philipp Jahn</h3>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-img">
              <img src={testimonial1} alt="" />
            </div>
            <div className="testimonial-content">
              <p>
                Hervorragende Arbeit! Sehr professionell, pünktlich und
                zuverlässig. Kann ich nur empfehlen!
              </p>
              <h3>Michael Müller</h3>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-img">
              <img src={testimonial1} alt="" />
            </div>
            <div className="testimonial-content">
              <p>
                "Fantastische Arbeit! Sehr professionell, pünktlich und
                zuverlässig. Ich kann ihn wärmstens empfehlen!"
              </p>
              <h3>Kevin Schmidt</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
