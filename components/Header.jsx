// // "use client";
// // import Image from "next/image";
// // import React from "react";
// // import Button from "./Button";
// // import { FaPlay } from "react-icons/fa6";
// // import Link from "next/link";
// // import { useState } from "react";
// // import { usePathname } from "next/navigation";
// // import DarkModeToggle from "./DarkModeToggle";
// // const Header = () => {
// //   // State to manage the menu icon and visibility of the navbar list
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const pathName = usePathname();

// //   const Menu = () => {
// //     setIsMenuOpen(!isMenuOpen);
// //   };

// //   return (
// //     <nav className="fixed top-0 w-full bg-[#f2f2f2] z-50 ">
// //       <section className="capitalize relative">
// //         <div className="md:flex py-1.5 px-2 lg:mx-20 md:items-center md:justify-between gap-1.5 md:gap-2.5">
// //           <div className="flex justify-between items-center ">
// //             <div className="flex flex-1">
// //               <Image
// //                 src={"/images/logoIT.png"}
// //                 width={50}
// //                 height={45}
// //                 alt="logo"
// //                 className="mx-2"
// //               />
// //               <div className="">
// //                 <h1 className="logoText uppercase text-blue">
// //                   IT <span className="text-text"> Solutions & Consultancy</span>
// //                 </h1>
// //                 <h5 className="text-[12px] font-bold text-text/80 font-roboto tracking-wide capitalize">
// //                   For all your IT needs
// //                 </h5>
// //               </div>
// //             </div>
// //             <div className="">
// //               <button
// //                 onClick={Menu}
// //                 className="bg-blue text-white p-2.5 lg:p-3 rounded md:hidden"
// //               >
// //                 <Image
// //                   src={isMenuOpen ? "/icons/close.svg" : "/icons/menu.svg"}
// //                   width={24}
// //                   height={24}
// //                   alt="menu"
// //                   className="text-white"
// //                 />
// //               </button>
// //             </div>
// //           </div>
// //           <div className="flex items-center gap-12">
// //             <ul
// //               className={`*:capitalize md:flex md:items-center md:gap-4 lg:gap-9 z-[1] bg-[#f2f2f2] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-6 py-0 md:pl-0 pl-7 transition-all ease-in duration-500 md:opacity-100 ${
// //                 isMenuOpen
// //                   ? "opacity-100 shadow top-[55px]"
// //                   : "opacity-0 top-[-400px]"
// //               }`}
// //             >
// //               <li className="my-6 md:my-0 hover:text-blue duration-300 lg:text-[18px]  pTex">
// //                 <Link href={"/"}>Home</Link>
// //               </li>
// //               <li className="my-6 md:my-0 hover:text-blue duration-300 lg:text-[18px] hover:font-semibol pTex ">
// //                 <Link href={"aboutus"}>About us</Link>
// //               </li>
// //               {pathName === "/" && (
// //                 <>
// //                   <li className="my-6 md:my-0 hover:text-blue duration-300 lg:text-[18px] hover:font-semibol pTex">
// //                     <Link href={"#"}>Services</Link>
// //                   </li>
// //                   <li className="my-6 md:my-0 hover:text-blue duration-300 lg:text-[18px] hover:font-semibol pTex">
// //                     <Link href={"/"}>Gallery</Link>
// //                   </li>
// //                   <li className="my-6 md:my-0 hover:text-blue duration-300 lg:text-[18px] hover:font-semibol pTex">
// //                     <Link href={"#"}>Query</Link>
// //                   </li>
// //                 </>
// //               )}
// //               {pathName === "/aboutus" && (
// //                 <>
// //                   <li className="my-6 md:my-0 hover:text-blue duration-300 lg:text-[18px] hover:font-semibol pTex">
// //                     <Link href={"#"}>Our Mission</Link>
// //                   </li>
// //                   <li className="my-6 md:my-0 hover:text-blue duration-300 lg:text-[18px] hover:font-semibol pTex">
// //                     <Link href={"#"}>Why Us</Link>
// //                   </li>
// //                   <li className="my-6 md:my-0 hover:text-blue duration-300 lg:text-[18px] hover:font-semibol pTex">
// //                     <Link href={"/"}>Gallery</Link>
// //                   </li>
// //                   <li className="my-6 md:my-0 hover:text-blue duration-300 lg:text-[18px] hover:font-semibol pTex">
// //                     <Link href={"#"}>Query</Link>
// //                   </li>
// //                 </>
// //               )}
// //               {pathName === "/contactus" && (
// //                 <>
// //                   <li className="my-6 md:my-0 hover:text-blue duration-300 lg:text-[18px] hover:font-semibol pTex">
// //                     <Link href={"/"}>Gallery</Link>
// //                   </li>
// //                   <li className="my-6 md:my-0 hover:text-blue duration-300 lg:text-[18px] hover:font-semibol pTex">
// //                     <Link href={"#"}>Query</Link>
// //                   </li>
// //                 </>
// //               )}
// //               {pathName === "/gallery" && (
// //                 <>
// //                   <li className="my-6 md:my-0 hover:text-blue duration-300 lg:text-[18px] hover:font-semibol pTex">
// //                     <Link href={"/"}>Gallery</Link>
// //                   </li>
// //                   <li className="my-6 md:my-0 hover:text-blue duration-300 lg:text-[18px] hover:font-semibol pTex">
// //                     <Link href={"contactus"}>Query</Link>
// //                   </li>
// //                 </>
// //               )}
// //             </ul>
// //             <div className="hidden md:flex items-center gap-1.5 md:gap-3">
// //               <Link href={"/"}>
// //                 <Button text={"Let's Talk"} />
// //               </Link>
// //             </div>
// //             <DarkModeToggle />
// //           </div>
// //         </div>
// //       </section>
// //     </nav>
// //   );
// // };

