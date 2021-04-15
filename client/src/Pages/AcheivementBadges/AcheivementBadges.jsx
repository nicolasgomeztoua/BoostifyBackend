import React, { useState, useEffect } from "react";
import Fusey from "../Images/fusy.jpg";
import FuseyMobile from "../Images/fusyMobile.jpg";
import { Parallax } from "react-parallax";
import ".././RankBoost/RankBoost.css";
import Footer from "../../Footer/Footer.jsx";
import Navbar from "../../Navbar/Navbar";
import ProdMenu from "../../ProdMenu/ProdMenu";
import AcheivementBoostProduct from "./AcheivementBoostProduct";

const AcheivementBadges = () => {
  const [windowInnerWidth, setwindowInnerWidth] = useState(window.innerWidth);

  const reportWindowSize = () => {
    setwindowInnerWidth(window.innerWidth);
  };
  window.addEventListener("resize", reportWindowSize);

  const [fuseyImg, setfuseyImg] = useState(Fusey);

  useEffect(() => {
    if (windowInnerWidth >= 1279) {
      setfuseyImg(Fusey);
    } else {
      setfuseyImg(FuseyMobile);
    }
  }, [windowInnerWidth]);

  return (
    <>
      <Navbar></Navbar>
      <Parallax
        strength={-200}
        bgImage={fuseyImg}
        bgImageAlt=""
        bgImageStyle={{
          paddingTop: "100px",

          backgroundAttachment: "none",
          backgroundSize: "cover",
        }}
      >
        <div className="Services-Header">
          <h1 id="Rank-boost-title">Apex Legends Badges Boost</h1>
          <h2 id="Rank-boost-subtitle"> Highlight your banner </h2>
        </div>
      </Parallax>
      <ProdMenu></ProdMenu>

      <AcheivementBoostProduct></AcheivementBoostProduct>

      <Footer footerColor="#e43403"></Footer>
    </>
  );
};

export default AcheivementBadges;
