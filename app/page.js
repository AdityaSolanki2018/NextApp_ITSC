import Image from "next/image";
import Button from "@/components/Button";
// import Conatiner from "@/components/Conatiner";
import { FaPlay } from "react-icons/fa6";
import Link from "next/link";
import AboutSec from "@/components/sections/AboutSec";

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
          Harness the Sun, {""}
          <br />
          <span className="text-solarYellow hover:motion-preset-pop motion-duration-2000">
            Power{" "}
          </span>
          Your
          <span className="text-solarYellow hover:motion-preset-pop motion-duration-2000">
            {" "}
            Future!{" "}
          </span>
        </h1>
        <h2 className="h2Text md:h2TextLg mt-1 motion-preset-blur-right motion-duration-2000">
          Let the Sun Work for You <br className="hidden md:block" />
          Sustainable Power, Everyday Savings!{" "}
        </h2>
        <div className="flex items-center gap-3 md:gap-5 my-4">
          <Link href={"/contactus"}>
            <Button text={"let's talk"} />
          </Link>
          <button className=" text-solarYellow hover:animate-pulse border border-solarYellow rounded-full p-2.5">
            <FaPlay />
          </button>
        </div>
      </div>

      <div className="md:flex my-24 dark:bg-gray-900 items-center gap-10 ">
        <div className="aboutImgContainer dark:bg-darkBlue lg:w-[350px] lg:h-[400px]  mx-10 relative motion-preset-slide-right mb-10">
          <Image
            src={"/images/abiutImg.avif"}
            width={240}
            height={263}
            alt="img"
            className="w-full h-fit transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg  hover:shadow-text/50"
          />
          <div className="absolute -bottom-12 -right-8  bg-[#F2F2F2] dark:bg-gray-700 rounded-full w-30 h-30 p-1 *:pt-4 capitalize text-wrap shadow text-center text-white">
            <div className="transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg  hover:shadow-text/50 bg-solarYellow rounded-full w-28 h-28">
              <p className="font-bold text-4xl">12+</p>
              <p className="text-sm">years Experience</p>
            </div>
          </div>
          <div className="absolute -bottom-12 -left-20 w-[296px] lg:w-[400px] lg:h-[300px] h-[233px] bg-darkBlue dark:bg-blue -z-10 " />
        </div>
        <div className="w-full mt-[100px] sm:mt-10">
          <AboutSec />
        </div>
      </div>
    </section>
  );
}

// import Image from "next/image";
// import Button from "@/components/Button";
// import { FaPlay } from "react-icons/fa6";
// import Link from "next/link";
// import AboutSec from "@/components/sections/AboutSec";

// export default function Home() {
//   return (
//     <section className="py-2 relative overflow-hidden bg-white dark:bg-gray-900">
//       {/* Hero Background Image */}
//       <div className="absolute -top-6 -z-20 w-full h-[410px] md:h-[700px] overflow-hidden">
//         <Image
//           src="/images/Herobg1.png"
//           layout="fill"
//           objectFit="cover"
//           alt="Hero Background"
//           className="w-full h-full object-cover blur-sm dark:opacity-100"
//         />
//       </div>

//       {/* Decorative Section */}
//       <div className="absolute md:-top-[57px] -top-[120px] -left-6 -right-5 z-10">
//         <div className="bg-[#f2f2f2] dark:bg-gray-800 relative h-52 -rotate-[3deg] min-w-[500px]">
//           <div className="bg-[#f2f2f2] dark:bg-gray-700 absolute lg:bottom-0 lg:left-24 bottom-1 rotate-[42deg] h-28 lg:w-56 w-36 rounded-xl -z-10" />
//         </div>
//       </div>

//       {/* Hero Text Section */}
//       <div className="text-gray-900 dark:text-white max-w-[780px] my-24 md:my-56 mx-8 md:mx-20 lg:mx-32 border-l-4 pl-2 md:pl-5 border-solarYellow dark:border-yellow-500">
//         <h1 className="h1Text md:h1TextLg motion-preset-slide-left">
//           Harness the Sun, {""}
//           <br />
//           <span className="text-solarYellow dark:text-yellow-400 hover:motion-preset-pop motion-duration-2000">
//             Power{" "}
//           </span>
//           Your
//           <span className="text-solarYellow dark:text-yellow-400 hover:motion-preset-pop motion-duration-2000">
//             {" "}
//             Future!{" "}
//           </span>
//         </h1>
//         <h2 className="h2Text md:h2TextLg mt-1 motion-preset-blur-right motion-duration-2000">
//           Let the Sun Work for You <br className="hidden md:block" />
//           Sustainable Power, Everyday Savings!{" "}
//         </h2>
//         <div className="flex items-center gap-3 md:gap-5 my-4">
//           <Link href="/contactus">
//             <Button text="Let's Talk" />
//           </Link>
//           <button className="text-solarYellow dark:text-yellow-400 hover:animate-pulse border border-solarYellow dark:border-yellow-400 rounded-full p-2.5">
//             <FaPlay />
//           </button>
//         </div>
//       </div>

//       {/* About Section */}
//       <div className="md:flex my-24 items-center gap-10">
//         <div className="aboutImgContainer lg:w-[350px] lg:h-[400px] mx-10 relative motion-preset-slide-right">
//           <Image
//             src="/images/abiutImg.avif"
//             width={240}
//             height={263}
//             alt="About Image"
//             className="w-full h-fit transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-text/50"
//           />
//           <div className="absolute -bottom-12 -right-8 bg-[#FAFAFA] dark:bg-gray-800 rounded-full w-30 h-30 p-1 *:pt-4 capitalize text-wrap shadow text-center text-white">
//             <div className="transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-text/50 bg-solarYellow dark:bg-yellow-500 rounded-full w-28 h-28">
//               <p className="font-bold text-4xl">12+</p>
//               <p className="text-sm">years Experience</p>
//             </div>
//           </div>
//           <div className="absolute -bottom-12 -left-20 w-[296px] lg:w-[400px] lg:h-[300px] h-[233px] bg-darkBlue dark:bg-blue-800 -z-10" />
//         </div>
//         <AboutSec />
//       </div>
//     </section>
//   );
// }
