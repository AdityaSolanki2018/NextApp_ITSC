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
        src="/icons/queryillus.svg"
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
          <div className="input-field">
            <FaUser className="input-icon" />
            <input
              type="text"
              name="name"
              value={query.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="input bg-gray-100 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div className="input-field">
            <FaPhone className="input-icon" />
            <input
              type="number"
              name="number"
              value={query.number}
              onChange={handleChange}
              placeholder="Phone Number"
              className="input bg-gray-100 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div className="input-field col-span-1 md:col-span-2">
            <MdEmail className="input-icon" />
            <input
              type="email"
              name="email"
              value={query.email}
              onChange={handleChange}
              placeholder="Email"
              className="input bg-gray-100 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <select
              name="type"
              value={query.type}
              onChange={handleChange}
              className="input bg-gray-100 dark:bg-gray-700 dark:text-white"
            >
              <option value="" disabled hidden>
                Type of Inquiry
              </option>
              <option value="consultation">Consultation</option>
              <option value="design">Design</option>
              <option value="maintenance">Maintenance</option>
              <option value="installation">Installation</option>
            </select>
          </div>
        </div>

        <div className="input-field mt-4">
          <textarea
            name="userQuery"
            rows={4}
            value={query.userQuery}
            onChange={handleChange}
            placeholder="Tell us more about your needs or questions..."
            className="input resize-none bg-gray-100 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div className="flex justify-end mt-4">
          <Button
            text={loading ? "Submitting..." : "Send Query"}
            handleClick={(e) => {
              e.preventDefault();
              handleClick();
            }}
            disabled={loading}
          />
        </div>

        {loading && (
          <div className="text-center text-teal-600 mt-2">Submitting...</div>
        )}
      </form>
    </div>
  );
};

export default QuerySec;
