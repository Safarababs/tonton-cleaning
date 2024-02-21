import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className=" copyright">
        <div className="box">
          <p>
            &copy;
            <a href="https://safarababs.github.io/safarweb/">
              {new Date().getFullYear()} Hausmeister und
              Reinigungsservice Florian
            </a>
            , All Right Reserved.
          </p>
        </div>
        <div className="box">
          <p>
            Designed By{" "}
            <a href="https://safarababs.github.io/safarweb/">Safar Abbas</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
