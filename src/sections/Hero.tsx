import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import { IoMdArrowDown } from "react-icons/io";
import grainImage from "@/assets/images/grain.jpg";
import HeroOrbit from "@/components/HeroOrbit";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import CustomIcon from "@/components/Icon";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 ">
      <div className="absolute overflow-x-clip inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
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

      <HeroOrbit size={800} rotation={-72}>
        {/* <CustomIcon icon={StarIcon} className="size-28 text-emerald-300" /> */}
      </HeroOrbit>
      <HeroOrbit size={550} rotation={20}>
        <CustomIcon icon={StarIcon} className="size-12 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={590} rotation={98}>
        <CustomIcon icon={StarIcon} className="size-8 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={430} rotation={-14}>
        <CustomIcon icon={SparkleIcon} className="size-8 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={440} rotation={79}>
        <CustomIcon icon={SparkleIcon} className="size-5 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={530} rotation={178}>
      <CustomIcon icon={SparkleIcon} className="size-10 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={710} rotation={144}>
      <CustomIcon icon={SparkleIcon} className="size-14 text-emerald-300/20" />
      </HeroOrbit>

      <HeroOrbit size={720} rotation={85}>
      <div className="size-3 rounded-full bg-emerald-300/20" ></div>
      </HeroOrbit>
      <HeroOrbit size={520} rotation={-41}>
      <div className="size-2 rounded-full bg-emerald-300/20" ></div>
      </HeroOrbit>
      <HeroOrbit size={650} rotation={-5}>
      <div className="size-2 rounded-full  bg-emerald-300/20" ></div>
      </HeroOrbit>
      </div>

      <div className="container ">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            alt="Hero"
            width={100}
            height={100}
            className="size-[100px]"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full "></div>
            <div className="text-sm">Available for new projects</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center md:text-lg text-white/60">
            I specialize in transforming designs into functional,
            high-performing web applications. Let's discuss your next project.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl ">
            <span className="font-medium ">Explore My Work</span>
            <IoMdArrowDown className="size-5" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span className="text-2xl">👋</span>
            <span className="font-semibold">Lets Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};