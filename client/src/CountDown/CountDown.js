import React, { useState, useEffect } from "react";
import "./CountDown.css";

const CountDown = () => {
  const [d, sd] = useState(0);
  const [h, sh] = useState(0);
  const [m, sm] = useState(0);
  const [s, ss] = useState(0);
  useEffect(() => {
    setInterval(() => {
      const now = new Date().getTime();
      const countDate = new Date("May 04 2021 18:00");
      let gap = countDate - now;
      let second = 1000;
      let minute = second * 60;
      let hour = minute * 60;
      let day = hour * 24;
      sd(Math.floor(gap / day));
      sh(Math.floor((gap % day) / hour));
      sm(Math.floor((gap % hour) / minute));
      ss(Math.floor((gap % minute) / second));
    }, 1000);
  }, []);
  return (
    <div className="countDown-container">
      <h2>
        Limited time discount!<br></br>
        <br></br> For 30% off use code
        <span>
          <i>"ENDOFSPLIT30"</i>
        </span>
      </h2>
      <div className="countDown-wrapper">
        <div className="countDown-element">
          {" "}
          <p className="numberOf">{d}</p>
          <p className="countDown-labels">Days</p>
        </div>
        <div className="countDown-element">
          {" "}
          <p className="numberOf">{h}</p>
          <p className="countDown-labels">Hours</p>
        </div>
        <div className="countDown-element">
          {" "}
          <p className="numberOf">{m}</p>
          <p className="countDown-labels">Min</p>
        </div>
        <div className="countDown-element">
          {" "}
          <p className="numberOf">{s}</p>
          <p className="countDown-labels">Sec</p>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
