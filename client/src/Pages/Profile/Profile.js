import { useState, useEffect } from "react";
import axios from "axios";
import "./profile.css";
import Navbar from "../../Navbar/Navbar";
import userImg from "../Images/defaultuser.jpg";
import backgroundImage from "../Images/profilebackground.jpg";
import ProfileCard from "./ProfileCard";
import OrderTracker from "./OrderTracker";
import Footer from "../../Footer/Footer";
import { Helmet } from "react-helmet";

const Profile = ({ history }) => {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get(
          "https://secret-cove-64633.herokuapp.com/api/private",
          config
        );
        setUsername(data.username);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
        history.push("/login");
      }
    };

    fetchPrivateDate();
  }, [history]);
  return (
    <div>
      {" "}
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
      <Navbar></Navbar>
      <div className="profile-page-container">
        <div className="profile-background-grid">
          <div
            className="profile-bloodhound"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            a
          </div>
          <ProfileCard userImg={userImg} username={username}></ProfileCard>
          <div
            className="profile-bloodhound"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
          <div
            className="profile-bloodhound profile-mobile-bloodhound"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
        </div>
        <OrderTracker orderImg={userImg}></OrderTracker>
      </div>
      <Footer footerColor="turquoise"></Footer>
    </div>
  );
};

export default Profile;
