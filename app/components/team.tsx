"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import "./teamstyles.css";
import AOS from "aos";
import "aos/dist/aos.css";

const socials = [
  {
    href: "https://www.linkedin.com/in/anshul-shirbhate-590394195/",
    label: "Prof. Rakhi Wajgi",
    handle: "HOD",
    branch: "AIDS CTech",
    image:
      "https://media.licdn.com/dms/image/C4E03AQGpOzlEoR_Muw/profile-displayphoto-shrink_400_400/0/1564561891535?e=1700697600&v=beta&t=Q12iHDjmC7Y_lNtopLL837fKj4WQ490LdLncMFXZV30",
  },
  {
    href: "https://www.linkedin.com/in/viranchi-dakhare/",
    label: "Prop. Supriya Thombre",
    handle: "Asst. Professor",
    branch: "AIDS CTech",
    image:
      "https://media.licdn.com/dms/image/C4E03AQGFVMBh93UmMw/profile-displayphoto-shrink_800_800/0/1643441516661?e=2147483647&v=beta&t=T98L8Z7RcEvRYj962qTbxWOCZUbRJTKz7H31LI0t0Ls",
  },
  {
    href: "https://www.linkedin.com/in/aman-raut-663484246/?originalSubdomain=in",
    label: "Aman Raut",
    handle: "Developer",
    branch: "AIDS CTech",
    image:
      "https://media.licdn.com/dms/image/D5603AQGnDP3yDzKL_w/profile-displayphoto-shrink_400_400/0/1686916568545?e=1700092800&v=beta&t=nTxQWZ8CPtzMUbWSO88WJzVXBKxm3HuJBnXyZ1f63hs",
  },
];

export default function Team() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1800,
      once: false,
    });
  }, []);

  return (
    <>
    <div className="static transition duration-1000 ease-in-out bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 py-20" id="team">
      <h1 className="flex justify-center items-center py-10 text-center" data-aos="fade-left">
        <span className="text-6xl text-transparent font-extrabold bg-clip-text bg-gradient-to-r to-green-600 via-white from-orange-400">Meet our team</span>
      </h1>
      <div className="container flex items-center justify-center min-h-max px-12 mx-auto py-10">
        <div className="rounded-xl grid w-full grid-cols-1 gap-4 mx-auto sm:mt-0 sm:grid-cols-3 lg:gap-8">
          {socials.map((s, index) => (
            <div key={s.label} data-aos="fade-up">
              <div
                className="rounded-xl p-4 relative w-5/6 mx-auto py-5"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative">
                  <img
                    src={s.image}
                    alt="Team Member"
                    className="w-full rounded-2xl h-auto"
                    data-aos={`flip-${index === 0 ? "left" : index === 1 ? "up" : "right"
                      }`}
                  />
                  {hoveredIndex === index && (
                    <div
                      className={`hover-card ${index === 0
                          ? "hover-card-orange"
                          : index === 1
                            ? "hover-card-white"
                            : "hover-card-green"
                        } w-5/6 rounded-2xl`}
                    >
                      <div className="content">
                        <h2>{s.label}</h2>
                        <p>{s.branch}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="justify-center flex py-10" data-aos="fade-right">
        <button className="text-2xl font-extrabold glow-on-hover">
          <Link href="/teams">More</Link>
        </button>
      </div>
    </div>
    </>
  );
}