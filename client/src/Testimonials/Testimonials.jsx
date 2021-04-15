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

import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Scrollbar, EffectCoverflow]);

export const Testimonials = () => {
  const [h, sh] = useState(0);
  const [h1, sh1] = useState(0);

  useEffect(() => {
    setInterval(() => {
      const now = new Date().getTime();
      const countDate = new Date("Apr 15 2021 19:01:01");
      let gap = countDate - now;
      let second = 1000;
      let minute = second * 60;
      let hour = minute * 60;
      let day = hour * 24;

      sh(Math.floor((gap % day) / hour) * -1);
      sh1(Math.floor(((gap % day) / hour) * -1) - 2);
    }, 1);
  }, []);

  return (
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
                        complete my banner on octane. :P. Teachy was my booster
                        and my order was completed way before the estimated
                        completion time.
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
                            <h2 style={{ marginTop: "10px" }}>72h+ ago</h2>
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
                            <h2 style={{ marginTop: "10px" }}>
                              {h1} hours ago
                            </h2>
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
                <div className="swiper-slide">
                  <div className="card">
                    <div className="layer"> </div>
                    <div className="content">
                      <p>
                        "I ordered a boost from plat to masters and it was done
                        in 2 days, i cant believe the rank i was hardstuck in
                        for countless seasons was just done in 2 days. Crazy
                        stuff"
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
                            <h2 style={{ marginTop: "10px" }}>{h} hours ago</h2>
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
                <div class="swiper-slide">
                  <div className="card">
                    <div className="layer"> </div>
                    <div className="content">
                      <p>
                        " Shoutout to wolfgangz for the good service. The split
                        grind was killing me. Im glad i can finally play on the
                        servers I belong on without the reset."
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
                            <h2 style={{ marginTop: "10px" }}>72h+ ago</h2>
                          </i>
                        </h2>
                        <img
                          style={{ width: "200px", height: "140px" }}
                          src={threestars}
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
                        "My girlfriend is a bit of a bot. So i wanted to get her
                        some special badges for her bday because she still loves
                        Apex. ProxyH came in clutch witht the 20bomb 4k in a
                        couple hours. She was really happy with how her banner
                        looked and got tons of reactions from her gamer friends.
                        let's just say I put on my birthday suit that day."{" "}
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
                            <h2 style={{ marginTop: "10px" }}>72h+ ago</h2>
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
                        " Saw their ad on instagram and decided to give it a go
                        for that coveted 4000 damage. I was worried about
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
                            <h2 style={{ marginTop: "10px" }}>72h+ ago</h2>
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
  );
};

export default Testimonials;
