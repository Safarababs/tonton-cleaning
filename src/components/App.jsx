import React from "react";
import Header from "./Header/Header";
import About from "./About/About";
import Services from "./Services/Services";
import Feature from "./Feature/Feature";
import Faq from "./Faq/Faq";
import Newsletter from "./newsletter/Newsletter";
import Testimonial from "./Testimonial/Testimonial";
import Footer from "./Footer/footer";

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Feature />
      <Faq />
      {/* <Newsletter /> */}
      <Testimonial />
      <Footer />
      <a href="#" class="back-to-top">
        <i class="fa fa-chevron-up"></i>
      </a>
    </>
  );
};

export default App;
