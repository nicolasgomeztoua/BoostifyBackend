import { useState, useEffect } from "react";
import axios from "axios";
import "./AuthComponents.css";
import Navbar from "../../Navbar/Navbar";
const Checkout = ({ history }) => {
  const [error, setError] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/");
    }
    const fetchPrivateData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        await axios.get(
          "https://secret-cove-64633.herokuapp.com/api/private",
          config
        );
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("Please LogIn to checkout");
      }
    };

    fetchPrivateData();
  }, [history]);

  return error ? (
    <>
      <Navbar></Navbar>
      <span className="error-message">{error}</span>
    </>
  ) : (
    <>
      <Navbar></Navbar>
    </>
  );
};

export default Checkout;
