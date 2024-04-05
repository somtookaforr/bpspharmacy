import React, { useState, useEffect } from "react";
import logo from "../imgs/logo.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [navState, setNavState] = useState({ height: 0, isOpen: false });
  const openNav = () => {
    setNavState({ height: 160, isOpen: true });
  };

  const closeNav = () => {
    setNavState({ height: 0, isOpen: false });
  };

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav
        id="myNav"
        className={isSmallScreen ? "overlay" : "flex fullScreen"}
        style={{ height: `${navState.height}%` }}
      >
        <div className="grid grid-cols-2 col-span-6 -mt-2 py-8 px-6 bg-white">
          <img src={logo} alt="BPS Pharmacy" className="h-12" />
          <IoClose
            onClick={closeNav}
            size={30}
            className={
              isSmallScreen
                ? "ml-auto cursor-pointer self-center txtorange rounded"
                : "hidden"
            }
          />
        </div>
        <div
          className={
            isSmallScreen
              ? "overlay-content"
              : "flex gap-x-6 self-center ml-auto"
          }
        >
          <NavLink>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeNav}
            >
              Home
            </Link>
          </NavLink>

          <NavLink>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeNav}
            >
              About
            </Link>
          </NavLink>

          <NavLink>
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeNav}
            >
              Services
            </Link>
          </NavLink>

          <NavLink>
            <Link
              activeClass="active"
              to="products"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeNav}
            >
              Products
            </Link>
          </NavLink>

          <NavLink>
            <Link
              activeClass="active"
              to="faqs"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeNav}
            >
              FAQS
            </Link>
          </NavLink>

          <NavLink>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeNav}
            >
              Contact
            </Link>
          </NavLink>
        </div>
      </nav>

      <nav className={isSmallScreen ? "-mt-2 py-6 px-6 flex" : "hidden"}>
        <img src={logo} alt="BPS Pharmacy" className="h-12" />

        <IoMenu
          onClick={openNav}
          size={30}
          className="ml-auto cursor-pointer self-center"
          id="openNav"
        />
      </nav>
    </>
  );
};

export default Navbar;
