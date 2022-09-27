import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  return (
    <motion.div
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
      items-center z-0 max-w-full justify-evenly mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3
        className="absolute top-24 uppercase tracking-[20px]
      text-gray-500 text-2xl"
      >
        Skills
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory
       z-20"
      ></div>
      <div
        className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0
      h-[500px] -skew-y-12"
      ></div>
    </motion.div>
  );
}

export default Projects;
