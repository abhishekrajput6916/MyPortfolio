"use client";
import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import { IoMdArrowDown } from "react-icons/io";
import grainImage from "@/assets/images/grain.jpg";
import HeroOrbit from "@/components/HeroOrbit";
import StarIcon from "@/assets/iconComponents/Star";
import SparkleIcon from "@/assets/iconComponents/Sparkle";
import CustomIcon from "@/components/Icon";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 " id="home">
      <div className="absolute overflow-x-clip inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        <HeroOrbit
          animation="animate-spin"
          size={430}
          orbitDuration={"30s"}
          shouldSpin
          spinDuration="3s"
          shouldOrbit
          rotation={-14}
        >
          <CustomIcon
            icon={SparkleIcon}
            className="size-8 text-emerald-300/20"
          />
        </HeroOrbit>
        <HeroOrbit
          animation="animate-spin"
          size={440}
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
          shouldOrbit
          rotation={79}
        >
          <CustomIcon
            icon={SparkleIcon}
            className="size-5 text-emerald-300/20"
          />
        </HeroOrbit>
        <HeroOrbit
          animation="animate-spin"
          size={520}
          orbitDuration="34s"
          shouldOrbit
          rotation={-41}
        >
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit
          animation="animate-spin"
          size={530}
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
          shouldOrbit
          rotation={178}
        >
          <CustomIcon
            icon={SparkleIcon}
            className="size-10 text-emerald-300/20"
          />
        </HeroOrbit>
        <HeroOrbit
          animation="animate-spin"
          size={550}
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
          shouldOrbit
          rotation={20}
        >
          <CustomIcon icon={StarIcon} className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          animation="animate-spin"
          size={590}
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
          shouldOrbit
          rotation={98}
        >
          <CustomIcon icon={StarIcon} className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          animation="animate-spin"
          size={650}
          orbitDuration="42s"
          shouldOrbit
          rotation={-5}
        >
          <div className="size-2 rounded-full  bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit
          animation="animate-spin"
          size={710}
          orbitDuration="44s"
          shouldSpin
          spinDuration="3s"
          shouldOrbit
          rotation={144}
        >
          <CustomIcon
            icon={SparkleIcon}
            className="size-14 text-emerald-300/20"
          />
        </HeroOrbit>
        <HeroOrbit
          animation="animate-spin"
          size={720}
          orbitDuration="46s"
          shouldOrbit
          rotation={85}
        >
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit
          animation="animate-spin"
          size={800}
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
          shouldOrbit
          rotation={-72}
        >
          <CustomIcon icon={StarIcon} className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>

      <div className="container z-10">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            alt="Hero"
            width={100}
            height={100}
            className="size-[100px]"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full  relative  after:absolute after:inset-0 after:bg-green-500 after:rounded-full after:animate-ping-large"></div>
            <div className="text-sm">Available for new projects</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif md:text-nowrap text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Hi, I&apos;m Abhishek Rajput
          </h1>
          <p className="uppercase md:text-lg font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Frontend Developer
          </p>
          <p className="mt-4 text-center md:text-lg text-white/60">
            Welcome to my portfolio! I&apos;m a dedicated developer who loves
            crafting interactive and engaging digital experiences. Take a look
            around to explore my work, projects, and creative journey.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
          <a href="#my-projects">
            <button className="inline-flex items-center gap-2 border cursor-pointer border-white/15 px-6 h-12 rounded-xl ">
              <span className="font-medium ">Explore My Work</span>
              <IoMdArrowDown className="size-5 animate-bounce" />
            </button>
          </a>
          <div className="relative group">
            {/* <div className="w-0 overflow-clip group-hover:w-full transition duration-500" >
            <HeroOrbit
              orbitDuration="2s"
              animation="animate-spin"
              shouldOrbit
              rotation={0}
            size={130}
              className="rounded-full  transition duration-500"
            >
              <div className="size-2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20"></div>
            </HeroOrbit>
            <HeroOrbit
              orbitDuration="3s"
              animation="animate-spin-reverse"
              shouldOrbit
              rotation={0}
            size={80}
              className="transition  rounded-full duration-500"
            >
              <div className="size-4 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 -z-20"></div>
            </HeroOrbit>
            </div> */}
            <Link href="https://www.linkedin.com/in/fsd-abhiii/" target="_blank">
            <button className="inline-flex relative items-center gap-2 group-hover:shadow-md transition group-hover:shadow-sky-400  border z-10 border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
              <span className="text-2xl">👋</span>
              <span className="font-semibold">Let&apos;s Connect</span>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
