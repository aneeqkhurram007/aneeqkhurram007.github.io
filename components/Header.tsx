import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};

const headerVariants = {
  leftInitial: {
    x: -500,
    opacity: 0,
    scale: 0.5,
  },
  rightInitial: {
    x: 500,
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5,
    },
  },
};

function Header({ socials }: Props) {
  return (
    <header
      className="sticky top-0 flex items-start
    justify-between max-w-7xl mx-auto z-20 xl:items-center p-5"
    >
      <motion.div
        variants={headerVariants}
        initial={"leftInitial"}
        animate={"animate"}
        className="flex flex-row items-center"
      >
        {socials?.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="#f7ab0a"
            bgColor="transparent"
          />
        ))}
      </motion.div>
      <Link href={"#contact"}>
        <motion.div
          variants={headerVariants}
          initial={"rightInitial"}
          animate={"animate"}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="#f7ab0a"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-[#f7ab0a]">
            Get in touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}

export default Header;
