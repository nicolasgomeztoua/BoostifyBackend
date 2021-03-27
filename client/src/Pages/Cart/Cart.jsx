import React from "react";
import { useCart, useDispatchCart } from "./CartHandler";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import "./Cart.css";
import CheckoutForm from "./CheckoutForm";
import { CircleWithCross } from "@styled-icons/entypo/CircleWithCross";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const Cart = () => {
  const items = useCart();
  const dispatch = useDispatchCart();
  const totalPrice = items.reduce(
    (total, b) => Number(total) + Number(b.price),
    0
  );

  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };
  items.forEach((element, index) => {
    if (element.price === 0) {
      handleRemove(index);
    }
  });
  console.log(items);
  if (totalPrice === 0) {
    return (
      <>
        <Navbar></Navbar>
        <div className="failed-cart-contaier">
          <h1>Your cart is empty </h1>
          <button className="example_d"> Go Back Home?</button>
        </div>
        <Footer footerColor="turquoise"></Footer>
      </>
    );
  }
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <div className="window">
          <div className="order-info">
            <div className="order-info-content">
              <h2 id="order-summary">Order Summary</h2>
              <div className="line"></div>
              {items.map((elements, index) => {
                return (
                  <table className="order-table">
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src={elements.icon}
                            className="full-width"
                            alt="product"
                          ></img>
                        </td>
                        <td>
                          <br /> <span className="thin">{elements.title}</span>
                          <br />{" "}
                          {elements.selectedLegend ||
                            `From: ${elements.firstValue}`}
                          <br />{" "}
                          <span className="thin small">
                            {" "}
                            {elements.selectedPopBadges ||
                              `To: ${elements.secondValue}`}
                            <br />
                            {elements.selectedExtraBadges}
                            <br />
                            <CircleWithCross
                              onClick={() => handleRemove(index)}
                              style={{ height: "20px", color: "#e43403" }}
                            ></CircleWithCross>
                            <br />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="price">${elements.price}</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                );
              })}

              <div className="line"></div>
              <div className="total">
                <span style={{ float: "left" }}>TOTAL</span>
                <span style={{ float: "right", textAlign: "right" }}>
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
          <Elements
            stripe={loadStripe(
              "pk_test_51IXQz3BkRphF41hC4Pd2kBMQzZhdpc3xUdpWnsIVYNbqH7HZ2T7or2e6CYwwRbfsrHL9eo5gXg1k13vuUfvCI6UE00z6Mj1bLk"
            )}
          >
            <CheckoutForm></CheckoutForm>
          </Elements>
        </div>
      </div>
      <Footer footerColor="turquoise"></Footer>
    </>
  );
};
export default Cart;
