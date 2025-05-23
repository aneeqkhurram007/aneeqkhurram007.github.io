import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
  direction?: boolean;
  skill: Skill;
};

type ImageProps = {
  skill: Skill;
};
function MobileImage({ skill }: ImageProps) {
  return (
    <div
      className="flex md:hidden rounded-full border border-gray-500 object-cover w-10 h-10 xl:w-32
xl:h-32 filter group-hover:grayscale md:h-28 md:w-28 transition duration-300 ease-in-out"
    >
      <Image
        placeholder="blur"
        blurDataURL={urlFor(skill?.image).url()}
        src={urlFor(skill.image).url()}
        alt={skill.title}
        objectFit="fill"
        className="rounded-full"
        width={500}
        height={500}
      />
    </div>
  );
}

function MidScreenImage({ skill, direction }: Props) {
  return (
    <motion.div
      initial={{
        x: direction ? -200 : 200,
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="hidden md:flex rounded-full border border-gray-500 object-cover w-10 h-10 xl:w-32
    xl:h-32 filter group-hover:grayscale md:h-28 md:w-28 transition duration-300 ease-in-out"
    >
      <Image
        placeholder="blur"
        blurDataURL={urlFor(skill?.image).url()}
        src={urlFor(skill.image).url()}
        alt={skill.title}
        objectFit="fill"
        className="rounded-full"
        width={500}
        height={500}
      />
    </motion.div>
  );
}
function SkillComponent({ direction, skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <MobileImage skill={skill} />
      <MidScreenImage skill={skill} direction={direction} />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300
      ease-in-out group-hover:bg-white h-10 w-10 md:h-28 md:w-28 xl:w-32 xl:h-32
      rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default SkillComponent;
