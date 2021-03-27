import React, { useState, useEffect } from "react";
import Fusey from "../Images/fusy.jpg";
import FuseyMobile from "../Images/fusyMobile.jpg";
import { Parallax } from "react-parallax";
import "./RankBoost.css";
import Footer from "../../Footer/Footer.jsx";
import RankBoostProduct from "./RankBoostProduct";
import ProdMenu from "../../ProdMenu/ProdMenu";
import Navbar from "../../Navbar/Navbar";
const RankBoost = () => {
  const [windowInnerWidth, setwindowInnerWidth] = useState(window.innerWidth);

  const reportWindowSize = () => {
    setwindowInnerWidth(window.innerWidth);
  };
  window.addEventListener("resize", reportWindowSize);

  const [fuseyImg, setfuseyImg] = useState(Fusey);

  useEffect(() => {
    if (windowInnerWidth >= 1281) {
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
          <h1 id="Rank-boost-title">Apex Legends Rank Boosting</h1>
          <h2 id="Rank-boost-subtitle"> Pred boosting guaranteed.</h2>
          <div id="btn">
            <button class="btn2">
              <span class="btn2__inner">
                <span class="btn2__slide"></span>
                <span class="btn2__content">Get started now</span>
              </span>
            </button>
          </div>
        </div>
      </Parallax>
      <ProdMenu></ProdMenu>
      <RankBoostProduct />
      <Footer footerColor="#e43403"></Footer>
    </>
  );
};

export default RankBoost;
