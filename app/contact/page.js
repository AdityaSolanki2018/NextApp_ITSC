"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import QuerySec from "@/components/sections/QuerySec";
import MapComponent from "@/components/MapComponent";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Contact() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/herobg1.png"
          width={1920}
          height={1080}
          alt="Hero Background"
          className="w-full h-[380px] md:h-[550px] object-cover opacity-100 dark:opacity-70"
        />
      </div>

      {/* Page Heading */}
      <div className="relative flex flex-col pt-32 md:pt-56 justify-center items-center gap-4 md:gap-8 z-20">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="h1Text md:h1TextLg text-solarYellow"
        >
          Contact Us
        </motion.h1>
        <div className="flex divide-x-4 divide-solarYellow *:px-3 md:h2TextLg h2Text">
          <Link
            href="/"
            className="text-gray-600 dark:text-gray-300 hover:text-solarYellow transition"
          >
            Home
          </Link>
          <span className="text-solarYellow">Contact Us</span>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative mt-40 my-20 md:mt-44 mb-20 mx-8 md:mx-20 lg:mx-32 z-20">
        <FiPhoneCall className="absolute -right-5 md:right-36 -rotate-12 size-32 md:size-48 text-deepTeal/20 dark:text-solarYellow/30 -top-10 md:-top-12" />
        <Container
          title="Contact Us"
          h1="Let’s Power Your Future Together."
          h2="Have questions? Want to start your IT journey? We’re here to help."
          textAllign="text-center md:mx-40"
        />

        {/* Contact Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-16">
          {[{
            icon: "/icons/addresssvg.svg",
            title: "Address",
            desc: "Company Regd. Add",
            text: "B-210, Ground Floor, Veer Complex, Green Field Colony, Faridabad",
            bg: "bg-darkBlue",
          }, {
            icon: "/icons/Phone.svg",
            title: "Phone Number",
            desc: "Enquiry: 9818646026",
            text: "Customer support: 7827124622",
            bg: "bg-blue",
          }, {
            icon: "/icons/emailsvg.svg",
            title: "Email",
            desc: "mahesh.solanki@gmail.com",
            text: "info@itsolutionconsultancy.com",
            bg: "bg-darkBlue md:bg-blue",
          }, {
            icon: "/icons/timingsvg.svg",
            title: "Timings",
            desc: "Monday to Saturday: 9 AM - 6 PM",
            text: "",
            bg: "bg-blue md:bg-darkBlue",
          }].map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className={`rounded-xl text-white p-6 flex flex-col items-center text-center shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 ${card.bg}`}
            >
              <Image src={card.icon} alt={card.title} width={50} height={50} />
              <h2 className="text-2xl font-semibold mt-3">{card.title}</h2>
              <p className="mt-2">{card.desc}</p>
              {card.text && <p className="mt-1">{card.text}</p>}
            </motion.div>
          ))}
        </div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <MapComponent />
        </motion.div>
      </div>

      {/* Query Form or Section */}
      <QuerySec />
    </div>
  );
}
