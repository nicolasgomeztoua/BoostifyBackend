import React from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import Hero from "../../Hero.js/Hero";
import valk from "../Images/apexvalk.webp";
import { Helmet } from "react-helmet";
import SliderBody from "./SliderBody";
const KillBoost = () => {
  return (
    <div>
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
        img={valk}
        title="Apex Legends Kills boost"
        subtitle="Strength in numbers"
      ></Hero>
      <SliderBody></SliderBody>
      <Footer footerColor="#6D00AE"></Footer>
    </div>
  );
};

export default KillBoost;
