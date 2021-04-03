import React, { useState, useEffect } from "react";
import "./Cart.css";
import { useCart } from "./CartHandler";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const cartItems = useCart();
  const stripe = useStripe();
  const elements = useElements();
  const totalPrice = cartItems.reduce(
    (total, b) => Number(total) + Number(b.price),
    0
  );

  useEffect(() => {}, []);
  const [succeeded, setSucceeded] = useState(false);

  const [error, setError] = useState(null);

  const [processing, setProcessing] = useState("");

  const [disabled, setDisabled] = useState(true);

  const [clientSecret, setClientSecret] = useState("");

  const [email, setEmail] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads

    window

      .fetch("https://secret-cove-64633.herokuapp.com/create-payment-intent", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          items: [{ id: "xl-tshirt" }, { price: totalPrice * 100 }],
        }),
      })

      .then((res) => {
        return res.json();
      })

      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, []);

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",

        fontFamily: "Arial, sans-serif",

        fontSmoothing: "antialiased",

        fontSize: "16px",

        "::placeholder": {
          color: "#32325d",
        },
      },

      invalid: {
        color: "#fa755a",

        iconColor: "#fa755a",
      },
    },
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement

    // and display any errors as the customer types their card details

    setDisabled(event.empty);

    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      receipt_email: email,
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);

      setProcessing(false);
    } else {
      setError(null);

      setProcessing(false);

      setSucceeded(true);
    }
  };

  return (
    <>
      <form className="credit-info" onSubmit={handleSubmit}>
        <div className="credit-info-content">
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            className="input-field"
          />
          Card Number
          <div className="input-field">
            <CardElement
              id="card-element"
              options={cardStyle}
              onChange={handleChange}
            />
          </div>
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
          <button
            className="pay-btn"
            type="submit"
            disable={processing || disabled || succeeded}
          >
            <span id="button-text">
              {processing ? (
                <div className="spinner" id="spinner"></div>
              ) : (
                "Pay now"
              )}
            </span>
          </button>
          {error && (
            <div className="card-error" role="alert">
              {error}
            </div>
          )}
          {/* Show a success message upon completion */}
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
