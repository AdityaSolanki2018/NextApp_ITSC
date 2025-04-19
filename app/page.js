import Image from "next/image";
import Button from "@/components/Button";
// import Conatiner from "@/components/Conatiner";
import { FaPlay } from "react-icons/fa6";
import Link from "next/link";
import AboutSec from "@/components/sections/AboutSec";
import Container from "@/components/Container";
import PdfDownload from "@/components/pdfDownload";
import { ClientCarousel } from "@/components/clientCarousel";
import WorkFlow from "@/components/sections/WorkFlow";
import ServicesSec from "@/components/sections/ServicesSec";
import Testimonials from "@/components/sections/Testimonials";
import QuerySec from "@/components/sections/QuerySec";
// import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <section className="py-2 relative overflow-hidden -z-30 dark:bg-gray-900">
      <div className="absolute -top-6 -z-20">
        <Image
          src={"/images/Herobg1.png"}
          width={900}
          height={800}
          alt="rect"
          className="block min-h-[410px] max-h-[700px] w-screen blur-sm dark:bg-gray-900"
        />

        {/* try */}

        <div className="absolute md:-top-[57px] -top-[120px]  -left-6 -right-5 z-10 ">
          <div className="bg-[#f2f2f2] dark:bg-gray-900 relative h-52 -rotate-[2deg] min-w-[500px]">
            <div className="bg-[#f2f2f2]  dark:bg-gray-900 absolute lg:bottom-0 lg:left-24 bottom-1 rotate-[42deg] h-28 lg:w-56 w-36 rounded-xl -z-10" />
          </div>
        </div>
      </div>

      <div className="text-white max-w-[780px] my-24 md:my-56 mx-8 md:mx-20 lg:mx-32 border-l-4 pl-2 md:pl-5 border-solarYellow">
        <h1 className="h1Text  md:h1TextLg motion-preset-slide-left">
          One Stop {""}
          <br />
          <span className="text-solarYellow hover:motion-preset-pop motion-duration-2000">
            Solution{" "}
          </span>
          For All Your
          <span className="text-solarYellow hover:motion-preset-pop motion-duration-2000">
            {" "}
            IT Needs!{" "}
          </span>
        </h1>
        <h2 className="h2Text md:h2TextLg mt-1 motion-preset-blur-right motion-duration-2000">
          We provide most reliable <br className="hidden md:block" />
          Security, Networking and IT infrastructure Solutions.{" "}
        </h2>
        <div className="flex items-center gap-3 md:gap-5 my-4">
          <Link href={"/contact"}>
            <Button text={"let's talk"} />
          </Link>
          <button className=" text-solarYellow hover:animate-pulse border border-solarYellow rounded-full p-2.5">
            <FaPlay />
          </button>
        </div>
      </div>
      <div className="md:flex my-24 dark:bg-gray-900 items-center gap-10">
        <div className="aboutImgContainer dark:bg-darkBlue lg:w-[350px] lg:h-[400px] mx-10 relative motion-preset-slide-right mb-10">
          <Image
            src="/images/aboutImg.avif"
            width={240}
            height={240}
            alt="About Image"
            className="w-full h-fit transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-text/50"
          />
          <div className="absolute -bottom-12 -right-8 bg-[#FAFAFA] dark:bg-gray-800 rounded-full w-30 h-30 p-1 *:pt-4 capitalize text-wrap shadow text-center text-white">
            <div className="transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-text/50 bg-solarYellow dark:bg-yellow-500 rounded-full w-28 h-28">
              <p className="font-bold text-4xl">12+</p>
              <p className="text-sm">years Experience</p>
            </div>
          </div>
          <div className="absolute -bottom-12 -left-20 w-[296px] lg:w-[400px] lg:h-[300px] h-[233px] bg-darkBlue dark:bg-blue-800 -z-10 sm:mt-10 mt-[100px]" />
        </div>
        <AboutSec />
      </div>
      <div className=" *:my-20 *:px-6 *:lg:px-20">
        <Container
          title={"Our Client Companies"}
          h1={"Trusted Solar Solutions Backed by Leading Pump Brands"}
          h2={
            "Powering Sustainability with Top-Tier Solar Panels and Pumps from Industry Giants like Oswal, CRI, Shakti, and Crompton."
          }
          textAllign={"text-center md:mx-40"}
        />
        <ClientCarousel />
        <PdfDownload />
        <ServicesSec />
        <WorkFlow />
        <Testimonials />
        {/* <Projects /> */}
      </div>
      <QuerySec />
    </section>
  );
}
