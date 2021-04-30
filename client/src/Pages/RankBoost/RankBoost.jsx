import React, { useState, useEffect } from "react";
import Fusey from "../Images/fusy.jpg";
import FuseyMobile from "../Images/fusyMobile.jpg";
import { Parallax } from "react-parallax";
import "./RankBoost.css";
import Footer from "../../Footer/Footer.jsx";
import RankBoostProduct from "./RankBoostProduct";
import ProdMenu from "../../ProdMenu/ProdMenu";
import Navbar from "../../Navbar/Navbar";
import { Helmet } from "react-helmet";

const RankBoost = () => {
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
      {" "}
      <Helmet>
        <title>
          Boostify | Apex Legends Rank Boosting
        </title>
        <meta
          name="description"
          content="Our top quality apex rank boost services will get you to any rank you desire in Apex Legends Ranked League including: Apex Predator, Apex Master and Apex Diamond. Break new grounds with our rank boost services"
        />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
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
          <h1 id="Rank-boost-title">Apex Legends Rank Boosting</h1>
          <h2 id="Rank-boost-subtitle"> Pred boosting guaranteed.</h2>
        </div>
      </Parallax>
      <ProdMenu></ProdMenu>
      <RankBoostProduct />
      <Footer footerColor="#e43403"></Footer>
    </>
  );
};

export default RankBoost;
