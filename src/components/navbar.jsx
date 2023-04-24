import React from 'react'
import { Navbar } from 'flowbite-react'
import logo from '../imgs/logo.png'
import { Link, animateScroll as scroll } from "react-scroll";
import { IoClose } from 'react-icons/io5'

const navbar = () => {
  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  
  return (
    <>
      <div id='myNav' className='overlay lg:hidden'>
          <div className="grid grid-cols-2 -mt-2 py-6 px-6 bg-white">
            <img src={logo} alt="BPS Pharmacy" className='h-12' />
            <IoClose onClick={closeNav} size={30} className="ml-auto cursor-pointer self-center" />
          </div>
          <div className="overlay-content cursor-pointer mt-20">
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
          </div>
      </div>


      <Navbar
        fluid={true}
        rounded={false}
      >
        <Navbar.Brand>
        <img src={logo} alt="BPS Pharmacy" className='h-12 px-' />
        </Navbar.Brand>
        <Navbar.Toggle onClick={openNav} />
        <Navbar.Collapse>
          <Navbar.Link href="">
            <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            > 
            Home
            </Link>
          </Navbar.Link>
          <Navbar.Link href="">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            > 
            About
            </Link>
          </Navbar.Link>
          <Navbar.Link href="">
          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            > 
            Services
            </Link>
          </Navbar.Link>
          <Navbar.Link href="">
          <Link
            activeClass="active"
            to="products"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            > 
            Products
            </Link>
          </Navbar.Link>
          <Navbar.Link href="">
          <Link
            activeClass="active"
            to="faqs"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            > 
            FAQS
            </Link>
          </Navbar.Link>
          <Navbar.Link href="">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            > 
            Contact
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default navbar