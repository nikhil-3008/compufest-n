"use client"
import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './style.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function EventSlider() {

  // let imgurls = [
  //   {url: "https://img.playbook.com/SkB86uJ8bXcknheRWbxla3Jk4OGcrn1P4MBmBAZ_XAs/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzUyNGU4MDY5/LTlkNzQtNDRjMy05/YWY0LWVmYzQyMmZh/MGM0OQ"},
  //   {url: "https://img.playbook.com/daDDgOo9rmz2zlozb7VojbZb668k5rhFEjEnzFCQPD8/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzNlNzkyYjI3/LTI1ZDktNGMxOS1h/MGQ0LTNlMWU1Mjcw/MTJiMA"},
  //   {url: "https://img.playbook.com/kWqWZlplQsT6bpIdWPzsBxiKCcxM1hq_DW3BgziZ9eg/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzc3ZTA0YjY0/LTVhZDctNDk0OS04/YTljLTY2MTcwMzBh/ZWI0OA"},
  //   {url: "https://img.playbook.com/wYzBmWm-MGt9777zohXnnl49EveDiZ9v5uLCgiXMznE/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzMwYWE0NzI4/LWNmM2ItNDQ0OS05/YTMzLWQyYTllYzA5/ODZjMg"},
  //   {url: "https://img.playbook.com/S9pDwNsbDYWISMyQxJsdBf0oaq9cWEJMKryO3TyEQ58/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2Y3ZmQ2MWNi/LTEwODEtNDYwZC04/ZjI5LWFlYTk5OTU5/N2FiMQ"},
  //   {url: "https://img.playbook.com/bmEtwG0uvLEJgrvmAGnWeFSUoveJdcPIaDdjvH3Ku4w/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2QxMTdkYjE4/LTZlNDAtNDJiNS05/YmQ2LThiYWZjMGRk/N2VkZQ"},
  //   {url: "https://img.playbook.com/4DT6vwZ7rDxYFzrUSKBYQzZeW8J6BKj0ptE_btAazFQ/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2JlNjdhNGQ5/LTYxNjItNDQzYi1h/MjliLTM4N2Q3MzZh/YTMwNQ"},

  // ]

  return (
    <div id="events">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0, // Set rotation to 0 to prevent rotation
          stretch: 0,
          depth: 300, // Increase depth to move cards backward
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        initialSlide={3}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        id='event'
      >
        <SwiperSlide >
          <div className="slide-content ">
            <a href="/events">
              <img src="https://img.playbook.com/zGZzbthb2sp-O1RTfGkUthswZFSujb9JsRcXXLYMbDw/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2IxYmFjY2U1/LWM3MGEtNGRhMC1i/YjIzLTMxNmFlMmJk/NDk3NA" className="glow"/>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <a href="/events">
              <img src="https://img.playbook.com/-p32_7wyMHCkNy9OlhRvHD1gwSPeJb4VLidF7NrtLq4/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzQxYjExM2Ey/LTVmMWYtNDcwOS05/MDA5LTE4MjkwMmUw/ZjU5NQ" className="glow"/>
            </a>
          </div>
        </SwiperSlide>

        

        <SwiperSlide>
          <div className="slide-content">
            <a href="/events">
              <img src="https://img.playbook.com/gGx0aTOo7FeHaJQdHA7oZKcoPDVevmwHbfrsdRoXUJE/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2IxZmQyN2Zm/LTZlZDUtNDUzNC1h/NDM0LTljMmJmOTYy/YWVhZg" className="glow"/>
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content">
            <a href="/events">
              <img src="https://img.playbook.com/fiqV6CLFh8sFoiAbqgKS18ij7aY7wAGwd0GQB7Hi9lM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2RjMDI3NGYw/LWFiYmItNDBlYi1h/NWE1LWZlZWMzZmNj/ZTM3Yg" className="glow"/>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <a href="/events">
              <img src="https://img.playbook.com/jekhArTgevxPu2qopO9EDfyuYeTWh49AvN3qIhVLDDk/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2NhYmRhYTc1/LTZjODgtNDNiMS1h/ODI3LWE4MjZiNGM1/MWUyYQ" className="glow"/>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <a href="/events">
              <img src="https://img.playbook.com/X8V4xizPkzWC3_x9KWLQSZeZG9ZW3VYpQdULqna7J0Q/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzhjNTk2MDhm/LTYxYWUtNDI1OS05/MTkwLTU4NjQ5YzEz/MThmZA" className="glow"/>
            </a>
          </div>
        </SwiperSlide>

        

        <SwiperSlide>
          <div className="slide-content">
            <a href="/events">
              <img src="https://img.playbook.com/9AUDUzGMmu-UgIBexOhs6pG64OtNSWSzNO9_RhGOB6k/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2Y0NGJkNTE5/LWEzZGItNDA5OS1i/ZGRjLTE1MjM1ODM2/ZGRiOA" className="glow"/>
            </a>
          </div>
        </SwiperSlide> 
       </Swiper>

    </div>
  );
}