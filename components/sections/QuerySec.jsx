"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "../Container";
import { FaPhone, FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Button from "../Button";

const QuerySec = () => {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState({
    name: "",
    number: "",
    email: "",
    type: "",
    userQuery: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery((prevQuery) => ({ ...prevQuery, [name]: value }));
  };

  const handleClick = async () => {
    console.log(query);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Query submitted successfully!");
    }, 2000);
  };

  return (
    <div className="relative flex justify-end px-8 md:px-24 my-8">
      <Image
        src="/icons/query-svg.svg"
        width={300}
        height={300}
        alt="Illustration"
        className="absolute -top-10 md:top-0 right-0 md:left-10 z-10"
      />
      <Image
        src="/images/queryimg.png"
        width={580}
        height={400}
        alt="Query"
        className="absolute bottom-0 -left-20 md:left-0 -z-10 hidden md:block"
      />

      <form className="w-full max-w-2xl bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md mx-auto">
        <Container
          title="Query Section"
          h1="Got Questions? We’re Here to Help You Go Digital!"
          textAllign="text-center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center border rounded-md p-2 focus-within:border-teal-500">
            <FaUser className="text-gray-500 size-5 mr-2" />
            <input
              type="text"
              name="name"
              value={query.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full outline-none bg-transparent"
            />
          </div>

          <div className="flex items-center border rounded-md p-2 focus-within:border-teal-500">
            <FaPhone className="text-gray-500 size-5 mr-2" />
            <input
              type="number"
              name="number"
              value={query.number}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full outline-none bg-transparent"
            />
          </div>

          <div className="flex items-center border rounded-md p-2 focus-within:border-teal-500 col-span-1 md:col-span-2">
            <MdEmail className="text-gray-500 size-5 mr-2" />
            <input
              type="email"
              name="email"
              value={query.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full outline-none bg-transparent"
            />
          </div>

          <div className="col-span-1 md:col-span-2">
          <select
              name="dropdown"
              defaultValue=""
              className="w-full capitalize bg-transparent p-2.5 h-full focus:outline-none"
            >
              <option 
              value={query.type}
              onChange={(e)=>(setQuery({...query, type:e.target.value.toUpper()}))}
               disabled hidden>
                <span className="dark:text-gray-300">Type of inquiry</span>
              </option>
              <option value="consultation" className="bg-white dark:bg-gray-800 dark:text-gray-300">
                Consultation
              </option>
              <option value="design" className="bg-white dark:bg-gray-800 dark:text-gray-300">
                Design
              </option>
              <option value="maintanence" className="bg-white dark:bg-gray-800 dark:text-gray-300">
                Maintanence
              </option>
              <option value="installation" className="bg-white dark:bg-gray-800 dark:text-gray-300">
                Installation
              </option>
            </select>
          </div>
        </div>

        {/* Text Area */}
        <div className="border rounded-md p-2 focus-within:border-teal-500">
          <textarea
            name="userQuery"
            rows={4}
            value={query.userQuery}
            onChange={(e) => {
              console.log(query);
              setQuery({ ...query, userQuery: e.target.value });
            }}
            placeholder="Tell us more about your needs or questions.."
            className="w-full outline-none bg-transparent resize-none"
          />
        </div>
        <div className="float-right md:py-3 py-2  px-10 md:px-28">
          <Button
            text={"Send Query"}
            handleClick={(e) => {
              e.preventDefault();
              handleClick(query);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default QuerySec;
