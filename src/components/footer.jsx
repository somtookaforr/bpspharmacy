import React from 'react'
import logo from '../imgs/logo.png'
import { Link } from 'react-router-dom'
import { BsEnvelopeFill, BsTelephoneFill, BsWhatsapp, BsInstagram } from 'react-icons/bs'

const footer = () => {
  return (
    <footer className='bg-[#00923F] text-neutral-200 text-sm'>
        <div className="grid grid-cols-12 py-12 px-10 md:px-16">
            <div className='col-span-12 lg:col-span-5 md:pr-40 mb-10 lg:mb-0'>
                <img src={logo} alt="" className='w-2/6'/> 
                Lorem ipsum dolor amet savec bien merci avous...
            </div>
            <div className="col-span-12 md:col-span-4 lg:col-span-2">
                <h5 className='text-xs md:text-base pb-2 text-white'>Quick Links</h5>
                <Link to="">About</Link> <br />
                <Link to=""><span className="flex py-2">FAQs</span></Link>
                <Link to="">Location</Link>
            </div>
            <div className="col-span-12 md:col-span-5 lg:col-span-3 my-6 md:my-0">
                <h5 className='text-xs md:text-base pb-2 text-white'>Contact Us</h5>
                <Link to=""><span className="flex"><BsEnvelopeFill /> <span className='pl-2'>bpspharmacy@gmail.com</span></span>  </Link>
                <Link to=""><span className="flex py-2"><BsTelephoneFill /> <span className='pl-2'>+234 9011 159 626</span></span>  </Link>
                <Link to=""><span className="flex"><BsWhatsapp /> <span className='pl-2'>+234 9011 159 626</span></span>  </Link>
            </div>
            <div className="col-span-12 md:col-span-3 lg:col-span-2">
                <h5 className='text-xs md:text-base pb-2 text-white'>Follow Us</h5>
                <Link to=""><span className="flex"><BsInstagram /> <span className='pl-2'>bpspharmacy</span></span>  </Link>
            </div>
        </div>
        <div className='text-xs bg-[#136c39] py-2.5 px-10 md:px-16'>Copyright BPSPharmacy 2022. All rights reserved.</div>
    </footer>
  )
}

export default footer