"use client";

import React, { useState } from "react";
import Button from "./Button";
import Container from "./Container";
import { FaPhone, FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { usePathname } from "next/navigation";
import { FiPhoneCall } from "react-icons/fi";

const QueryForm = () => {
  const [query, setQuery] = useState({
    name: "",
    number: "",
    email: "",
    type: "",
    userQuery: "",
  });

  const pathName = usePathname();

  const handleClick = async () => {
    try {
      const response = await fetch("api/query/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { ...query },
      });
      const data = await response.json();
      if (data.success) {
        alert(data.msg);
      }
    } catch (err) {
      alert("some error occured, Try again later");
    }
  };

  return (
    <div
      id="Query"
      className="w-full min-h-[650px] bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/abgimg.png')",
      }}
    >
      <form
        className={`*:my-2 pt-14 pb-36 md:max-w-[1000px] mx-auto text-white  `}
      >
        <Container
          title={"Query section"}
          h1={"Got Questions? We’re Here to Help You Go Solar!"}
          textAllign={"text-center px-20 pb-8"}
        />
        <div className="md:flex items-center px-10 md:px-28 *:my-2 *:md:my-0 *:w-full gap-4 *:border *:rounded *:flex *:items-center *:p-2.5 *:gap-2 *:border-white/50 ">
          <div className="focus-within:border-white/80 backdrop-blur-md">
            <FaUser className="size-5 text-white/90" />
            <input
              type="text"
              id="fullname"
              name="fullName"
              value={query.name}
              onChange={(e) => setQuery({ ...query, name: e.target.value })}
              placeholder="Full Name"
              className="capitalize w-full outline-none bg-transparent px-2"
            />
          </div>
          <div className="focus-within:border-white/50 backdrop-blur-md">
            <FaPhone className="size-5 text-white/90" />
            <input
              type="text"
              id="ph"
              name="ph"
              value={query.number}
              onChange={(e) => setQuery({ ...query, number: e.target.value })}
              placeholder="Phone Number"
              className="w-full outline-none bg-transparent px-2"
            />
          </div>
        </div>
        <div className="md:flex items-center px-10 md:px-28 *:my-2 *:md:my-0 *:w-full gap-4 *:border *:rounded *:flex *:items-center  *:gap-2 *:border-white/50 ">
          <div className="p-2.5 focus-within:border-white/50 backdrop-blur-md ">
            <MdEmail className="size-6 text-white/90" />
            <input
              type="email"
              id="email"
              name="email"
              value={query.email}
              onChange={(e) => setQuery({ ...query, email: e.target.value })}
              placeholder="Email"
              className="w-full outline-none bg-transparent px-2"
            />
          </div>

          <div className="focus-within:border-white/50 backdrop-blur-md md:w-[795px]">
            <select
              name="dropdown"
              defaultValue=""
              className="w-full capitalize bg-transparent *:text-text *:border-b *:border-text p-2.5 h-full focus:outline-none"
            >
              <option
                value={query.type}
                onChange={(e) =>
                  setQuery({ ...query, type: e.target.value.toUpper() })
                }
                disabled
                hidden
                className="text-white/20"
              >
                Type of inquiry
              </option>
              <option value="consultation" className="  *:hover:font-semibold">
                Consultation
              </option>
              <option value="design" className=" *:hover:font-semibold">
                Design
              </option>
              <option value="maintanence" className=" *:hover:font-semibold">
                Maintanence
              </option>
              <option value="installation" className=" *:hover:font-semibold">
                Installation
              </option>
              <option value="other" className=" *:hover:font-semibold">
                Other
              </option>
            </select>
          </div>
        </div>
        <div className="border backdrop-blur-md rounded mx-10 md:mx-28 flex items-center p-2 gap-2 border-white/50 focus-within:border-white/80">
          <textarea
            rows={5}
            id="query"
            name="query"
            value={query.userQuery}
            onChange={(e) => {
              console.log(query);
              setQuery({ ...query, userQuery: e.target.value });
            }}
            placeholder="Tell us more about your needs or questions.."
            className="w-full  outline-none bg-transparent px-2"
          />
        </div>
        <div className="float-right flex items-center gap-6 md:py-3 py-2  px-10 md:px-28">
          <button>
            <FiPhoneCall className="inline-flex size-5 md:size-6 mr-2" />
            <span className="text-lg">9312644140</span>
          </button>
          <button
            // className={`${
            //   variant === "sec"
            //     ? "text-solarYellow px-3 hover:font-bold active:motion-preset-pop"
            //     : "bg-gradient-to-r from-green/90 px-5 text-white  to-softgreen shadow shadow-text/20 hover:bg-gradient-to-r hover:from-green hover:to-softgreen/90 hover:shadow-lg hover:shadow-text/30 active:motion-preset-pop "
            // } capitalize  py-2 rounded `}
            onClick={handleClick}
          >
            <span className=" text-[16px] lg:text-[18px] ">Send Query</span>
            {/* {icon && icon} */}
          </button>
        </div>
      </form>
    </div>
  );
};

export default QueryForm;
