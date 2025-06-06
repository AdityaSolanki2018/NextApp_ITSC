"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import QuerySec from "@/components/sections/QuerySec";
import { FaFacebook } from "react-icons/fa6";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  //  speed: 500,
  slidesToShow: 3, // Show 3 slides on larger screens
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768, // For screens smaller than 768px (md and below)
      settings: {
        slidesToShow: 1, // Show 1 slide
        slidesToScroll: 1, // Scroll 1 slide
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000, // Disable infinite scrolling
        arrows: false, // Hide arrows
      },
    },
  ],
};
const page = () => {
  return (
    <div className="min-h-screen relative overflow-hidden dark:bg-gray-900">
      {/* Hero Section */}
      <div className="absolute -top-6 -z-20">
        <Image
          src={"/images/Herobg1.png"}
          width={720}
          height={400}
          alt="rect"
          className="-z-30 absolute w-full -top-4 h-[380px] md:min-h-[550px] blur-sm opacity-90 dark:opacity-90"
        />

        {/* try */}

        <div className="absolute md:-top-[57px] -top-[120px]  -left-6 -right-5 z-10 ">
          <div className="bg-[#f2f2f2] dark:bg-gray-900 relative h-52 -rotate-[2deg] min-w-[500px]">
            <div className="bg-[#f2f2f2]  dark:bg-gray-900 absolute lg:bottom-0 lg:left-24 bottom-1 rotate-[42deg] h-28 lg:w-56 w-36 rounded-xl -z-10" />
          </div>
        </div>
      </div>

      <div className="h-28 bg-[#FAFAFA] dark:bg-gray-900 absolute -left-2 -right-5 z-10 top-[290px] md:top-[475px] -rotate-[4deg]" />
      <div className="flex flex-col pt-32 md:pt-56 justify-center items-center gap-4 md:gap-8">
        <h1 className="h1Text md:h1TextLg text-solarYellow">About Us</h1>
        <div className="flex divide-x-4 divide-solarYellow *:px-3 md:h2TextLg h2Text">
          <Link href={"/"} className="text-white">
            Home
          </Link>
          <button className="text-solarYellow">About</button>
        </div>
      </div>

      {/* About Information Section */}
      <div className="my-24 mt-32 md:mt-44 mb-20 mx-8 md:mx-20 lg:mx-32 z-20 *:py-6 relative">
        <Image
          src={"/images/bgspot.png"}
          width={533}
          height={430}
          alt="img"
          className="-z-30 absolute w-full max-h-[780px] md:-top-10 bottom-0  right-8"
        />
        <Container
          title={"About us"}
          h1={
            <span>
              Your <span className="text-blue">Trusted</span> Partner in{" "}
              <span className="text-solarYellow">
                IT Insfrastructure and Services
              </span>
            </span>
          }
          h2={"Learn about our journey and how we bring IT solutions to life."}
          textAllign={"text-center md:max-w-[700px] mx-auto"}
        />
        <div
          style={{ backgroundImage: "url('/images/bgspot.png')" }}
          className="flex flex-col items-center mx-auto md:-space-y-32 -space-y-12 md:my-2 "
        >
          <div className="flex  gap-1 items-start md:gap-2 relative">
            <div className="absolute -top-5 -left-6 w-[320px] rounded-lg hidden md:block pText p-2 md:p-5 border-8 border-white bg-darkBlue text-white">
              <p>
                Founded in [Year]. [Milestone 1]: Installed [X] solar panels in
                the first year. [Milestone 2]: Partnered with [Organization
                Name].
              </p>
            </div>
            <Image
              src={"/images/apic1.png"}
              width={175}
              height={220}
              alt="img"
              className="h-[220px] lg:min-w-[550px] md:h-[400px]"
            />
            <div className="flex flex-col md:gap-2 gap-1">
              <Image
                src={"/images/apic2.png"}
                width={175}
                height={110}
                alt="img"
                className="lg:min-w-[400px] md:h-[200px] h-[110px]"
              />
              <Image
                src={"/images/apic3.png"}
                width={175}
                height={110}
                alt="img"
                className="lg:min-w-[400px] md:h-[200px] h-[110px]"
              />
            </div>
          </div>
          <div className="md:min-w-[630px] z-10  w-[300px] pText p-2 md:p-3 border-4 border-white bg-deepTeal text-white">
            <p></p>
          </div>
        </div>
      </div>

      {/* Mission And Values Section */}
      {/* Content */}
      <section
        id="Mission"
        style={{ backgroundImage: "url('/images/abgimg.jpg')" }}
        className="relative py-10 sm:py-14 lg:py-20 min-h-[600px] my-[50px] md:my-[100px]  bg-cover bg-center bg-no-repeat  z-10  mx-auto text-center px-4 sm:px-6 lg:px-8 text-white"
      >
        {/* Overlay */}
        <div className="bg-black/50 hidden md:block absolute inset-0"></div>
        {/* image blob */}
        <Container
          title={"Our Mission and Values"}
          h1={<span>Driven By Purpose, Guided By Principles.</span>}
          h2={
            "To be the leading provider of innovative IT solutions that empower communities and industries to  seamlessly."
          }
          textAllign={"text-center"}
        />

        {/* Values Section */}
        <div className="flex flex-wrap flex-col md:absolute md:mt-28 md:left-28 z-50  items-center justify-center md:flex-row  gap-4 md:gap-8 mx-auto py-10 my-[60px] *:h-[260px] *:w-[300px] bg-cyan-100 sm:bg-transparent">
          {/* Card 1 */}
          <div className="group lg:motion-preset-oscillate motion-duration-2000   hover:bg-blue hover:text-white bg-[#FAFAFA] text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ">
            <div className="flex justify-center mb-4">
              <Image
                src={"/icons/sustainability-icon.svg"}
                width={80}
                height={80}
                alt="Security"
                className="group-hover:hidden"
              />
              <Image
                src={"/icons/sustainabilityWhite-icon.svg"}
                width={80}
                height={80}
                alt="Security"
                className="group-hover:block hidden"
              />
            </div>
            <h3 className="text-base sm:text-2xl font-bold mb-2 h1Text mt-2">
              Security
            </h3>
            <p className=" group-hover:text-white pText">
              Driving solutions that prioritize your security.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group lg:motion-preset-oscillate motion-duration-2000  hover:bg-darkBlue-500 hover:text-white bg-[#FAFAFA] text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ">
            <div className="flex justify-center mb-4">
              <Image
                src={"/icons/innovation-icon.svg"}
                width={80}
                height={80}
                alt="Innovation"
                className="group-hover:hidden"
              />
              <Image
                src={"/icons/innovationWhite-icon.svg"}
                width={80}
                height={80}
                alt="Innovation"
                className="group-hover:block hidden"
              />
            </div>
            <h3 className="text-base sm:text-2xl font-bold mb-2 h1Text mt-2">
              Innovation
            </h3>
            <p className="text-sm sm:text-base text-gray-600 group-hover:text-white pText">
              Constantly evolving to offer state-of-the-art IT technologies.
            </p>
          </div>

          {/* Card 3 */}
          <div className=" group lg:motion-preset-oscillate motion-duration-2000 hover:bg-blue hover:text-white bg-[#FAFAFA] text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ">
            <div className="flex justify-center mb-4">
              <Image
                src={"/icons/customer-centric-icon.svg"}
                width={85}
                height={85}
                alt="Customer-Centric Approach"
                className="group-hover:hidden"
              />
              <Image
                src={"/icons/customer-centricWhite-icon.svg"}
                width={80}
                height={80}
                alt="Customer-Centric Approach"
                className="group-hover:block hidden"
              />
            </div>
            <h3 className="text-base sm:text-2xl font-bold mb-2 h1Text mt-2">
              Customer-Centric Approach
            </h3>
            <p className="text-sm sm:text-base text-gray-600 group-hover:text-white pText">
              Ensuring customer satisfaction through dedicated support and
              quality solutions.{" "}
            </p>
          </div>

          {/* Card 4 */}
          <div className="group lg:motion-preset-oscillate motion-duration-2000  hover:bg-darkBlue hover:text-white bg-[#FAFAFA] text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ">
            <div className="flex justify-center mb-4">
              <Image
                src={"/icons/integrity-icon.svg"}
                width={80}
                height={80}
                alt="Integrity"
                className="group-hover:hidden"
              />
              <Image
                src={"/icons/integrityWhite-icon.svg"}
                width={80}
                height={80}
                alt="Integrity"
                className="group-hover:block hidden"
              />
            </div>
            <h3 className="text-base sm:text-2xl font-bold mb-2 h1Text mt-2">
              Integrity
            </h3>
            <p className="text-sm sm:text-base text-gray-600 group-hover:text-white pText">
              Building trust through transparent practices and reliable services
            </p>
          </div>

          {/* Card 5 */}
          <div className="group lg:motion-preset-oscillate motion-duration-2000  hover:bg-blue hover:text-white bg-[#FAFAFA] text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ">
            <div className="flex justify-center mb-4">
              <Image
                src={"/icons/integrity-icon.svg"}
                width={80}
                height={80}
                alt="Providing Value"
                className="group-hover:hidden"
              />
              <Image
                src={"/icons/integrityWhite-icon.svg"}
                width={80}
                height={80}
                alt="Providing Value"
                className="group-hover:block hidden"
              />
            </div>
            <h3 className="text-base sm:text-2xl font-bold mb-2 h1Text mt-2">
              Providing Value
            </h3>
            <p className="text-sm sm:text-base text-gray-600 group-hover:text-white pText">
              Partnering with customers and stakeholders to achieve shared goals
              and provide value.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        id="WhyUs"
        className="my-[50px] md:my-48 px-6 md:px-[50px] lg:px-[150px]"
      >
        <Container
          title={"Why Choose Us"}
          h1={<span>Why We're The Best Choice For Expert IT Solutions</span>}
          h2={"Discover How We Stand Out In The World Of Renewable Energy"}
          textAllign={"text-center "}
        />
        <div className="slider-container">
          <Slider className="py-10" {...settings}>
            {/* Card 1 */}
            <div className="border-green border-2 bg-[#FAFAFA] text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[80px] h-[260px]">
              <div className="flex justify-center mb-4">
                <Image
                  src={"/icons/Group.png"}
                  width={100}
                  height={100}
                  alt="Integrity"
                  className="w-[100px] h-[100px] "
                />
              </div>
              <h3 className="text-base sm:text-xl font-bold mb-2">
                100% Customizable IT Plans
              </h3>
              <p className="text-sm sm:text-base text-gray-600 ">
                Tailored Solutions Designed To Meet Your IT Needs, Ensuring
                Maximum Efficiency
              </p>
            </div>

            {/* Card 2 */}
            <div className="border-green border-2 bg-[#FAFAFA] text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[80px] h-[260px]">
              <div className="flex justify-center mb-4">
                <Image
                  src={"/icons/Group (1).png"}
                  width={100}
                  height={100}
                  alt="Integrity"
                  className="w-[100px] h-[100px] "
                />
              </div>
              <h3 className="text-base sm:text-xl font-bold mb-2">
                Certified IT Experts
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Our Team Comprises Experienced And Accredited Professionals
                Dedicated To Excellence.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border-green border-2 bg-[#FAFAFA] text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[80px] h-[260px]">
              <div className="flex justify-center mb-4">
                <Image
                  src={"/icons/Group (2).png"}
                  width={100}
                  height={100}
                  alt="Integrity"
                  className="w-[100px] h-[100px] "
                />
              </div>
              <h3 className="text-base sm:text-xl font-bold mb-2">
                24/7 Customer Support
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                We're Here To Assist You Anytime, Ensuring A smooth And
                Hassle-Free Experience.
              </p>
            </div>
          </Slider>
        </div>
      </section>

      {/* leaders section */}
      <section className="md:-mt-20 flex flex-col items-center bg-blue py-8 md:py-20 px-6 md:px-[50px] lg:px-[150px]">
        <Container
          title={"Leaders"}
          h1={"The People Powering IT Solutions"}
          textAllign={"text-center md:px-36"}
        />
        <div className="flex flex-col md:flex-row items-center justify-center gap-8  md:gap-28 my-16">
          <div className="group flex flex-col justify-center items-center">
            {/* Fixed size container to avoid layout shifting */}
            <div className="relative flex items-center justify-center w-[230px] md:w-[250px] md:h-[250px] h-[230px] border rounded-full border-deepTeal group-hover:bg-deepTeal bg-skyBlue p-1 overflow-hidden">
              {/* Animated Image */}
              <motion.div
                className="rounded-full overflow-hidden"
                initial={{ width: 200, height: 200 }}
                whileHover={{ width: 185, height: 198 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={"/images/persona.png"}
                  width={215}
                  height={215}
                  alt="user"
                  className="rounded-full"
                />
              </motion.div>

              {/* Animated Icon Div */}
              <motion.div
                className="absolute right-2 space-y-7 text-white hidden group-hover:block"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <FaFacebook className="-ml-1 size-6" />
                <FaFacebook className="ml-3 size-6" />
                <FaFacebook className="-ml-1 size-6" />
              </motion.div>
            </div>
            <div className="text-center mt-2">
              <h5 className="font-semibold">John Smith</h5>
              <h6 className="font-thin">Chief Engineer</h6>
            </div>
          </div>
          <div className="group flex flex-col justify-center items-center">
            {/* Fixed size container to avoid layout shifting */}
            <div className="relative flex items-center justify-center w-[250px] h-[250px] border rounded-full border-deepTeal group-hover:bg-deepTeal bg-skyBlue p-1 overflow-hidden">
              {/* Animated Image */}
              <motion.div
                className="rounded-full overflow-hidden"
                initial={{ width: 200, height: 200 }}
                whileHover={{ width: 185, height: 198 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={"/images/persona.png"}
                  width={215}
                  height={215}
                  alt="user"
                  className="rounded-full"
                />
              </motion.div>

              {/* Animated Icon Div */}
              <motion.div
                className="absolute right-2 space-y-7 text-white hidden group-hover:block"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <FaFacebook className="-ml-1 size-6" />
                <FaFacebook className="ml-3 size-6" />
                <FaFacebook className="-ml-1 size-6" />
              </motion.div>
            </div>
            <div className="text-center mt-2">
              <h5 className="font-semibold">John Smith</h5>
              <h6 className="font-thin">Chief Engineer</h6>
            </div>
          </div>
          <div className="group flex flex-col justify-center items-center">
            {/* Fixed size container to avoid layout shifting */}
            <div className="relative flex items-center justify-center w-[250px] h-[250px] border rounded-full border-deepTeal group-hover:bg-deepTeal bg-skyBlue p-1 overflow-hidden">
              {/* Animated Image */}
              <motion.div
                className="rounded-full overflow-hidden"
                initial={{ width: 200, height: 200 }}
                whileHover={{ width: 185, height: 198 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={"/images/persona.png"}
                  width={215}
                  height={215}
                  alt="user"
                  className="rounded-full"
                />
              </motion.div>

              {/* Animated Icon Div */}
              <motion.div
                className="absolute right-2 space-y-7 text-white hidden group-hover:block"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <FaFacebook className="-ml-1 size-6" />
                <FaFacebook className="ml-3 size-6" />
                <FaFacebook className="-ml-1 size-6" />
              </motion.div>
            </div>
            <div className="text-center mt-2">
              <h5 className="font-semibold">John Smith</h5>
              <h6 className="font-thin">Chief Engineer</h6>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="my-8 relative flex flex-col gap-6 md:items-end md:flex-row items-center px-8 md:px-28  py-8 md:py-16 ">
        {/* <Image
          src={"/icons/cctv.svg"}
          width={150}
          height={150}
          alt="panel"
          className="md:block hidden absolute -top-20 right-20"
        /> */}
        <Image
          src={"/icons/cctv.svg"}
          width={150}
          height={150}
          alt="panel"
          className="md:block hidden absolute -top-20 right-0"
        />

        <div className="md:max-w-[700px] space-y-6">
          <Container
            title={"Our Statistics"}
            h1={"Our Impact in Numbers"}
            h2={"Pioneering the future of IT with proven results"}
            textAllign={"text-center md:text-start"}
          />
          <Image
            src={"/icons/computer-and-people.svg"}
            width={450}
            height={400}
            alt="panel"
            className="md:block hidden"
          />
        </div>
        <div className="flex flex-col md:mt-28 mt-6 gap-4">
          <div>
            <h4 className="md:h2Text  md:mb-3 mb-1 text-lg">
              Projects Completed
            </h4>
            <div className="flex gap-4 items-center text-lg font-semibold">
              <AnimatedDiv
                width="50%"
                duration={1}
                delay={0.2}
                bgColor="bg-blue"
              />
              <span>1000+</span>
            </div>
          </div>
          <div>
            <h4 className="md:h2Text  md:mb-3 mb-1 text-lg">Happy Customers</h4>
            <div className="flex gap-4 items-center text-lg font-semibold">
              <AnimatedDiv
                width="50%"
                duration={1}
                delay={0.2}
                bgColor="bg-red-500"
              />

              <span>1000+</span>
            </div>
          </div>
          <div>
            <h4 className="md:h2Text  md:mb-3 mb-1 text-lg">
              Secutity Solutions Provided
            </h4>
            <div className="flex gap-4 items-center text-lg font-semibold">
              <AnimatedDiv
                width="80%"
                duration={1.5}
                delay={0.3}
                bgColor="bg-green"
              />

              <span>1000+</span>
            </div>
          </div>
          <div>
            <h4 className="md:h2Text  md:mb-3 mb-1 text-lg">Global Reach</h4>
            <div className="flex gap-4 items-center text-lg font-semibold">
              <AnimatedDiv
                width="50%"
                duration={1}
                delay={0.2}
                // bgColor="bg-red-500"
              />
              <span>1000+</span>
            </div>
          </div>
          <div>
            <h4 className="md:h2Text  md:mb-3 mb-1 text-lg">
              Businesses Digitalized
            </h4>
            <div className="flex gap-4 items-center text-lg font-semibold">
              <AnimatedDiv
                width="50%"
                duration={1}
                delay={0.2}
                bgColor="bg-darkBlue"
              />
              <span>1000+</span>
            </div>
          </div>
        </div>
      </section>
      <QuerySec />
    </div>
  );
};

export default page;

const AnimatedDiv = ({
  width,
  duration = 1.5,
  delay = 0.3,
  bgColor = "bg-deepTeal",
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start({
        width,
        transition: { duration, delay },
      });
    }
  }, [inView, controls, width, duration, delay]);

  return (
    <div className="md:min-w-[400px] w-[250px] relative block h-4 md:h-9 rounded-sm bg-text/5 overflow-hidden">
      <motion.div
        ref={ref}
        className={`absolute left-0 h-full ${bgColor}`}
        initial={{ width: "0%" }}
        animate={controls}
      />
    </div>
  );
};
