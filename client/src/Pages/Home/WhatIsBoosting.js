import React from "react";
import "./Home.css";
import { UserInjured } from "@styled-icons/fa-solid/UserInjured";
import { AngleDoubleUp } from "@styled-icons/fa-solid/AngleDoubleUp";
import { Badge } from "@styled-icons/open-iconic/Badge";
const WhatIsBoosting = () => {
  return (
    <div className="WhatIsBoosting-container">
      <h4 className="WhatIsBoosting-title">
        What <span style={{ color: "turquoise" }}>is</span> Apex legends
        Boosting?
      </h4>
      <ul id="WhatIsBoosting-wrap">
        <li className="WIB-bullet-dot">
          <UserInjured
            style={{ height: "50px", color: "#e43403", margin: "auto" }}
          ></UserInjured>

          <p style={{ textAlign: "center" }} className="bullet-desc">
            From playing the game solo with misinterpreted and often downright
            bad teamates, to tedious grinding for a sweet victory only to be
            scraped away by RNG hotdrops, the ranked grind can just make the
            game unenjoyable. That's where we come in.
          </p>
        </li>
        <li className="WIB-bullet-dot">
          <AngleDoubleUp
            style={{ height: "50px", color: "#e43403", margin: "auto" }}
          ></AngleDoubleUp>

          <p style={{ textAlign: "center" }} className="bullet-desc">
            Rank Boost will help you get out of the boring grind and back to
            competitiveness and fun. Simply select your current RP and your
            desired RP in our selection cards. Dont just boost your rp, but get
            a valuable lesson with it with our DuoQueue feature! Squad up with
            our professionals and learn from the best.
          </p>
        </li>
        <li className="WIB-bullet-dot">
          <Badge
            style={{ height: "50px", color: "#e43403", margin: "auto" }}
          ></Badge>

          <p style={{ textAlign: "center" }} className="bullet-desc">
            Don't depend on SBMM to give you a lucky game for your favourite
            badges. Pick and choose the way you highlight your best character's
            banner with Acheivement Boost. Just select and search from our vast
            variety of badges. For any special character badges, please drop us
            a support ticket in the contact page
          </p>
        </li>
      </ul>
    </div>
  );
};

export default WhatIsBoosting;