// // export default Header;
// "use client";
// import Image from "next/image";
// import React, { useState } from "react";
// import Button from "./Button";
// import { FaPlay } from "react-icons/fa6";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import DarkModeToggle from "./DarkModeToggle";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const pathName = usePathname();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-[#F2F2F2] dark:bg-gray-900 z-50">
//       <section className="relative py-2 px-4 md:px-8 flex items-center justify-between">
//         {/* Logo Section */}
//         <div className="flex items-center gap-2">
//           <Image
//             src="/images/logoIT.png"
//             width={50}
//             height={45}
//             alt="logo"
//             className="mx-2"
//           />
//           <div>
//             <h1 className="uppercase text-blue dark:text-white font-bold">
//               IT{" "}
//               <span className="text-gray-700 dark:text-gray-300">
//                 Solutions & Consultancy
//               </span>
//             </h1>
//             <h5 className="text-[12px] font-bold text-gray-500 dark:text-gray-400 tracking-wide capitalize">
//               For all your IT needs
//             </h5>
//           </div>
//         </div>

//         {/* Desktop Navigation */}
//         <ul className="hidden md:flex items-center gap-6 lg:gap-8 capitalize">
//           <li className="hover:text-blue dark:hover:text-yellow-400 transition">
//             <Link href="/">Home</Link>
//           </li>
//           <li className="hover:text-blue dark:hover:text-yellow-400 transition">
//             <Link href="/aboutus">About Us</Link>
//           </li>
//           {pathName === "/" && (
//             <>
//               <li className="hover:text-blue dark:hover:text-yellow-400 transition">
//                 <Link href="#">Services</Link>
//               </li>
//               <li className="hover:text-blue dark:hover:text-yellow-400 transition">
//                 <Link href="/gallery">Gallery</Link>
//               </li>
//             </>
//           )}
//         </ul>

//         {/* Right Section */}
//         <div className="flex items-center gap-4">
//           <div className="hidden md:block">
//             <Link href="/">
//               <Button text="Let's Talk" />
//             </Link>
//           </div>
//           <DarkModeToggle />

