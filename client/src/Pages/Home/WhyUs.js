import React, { useState } from "react";

import pred from "../Images/1.png";
import cashback from "../Images/cash-back.jpg";
import Gamer from "../Images/gamer.jpg";
import { VpnLock } from "@styled-icons/material-twotone/VpnLock";
const WhyUs = () => {
  const [our, setOur] = useState(true);
  const [privacy, setPrivacy] = useState("");
  const [delivery, setDeilvery] = useState("");
  const [returns, setReturns] = useState("");
  const ourClick = () => {
    setOur(true);
    setPrivacy("");
    setDeilvery("");
    setReturns("");
  };
  const privClick = () => {
    setOur("");
    setPrivacy(true);
    setDeilvery("");
    setReturns("");
  };
  const deliveryClick = () => {
    setOur("");
    setPrivacy("");
    setDeilvery(true);
    setReturns("");
  };
  const returnsClick = () => {
    setOur("");
    setPrivacy("");
    setDeilvery("");
    setReturns(true);
  };

  return (
    <>
      <h1 className="whyUs-title" style={{ padding: "10px" }}>
        <span style={{ color: "turquoise" }}>Why?</span> Boostify
      </h1>
      <div class="tabs">
        <input
          type="radio"
          id="tab1"
          name="tab-control"
          onClick={ourClick}
          checked={our}
        />
        <input
          type="radio"
          id="tab2"
          name="tab-control"
          onClick={privClick}
          checked={privacy}
        />
        <input
          type="radio"
          id="tab3"
          name="tab-control"
          onClick={deliveryClick}
          checked={delivery}
        />
        <input
          type="radio"
          id="tab4"
          name="tab-control"
          onClick={returnsClick}
          checked={returns}
        />
        <ul>
          <li title="Our Boosters">
            <label for="tab1" role="button">
              <i class="fas fa-users" style={{ padding: "10px" }}></i>
              <br />
              <span>Our Boosters</span>
            </label>
          </li>
          <li title="Privacy">
            <label for="tab2" role="button">
              <i class="fas fa-user-secret" style={{ padding: "10px" }}></i>
              <br />
              <span>Privacy</span>
            </label>
          </li>
          <li title="Delivery">
            <label for="tab3" role="button">
              <i class="fas fa-bolt" style={{ padding: "10px" }}></i>
              <br />
              <span>Delivery</span>
            </label>
          </li>
          <li title="Returns">
            <label for="tab4" role="button">
              <svg viewBox="0 0 24 24">
                <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
              </svg>
              <br />
              <span>Returns</span>
            </label>
          </li>
        </ul>

        <div class="slider">
          <div class="indicator"></div>
        </div>
        <div class="content">
          <section className="whyUs-element">
            <h2>A true connection with our boosters</h2>
            <div className="whyUs-grid">
              <p>
                The CEO behind this project has been a predator from seasons
                2-8. Throughout he has devloped a strong relationship with other
                predators through their competitive spirit. What we wanted to
                achieve with Boostify is a direct connection between a customer
                and the best boosters on the market. With no leeches in between.
              </p>
              <img src={pred} alt="predator"></img>
            </div>
          </section>
          <section className="whyUs-element">
            <h2>"Safety first, dearies, and then, of course, utter mayhem."</h2>
            <div className="whyUs-grid">
              <p>
                All our Boosters are required to connect to our VPN server
                before starting the boosting process. We ensure privacy and
                security at all times from our professionals. Then inherently they
                can proceed to decimate their lobbies.
              </p>
              <VpnLock
                style={{
                  width: "300px",
                  color: "turquoise",
                  display: "flex",
                  justifySelf: "center",
                  alignSelf: "center",
                }}
              ></VpnLock>
            </div>
          </section>
          <section className="whyUs-element">
            <h2>Lightning fast</h2>
            <div className="whyUs-grid">
              <p>
                As soon as we get an order we notify all our boosters of an
                opening. Depending on availablity the maximum time before your
                order is started will be 24 hours. And we usually finish the
                order within those same 48h. We dont want players who love
                playing the game to stop for any more than they need to.
              </p>
              <img src={Gamer} alt="booster" style={{ width: "250px" }} />
            </div>
          </section>
          <section className="whyUs-element">
            <h2>Returns</h2>
            <div className="whyUs-grid">
              <p>
                We take user satisfaction as our utmost importance. Please feel
                free to contact us about any complaints or inquiries about your
                order. We are confident in our boosters and have a 30 day
                Money-Back guaranteed policy for any incompleted orders or
                negative experiences.
              </p>
              <img
                src={cashback}
                alt="cash back"
                style={{ width: "300px" }}
              ></img>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
