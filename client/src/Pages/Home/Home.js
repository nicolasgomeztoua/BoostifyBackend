import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import styled from "styled-components";
import { Safe } from "@styled-icons/crypto/Safe";
import { GameController } from "@styled-icons/entypo/GameController";
import { Support } from "@styled-icons/boxicons-regular/Support";
import { VerifiedUser } from "@styled-icons/material-twotone/VerifiedUser";
import { QuestionAnswer } from "@styled-icons/material-twotone/QuestionAnswer";

import { Parallax } from "react-parallax";
import Horizon from "../Images/Horizon.jpg";
import HorizonMobile from "../Images/Horizon2.jpg";
import Bloodhound from "../Images/FAQ.png";
import Testimonials from "../../Testimonials/Testimonials";
import { World } from "@styled-icons/boxicons-regular/World";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import WhoAreWe from "./WhoAreWe";
import WhatIsBoosting from "./WhatIsBoosting";
import WhyUs from "./WhyUs";
import { Helmet } from "react-helmet";
const Home = () => {
  const [windowInnerWidth, setwindowInnerWidth] = useState(window.innerWidth);

  const reportWindowSize = () => {
    setwindowInnerWidth(window.innerWidth);
  };
  window.addEventListener("resize", reportWindowSize);

  const [horizonImg, sethorizonImg] = useState(Horizon);

  useEffect(() => {
    if (windowInnerWidth >= 1279) {
      sethorizonImg(Horizon);
    } else {
      sethorizonImg(HorizonMobile);
    }
  }, [windowInnerWidth]);

  const Verified = styled(VerifiedUser)`
    height: 50px;
  `;
  const Saftey = styled(Safe)`
    height: 100px;
  `;
  const Controller = styled(GameController)`
    height: 100px;
  `;

  const CSupport = styled(Support)`
    height: 100px;
  `;
  const FAQ = styled(QuestionAnswer)`
    height: 40px;
    color: turquoise;
  `;
  const Worldwide = styled(World)`
    height: 100px;
    color: turquoise;
  `;

  return (
    <div>
      <Helmet>
        <title>
          Boostify | Cheap Apex Legends Boosting Services Playstation
        </title>
        <meta
          name="description"
          content="Get boosted by our professionals for a cheap price and achieve higher Ranks in Apex Legends. Our professionals consist of only All-seasons Apex predators. Veterans. 24/7 Live Chat Support. Cheap. Get boosted by the best. Same Day Deliver Ranked boost and Badge boost."
        />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <Navbar />
      <Parallax
        strength={-300}
        bgImage={horizonImg}
        bgImageAlt="Horizon Header"
        bgImageStyle={{
          backgroundSize: "cover",
          backgroundAttachment: "none",
        }}
      >
        <div className="Home-showcase">
          <div className="Home-container">
            <h1 id="Home-title">Welcome to Boostify. </h1>
            <h2 id="Home-subtitle"> Your hive for Apex boosting</h2>

            <div>
              <Link
                to="/rank-boosting"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <button class="btn1">
                  <span class="btn1__inner">
                    <span class="btn1__slide"></span>
                    <span class="btn1__content">Boost with us today</span>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>{" "}
      </Parallax>
      {/* ///////////////////////////////////// */}
      <div className="home-banner">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="Home-intro">
        <h2 id="Home-subtitle" style={{ color: "black", textShadow: "none" }}>
          {" "}
          Looking to boost your account to the next echelon?{" "}
        </h2>
        <div className="icons">
          <li className="icon-section">
            <span className="desc">
              We have a strong link with the predator community, so we are their
              preferred platform as known members of the ecosystem. We can
              ensure service from the best.
            </span>
            <div className="title-icon">
              <li>The Very Very Very Strongest</li>

              <span>
                <Controller className="icon" />
              </span>
            </div>
          </li>

          <li className="icon-section">
            <span className="desc">
              Customer support is here for you. if you have any inquiries or
              doubts about the process please feel free to leave us a message or
              an email through our Contact Us page.
            </span>
            <div className="title-icon">
              <li>Client support 24/7</li>

              <span>
                <CSupport className="icon" />
              </span>
            </div>
          </li>
          <li className="icon-section">
            <span className="desc">
              We take the security of our customers very seriously. Ensuring we
              precautiously perform the task for the quickest, most hassle-free
              experience we can deliver; Trust is our asset.{" "}
            </span>
            <div className="title-icon">
              <li>Security is our #1 concern</li>

              <span>
                <Saftey className="icon" />
              </span>
            </div>
          </li>
        </div>
        <h2 className="Home-intro" id="outro">
          {" "}
          The preferred platform of the top 750 in the EU{" "}
          <Verified id="verified" />{" "}
        </h2>
      </div>

      {/* ...................................................................*/}

      <Parallax
        strength={300}
        bgImage={Bloodhound}
        bgImageAlt="Frequently asked questions"
        bgImageStyle={{
          backgroundSize: "cover",
        }}
      >
        <div className="FAQ-parallax">
          <div className="FAQ-container">
            <div className="FAQ">
              <h3>
                <FAQ /> <br></br>How long will my order take to complete?
              </h3>
              <p>
                It really depends on the order. But speaking in general terms we
                start within an hour of purchase and complete orders within
                those same 24hours. Our support team will be able to accurately
                assess the ETA of your particular order.
              </p>
            </div>

            <div className="FAQ">
              <h3>
                <FAQ /> <br></br>Can i have the professional play with my
                favourite legend?
              </h3>
              <p>
                Yes, we offer legend choice in Acheivement Boost orders. Our
                professional boosters will carry out your order playing on your
                legend of choice.
              </p>
            </div>

            <div className="FAQ">
              <h3>
                <FAQ /> <br></br> Can the professional appear offline while he
                plays?
              </h3>
              <p>
                Yes, at no extra cost you can ask our professional players to
                appear offline on your account while he plays on your account.
                Ensuring your privacy during the process.
              </p>
            </div>
          </div>
        </div>
      </Parallax>

      <WhoAreWe></WhoAreWe>
      <WhatIsBoosting></WhatIsBoosting>
      <WhyUs></WhyUs>
      <div>
        <h2 className="Testimonials-intro">
          {" "}
          <span id="our-users">Our Users fully trust us worldwide</span>
          <br />
          <Worldwide />
          <br></br>
          <span id="our-word">But don't take our word for it</span>
        </h2>
      </div>
      <Testimonials />
      <Footer footerColor="turquoise"></Footer>
    </div>
  );
};

export default Home;
