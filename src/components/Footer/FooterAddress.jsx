import React, { useState } from "react";

const AddressPopup = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={toggleModal}>
        Impressum
      </button>

      {showModal && (
        <div className="modal show" tabIndex="-1" style={{ display: "block" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title">Address Information</h1>
                <button
                  type="button"
                  className="btn-close"
                  onClick={toggleModal}
                ></button>
              </div>
              <div className="modal-body">
                <div className="address-group">
                  <h3>Name:</h3>
                  <p>Florian Nauendorff</p>

                  <p>floriannauendorff.service@gmail.com</p>
                  <p>Tel: +49 176 57919746</p>
                </div>
                <div className="address-group">
                  <h3>Anschrift:</h3>
                  <p>Ulanbatorstraße. 74</p>
                  <p>99091 Erfurt</p>
                </div>
              </div>
              <button
                type="button"
                style={{
                  background: "#2ea7ff",
                  color: "black",
                  width: "50%",
                  margin: "auto",
                  marginBottom: ".5rem",
                }}
                className="btn btn-primary btn-lg"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {showModal && (
        <div
          className="modal-backdrop show"
          style={{ display: "block" }}
          onClick={toggleModal}
        ></div>
      )}
    </div>
  );
};

export default AddressPopup;
