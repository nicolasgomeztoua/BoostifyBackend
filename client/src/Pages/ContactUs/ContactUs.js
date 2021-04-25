import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../authComponents/AuthComponents.css";
import Navbar from "../../Navbar/Navbar";

import {
  StepTwoWarningContainer,
  StepTwoWarning,
} from "../RankBoost/RankedBoostProductElements";
const Contact = ({ history }) => {
  const [email, setEmail] = useState("");

  const [supportTicket, setSupportTicket] = useState("");
  const [invalid, setInvalid] = useState("none");
  const [valid, setValid] = useState("none");
  const checkoutHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "https://secret-cove-64633.herokuapp.com/api/auth/supportTickets",
        { email, supportTicket },
        config
      );
      setValid("flex");
      setTimeout(() => {
        history.push("/");
      }, 3000);
    } catch (error) {}
  };
  useEffect(() => {
    if (email.length <= 0 || supportTicket.length <= 0) {
      setInvalid("flex");
    } else {
      setInvalid("none");
    }
  }, [email.length, supportTicket.length]);

  console.log("hello".length);
  return (
    <>
      <Navbar></Navbar>
      <StepTwoWarningContainer
        style={{ display: invalid, alignSelf: "flex-start" }}
      >
        Please fill out all parts of the form
        <StepTwoWarning>
          <i
            className="fa fa-times"
            onClick={() => setInvalid("none")}
            style={{ padding: "20px" }}
          ></i>
        </StepTwoWarning>
      </StepTwoWarningContainer>

      <StepTwoWarningContainer
        style={{
          display: valid,
          alignSelf: "flex-start",
          backgroundColor: "green",
        }}
      >
        We have received your message. We'll answer shortly
        <StepTwoWarning>
          <i
            className="fa fa-times"
            onClick={() => setInvalid("none")}
            style={{ padding: "20px" }}
          ></i>
        </StepTwoWarning>
      </StepTwoWarningContainer>
      <div className="login-screen">
        <form onSubmit={checkoutHandler} className="login-screen__form">
          <h3 className="login-screen__title">Support Ticket</h3>

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
            <label htmlFor="text">Your question:</label>
            <textarea
              type="text"
              required
              id="ticket"
              placeholder="Ask us something"
              onChange={(e) => setSupportTicket(e.target.value)}
              value={supportTicket}
              tabIndex={1}
            />
          </div>

          <button
            type="submit"
            className="form-btn form-btn-primary"
            disabled={() => {
              if (setInvalid === "flex") {
                return true;
              }
            }}
          >
            Submit Ticket
          </button>

          <span className="login-screen__subtext">
            Don't have an account? <Link to="/register">Register</Link>
          </span>
        </form>
      </div>
    </>
  );
};

export default Contact;
