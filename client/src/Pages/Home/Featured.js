import featuredbooster from "../Images/featured.png";

const featured = () => {
  return (
    <div className="featured-container">
      <h2
        className="WhatIsBoosting-title"
        style={{
          padding: "10px",
          borderRadius: "20px",
          color: "white",
          borderColor: "white",
          marginBottom: "0px",
        }}
      >
        {" "}
        Featured Booster
      </h2>
      <div className="featured-wrap">
        <img
          alt="featured booster"
          src={featuredbooster}
          id="featuredbooster"
        ></img>{" "}
        <p className="desc">
          {" "}
          One of our Day 1 boosters. Top Tier Apex Legends veteran and OG. More
          than 4000 Hours of playtime with over 1300 wins. Apex Predator every
          season, every split. FPS experience for a decade. Trusted with First
          Priority orders. The Best of The Best!
        </p>
      </div>
    </div>
  );
};

export default featured;
