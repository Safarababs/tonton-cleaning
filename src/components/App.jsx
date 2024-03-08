import React from "react";
import Header from "./Header/Header";

const App = () => {
  return (
    <>
      <Header />

      <a href="/home" className="back-to-top">
        <i className="fa fa-chevron-up"></i>
      </a>
    </>
  );
};

export default App;
