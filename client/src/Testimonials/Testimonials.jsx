import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Scrollbar,
  EffectCoverflow,
} from "swiper/core";

import "swiper/swiper.scss";
import User1 from "../Pages/Images/3.jpg";
import User2 from "../Pages/Images/4.jpg";
import User3 from "../Pages/Images/6.jpg";
import User4 from "../Pages/Images/21.jpg";
import rev from "../Pages/Images/rev.png";
import user6 from "../Pages/Images/user6.jpg";
import threestars from "../Pages/Images/threeStars.png";
import fourStars from "../Pages/Images/fourStars.png";
import fiveStars from "../Pages/Images/fiveStars.png";
import "swiper/components/pagination/pagination.scss";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import "swiper/components/scrollbar/scrollbar.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

SwiperCore.use([Navigation, Scrollbar, EffectCoverflow]);
const notify = () =>
  toast.success("Your review has been submitted. Thanks!", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
export const Testimonials = (props) => {
  const [rating, setRating] = useState(0);
  const [name, setName] = useState();
  const [review, setReview] = useState("");
  const [main, setMain] = useState();

  const reviewHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Access-Control-Allow-Origin":
          "https://secret-cove-64633.herokuapp.com/api/auth/reviews",
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.post(
        "https://secret-cove-64633.herokuapp.com/api/auth/reviews",
        { name, review, rating, main },
        config
      );
    } catch (error) {
      console.error(error);
    }
  };
  const options = [
    { value: "Wraith" },
    { value: "Bloodhound" },
    { value: "Horizon" },
    { value: "Rampart" },
    { value: "Fuse" },
    { value: "Octane" },
    { value: "Wattson" },
    { value: "Caustic" },
    { value: "Gibraltar" },
    { value: "Loba" },
    { value: "Revenant" },
    { value: "Pathfinder" },
    { value: "Lifeline" },
    { value: "Crypto" },
    { value: "Mirage" },
  ];
  return (
    <>
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
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        <div className="testimonials-body">
          <div className="testimonials">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="card">
                      <div className="layer"> </div>
                      <div className="content">
                        <p>
                          "prices were pretty nice, got a 20 bomb so i could
                          complete my banner on octane. :P. Teachy was my
                          booster and my order was completed way before the
                          estimated completion time.
                        </p>
                        <div className="imgBx">
                          <img src={User1} alt="testimonial user"></img>
                        </div>
                        <div className="details">
                          <h2 style={{ marginTop: "10px" }}>
                            {" "}
                            <i> -Anon</i>
                            <br />
                            <span> Bloodhound main</span>
                            <br></br>{" "}
                            <i>
                              <h2 style={{ marginTop: "10px" }}>15/03/2021</h2>
                            </i>
                          </h2>{" "}
                          <img
                            style={{ width: "200px", height: "140px" }}
                            src={fourStars}
                            alt="review"
                          ></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="review-container">
                      <form
                        onSubmit={reviewHandler}
                        className="login-screen__form"
                        style={{
                          backgroundColor: "#333",
                          position: "relative",
                          width: "100%",
                          margin: "0 auto",
                          padding: "60px 40px",
                          overflow: "hidden",
                          height: "530px",
                        }}
                      >
                        <h3
                          className="login-screen__title"
                          style={{ color: "white" }}
                        >
                          Leave Us A Review!
                        </h3>

                        <div className="form-group">
                          <label htmlFor="name" style={{ color: "white" }}>
                            Name (optional)
                          </label>
                          <input
                            type="text"
                            id="name"
                            placeholder="Name"
                            tabIndex={1}
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                          />
                          <div>
                            <label
                              class="select"
                              for="slct"
                              htmlFor="name"
                              style={{ color: "white" }}
                            >
                              Select Your Main
                              <select
                                id="slct"
                                required="required"
                                onChange={(e) => {
                                  setMain(e.target.value);
                                }}
                              >
                                <option
                                  value=""
                                  disabled="disabled"
                                  selected="selected"
                                >
                                  Select A Legend
                                </option>
                                {options.map((Items, index) => {
                                  return (
                                    <option value={Items.value}>
                                      {Items.value}
                                    </option>
                                  );
                                })}
                              </select>
                            </label>
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="text" style={{ color: "white" }}>
                            Your review:
                          </label>
                          <textarea
                            type="text"
                            required
                            id="review"
                            placeholder="..."
                            tabIndex={1}
                            onChange={(e) => {
                              setReview(e.target.value);
                            }}
                          />
                        </div>
                        <div className="stars-rating">
                          <Rating
                            precision={1}
                            emptyIcon={<StarBorderIcon fontSize="inherit" />}
                            value={rating}
                            name="rating"
                            onChange={(e, newValue) => {
                              setRating(newValue);
                            }}
                          />
                        </div>
                        <button
                          type="submit"
                          className="form-btn form-btn-primary"
                          onClick={notify}
                          disabled={review.length === 0 ? true : false}
                        >
                          Submit Review
                        </button>
                      </form>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="card">
                      <div className="layer"> </div>
                      <div className="content">
                        <p>"Cheap fast and safe, im happy "</p>
                        <div className="imgBx">
                          <img src={user6} alt="testimonial user"></img>
                        </div>
                        <div className="details">
                          <h2 style={{ marginTop: "10px" }}>
                            {" "}
                            <i> -Anon</i>
                            <br />
                            <span> Loba main</span>
                            <br></br>{" "}
                            <i>
                              <h2 style={{ marginTop: "10px" }}>04/16/2021</h2>
                            </i>
                          </h2>{" "}
                          <img
                            style={{ width: "200px", height: "140px" }}
                            src={fourStars}
                            alt="review"
                          ></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="card">
                      <div className="layer"> </div>
                      <div className="content">
                        <p>
                          "I ordered a boost from plat to masters and it was
                          done in 2 days, i cant believe the rank i was
                          hardstuck in for countless seasons was just done in 2
                          days. Crazy stuff"
                        </p>
                        <div className="imgBx">
                          <img src={rev} alt="testimonial user"></img>
                        </div>
                        <div className="details">
                          <h2 style={{ marginTop: "10px" }}>
                            {" "}
                            <i> -Anon</i>
                            <br />
                            <span> Revenant main</span>
                            <br></br>{" "}
                            <i>
                              <h2 style={{ marginTop: "10px" }}>29/03/2021</h2>
                            </i>
                          </h2>{" "}
                          <img
                            style={{ width: "200px", height: "140px" }}
                            src={fiveStars}
                            alt="review"
                          ></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="swiper-slide">
                    <div className="card">
                      <div className="layer"> </div>
                      <div className="content">
                        <p>
                          " Shoutout to wolfgangz for the good service. The
                          split grind was killing me. Im glad i can finally play
                          on the servers I belong on without the reset."
                        </p>
                        <div className="imgBx">
                          <img src={User2} alt="testimonial-user"></img>
                        </div>
                        <div className="details">
                          <h2 style={{ marginTop: "10px" }}>
                            <i>DVN_Righteous</i>
                            <br />
                            <span> Lifeline main</span> <br></br>{" "}
                            <i>
                              <h2 style={{ marginTop: "10px" }}>27/03/2021</h2>
                            </i>
                          </h2>
                          <img
                            style={{ width: "200px", height: "140px" }}
                            src={fourStars}
                            alt="review"
                          ></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div class="swiper-slide">
                    <div className="card">
                      <div className="layer"> </div>
                      <div className="content">
                        <p>
                          "My girlfriend is a bit of a bot. So i wanted to get
                          her some special badges for her bday because she still
                          loves Apex. ProxyH came in clutch witht the 20bomb 4k
                          in a couple hours. She was really happy with how her
                          banner looked and got tons of reactions from her gamer
                          friends. let's just say I put on my birthday suit that
                          day."{" "}
                        </p>
                        <div className="imgBx">
                          <img src={User3} alt="testimonial-user"></img>
                        </div>
                        <div className="details" style={{ marginTop: "10px" }}>
                          <h2>
                            maXxNour
                            <br />
                            <span> Speed Feind</span>
                            <br></br>{" "}
                            <i>
                              <h2 style={{ marginTop: "10px" }}>27/01/2021</h2>
                            </i>
                          </h2>
                          <img
                            style={{ width: "200px", height: "140px" }}
                            src={fiveStars}
                            alt="review"
                          ></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div class="swiper-slide">
                    <div className="card">
                      <div className="layer"> </div>
                      <div className="content">
                        <p>
                          " Saw their ad on instagram and decided to give it a
                          go for that coveted 4000 damage. I was worried about
                          possible ban but i made sure to not log in during the
                          boost and the service was extremly professional. Im
                          super happy with the result so thanks guys. "
                        </p>
                        <div className="imgBx">
                          <img src={User4} alt="testimonial-user"></img>
                        </div>
                        <div className="details">
                          <h2 style={{ marginTop: "10px" }}>
                            тистика
                            <br />
                            <span> Wraith main</span>
                            <br></br>{" "}
                            <i>
                              <h2 style={{ marginTop: "10px" }}>
                                {" "}
                                09/03/2021{" "}
                              </h2>
                            </i>
                          </h2>

                          <img
                            style={{ width: "200px", height: "140px" }}
                            src={fourStars}
                            alt="review"
                          ></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </Swiper>
    </>
  );
};

export default Testimonials;
