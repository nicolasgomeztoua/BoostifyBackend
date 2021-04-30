import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Scrollbar,
  EffectCoverflow,
} from "swiper/core";

import "swiper/swiper.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { orders } from "./OrdersData";

SwiperCore.use([Navigation, Scrollbar, EffectCoverflow]);
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
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
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
                  minWidth: "300px",
                }}
              >
                <div
                  className="card"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "10px",
                    minWidth: "300px",
                  }}
                >
                  {" "}
                  <img
                    src={order}
                    alt="completed order"
                    className="orderimg"
                  ></img>{" "}
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
