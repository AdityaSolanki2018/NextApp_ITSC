
"use client";

import React from "react";
import Container from "@/components/Container";
import { workFlowStep } from "@/constants/dummy";
import Image from "next/image";
import { motion } from "framer-motion";

const WorkFlow = () => {
  return (
    <div className="py-12 px-4 sm:px-6 md:px-8 lg:px-16">
      <Container
        title="How we work"
        h1="Our Solar Panel Installation Work Flow."
        h2="From consultation to installation and maintenance, we provide comprehensive solar energy solutions designed to meet your unique needs."
        textAllign="text-center md:px-20 mx-auto"
      />

      {/* Workflow Grid */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
        {/* Left Steps */}
        <motion.div
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          initial={{ x: "-100%" }}
          transition={{ duration: 0.8, type: "spring", damping: 20 }}
          className="flex flex-col gap-6 sm:gap-8 "
        >
          {workFlowStep.slice(0, 2).map((step) => (
            <StepCard step={step} key={step.id} />
          ))}
        </motion.div>

        {/* Center Image */}
        <div className="flex items-center justify-center">
          <motion.div whileHover={{ y: -10, transition: { duration: 0.5 } }}>
            <Image
              src={"/images/servicesLg.png"}
              width={355}
              height={390}
              alt="Workflow"
              className="hidden md:block object-cover md:w-[200] md:h-[250]"
            />
            <Image
              src={"/images/services.png"}
              width={285}
              height={400}
              alt="Workflow"
              className="md:hidden object-cover"
            />
          </motion.div>
        </div>

        {/* Right Steps */}
        <motion.div
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          initial={{ x: "100%" }}
          transition={{ duration: 0.8, type: "spring", damping: 20 }}
          className="flex flex-col gap-6 sm:gap-8"
        >
          {workFlowStep.slice(2).map((step) => (
            <StepCard step={step} key={step.id} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const StepCard = ({ step }) => (
  <div className="group transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-text/50 hover:bg-gradient-to-r hover:from-deepTeal hover:via-green hover:to-solarYellow hover:text-white rounded-xl p-4 sm:p-5 flex items-start gap-4 sm:gap-5 bg-white shadow-md">
    <span className="text-solarYellow border border-solarYellow rounded-xl px-4 py-2 text-xl sm:text-2xl md:text-3xl font-semibold">
      0{step.id}
    </span>
    <div className="flex flex-col gap-1 sm:gap-2">
      <h1 className="h1Text text-base sm:text-lg md:text-[24px] font-bold">
        {step.label}
      </h1>
      <p className="pText sm:pTextSm md:pTextLg text-text/85 group-hover:text-white">
        {step.content}
      </p>
    </div>
  </div>
);

export default WorkFlow;
