import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Prducts from '../setdata/products'
import productsData from "../data/products";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination, Autoplay, Keyboard } from "swiper";

export default function products() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        keyboard={{
            enabled: true,
          }}
          loop={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay, Keyboard]}
        className="mySwiper"
      >
        {productsData.map(({ img, title, description}) => (

        <SwiperSlide> <Prducts img={img} title={title} description={description}/> </SwiperSlide>

        ))}

      </Swiper>
    </>
  );
}

