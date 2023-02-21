import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/NavBar.module.css"


import { Autoplay, Pagination, Navigation } from "swiper";

const HomePage = () => {
  return (
    <div>
       <Swiper
        spaceBetween={30}
        // centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide w="1240px">
        <img src="https://images.ctfassets.net/9tka4b3550oc/4b4WODMN6XFbYfJIrGAshV/31c9945ad060885b519fa1781fde21cf/KFC_Wraps_Desktop_Home_Hero_1440x640_2x.jpg?q=75&w=1680" alt="" />

        </SwiperSlide>
        <SwiperSlide>
          <video >
        <source type="video/mp4" src="https://videos.ctfassets.net/9tka4b3550oc/3eVt04hBZVfN6MVMzEv4Rt/26a3f084c23ab3484870f7d544550853/1920x1080_KFC_App-Hero-Asset_05.mp4?q=75&w=1680" />
 </video>
       
        
        </SwiperSlide>
      
      
      </Swiper>
    </div>
  )
}

export default HomePage






