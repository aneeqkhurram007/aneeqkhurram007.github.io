import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";
import { SocialProfileJsonLd } from "next-seo";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, ${pageInfo?.name} here`,
      "Eat, Sleep, Code, Repeat!",
      "<CodeLessReactMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div
      className="h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden"
    >
      <BackgroundCircles />
      <Image
        src={urlFor(pageInfo?.heroImage).url()}
        width={128}
        height={128}
        alt="Profile"
        className="relative rounded-full mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-s, uppercase text-gray-500 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span className="mr-3">{text}</span>
          <SocialProfileJsonLd
            type="Person"
            name="Aneeq Khurram"
            url="https://aneeqkhurram007.com"
            sameAs={[
              "https://www.facebook.com/aneeqkhurram007",
              "https://instagram.com/aneeqkhurram007",
              "https://www.linkedin.com/in/aneeq-khurram-46a13019a/",
              "https://plus.google.com/aneeqkhurram007",
              "https://twitter.com/aneeqkhurram007",
              "https://pinterest.com/aneeqkhurram007",
            ]}
          />
          <Cursor cursorColor="#f7ab0a" />
        </h1>
        <div className="pt-5">
          <Link href={"#about"}>
            <button className="hero-button">About</button>
          </Link>
          <Link href={"#experience"}>
            <button className="hero-button">Experience</button>
          </Link>
          <Link href={"#skills"}>
            <button className="hero-button">Skills</button>
          </Link>
          <Link href={"#projects"}>
            <button className="hero-button">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
