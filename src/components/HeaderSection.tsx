"use client";
import React, { useEffect, useState, useMemo } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { FiSun, FiMoon } from "react-icons/fi";
import { CgClose, CgMenuRight } from "react-icons/cg";

const HeaderSection = () => {
  const [navCollapse, setNavCollapse] = useState(true);
  const [scroll, setScroll] = useState(false);
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("");
  const navs = useMemo(() => ["home", "about", "projects", "contact"], []);

  useEffect(() => {
    const updateScroll = () => {
      if (window.scrollY >= 90) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", updateScroll);

      return () => {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    navs.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    return () => {
      navs.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          observer.unobserve(sectionElement);
        }
      });
    };
  }, [navs]);

  return (
    <>
      <header
        className={`backdrop-filter backdrop-blur-lg shadow-md ${
          scroll ? "border-b bg-white bg-opacity-40" : "border-b-0"
        } dark:bg-grey-900 dark:bg-opacity-40 border-gray-200 dark:border-b-0 z-30 min-w-full flex flex-col fixed`}
      >
        <nav className="lg:w-11/12 2xl:w-4/5 w-full md:px-6 2xl:px-0 mx-auto py-6 hidden sm:flex items-center justify-between">
          <Link
            href="/"
            className="2xl:ml-6 hover:text-blue-700 hover:dark:text-blue-500 font-bold text-xl transition-colors duration-300"
          >
            Oluwasegun
          </Link>

          <ul className="flex items-center gap-10">
            {navs.map((e, i) => (
              <li key={i}>
                <ScrollLink
                  className={`${
                    activeSection === e && "text-blue-700"
                  } hover:text-blue-700 hover:dark:text-blue-500 font-semibold transition-colors capitalize cursor-pointer`}
                  to={e}
                  offset={-60}
                  smooth={true}
                  duration={500}
                  isDynamic={true}
                >
                  {e}
                </ScrollLink>
              </li>
            ))}
            <span
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:bg-gray-100 hover:dark:bg-blue-700 hover:dark:text-white hover:text-blue-700 p-1.5 rounded-full cursor-pointer transition-colors"
            >
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </span>
          </ul>
        </nav>

        <nav className="p-4 flex sm:hidden items-center justify-between">
          <Link
            href="/"
            className="2xl:ml-6 hover:text-blue-700 hover:dark:text-blue-500 font-bold text-xl transition-colors duration-300"
          >
            Oluwasegun
          </Link>
          <div className="flex items-center gap-4">
            <span
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="bg-gray-100 dark:bg-blue-700 hover:text-white p-1.5 rounded-full cursor-pointer transition-colors"
            >
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </span>
            <CgMenuRight size={20} onClick={() => setNavCollapse(false)} />
          </div>
        </nav>

        <div
          className={`flex min-h-screen w-screen absolute md:hidden top-0 ${
            !navCollapse ? "right-0" : "right-[-100%]"
          } bottom-0 z-50 ease-in duration-300`}
        >
          <div className="w-1/4" onClick={() => setNavCollapse(true)}></div>

          <div className="flex flex-col p-4 gap-5 bg-gray-100 backdrop-filter backdrop-blur-sm dark:bg-gray-900/95 w-3/4">
            <CgClose
              className="self-end my-2"
              size={20}
              onClick={() => setNavCollapse(true)}
            />

            {navs.slice(0, 3).map((e) => (
              <ScrollLink
                key={e}
                className="dark:text-white hover:text-blue-600 py-1.5 px-4 rounded transition-colors capitalize cursor-pointer"
                to={e}
                offset={-60}
                smooth={true}
                duration={500}
                isDynamic={true}
                onClick={() => setNavCollapse(true)}
              >
                {e}
              </ScrollLink>
            ))}
            <ScrollLink
              to="contact"
              offset={-60}
              smooth={true}
              duration={500}
              onClick={() => setNavCollapse(true)}
              className="px-6 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-center"
            >
              Contact
            </ScrollLink>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderSection;
