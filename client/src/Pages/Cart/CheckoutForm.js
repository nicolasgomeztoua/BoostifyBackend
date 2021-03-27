import React from "react";
import "./Cart.css";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.log(error);
    } else {
      console.log(paymentMethod);
    }
  };
  return (
    <>
      <form className="credit-info" onSubmit={handleSubmit}>
        <div className="credit-info-content">
          Card Number
          <div className="input-field">
            <CardElement />
          </div>
          Card Holder
          <input className="input-field"></input>
          <table className="half-input-table">
            <tr>
              <td>
                {" "}
                Expires
                <input className="input-field"></input>
              </td>
              <td>
                CVC
                <input className="input-field"></input>
              </td>
            </tr>
          </table>
          <button className="pay-btn" type="submit" disable={!stripe}>
            Checkout
          </button>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
