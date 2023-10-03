"use client";
import React, { useEffect } from "react";
import Image from "next/image";

const About = () => {

  return (

    <>
      <h1 className="text-4xl font-extrabold text-white flex justify-center items-center py-20 lg:py-12">About</h1>
      <section
        id="about"
        className="text-gray-700 bg-transparent body-font container mx-auto flex flex-col lg:flex-row"
      >
        <div className="flex px-5 lg:py-24 pt-12 items-center justify-center flex-col w-full lg:w-1/2">
          <Image
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="ACM logo"
            src="/assets/acm.png"

            height={250}
            width={280}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              ACM Student Chapter
            </h1>
            <p className="leading-relaxed mb-8 text-justify text-white" >
              Department of Computer Technology has started ACM Student chapter
              in the year 2008. It serve as hubs of activity for the students of
              the department and the computing community at large. Various
              seminars, webinars, guest lectures, student development programs,
              learning forums and networking opportunities with peers and
              experts across the computing spectrum. ACM encourages growth in
              the computing community through its support of professional,
              student, and local Special Interest Group chapters worldwide.
            </p>
          </div>
        </div>

        <div className="flex px-5 lg:py-12 items-center justify-center flex-col w-full lg:w-1/2">
          <Image
            className="lg:w-1/6 md:w-2/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="CTSC Logo"
            src="/assets/CTSC.png"

            height={250}
            width={280}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              CT Student Council
            </h1>
            <p className="leading-relaxed mb-8 text-justify text-white">
              The CTSC is the “Computer Technology Student Council”. In the
              Compufest we conduct various coding and computer science events
              that can be very helpful for our future. In addition to these we
              have our departmental technical newsletter called as the
              Technosavvy. Dhyaas is a platform for students where they can show
              their technical and creative sides. Students are always welcome to
              share their arts, poetry and articles, which are then published in
              DHYAAS
            </p>
          </div>
        </div>
      </section>
      <div className="flex px-5 items-center justify-center flex-col w-full" >
        <div className="text-center lg:w-2/4 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Department of Computer Technology
          </h1>
          <div className="leading-relaxed mb-8 text-justify text-white lg:text-center">
            This department, established in 1985, is accredited by the National Board of Accreditation three times since 2003. It excels in academics, research, and teaching. The curriculum is designed to meet industry and research demands, offering core courses and industry-aligned electives. The department also houses an NVIDIA Centre of Excellence lab with advanced hardware and software for research in IoT, AI, ML, DL, CV, etc. It focuses on four thrust areas: Artificial Intelligence, Data Science, Cloud Computing, and Communication Networks and Security, fostering research and development activities.
            <div className="block text-left">
              <div className="font-bold text-xl text-center pt-8 pb-4 text-white">
                Vision of the Department
              </div>

              <div className="text-justify lg:text-center">
                To be a well-known center for pursuing computer education
                through innovative pedagogy, value-based education and industry
                collaboration.
              </div>
            </div>
            <div className="block text-left">
              <div className="font-bold text-xl text-center pt-8 pb-4 text-white">
                Mission of the Department
              </div>

              <div className="flex items-center text-justify  lg:text-center">
                To establish learning ambience for ushering in computer
                engineering professionals in core and multidisciplinary
                arena by developing problem-solving skills through emerging technologies.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-5 items-center justify-center flex-col w-full">
        <div className="text-center lg:w-2/4 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            ,,
          </h1>
          <div className="leading-relaxed mb-8 text-justify text-white lg:text-center">
            Technology is the essence of today's world. Being the Head of the Computer Technology Department, YCCE, Nagpur, I am glad to announce the 28th edition of an annual technical event of the department “COMPUFEST 2K23”. We as faculty members work with the sole objective of nurturing the students with multidimensional skill sets to make them perform impeccably. Amid this global pandemic, events like Compufest will keep the technical spark alive in students. Let’s embark together on this brilliant journey of Compufest2k23 at Computer Technology, YCCE. Good Luck!
          </div>
        </div>
      </div>

    </>
  );
};

export default About;
