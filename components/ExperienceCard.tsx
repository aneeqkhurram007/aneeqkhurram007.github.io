import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex snap-center bg-[#292929] p-10 flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] cursor-pointer hover:opacity-100 opacity-40
    transition-opacity duration-200 overflow-hidden"
    >
      <motion.div
        className="w-32 h-32 object-center rounded-full xl:w-[200px] xl:h-[200px] object-cover"
        viewport={{ once: true }}
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <Image
          width={500}
          height={500}
          className="rounded-full"
          objectFit="cover"
          src={urlFor(experience?.companyImage).url()}
          alt={experience.company}
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <p className="text-4xl font-light">{experience.company}</p>
        <p className="font-bold text-2xl mt-1">{experience.jobTitle}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies?.map((technology) => (
            <Image
              width={40}
              height={40}
              key={technology._id}
              src={urlFor(technology.image).url()}
              alt=""
              className="h-10 w-10 rounded-full"
            />
          ))}
        </div>
        <p className="uppercase text-gray-300 py-5">
          {new Date(experience.dateStarted).toDateString()} ~{" "}
          {experience.isCurrentlyWorking
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul
          className="list-disc space-y-4 ml-5 text-lg max-h-96  pr-5
        scrollbar-thin scrollbar-track-black scollbar-thumb-[#f7ab0a]/80
        overflow-y-scroll"
        >
          {experience.points?.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
