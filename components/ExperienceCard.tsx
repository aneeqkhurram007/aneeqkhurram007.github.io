import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article
      className="flex snap-center bg-[#292929] p-10 flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] cursor-pointer hover:opacity-100 opacity-40 
    transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        className="w-32 h-32 object-center rounded-full xl:w-[200px] xl:h-[200px] object-cover"
        viewport={{ once: true }}
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        src="https://th.bing.com/th/id/OIP.VsvOr2Q2d_Ixr1aUDFGmIQHaHC?pid=ImgDet&rs=1"
        alt="card"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of Reactology</h4>
        <p className="font-bold text-2xl mt-1">Reactology</p>
        <div className="flex space-x-2 my-2">
          <Image
            width={50}
            height={50}
            src="https://th.bing.com/th/id/OIP.VsvOr2Q2d_Ixr1aUDFGmIQHaHC?pid=ImgDet&rs=1"
            className="rounded-full"
            alt=""
          />
        </div>
        <p className="uppercase text-gray-300 py-5">
          Started work ... ~ Ended ...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
