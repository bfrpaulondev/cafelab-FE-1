import React from "react";
import EventCard from "../EventCard/EventCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "./swiper.css";

const SwiperCoverflow = ({ currentEvents, calculateTimeRemaining }) => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      {currentEvents.map((event: any) => (
        <SwiperSlide>
          <EventCard
            key={event._id.$oid}
            event={event}
            calculateTime={calculateTimeRemaining}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCoverflow;
