import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const imageUrls = [
  "https://img.playbook.com/zGZzbthb2sp-O1RTfGkUthswZFSujb9JsRcXXLYMbDw/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2IxYmFjY2U1/LWM3MGEtNGRhMC1i/YjIzLTMxNmFlMmJk/NDk3NA",
  "https://img.playbook.com/-p32_7wyMHCkNy9OlhRvHD1gwSPeJb4VLidF7NrtLq4/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzQxYjExM2Ey/LTVmMWYtNDcwOS05/MDA5LTE4MjkwMmUw/ZjU5NQ",
  "https://img.playbook.com/gGx0aTOo7FeHaJQdHA7oZKcoPDVevmwHbfrsdRoXUJE/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2IxZmQyN2Zm/LTZlZDUtNDUzNC1h/NDM0LTljMmJmOTYy/YWVhZg",
  "https://img.playbook.com/fiqV6CLFh8sFoiAbqgKS18ij7aY7wAGwd0GQB7Hi9lM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2RjMDI3NGYw/LWFiYmItNDBlYi1h/NWE1LWZlZWMzZmNj/ZTM3Yg",
  "https://img.playbook.com/jekhArTgevxPu2qopO9EDfyuYeTWh49AvN3qIhVLDDk/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2NhYmRhYTc1/LTZjODgtNDNiMS1h/ODI3LWE4MjZiNGM1/MWUyYQ",
  "https://img.playbook.com/X8V4xizPkzWC3_x9KWLQSZeZG9ZW3VYpQdULqna7J0Q/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzhjNTk2MDhm/LTYxYWUtNDI1OS05/MTkwLTU4NjQ5YzEz/MThmZA",
  "https://img.playbook.com/9AUDUzGMmu-UgIBexOhs6pG64OtNSWSzNO9_RhGOB6k/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2Y0NGJkNTE5/LWEzZGItNDA5OS1i/ZGRjLTE1MjM1ODM2/ZGRiOA"
];

const cssStyles = `
  .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 600px; /* Increased width */
    height: 400px; /* Increased height */
    border-radius: 20px; 
    border: 2px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }

  .swiper-pagination-bullet {
    background: #0ddcba; /* Change the pagination bullet color */
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: #f2f5f2; /* Change the active pagination bullet color */
    opacity: 1;
  }

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  
  .logo.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }
  
  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  @media (prefers-reduced-motion: no-preference) {
    a:nth-of-type(2) .logo {
      animation: logo-spin infinite 20s linear;
    }
  }
  
  @media (max-width: 767px) {
    .swiper-slide {
      width: 350px;
      height: 225px;
    }
  }
  
  .card {
    padding: 2em;
  }
  
  .read-the-docs {
    color: #888;
  }
  
  .glow {
    box-shadow: 0 0 20px rgba(255, 165, 0, 0.7), 0 0 40px rgba(255, 255, 255, 0.8), 0 0 60px rgba(0, 128, 0, 0.7);
    animation: glow 1.5s infinite alternate;
  }
  
  @keyframes glow {
    0% {
      box-shadow: 0 0 20px rgba(255, 165, 0, 0.7), 0 0 40px rgba(255, 255, 255, 0.8), 0 0 60px rgba(0, 128, 0, 0.7);
    }
    100% {
      box-shadow: 0 0 30px rgba(255, 165, 0, 0.9), 0 0 50px rgba(255, 255, 255, 1), 0 0 70px rgba(0, 128, 0, 0.9);
    }
  }
`;

export default function EventSlider() {
  return (
    <div id="events">
      <style>{cssStyles}</style>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        initialSlide={3}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        id='event'
      >
        {imageUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <a href="/events">
                <img src={url} className="glow" alt={`Slide ${index + 1}`} />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
