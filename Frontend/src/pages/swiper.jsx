import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000 }}
      loop={true}
    >
      <SwiperSlide>
        <img src="https://picsum.photos/id/1018/800/400" alt="slide1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/id/1015/800/400" alt="slide2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/id/1019/800/400" alt="slide3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
