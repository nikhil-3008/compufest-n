"use client";
import React from "react";
import Particles from "./components/particles";
import Link from "next/link";
import Timer from "./components/Timer";
import Footer from "./components/footer";
import StepperTimeline from "./components/timeline";
import Testimonial from "./components/Testimonial";
import EventSlider from "./components/EventSlider";
import About from "./components/about";
import Sponsors from "./components/sponsors";

import Navbar from "./components/navbar";
import "./page.css";

export default function Home() {
  return (
    <div className="scroll-smooth auto" style={{
      background:"rgba(0,0,0,0.5)"
    }}>
      <div className="video-container">
        <video autoPlay muted loop className="video-background">
          <source src="/assets/army1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="overlay">
          <div className="relative">
            <Navbar />
          </div>

          <div className="flex flex-col items-center justify-center h-fit overflow-x-hidden">
            <div className="hidden h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <Particles
              className="absolute inset-0 -z-10 animate-fade-in"
              quantity={200}
            />
            <div className="w-auto h-200 pt-10 pb-14">
              <h1
                className="z-10 text-7xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display 
							sm:text-9xl md:text-9xl whitespace-nowrap bg-clip-text bg-gradient-to-r to-green-600 via-white from-orange-400"
              >
                <Timer />
                <div className="flex justify-center align-center">

                <img src="assets/Presents.png" style={{width: "130px"}} className="" alt="" />
                </div>
                <p className="text-2xl text-center font-sans">Presents</p>
                <img src="assets/Compufest.png" style={{
                 width:"1000px", height:"auto"
                }}/>
              </h1>


            </div>

            <div className="py-6 z-10 text-7xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display 
							sm:text-9xl md:text-9xl whitespace-nowrap bg-clip-text" style={{ fontFamily: 'Trebuchet MS' }}>
              <div className="py-1">
                <h1 className="text-white  text-xl lg:text-2xl  flex justify-center items-center">Department of Computer Technology, </h1>
                <h1 className="text-white lg:text-3xl text-lg font-bold flex justify-center items-centera">Yeshwantrao Chavan College of Engineering</h1>
              </div>
              <h1 className="text-white  text-lg font-extrabold  flex justify-center items-center">11<sup>th </sup> October 2023 to 13<sup>th</sup> October 2023</h1>
              
              <div className="grid lg:grid-cols-2 grid-cols-1 justify-items-center mb-10 lg:mb-0">
                <div className="">
                  <p className="text-2xl mt-10 mb-2">Powered by</p>
                  <img src="assets/poweredby.png" style={{width: "130px"}}  alt="" />
                </div>
                <div className="mb-10 lg:mb-0">
                  <p className="text-2xl mt-10 mb-2">Media Partner</p>
                  <div className="flex justify-center items-center">
                    <img src="assets/redfmwhite.jpg" style={{width: "130px"}}  alt="" />
                  </div>
                </div>
              </div>

            </div>
            <div>
              <h1
                className="text-4xl flex justify-center font-bold text-white lg:pt-28"
              >
                Events
              </h1>

              <EventSlider />
              <div className="justify-center flex py-10" >
                <button
                  type="button"
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-xl px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  <Link href="/events">More Events</Link>
                </button>
              </div>
            </div>
            <div>
              

             
              <div className="justify-center flex py-10" >
                <button
                  type="button"
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-xl px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  <Link href="/events">Checkout Events</Link>
                </button>
              </div>
            </div>

            <div className="w-full">
              <h1
                className="text-5xl flex justify-center font-bold text-white lg:pt-5 lg:pb-14"

              >
                Schedule
              </h1>
              <StepperTimeline />

            </div>
            <div className="p-5">
              <About />
            </div>
            <Sponsors/>
            <Testimonial />

          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
