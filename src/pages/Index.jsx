import React from "react";
import Navbar from "../components/navbar";
import pic1 from "../imgs/Group1.png";
import Products from "../components/products";
import FAQS from "../components/faqs";
import faqs from "../imgs/faqs.png";
import Footer from "../components/footer";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-scroll";
import { GiMedicines } from "react-icons/gi";
import { MdOutlineCountertops, MdOutlineDeliveryDining } from "react-icons/md";
import { BsThermometerHalf, BsShieldPlus } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";

const Index = () => {
  return (
    <div>
      <section className="bgmain h-full" id="home">
        <div className="py-2">
          <Navbar />
        </div>
        <div className="grid md:grid-cols-2 px-6 md:px-24">
          <div className="py-32 lg:py-36">
            <h1 className="text-5xl lg:text-6xl">
              Welcome to <span className="txtorange">BPS</span>{" "}
              <span className="text-[#00923F]">Pharmacy</span>{" "}
            </h1>
            <p className="py-8 pr-20 md:pr-0">
              Your trusted source for all your pharmaceutical needs where we are
              committed to providing exceptional service and care to our
              community.{" "}
            </p>
            <div className="my-4">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={500}
              >
                {" "}
                <button className="bgorange hover:bg-white transition ease-in-out hover:text-orange-500 hover:border-2 hover:border-green-700 text-white rounded-lg h-14 w-full lg:w-8/12">
                  Get to know us{" "}
                </button>{" "}
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </section>

      <section className="bg-[#33590A] text-white" id="about">
        <div className="grid lg:grid-cols-2">
          <div className="mb-0 pb-0">
            <img
              src={pic1}
              alt=""
              className="object-contain lg:h-5/6 mx-auto lg:w-10/12 xl:w-full"
            />
          </div>

          <div className="grid mt-16 lg:mt-0">
            <AnimationOnScroll animateIn="animate__fadeIn">
              <div>
                <h3 className="text-2xl lg:text-4xl mb-6">Who We Are</h3>
                <p>
                  Our pharmacy was founded on the principles of professionalism,
                  integrity, and compassion. We strive to create a welcoming and
                  supportive environment where our customers feel valued and
                  respected. We believe that every individual deserves access to
                  high-quality healthcare and we work tirelessly to make that a
                  reality.
                </p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeIn">
              <div className="mt-12">
                <h3 className="text-2xl lg:text-4xl mb-6">What We Do</h3>
                <p>
                  We understand that healthcare can be complicated and confusing
                  at times, which is why we are committed to providing clear and
                  concise information to our customers. We strive to educate and
                  empower our customers to make informed decisions about their
                  health and wellbeing.
                </p>
                <p>
                  At BPS Pharmacy, we are committed to providing exceptional
                  pharmaceutical care and outstanding customer service to our
                  community. Our team of highly skilled pharmacists and
                  technicians are dedicated to ensuring that you receive the
                  best possible care and attention.
                </p>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </section>

      <section className="" id="services">
        <div className="text-center pb-12">
          <h1 className="font-bold text-2xl lg:text-4xl leading-10 txtorange">
            Our Services
          </h1>
          <p>Take a look at some of the services we offer.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          <div className="py-7 px-5 rounded-lg bg-neutral-100">
            <GiMedicines className="txtorange" size={24} />
            <h5 className="text-xl font-semibold py-2">Prescription filling</h5>
            <p className="text-gray-500">
              Filling and dispensing prescriptions from licensed healthcare
              providers.
            </p>
          </div>

          <div className="py-7 px-5 rounded-lg bg-neutral-100">
            <MdOutlineCountertops className="txtorange" size={24} />
            <h5 className="text-xl font-semibold py-2">
              Over-the-counter medications
            </h5>
            <p className="text-gray-500">
              Selling a variety of non-prescription medications, supplements,
              and other health products.
            </p>
          </div>
          <div className="py-7 px-5 rounded-lg bg-neutral-100">
            <BsThermometerHalf className="txtorange" size={24} />
            <h5 className="text-xl font-semibold py-2">Medical equipment</h5>
            <p className="text-gray-500">
              Selling or renting medical equipment, such as wheelchairs and
              walkers.
            </p>
          </div>
          <div className="py-7 px-5 rounded-lg bg-neutral-100">
            <BsShieldPlus className="txtorange" size={24} />
            <h5 className="text-xl font-semibold py-2">
              Health and wellness advice
            </h5>
            <p className="text-gray-500">
              Offering advice and counseling on a variety of health topics,
              including weight management, smoking cessation, and disease
              prevention.
            </p>
          </div>
          <div className="py-7 px-5 rounded-lg bg-neutral-100">
            <MdOutlineDeliveryDining className="txtorange" size={24} />
            <h5 className="text-xl font-semibold py-2">Home delivery</h5>
            <p className="text-gray-500">
              Providing home delivery services for medications and other
              health-related products.
            </p>
          </div>
          <div className="py-7 px-5 rounded-lg bg-neutral-100">
            <FaHandsHelping className="txtorange" size={24} />
            <h5 className="text-xl font-semibold py-2">
              Medication therapy management
            </h5>
            <p className="text-gray-500">
              Working with patients and their healthcare providers to optimize
              medication regimens, identify drug interactions, and manage side
              effects.
            </p>
          </div>
        </div>
      </section>

      <section className="" id="products">
        <div className="text-center lg:px-60 pb-12">
          <h1 className="txtorange text-2xl lg:text-4xl">Our Products</h1>
          <p>
            Take a look at some of our products we you can find in any of our
            pharmacies.{" "}
          </p>
        </div>
        <AnimationOnScroll animateIn="animate__fadeIn">
          <Products />
        </AnimationOnScroll>
      </section>

      <section className="bg-[#F0F2F6] skew-y-2" id="faqs">
        <div className="-skew-y-2">
          <h1 className="txtorange text-2xl lg:text-4xl">
            Frequently Asked Questions
          </h1>
          <AnimationOnScroll animateIn="animate__fadeIn">
            <div className="grid lg:grid-cols-2">
              <div className="self-center">
                <FAQS />
              </div>
              <AnimationOnScroll
                initiallyVisible={true}
                animateIn="animate__wobble"
              >
                <img
                  src={faqs}
                  alt=""
                  className="lg:pl-24 lg:w-11/12 mx-auto pt-10 pb-20 lg-pt-0 lg-pb-0 order-first lg:order-none"
                />
              </AnimationOnScroll>
            </div>
          </AnimationOnScroll>
        </div>
      </section>

      <section className="" id="contact">
        <div className="grid lg:grid-cols-2">
          <div className="self-center justify-self-auto order-last lg:order-none">
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1eDnmZ9-KTe4fVmH8mnF30Lf_79ZzMIA&ehbc=2E312F"
              className="rounded-lg w-full"
              height={400}
              title="BPS pahrmacy map"
            ></iframe>
          </div>
          <div className="lg:pl-20 mb-20 lg:mb-0 self-center">
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              className="gap-y-6 grid"
            >
              <h1 className="text-2xl lg:text-4xl text-left txtorange">
                Contact Us
              </h1>
              <p className="">
                Our pharmacy is easily accessible by public transportation and
                we have ample parking available for our customers. If you have
                trouble finding us, please don't hesitate to call us at{" "}
                <Link
                  to=""
                  className="text-[#00923F] font-bold cursor-pointer"
                  onClick={() => (window.location = "tel:+2348035439038")}
                >
                  +234 803 543 9038
                </Link>{" "}
                and one of our friendly staff members will be happy to help you.{" "}
              </p>
              <p>
                Our pharmacy is open{" "}
                <span className="font-bold">08:00am - 09:00pm (WAT)</span> from
                Monday through Saturday and opens from{" "}
                <span className="font-bold">10:00am - 09:00pm (WAT)</span> on
                Sunday. We are open seven days a week for your convenience. We
                understand that our customers have busy schedules, so we make
                sure that our hours are flexible and accommodating.
              </p>
            </AnimationOnScroll>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
