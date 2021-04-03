import React from "react";

import Preloader from "./temporary/Preloader/Preloader";
import Timer from "./temporary/Countdown/Timer";

import Navbar from "../../Navbar/Navbar";

import "./coming.css";

const ComingSoon = () => {
  return (
    <>
      <Navbar></Navbar>

      <div className="coming-soon-wrap">
        <div className="App">
          <div className="container">
            <h1 className="coming-soon-title">
              Page
              <br />
              Coming Soon
            </h1>
            <Timer />

            <Preloader />
          </div>
        </div>
      </div>
    </>
  );
};
export default ComingSoon;
