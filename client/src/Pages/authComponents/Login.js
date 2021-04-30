import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./AuthComponents.css";
import Navbar from "../../Navbar/Navbar";
import { Helmet } from "react-helmet";

import {
  StepTwoWarningContainer,
  StepTwoWarning,
} from "../RankBoost/RankedBoostProductElements";
const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [invalid, setInvalid] = useState("none");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    } else {
      setInvalid("flex");
    }
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "https://secret-cove-64633.herokuapp.com/api/auth/login",
        { email, password },
        config
      );

      localStorage.setItem("authToken", data.token);

      history.push("/cart");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <>
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
      <div className="login-screen">
        <form onSubmit={loginHandler} className="login-screen__form">
          <h3 className="login-screen__title">Login</h3>
          {error && <span className="error-message">{error}</span>}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              required
              id="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              tabIndex={1}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              Password:
              <Link
                to="/forgotpassword"
                className="login-screen__forgotpassword"
              >
                Forgot Password?
              </Link>
            </label>
            <input
              type="password"
              required
              id="password"
              autoComplete="true"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              tabIndex={2}
            />
          </div>
          <button type="submit" className="form-btn form-btn-primary">
            Login
          </button>

          <span className="login-screen__subtext">
            Don't have an account? <Link to="/register">Register</Link>
          </span>
        </form>
      </div>
    </>
  );
};

export default Login;
