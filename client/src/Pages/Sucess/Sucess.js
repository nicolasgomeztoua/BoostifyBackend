import React from "react";
import "./Sucess.css";

import { Helmet } from "react-helmet";
import { useCart } from "../Cart/CartHandler";

const Sucess = ({ history }) => {
  const items = useCart();
  const totalPrice = items.reduce(
    (total, b) => Number(total) + Number(b.price),
    0
  );
  const clearCart = () => {
    localStorage.removeItem("cart");
  };

  window.gtag("event", "purchase", {
    send_to: "AW-388171063/qII5CLeDi4gCELeKjLkB",
    value: totalPrice,
    currency: "USD",
  });

  return (
    <>
      <Helmet></Helmet>
      <div className="success-container">
        <div className="sucess-card">
          <div
            style={{
              borderRadius: "200px",
              height: "200px",
              width: "200px",
              background: "#F8FAF5",
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <i className="checkmark">✓</i>
          </div>
          <h1 className="success-title">Success</h1>
          <p className="sucess-subtitle">
            We received your purchase request;
            <br /> we'll be in touch shortly!
            <br />{" "}
            <a href="https://www.boostify.es/">
              <button className="example_d" onClick={clearCart}>
                {" "}
                Clear cart and go home
              </button>
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Sucess;
