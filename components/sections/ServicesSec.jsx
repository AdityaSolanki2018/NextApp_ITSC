"use client";

import React from "react";
import Container from "@/components/Container";

import Image from "next/image";
import { services } from "@/constants/dummy";
import Button from "../Button";
import { FaArrowRightLong } from "react-icons/fa6";
import {motion} from "framer-motion"

const ServicesSec = () => {
  return (
    <div id="Services" className="relative bg-gradient-to-br from-blue  to-darkBlue py-12 md:py-20">
      <Container 
        textAllign={"text-center text-white md:px-24 mx-auto"}
        title={"Our services"}
        h1={
          "Top-Rated IT Services in Delhi NCR – Sales & Support."
        }
        h2={
          "From IT Support to Security Systems – We’ve Got Your Tech Needs Covered: Laptops, Servers, Networking, CCTV, EM Locks, Biometric Access, Solar Panels & More."
        }
      />

      {/* Decorative Image for Mobile */}
      <Image
        src={"/images/homeimg.png"}
        width={150}
        height={80}
        alt="illus"
        className="absolute -right-0 md:hidden -top-16 z-0"
      />
      <div className="mt-8 *:mx-auto md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 lg:gap-8 lg:px-16">
        {services.slice(0, 5).map((service) => (
          <Card service={service} key={service.id} />
        ))}
      </div>

      {/* Decorative Image for Larger Screens */}
      <Image
        src={"/images/homeimg.png"}
        width={500}
        height={400}
        alt="illus"
        className="absolute hidden md:block -right-8 lg:-right-12 -bottom-14 w-[500px] md:h-[350px] z-0"
      />
    </div>
  );
};

export default ServicesSec;

const Card = ({ service,key }) => {
  return (
    <div
      key={key}
      className="group relative overflow-hidden bg-white flex flex-col items-start mt-2 pb-1 w-[345px] lg:w-[380px] lg:h-[350px] hover:shadow-md hover:shadow-text/70 "
    >
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
          className="absolute opacity-0 -top-20 -left-5 -right-5 group-hover:opacity-100 group-hover:top-0 transition-all duration-500 ease-in-out h-[190px] bg-gradient-to-b from-blue to-darkBlue px-14 text-center items-center justify-center pt-12 h2Text rounded-b-full text-solarYellow"
        >
          {" "}
          {service.name}
        </motion.div>
      <Image
        src={service.src}
        width={345}
        height={215}
        alt="s1"
        className="w-full"
      />
      <p className="pText flex-1 lg:pTextLg text-wrap px-3 mt-2">
        {service.desc}
      </p>

      <Button
        variant={"sec"}
        text={"Learn More"}
        icon={
          <FaArrowRightLong className="text-solarYellow inline-flex ml-2 size-5" />
        }
      />
    </div>
  );
};
