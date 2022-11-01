import type { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { urlFor } from "../sanity";
import {
  Experience as ExperienceType,
  PageInfo,
  Project,
  Skill,
  Social,
} from "../typings";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: ExperienceType[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, projects, socials, experiences, skills }: Props) => {
  return (
    <>
      <Head>
        <title>Aneeq Khurram</title>
      </Head>
      <div
        className="bg-main snap-y snap-mandatory overflow-y-scroll overflow-x-hidden
    z-0 text-white h-screen scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80"
      >
        <Header socials={socials} />
        <section id="hero" className="snap-start">
          <Hero pageInfo={pageInfo} />
        </section>

        <section id="about" className="snap-center">
          <About pageInfo={pageInfo} />
        </section>

        <section id="experience" className="snap-center">
          <Experience experiences={experiences} />
        </section>

        <section id="skills" className="snap-start">
          <Skills skills={skills} />
        </section>

        <section id="projects" className="snap-start">
          <Projects projects={projects} />
        </section>

        <section id="contact" className="snap-start">
          <ContactMe />
        </section>

        <Link href={"#hero"}>
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex items-center justify-center">
              <Image
                height={40}
                width={40}
                src={urlFor(pageInfo.heroImage)?.url()}
                alt="footer"
                className="h-10 w-10 cursor-pointer rounded-full filter grayscale hover:grayscale-0"
              />
            </div>
          </footer>
        </Link>
      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo = await fetchPageInfo();
  const projects = await fetchProjects();
  const experiences = await fetchExperiences();
  const skills = await fetchSkills();
  const socials = await fetchSocials();
  return {
    props: {
      pageInfo,
      projects,
      socials,
      experiences,
      skills,
    },
    revalidate: 10,
  };
};
