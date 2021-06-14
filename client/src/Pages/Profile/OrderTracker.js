import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import pred from "../Images/1.png";
import { Link } from "react-router-dom";
const OrderTracker = ({ orderObj }) => {
  const Orders = orderObj;

  if (Orders.length === 0) {
    return (
      <>
        <h2
          className="whoAreWe-title profile-title"
          style={{ borderRadius: "50px", color: "white", marginBottom: "10px" }}
        >
          Track your orders with the All-Father's sight{" "}
        </h2>
        <div className="table">
          <h2 className="heading">Order Tracking</h2>
          <div className="block">
            <h2 className="order-title">
              {" "}
              No orders made on this boostify account.
            </h2>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <h2
        className="whoAreWe-title profile-title"
        style={{ borderRadius: "50px", color: "white", marginBottom: "10px" }}
      >
        {" "}
        Track your orders with the All-Father's sight{" "}
      </h2>{" "}
      <div className="table">
        <h2 className="heading">Order Tracking</h2>

        {Orders.map((order, index) => {
          console.log(order.titles);
          if (order.titles[0] === "Kills Boost") {
            return (
              <div className="block">
                <p className="order-title">
                  {order.titles}
                  <span className="price">${order.prices}/</span>{" "}
                  <span className="" style={{ marginLeft: "50px" }}></span>
                  <ul className="options">
                    <li>{order.kills} Kills</li>
                  </ul>
                  <div className="rank-circle-container">
                    <div className="rank-circle-wrap">
                      <CircularProgressbarWithChildren
                        value={order.progress}
                        style={{ width: 60, marginBottom: 5 }}
                        styles={{
                          // Customize the root svg element
                          root: {},
                          path: {
                            // Path color
                            stroke: `rgba(64,224,208)`,
                          },
                        }}
                      >
                        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                        <img
                          style={{ width: 90, marginBottom: 5 }}
                          src={
                            order.rankedImg.length === 0
                              ? pred
                              : order.rankedImg
                          }
                          alt="doge"
                        />
                        {console.log(order.rankedImg)}
                      </CircularProgressbarWithChildren>{" "}
                      <div
                        style={{
                          fontSize: "22.3px",
                          marginTop: 15,
                          paddingBottom: "15px",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <strong>{order.progress}%</strong>
                      </div>
                    </div>
                  </div>
                </p>{" "}
              </div>
            );
          }
          return (
            <div className="block">
              <p className="order-title">
                {order.titles}
                <span className="price">${order.prices}/</span>{" "}
                <span className="" style={{ marginLeft: "50px" }}></span>
                <ul className="options">
                  <li>
                    <p className="order-title"> {order.selectedLegend}</p>
                  </li>
                  <li>{order.selectedPopBadges}</li>
                  <li>{order.selectedExtraBadges}</li>{" "}
                  {order.firstValue[0] !== null ? (
                    <li>
                      <p className="order-title">From:</p>
                      {order.firstValue}
                      <p className="order-title">To:</p>
                      {order.secondValue}
                    </li>
                  ) : (
                    <li>No Rank Boost</li>
                  )}{" "}
                </ul>
                <div className="rank-circle-container">
                  <div className="rank-circle-wrap">
                    <CircularProgressbarWithChildren
                      value={order.progress}
                      style={{ width: 60, marginBottom: 5 }}
                      styles={{
                        // Customize the root svg element
                        root: {},
                        path: {
                          // Path color
                          stroke: `rgba(64,224,208)`,
                        },
                      }}
                    >
                      {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                      <img
                        style={{ width: 90, marginBottom: 5 }}
                        src={
                          order.rankedImg.length === 0 ? pred : order.rankedImg
                        }
                        alt="doge"
                      />
                      {console.log(order.rankedImg)}
                    </CircularProgressbarWithChildren>{" "}
                    <div
                      style={{
                        fontSize: "22.3px",
                        marginTop: 15,
                        paddingBottom: "15px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <strong>{order.progress}%</strong>
                    </div>
                  </div>
                </div>
              </p>{" "}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OrderTracker;
