"use client"
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const navSections = [
  { id: "home", name: "Home" },
  { id: "events", name: "Events" },
  { id: "schedule", name: "Schedule" },
  { id: "message", name: "Reviews" },
  { id: "about", name: "About" },
  { id: "team", name: "Team" },
];

export default function NavbarAvatarPreview() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [isCross, setIsCross] = useState(false)

  const pathname = usePathname()


  return (
    <>
      {/*<!-- Component: Navbar with Avatar --> */}
      {/*<!-- Header --> */}
      <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-transparent shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden"
      style={{background: "rgba(0,0,0,0.2)"}}
      >
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[4.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/* Brand logo */}
            <a
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1 "
              href="/"
            >
              <div className="w-18 h-11 flex flex-row">
                <img src="/assets/Compufest.png" className="h-15 w-15" alt="" />
              </div>
            </a>

            {/* Mobile trigger */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden ${isToggleOpen ? "text-red-500" : "text-red-500"
                }`}
              onClick={() => { setIsToggleOpen(!isToggleOpen), setIsCross(!isCross) }}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >

              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                {isCross ? <img src="./assets/crouch.png" /> : <img src="./assets/stand.png" />}

              </div>
            </button>

            {/* Navigation links */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-[-1] h-[27.5rem] w-full justify-center bg-transparent overflow-hidden  overflow-y-auto overscroll-contain rounded-2xl px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible  lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${isToggleOpen
                ? "visible opacity-80 bg-white backdrop-blur-lg overflow-hidden a"
                : "invisible opacity-0"
                }`}
            >
              {navSections.map((section) => (
                <li key={section.id} role="none" className="flex items-stretch">
                  <a
                    role="menuitem"
                    aria-haspopup="false"
                    className={`flex items-center gap-2 py-4 transition-colors duration-300  text-white hover:text-emerald-600  focus:outline-none focus-visible:outline-none lg:px-8`}
                    href={pathname === "/" ? section.name === "Team"  ?
                      `${section.name.toLowerCase()}` : `/#${section.id}` : pathname !== "/" ?
                      section.name === "About" || section.name === "Contact Us" || section.name === "Schedule" || section.name === "Reviews" ? `/#${section.id}` : section.name === "Home" ? "/"
                        : `/${section.id}` : `/${section.id}`}
                  >
                    <span className="text-black lg:text-white">{section.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      {/*<!-- End Navbar with Avatar--> */}
    </>
  );
}
