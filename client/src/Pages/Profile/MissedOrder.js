import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { RightArrowAlt } from "@styled-icons/boxicons-regular/RightArrowAlt";
const MissedOrder = ({ userId }) => {
  const [orderId, setOrderId] = useState();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const success = () =>
    toast.success(
      "Sucess! your order has been linked to your account. Refreshing...",
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  const failure = () => {
    toast.error("Sorry! we were not able to find an order with that Id", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const submitOrderId = async () => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const fetch = await axios.post(
        "https://secret-cove-64633.herokuapp.com/api/auth/missing-order",
        { orderId, userId },
        config
      );

      if (fetch.data.data === null) {
        failure();
      }
      if (fetch.data.data !== null) {
        success();
      }
      setTimeout(() => {
        window.location.reload();
      }, 5100);
    } catch (error) {
      failure();
    }
  };

  return (
    <div>
      {" "}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      ;
      <div className="missing-order-container">
        <h2
          className="whoAreWe-title profile-title"
          style={{
            borderRadius: "50px",
            color: "white",
            marginBottom: "10px",
          }}
        >
          Don't see your order? / Made an order without an account?{" "}
        </h2>
        <p id="missing-order-desc" className="desc">
          Simply input the order ID that you received in your order confirmation
          email in your PSN/XBOX's account email.
        </p>

        <div className="webflow-style-input" style={{ width: "80vw" }}>
          <input
            className="missing-order-input"
            type="email"
            placeholder="Order ID"
            onChange={(e) => setOrderId(e.target.value)}
          ></input>
          <button
            type="submit"
            className="missing-order-btn"
            onClick={submitOrderId}
          >
            <RightArrowAlt style={{ height: "50px" }}></RightArrowAlt>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MissedOrder;
