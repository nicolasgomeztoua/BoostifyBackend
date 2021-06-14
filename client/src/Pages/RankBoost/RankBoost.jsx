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
import PostOrder from "../../PostOrder/PostOrder";
import Hero from "../../Hero.js/Hero";
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
        <title>Boostify | Apex Legends Rank Boosting</title>
        <meta
          name="description"
          content="Our top quality apex rank boost services will get you to any rank you desire in Apex Legends Ranked League including: Apex Predator, Apex Master and Apex Diamond. Break new grounds with our rank boost services"
        />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <Navbar></Navbar>
      <Hero
        img={fuseyImg}
        title={"Apex Legends Rank Boosting"}
        subtitle={"Pred boosting guaranteed."}
      />
      <ProdMenu></ProdMenu>
      <RankBoostProduct />
      <PostOrder></PostOrder>
      <Footer footerColor="#e43403"></Footer>
    </>
  );
};

export default RankBoost;
