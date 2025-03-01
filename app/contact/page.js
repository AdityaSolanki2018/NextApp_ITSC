import Container from "@/components/Container";
import QueryForm from "@/components/QueryForm";
import QuerySec from "@/components/sections/QuerySec";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";

function contact() {
  return (
    <div className="min-h-screen relative overflow-hidden dark:bg-gray-900">
      {/* Hero Section with Dark Mode Gradient */}
      <Image
        src="/images/herobg2.png"
        width={720}
        height={400}
        alt="img"
        className="-z-30 absolute w-full -top-4 h-[380px] md:min-h-[550px] blur-sm opacity-90 dark:opacity-70"
      />

      <div className="absolute lg:-top-[78px] -top-[140px] -left-6 -right-5 z-10">
        <div className="bg-[#FAFAFA] dark:bg-gray-800 relative h-52 -rotate-[3deg] min-w-[500px]">
          <div className="bg-[#FAFAFA] dark:bg-gray-800 absolute lg:bottom-0 lg:left-24 bottom-1 rotate-[42deg] h-28 lg:w-56 w-36 rounded-xl -z-10" />
        </div>
      </div>

      {/* Light-to-Dark Mode Background Element */}
      <div className="h-28 bg-[#FAFAFA] dark:bg-gray-800 absolute -left-2 -right-5 z-10 top-[290px] md:top-[475px] -rotate-[4deg]" />

      {/* Page Heading */}
      <div className="flex flex-col pt-32 md:pt-56 justify-center items-center gap-4 md:gap-8">
        <h1 className="h1Text md:h1TextLg text-solarYellow">Contact Us</h1>
        <div className="flex divide-x-4 divide-solarYellow *:px-3 md:h2TextLg h2Text">
          <Link
            href="/"
            className="text-gray-800 dark:text-gray-300 hover:text-solarYellow transition"
          >
            Home
          </Link>
          <button className="text-solarYellow">Contact Us</button>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="mt-32 md:mt-44 mb-20 mx-8 md:mx-20 lg:mx-32 z-20 *:py-6 relative">
        <FiPhoneCall className="absolute -right-5 md:right-36 -rotate-12 size-32 md:size-48 text-deepTeal/20 dark:text-solarYellow/30 -top-10 md:-top-12" />
        <Container
          title="Contact Us"
          h1="Let’s Power Your Future Together."
          h2="Have questions? Want to start your solar journey? We’re here to help."
          textAllign="text-center md:mx-40"
        />

        {/* Contact Details Cards */}
        <div className="flex flex-col text-gray-900 dark:text-white md:grid md:grid-cols-2 md:gap-6 gap-3 *:flex *:flex-col *:gap-2 *:items-center *:justify-center px-16 md:px-36 w-fit mx-auto *:md:w-[400px] text-center *:p-5 *:h-[220px]">
          {/* Address Card */}
          <span className="bg-deepTeal dark:bg-darkBlue rounded-md transform transition-transform duration-300 ease-in-out hover:scale-110 shadow-lg hover:shadow-solarYellow/40">
            <Image
              src="/icons/addresssvg.svg"
              width={40}
              height={40}
              alt="Address Icon"
            />
            <h1 className="h1Text mt-2">Address</h1>
            <p className="pText">Company Regd. Address</p>
            <span className="pText">
              F-12 Ground Floor, Viswakarma Colony, New Delhi 110044 (India)
            </span>
          </span>

          {/* Phone Number Card */}
          <span className="bg-green dark:bg-gray-700 rounded-md transform transition-transform duration-300 ease-in-out hover:scale-110 shadow-lg hover:shadow-solarYellow/40">
            <Image
              src="/icons/Phone.svg"
              width={40}
              height={40}
              alt="Phone Icon"
            />
            <h1 className="h1Text mt-2">Phone Number</h1>
            <p className="pText">Enquiry: 9312644140</p>
            <p className="pText">Customer Support: 9289013290, 9289014204</p>
          </span>

          {/* Email Card */}
          <span className="bg-deepTeal dark:bg-gray-800 rounded-md transform transition-transform duration-300 ease-in-out hover:scale-110 shadow-lg hover:shadow-solarYellow/40">
            <Image
              src="/icons/emailsvg.svg"
              width={40}
              height={40}
              alt="Email Icon"
            />
            <h1 className="h1Text mt-2">Email</h1>
            <p className="pText">contactbdbvpl@gmail.com</p>
          </span>

          {/* Timings Card */}
          <span className="bg-green dark:bg-gray-700 rounded-md transform transition-transform duration-300 ease-in-out hover:scale-110 shadow-lg hover:shadow-solarYellow/40">
            <Image
              src="/icons/timingsvg.svg"
              width={50}
              height={50}
              alt="Timings Icon"
            />
            <h1 className="h1Text">Timings</h1>
            <p className="pText">Monday to Friday: 9 AM - 6 PM</p>
          </span>
        </div>
      </div>
      <QuerySec />
    </div>
  );
}

export default contact;
