import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left
    xl:flex-row max-w-[2000px] justify-start pt-20 space-y-40 sm:justify-evenly sm:space-y-0 h-screen xl:justify-between px-20
    xl:space-y-0 xl:space-x-5 mx-auto items-center"
    >
      <div>
        <p
          className="uppercase tracking-[20px]
      text-gray-500 text-2xl"
        >
          Skills
        </p>
        <p className="uppercase tracking-[3px] text-gray-500 text-sm">
          Hover over a skill for current proficiency
        </p>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {skills?.slice(0, skills.length / 2)?.map((skill) => (
          <Skill key={skill._id} skill={skill} direction={true} />
        ))}
        {skills?.slice(skills.length / 2, skills.length)?.map((skill) => (
          <Skill key={skill._id} skill={skill} direction={false} />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
