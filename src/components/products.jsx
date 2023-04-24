import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
        {productsData.map(({ img, title}) => (

        <SwiperSlide> 
          <div className='border border-neutral-300 rounded-lg px-6 py-4 text-center'>
          <img src={img} alt="" className='mx-auto h-40'/>
          <p className="pt-4 text-gray-500">{title}</p>
          </div>  
        </SwiperSlide>

        ))}

      </Swiper>
    </>
  );
}

