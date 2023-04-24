import React from 'react'
import logo from '../imgs/logo.png'
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { Link, animateScroll as scroll } from "react-scroll";

const footer = () => {
  return (
    <footer className='bg-[#F0F2F6] text-sm text-[#898989] mt-10'>
        <div className="grid grid-cols-12 py-10 px-10 md:px-16">
            <div className='col-span-12 lg:col-span-5 md:pr-40 mb-10 lg:mb-0'>
                <img src={logo} alt="" className='w-2/6'/> 
                Lorem ipsum dolor amet savec bien merci avous...
            </div>
            <div className="col-span-12 md:col-span-4 lg:col-span-2">
                <h5 className='text-xs md:text-base pb-2 text-black'>Quick Links</h5>
                <Link activeClass="active" to="about" spy={true} smooth={true} hashSpy={true} offset={0} duration={500}> About </Link>
                <Link className='flex py-4' activeClass="active" to="services" spy={true} smooth={true} hashSpy={true} offset={0} duration={500}> Services </Link>
                <Link activeClass="active" to="products" spy={true} smooth={true} hashSpy={true} offset={0} duration={500}> Product </Link>
                <Link className='flex py-4' activeClass="active" to="faqs" spy={true} smooth={true} hashSpy={true} offset={0} duration={500}> FAQs </Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} hashSpy={true} offset={0} duration={500}> Contact </Link>
            </div>
            <div className="col-span-12 md:col-span-5 lg:col-span-3 my-6 md:my-0">
                <h5 className='text-xs md:text-base pb-2 text-black'>Contact Us</h5>
                <Link to="" onClick={() => window.location = 'mailto:bpspharmacy@gmail.com'}> bpspharmacy@gmail.com</Link><br />
                <Link to="" className='flex pt-4' onClick={() => window.location = 'tel:+2348035439038'}>+234 803 543 9038</Link>
            </div>
            <div className="col-span-12 md:col-span-3 lg:col-span-2">
                <h5 className='text-xs md:text-base pb-2 text-black'>Reach Out</h5>
                <div className="flex gap-x-6">
                    <a href='https://instagram.com/bpspharmacy?igshid=YmMyMTA2M2Y=' target={'_blank'}><BsInstagram size={24}/></a>
                    <a href="https://api.whatsapp.com/send?phone=2348035439038&text=Hi, my name is [name]. I reached out to you from your website and I have a question about [medication or health concern]." target={'_blank'}><BsWhatsapp size={24}/></a>
                </div>
            </div>
        </div>
        <div className='text-white bg-[#33590A] py-6 px-10 md:px-16'>&copy; BPSPharmacy 2023. All rights reserved.</div>
    </footer>
  )
}

export default footer