//           {/* Mobile Menu Button */}
//           <button
//             onClick={toggleMenu}
//             className="md:hidden p-2 rounded-md bg-blue text-white"
//           >
//             <Image
//               src={isMenuOpen ? "/icons/close.svg" : "/icons/menu.svg"}
//               width={24}
//               height={24}
//               alt="menu"
//             />
//           </button>
//         </div>
//       </section>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white dark:bg-gray-900 shadow-md absolute top-full left-0 w-full z-40">
//           <ul className="flex flex-col gap-4 p-4 capitalize">
//             <li className="hover:text-blue dark:hover:text-yellow-400 transition">
//               <Link href="/" onClick={toggleMenu}>
//                 Home
//               </Link>
//             </li>
//             <li className="hover:text-blue dark:hover:text-yellow-400 transition">
//               <Link href="/aboutus" onClick={toggleMenu}>
//                 About Us
//               </Link>
//             </li>
//             {pathName === "/" && (
//               <>
//                 <li className="hover:text-blue dark:hover:text-yellow-400 transition">
//                   <Link href="#" onClick={toggleMenu}>
//                     Services
//                   </Link>
//                 </li>
//                 <li className="hover:text-blue dark:hover:text-yellow-400 transition">
//                   <Link href="/gallery" onClick={toggleMenu}>
//                     Gallery
//                   </Link>
//                 </li>
//               </>
//             )}
//             <li>
//               <Link href="/">
//                 <Button text="Let's Talk" />
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Header;
"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#F2F2F2] dark:bg-gray-900 z-50 shadow-md">
      <section className="relative py-3 px-4 md:px-8 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logoIT.png"
            width={50}
            height={45}
            alt="logo"
            className="mx-2"
          />
          <div>
            <h1 className="uppercase text-blue dark:text-white font-bold text-lg">
              IT{" "}
              <span className="text-gray-700 dark:text-gray-300">
                Solutions & Consultancy
              </span>
            </h1>
            <h5 className="text-[12px] font-bold text-gray-500 dark:text-gray-400 tracking-wide capitalize">
              For all your IT needs
            </h5>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 capitalize">
          <li className="hover:text-blue dark:hover:text-yellow-400 transition">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-blue dark:hover:text-yellow-400 transition">
            <Link href="/about">About Us</Link>
          </li>
          {/* {pathName === "/" && ( */}
          {/* <> */}
          <li className="hover:text-blue dark:hover:text-yellow-400 transition">
            <Link href="/gallery">Gallery</Link>
          </li>
          <li className="hover:text-blue dark:hover:text-yellow-400 transition">
            <Link href="/contact">Contact</Link>
          </li>
          {/* </> */}
          {/* )} */}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Link href="/">
              <Button text="Let's Talk" />
            </Link>
          </div>
          <DarkModeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-3 rounded-md bg-blue text-white flex items-center justify-center w-10 h-10"
          >
            <Image
              src={isMenuOpen ? "/icons/close.svg" : "/icons/menu.svg"}
              width={28}
              height={28}
              alt="menu"
            />
          </button>
        </div>
      </section>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md absolute top-full left-0 w-full z-40">
          <ul className="flex flex-col gap-4 p-4 capitalize text-lg">
            <li className="hover:text-blue dark:hover:text-yellow-400 transition">
              <Link href="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="hover:text-blue dark:hover:text-yellow-400 transition">
              <Link href="/aboutus" onClick={toggleMenu}>
                About Us
              </Link>
            </li>
            {pathName === "/" && (
              <>
                <li className="hover:text-blue dark:hover:text-yellow-400 transition">
                  <Link href="#" onClick={toggleMenu}>
                    Services
                  </Link>
                </li>
                <li className="hover:text-blue dark:hover:text-yellow-400 transition">
                  <Link href="/gallery" onClick={toggleMenu}>
                    Gallery
                  </Link>
                </li>
              </>
            )}
            <li>
              <Link href="/">
                <Button text="Let's Talk" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
