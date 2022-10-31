import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-[70vh] lg:h-screen flex relative space-y-4 sm:space-y-10
  flex-col text-center md:text-left xl:flex-row max-w-7xl
  mx-auto px-10 justify-center sm:justify-evenly  items-center"
    >
      <h3
        className="uppercase tracking-[20px]
      text-gray-500 text-2xl"
      >
        About
      </h3>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-40 h-40 sm:w-56 sm:h-56 rounded-full
lg:rounded-lg md:w-64 xl:w-[500px] xl:h-[600px] "
      >
        <Image
          src={urlFor(pageInfo?.profilePic).url()}
          alt="Profile"
          objectFit="cover"
          width={1000}
          height={1000}
          className="rounded-full lg:rounded-lg"
        />
      </motion.div>
      <div className=" px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]">little</span>{" "}
          background
        </h4>
        <p className="text-base">{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}

export default About;
