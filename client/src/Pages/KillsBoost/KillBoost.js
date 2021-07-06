import React from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import Hero from "../../Hero.js/Hero";
import valk from "../Images/apexvalk.webp";
import { Helmet } from "react-helmet";
import SliderBody from "./SliderBody";
import Legends from "./Legends";
import ProdMenu from "../../ProdMenu/ProdMenu";
const KillBoost = () => {
  return (
    <div>
      <Helmet>
        <title>Boostify | Apex Legends Kills Boosting</title>
        <meta
          name="description"
          content="Our top quality pub stompers will get you to any number of kills you desire in Apex Legends in a short time. You can choose any legend to boost kills for in apex legends: bloodhound, bangalore, lifeline, pathfinder, wraith, gibraltar, caustic, mirage, crypto, revenant, octane, wattson, horizon, valkyrie, rampart, loba. 1000 kills boost any legend in a short time."
        />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <Navbar></Navbar>
      <Hero
        img={valk}
        title="Apex Legends Kills boost"
        subtitle="Strength in numbers"
      ></Hero>
      <ProdMenu border="#6d00af"></ProdMenu>
      <SliderBody></SliderBody>
      <Footer footerColor="#6D00AE"></Footer>
    </div>
  );
};

export default KillBoost;
