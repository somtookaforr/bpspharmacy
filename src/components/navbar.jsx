import React from 'react'
import { Navbar } from 'flowbite-react'
import logo from '../imgs/logo.png'
import { Link, animateScroll as scroll } from "react-scroll";


const navbar = () => {
  return (
    <>
<Navbar
  fluid={true}
  rounded={false}
>
  <Navbar.Brand>
    <img src={logo} alt="BPS Pharmacy" className='h-12 px-' />
  </Navbar.Brand>
  <Navbar.Toggle />
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