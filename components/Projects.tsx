import React, { useState } from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      className="min-h-screen relative flex overflow-hidden flex-col xl:flex-row pt-20 xl:pt-0
      items-center z-0 max-w-full text-center justify-center xl:justify-between mx-auto xl:px-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3
        className=" uppercase tracking-[20px]
      text-gray-500 text-2xl"
      >
        Projects
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory
        z-20 scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-[#f7ab0a]/80"
      >
        {projects?.map((project, index) => (
          <div
            key={project._id}
            className="w-screen  flex-shrink-0 snap-center
            flex flex-col space-y-5 items-center justify-center p-2 sm:p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project.image).url()}
              alt={project?.title}
              className="h-64"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl xl:text-4xl font-semibold text-center">
                <span className="underline decoration-[#f7ab0a]">
                  Case Study {index + 1} of {projects?.length}: {project.title}
                </span>
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project.technologies.map((technology) => (
                  <Image
                    width={40}
                    height={40}
                    className="h-10 w-10"
                    key={technology._id}
                    src={urlFor(technology?.image).url()}
                    alt=""
                  />
                ))}
              </div>
              <p className="">
                <span
                  className="inline-flex text-lg w-fit
                   md:text-xl cursor-pointer hover:text-[#f7ab0a]"
                >
                  <Link href={project?.linkToBuild || ""} passHref>
                    <a target={"_blank"}>{project?.title}</a>
                  </Link>
                  <ArrowUpRightIcon className="h-4 w-4" />
                </span>
                <span className="inline">{project?.summary}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0
      h-[500px] -skew-y-12"
      ></div>
    </motion.div>
  );
}

export default Projects;
