import Container from "@/components/Container";
import QueryForm from "@/components/QueryForm";
import QuerySec from "@/components/sections/QuerySec";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";

function contact() {
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

      {/* Debugging border (Remove after testing) */}
      <div className="absolute inset-0 border-2 border-green-500 z-10" />

      {/* Page Heading */}
      <div className="relative flex flex-col pt-32 md:pt-56 justify-center items-center gap-4 md:gap-8 z-20">
        <h1 className="h1Text md:h1TextLg text-solarYellow">Contact Us</h1>
        <div className="flex divide-x-4 divide-solarYellow *:px-3 md:h2TextLg h2Text">
          <Link
            href="/"
            className="text-gray-600 dark:text-gray-300 hover:text-solarYellow transition"
          >
            Home
          </Link>
          <button className="text-solarYellow">Contact Us</button>
        </div>
      </div>

      {/* Contact Information */}
      <div className="relative mt-40 my-20 md:mt-44 mb-20 mx-8 md:mx-20 lg:mx-32 z-20">
        <FiPhoneCall className="absolute -right-5 md:right-36 -rotate-12 size-32 md:size-48 text-deepTeal/20 dark:text-solarYellow/30 -top-10 md:-top-12" />
        <Container
          title="Contact Us"
          h1="Let’s Power Your Future Together."
          h2="Have questions? Want to start your IT journey? We’re here to help."
          textAllign="text-center md:mx-40"
        />
      </div>

      <QuerySec />
    </div>
  );
}

export default contact;
