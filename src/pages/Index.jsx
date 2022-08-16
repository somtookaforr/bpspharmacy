import React from 'react'
import Navbar from '../components/navbar'
import pic1 from '../imgs/Group1.png'
import Products from '../components/products'
import FAQS from '../components/faqs'
import faqs from '../imgs/faqs.png'
import Footer from '../components/footer'
import "animate.css/animate.min.css";
import {AnimationOnScroll} from 'react-animation-on-scroll'

const Index = () => {

  return (
    <div className=''>
        <div className="py-2"><Navbar/></div>
        <section className="bgmain h-full" id='home'>
            <div className="grid md:grid-cols-2 px-6 md:px-16">
                <div className='py-20 pb-36'>
                    <h1 className='text-5xl lg:text-6xl'><span className="txtorange">Lörem</span> ipsum den diligt bobel <span className="text-[#00923F]">akagen co-creation.</span>  </h1>
                    <p className='text-base lg:text-lg py-4 pr-20 md:pr-0'>Lörem ipsum planade pure players Olle Berggren sese lav, big data nyning telekrati epiboskap drop shipping anera endless aisles om it eftersom ahässa.</p>
                    <div className="flex gap-x-4 my-4">
                        <button className="bgorange text-white rounded h-14 lg:w-52 w-32">Get Started</button>
                    </div>
                </div>
            </div>
        </section>    

        <section className="bg-[#00923F] px-10 md:px-16 py-20 text-white" id='about'>
            <div className="grid lg:grid-cols-2">
                <div className='mb-0 pb-0'><img src={pic1} alt="" className='object-contain lg:h-5/6'/></div>

                <div className='grid mt-16 lg:mt-0'>
                <AnimationOnScroll animateIn="animate__fadeIn">
                    <div>
                        <h3 className='text-xl lg:text-4xl mb-6'>Who We Are</h3>
                        <p>Lörem ipsum kronat omniexperience. Lagen rekemi Elias Åberg, miling. Metaitet niren i ibed. Egovasa conversational commerce. Tiving desamma, i anasion höpygon, SME. 
                        Geovinde deminomi. Fav vingen, resion suligt oaktat omivis. Ukibel vilig exohånade. Decipen Lovisa Ahmed i orade. Transsocial Madeleine Svensson tena. 
                        Dirtad plabel pred heterod erad. Berat filofili. Fur mikrobyrad dengar bedorade. Ang dekaledes våtujåbäd Hans Hedlund. Kide valedes pladek. 
                        </p>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeIn'>
                    <div className='mt-12'>
                        <h3 className='text-xl lg:text-4xl mb-6'>What We Do</h3>
                        <p>Lörem ipsum kronat omniexperience. Lagen rekemi Elias Åberg, miling. Metaitet niren i ibed. Egovasa conversational commerce. Tiving desamma, i anasion höpygon, SME. 
                        Geovinde deminomi. Fav vingen, resion suligt oaktat omivis. Ukibel vilig exohånade. Decipen Lovisa Ahmed i orade. Transsocial Madeleine Svensson tena. 
                        Dirtad plabel pred heterod erad. Berat filofili. Fur mikrobyrad dengar bedorade. Ang dekaledes våtujåbäd Hans Hedlund. Kide valedes pladek. 
                        </p>
                    </div>  
                </AnimationOnScroll>          
                </div>
            </div>
        </section>

        <section className='px-10 md:px-16 py-20' id='products'>
            <div className="text-center lg:px-60 pb-12">
                <h3 className="txtorange text-xl lg:text-4xl">Our Products</h3>
                <p>Lörem ipsum lonev tåkävis så teprelig Berit Berggren ben. Björn Lindholm nyser. Retinat SERP, radionetik. </p>
            </div>
            <AnimationOnScroll animateIn='animate__fadeIn'>   
                <Products />
            </AnimationOnScroll>
        </section>

        <section className="px-10 md:px-16 py-20" id='faqs'>
            <h1 className='txtorange text-xl lg:text-4xl'>Frequently Asked Questions</h1>
            <AnimationOnScroll animateIn='animate__fadeIn'>
                <div className="grid lg:grid-cols-2">
                    <div className='self-center'><FAQS /></div>
                    <img src={faqs} alt="" className='lg:pl-24 lg:w-11/12 mx-auto pt-10 pb-20 lg-pt-0 lg-pb-0 order-first lg:order-none'/>
                </div>
            </AnimationOnScroll>
        </section>

        <section className="px-10 md:px-16 py-20" id='contact'> 
            <div className="grid lg:grid-cols-2">
                <div className='self-center justify-self-auto order-last lg:order-none'>
                    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1eDnmZ9-KTe4fVmH8mnF30Lf_79ZzMIA&ehbc=2E312F" className='rounded w-full' height={400} title="BPS pahrmacy map"></iframe>
                </div>
                <div className="lg:pl-20 mb-20 lg:mb-0">
                    <AnimationOnScroll animateIn='animate__fadeIn'>   
                        <h1 className='text-xl lg:text-4xl text-left'>Contact Us</h1>
                        <h5 className='text-lg lg:text-xl pt-6 pb-2'>Branch 1</h5>
                        <p className=''>Lörem ipsum diskapet psykomatisk roning låvade, usk. Regramma Periscope. Disruptive labelt Adwords maskininlärning. Prenat sav inkubator. Sedat nekask, Josefin Magnusson. <br />  Prenat sav inkubator. Sedat nekask, Josefin Magnusson. </p>
                        <button className="bgorange text-white rounded h-12 w-44 my-4">Contact</button>
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn='animate__fadeIn'>   
                        <h5 className='text-lg lg:text-xl pt-6 pb-2'>Branch 2</h5>
                        <p className=''>Lörem ipsum diskapet psykomatisk roning låvade, usk. Regramma Periscope. Disruptive labelt Adwords maskininlärning. Prenat sav inkubator. Sedat nekask, Josefin Magnusson. <br /> Prenat sav inkubator. Sedat nekask, Josefin Magnusson. </p>
                        <button className="bgorange text-white rounded h-12 w-44 my-4">Contact</button>
                    </AnimationOnScroll>
                </div>
            </div>
        </section>

        <Footer />
    </div>
  )
}

export default Index