import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import pred from "../Images/1.png";
const OrderTracker = ({ orderImg }) => {
  const mockOrder = [
    {
      _id: {
        $oid: "607895b1141d2100157f0691",
      },
      titles: ["Acheivement Boost"],
      prices: [50],
      selectedLegend: ["Wraith"],
      selectedPopBadges: ["20 Bomb"],
      selectedExtraBadges: [],
      firstValue: [null],
      secondValue: [null],
      extrasArr: [[null]],
      PSNemail: "dafinnesekid25@gmail.com",
      PSNPass: "Mendez1014",
      region: "NA",
      rankedImg: [],
      dateCreated: {
        $date: "2021-04-15T19:17:22.450Z",
      },
      id: "29709aac",
      platform: "PlayStation Network",
      __v: 0,
    },
    {
      _id: {
        $oid: "607895b1141d2100157f0691",
      },
      titles: ["Acheivement Boost"],
      prices: [50],
      selectedLegend: ["Wraith"],
      selectedPopBadges: ["20 Bomb"],
      selectedExtraBadges: [],
      firstValue: [null],
      secondValue: [null],
      extrasArr: [[null]],
      PSNemail: "dafinnesekid25@gmail.com",
      PSNPass: "Mendez1014",
      region: "NA",
      rankedImg: [],
      dateCreated: {
        $date: "2021-04-15T19:17:22.450Z",
      },
      id: "29709aac",
      platform: "PlayStation Network",
      __v: 0,
    },
    {
      _id: {
        $oid: "6089febd8537a00015d10049",
      },
      titles: ["Rank Boost"],
      prices: [531.6],
      selectedLegend: [null],
      selectedPopBadges: [null],
      selectedExtraBadges: [null],
      firstValue: [4708],
      secondValue: [10766],
      extrasArr: [
        ["DuoQueue", true],
        ["Offline", false],
        ["Stream", false],
        ["priority", false],
      ],
      badgesExtras: [null],
      rankedImg: ["/static/media/Ranked_Tier6_Master.a31359db.png"],
      PSNemail: "nicolasnourgt@gmail.com",
      PSNPass: "05072001",
      region: "EU",
      dateCreated: {
        $date: "2021-04-29T00:32:52.382Z",
      },
      id: "8cf27230",
      platform: "PlayStation Network",
      __v: 0,
    },
  ];
  const percentage = 25;
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
        {mockOrder.map((order, index) => {
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
                      value={percentage}
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
                      <strong>{percentage}%</strong>
                    </div>
                  </div>
                </div>
              </p>{" "}
            </div>
          );
        })}

        <button className="btn">
          <p className="order-title"> book your order now</p>
          <span className="fa fa-cart-plus" aria-hidden="true"></span>
        </button>
      </div>
    </>
  );
};

export default OrderTracker;
