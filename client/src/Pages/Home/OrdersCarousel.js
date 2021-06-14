import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Scrollbar,
  EffectCoverflow,
  Autoplay,
} from "swiper/core";

import "swiper/swiper.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { orders } from "./OrdersData";
import Img from "react-cool-img";

SwiperCore.use([Navigation, Scrollbar, EffectCoverflow, Autoplay]);
const OrdersCarousel = () => {
  return (
    <div className="OrdersCarousel-container">
      <h3 className="OrdersCarousel-title"> Recently Delivered Orders </h3>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        style={{ height: "360px" }}
      >
        {orders.map((order, index) => {
          return (
            <SwiperSlide>
              <div
                className="swiper-slide"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "10px",
                  minWidth: "315px",
                }}
              >
                <div
                  className="card"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "5px",
                    minWidth: "315px",
                    height: "315px",
                  }}
                >
                  {" "}
                  <Img
                    src={order}
                    alt="completed order"
                    className="orderimg"
                  ></Img>{" "}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default OrdersCarousel;
