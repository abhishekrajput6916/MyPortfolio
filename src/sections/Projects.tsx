"use client";

import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import spotifyClone from "@/assets/images/spotifyClone.png";
import baoiamLanding from "@/assets/images/baoiamLanding.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import divueensCosmetics from "@/assets/images/divueensCosmetics.png";
import Image from "next/image";
import { BiCheckCircle } from "react-icons/bi";
import { RiArrowRightUpFill } from "react-icons/ri";
import { url } from "inspector";
import grainImage from "@/assets/images/grain.jpg";
import { LuArrowUpRight } from "react-icons/lu";
import Card from "@/components/Card";
import { motion, useScroll } from "framer-motion"
import { useEffect } from "react";

const portfolioProjects = [
  {
    company: "Personal Project",
    year: "2024",
    title: "Spotify like music app",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://abhimusic.vercel.app/",
    image: spotifyClone,
  },
  {
    company: "Baoiam Innovations Pvt Ltd",
    year: "2024",
    title: "Baoiam EdTech Website",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://baoiam-undertesting.vercel.app/",
    image: baoiamLanding,
  },
  {
    company: "Baoiam Innovations Pvt Ltd",
    year: "2024",
    title: "Divueens Cosmetics",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://divueens-frontend.vercel.app/",
    image: divueensCosmetics,
  },
];

export const ProjectsSection = () => {
  const { scrollYProgress } = useScroll();
  useEffect(()=>{console.log("scrollYProgress",scrollYProgress);},[scrollYProgress]) 
  return (
    <section className="pb-16 lg:py-24" id="my-projects">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl ">
          Featured Projects
        </h2>
        <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">
          See how I transformed concepts into engaging digital experiences.
        </p>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project,projectIndex) => (
            <Card
              key={project.title}
              className={"px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 pb-0 sticky"}
              style={{
                top:`calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300  to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                    {/* </div> */}
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5 ">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        className="flex gap-2 md:text-base text-sm text-white/50"
                        key={result.title}
                      >
                        <BiCheckCircle className="md:size-6 size-5" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto md:px-6">
                      <span className="text-black">Visit Live Site</span>

                      <LuArrowUpRight />
                    </button>
                  </a>
                </div>
                <div className="relative ">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 rounded-t-xl lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
