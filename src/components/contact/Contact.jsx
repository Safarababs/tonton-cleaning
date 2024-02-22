// import React from "react";

// const Contact = () => {
//   return (
//     <div class="contact">
//       <div class="contact-container">
//         <div class="section-header">
//           <p>Contact Us</p>
//           <h2>Find Your Answer / Send Message</h2>
//         </div>
//         <div class="box">
//           <div class="contact-form">
//             <form>
//               <div class="form-row">
//                 <div class="form-group col-md-6">
//                   <input
//                     type="text"
//                     class="form-control"
//                     placeholder="Your Name"
//                     required="required"
//                   />
//                 </div>
//                 <div class="form-group col-md-6">
//                   <input
//                     type="email"
//                     class="form-control"
//                     placeholder="Your Email"
//                     required="required"
//                   />
//                 </div>
//               </div>
//               <div class="form-group">
//                 <input
//                   type="text"
//                   class="form-control"
//                   placeholder="Subject"
//                   required="required"
//                 />
//               </div>
//               <div class="form-group">
//                 <textarea
//                   class="form-control"
//                   rows="6"
//                   placeholder="Message"
//                   required="required"
//                 ></textarea>
//               </div>
//               <div>
//                 <button class="btn" type="submit">
//                   Send Message
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div class="section-header">
        <p>Kontaktiere uns</p>
        <h2>Senden Sie uns eine Nachricht</h2>{" "}
      </div>

      <form action="">
        <div className="inputBox">
          <input type="text" placeholder="Vorname" />
          <input type="text" placeholder="Nachname" />
        </div>

        <div className="inputBox">
          <input type="email" placeholder="your email" />
          <input type="email" placeholder="Telefonnummer" />
        </div>

        <textarea
          name=""
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
