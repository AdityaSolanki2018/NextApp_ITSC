import React from "react";
import Conatiner from "../Container";
import Button from "../Button";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const AboutSec = () => {
  return (
    <div id="About" className="mt-20 px-6 lg:px-20 max-w-[920px]">
      <Conatiner
        title={"About us"}
        h2={
          <ul>
            <li className="my-3">
              At <Link href={"/aboutus"}>IT Solutions and Consultancy</Link>, our
              mission is to make{" "}
              <a
                target="_blank"
                href="https://en.wikipedia.org/wiki/Solar_energy"
              >
                help your business go digital
              </a>{" "}
              by providing the best IT services.
            </li>
            <li className="mb-3">
              We transform your business by provining the best secutity, networking and server support.
            </li>
          </ul>
        }
        h1={
          <span>
            Powering a <span className="text-blue">Greener, </span>
            Brighter Tomorrow
          </span>
        }
        textAllign={"text-center md:text-start"}
      />
      <Link href={"/aboutus"}>
        <Button
          text={"More about us"}
          icon={
            <FaArrowRightLong className="text-white inline-flex ml-2 size-5" />
          }
        />
      </Link>
    </div>
  );
};

export default AboutSec;
