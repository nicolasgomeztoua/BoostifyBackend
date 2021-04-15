import React from "react";
import "./Home.css";
import { Handshake } from "@styled-icons/fa-regular/Handshake";
const WhoAreWe = () => {
  return (
    <div className="whoAreWe-container">
      <h1 className="whoAreWe-title">
        Who are <span style={{ color: "turquoise" }}>We?</span>
      </h1>
      <div className="whoAreWe-wrap">
        <p id="WWA-desc">
          We founded this website as a response to the unfair market conditions
          in boosting. <br></br>Preds were getting underpaid for their work and
          given small percentages of revenue by websites.<br></br> This is what
          an OG Predator with deep roots in the community and his web-dev best
          friend sought out to change. <br></br>We thought if we could provide
          direct contact from customer to professional without unnessecary
          bureaucratic third parties, we could slash prices and pay our
          professionals more.<br></br> Meaning the best come to us. <br></br>
          Humbly, all we wanted to do was fix a broken system that was affecting
          people close to us and the game that we all love. Nonetheless we are
          so happy to have the opportunity to do so and continue to thank each
          and every one of you that have shown support and love for the project.
          <br></br>
          <Handshake
            style={{ color: "turquoise", height: "100px" }}
          ></Handshake>
        </p>
      </div>
    </div>
  );
};

export default WhoAreWe;
