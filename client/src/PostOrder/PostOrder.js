import "./PostOrder.css";
import OrderConfirmation from "../Pages/Images/orderconfirmation.png";
import { Filter1 } from "@styled-icons/material-twotone/Filter1";
import { Filter2 } from "@styled-icons/material-twotone/Filter2";
import { Filter3 } from "@styled-icons/material-twotone/Filter3";
import { Filter4 } from "@styled-icons/material-twotone/Filter4";
import styled from "styled-components";
import { walzyEditThis } from "../Pages/Home/stats";
console.log(OrderConfirmation);
const PostOrder = () => {
  const Step1 = styled(Filter1)`
    height: 50px;
    color: #40e0d0;
    margin: 10px;
  `;
  const Step2 = styled(Filter2)`
    height: 50px;
    color: #40e0d0;
    margin: 10px;
  `;
  const Step3 = styled(Filter3)`
    height: 50px;
    color: #40e0d0;
    margin: 10px;
  `;
  const Step4 = styled(Filter4)`
    height: 50px;
    color: #40e0d0;
    margin: 10px;
  `;
  let randomNumber = Math.floor(Math.random() * 10) + 10;
  console.log(randomNumber);
  return (
    <div className="post-order">
      {" "}
      <h1 className="whoAreWe-title">What happens after you order?</h1>
      <div className="post-order-wrap">
        <div className="post-order-container">
          <div className="post-order-card">
            <div className="post-order-card-image"></div>
            <div className="post-order-card-text">
              <span className="date">
                <Step1></Step1>
              </span>
              <h2>
                Check Your <br></br>PSN/XBOX email!
              </h2>
              <p style={{ height: "50px" }}>
                {" "}
                Check your order details thouroughly in the confirmation email
                sent to your PSN email. <br />
                <strong className="strong-desc">
                  <i>*Please check spam due to automated sending*</i>
                </strong>
              </p>
            </div>
            <div className="post-order-card-stats">
              <div className="stat"></div>
              <div className="stat border">
                <div className="value">{walzyEditThis.ordersCompleted}</div>
                <div className="type">Emails Sent</div>
              </div>
              <div className="stat"></div>
            </div>
          </div>
        </div>{" "}
        <div className="post-order-container">
          <div className="post-order-card">
            <div className="post-order-card-image" id="step2"></div>
            <div className="post-order-card-text">
              <span className="date">
                <Step2></Step2>
              </span>
              <h2>Booster Assignment</h2>
              <p>
                Within 24h of purchase your booster will be assigned. And
                complete your order in those next &nbsp;
                <strong className="strong-desc">
                  <i>48h.</i>
                </strong>
                <br></br>
              </p>
            </div>
            <div className="post-order-card-stats">
              <div className="stat"></div>
              <div className="stat border">
                <div className="value">{randomNumber}</div>
                <div className="type">Boosters Available</div>
              </div>
              <div className="stat"></div>
            </div>
          </div>
        </div>
        <div className="post-order-container">
          <div className="post-order-card">
            <div className="post-order-card-image" id="step3"></div>
            <div className="post-order-card-text">
              <span className="date">
                <Step3></Step3>
              </span>
              <h2>Check Your Profile Page</h2>
              <p>
                Track the progress of orders you've made with Boostify. Live
                Booster chat coming soon! <br></br>
                <strong className="strong-desc">
                  <i> *Profile page only available to boostify users*</i>
                </strong>
              </p>
            </div>
            <div className="post-order-card-stats">
              <div className="stat"></div>
              <div className="stat border">
                <div className="value">{walzyEditThis.ordersQueued}</div>
                <div className="type">Current Orders</div>
              </div>
              <div className="stat"></div>
            </div>
          </div>
        </div>
        <div className="post-order-container">
          <div className="post-order-card">
            <div className="post-order-card-image" id="step4"></div>
            <div className="post-order-card-text">
              <span className="date">
                <Step4></Step4>
              </span>
              <h2>Enjoy!</h2>
              <p>
                Upon completion you will receive an order completion email to
                your login email or PSN/XBOX email.
                <br />
                <strong className="strong-desc">
                  <i> Enjoy your boost!</i>
                </strong>
              </p>
            </div>
            <div className="post-order-card-stats">
              <div className="stat"></div>
              <div className="stat border">
                <div className="value">
                  {(walzyEditThis.ordersCompleted / 2).toFixed(0)}
                </div>
                <div className="type">Returning Customers</div>
              </div>
              <div className="stat"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostOrder;
