import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h2>Kostenlosen Kostenvoranschlag erhalten</h2>
            <p>Fordern Sie jetzt Ihren kostenlosen Kostenvoranschlag an!</p>
          </div>
          <div className="col-md-4">
            <div className="form">
              {/* <input className="form-control" placeholder="Email here" /> */}
              <button className="btn">learn more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
