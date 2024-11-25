"use client";
import Card from "@/components/Card";
// import StarIcon from "@/assets/iconComponents/Star";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import JavascriptIcon from "@/assets/iconComponents/SquareJs";
import HTMLIcon from "@/assets/iconComponents/Html5";
import CssIcon from "@/assets/iconComponents/Css3";
// Remove or comment out the problematic import
import bookImage from "@/assets/images/book-cover.png";
import StealLikeAnArtistBook from "@/assets/images/StealLikeAnArtistBook.jpg";
import ReactIcon from "@/assets/iconComponents/React";
import ChromeIcon from "@/assets/iconComponents/Chrome";
import GithubIcon from "@/assets/iconComponents/Github";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { useRef } from "react";
import Hobbies from "@/components/Hobbies";
import Map from "@/components/Map";
import { Redux } from "@/assets/iconComponents";
import smileMemoji from "@/assets/images/memoji-smile.png"

const toolboxItems = [
  {
    title: "Javascript",
    icon: JavascriptIcon,
  },
  {
    title: "HTML5",
    icon: HTMLIcon,
  },
  {
    title: "CSS3",
    icon: CssIcon,
  },
  {
    title: "React",
    icon: ReactIcon,
  },
  {
    title: "Redux",
    icon: Redux,
  },
  {
    title: "Chrome",
    icon: ChromeIcon,
  },
  {
    title: "Github",
    icon: GithubIcon,
  },
];
const hobbies = [
  {
    title: "Sketching",
    emoji: "✏️",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📷",
    left: "50%",
    top: "5%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "35%",
    top: "40%",
  },
  // {
  //   title: "Gaming",
  //   emoji: "🎮",
  //   left: "10%",
  //   top: "35%",
  // },
  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "45%",
  },
  // {
  //   title: "Fitness",
  //   emoji: "🏋️",
  //   left: "5%",
  //   top: "65%",
  // },
  {
    title: "Reading",
    emoji: "📚",
    left: "45%",
    top: "70%", 
  },
  {
    title: "DIY",
    emoji: "🪚",
    left: "5%",
    top: "70%", 
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28" id="about-section">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />

        <div className="mt-20  flex flex-col gap-8 ">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={StealLikeAnArtistBook} alt="Book cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exeptional digital experiences."
                className=" "
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClass="animate-move-left [animation-duration:30s] pr-4"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClass="animate-move-right [animation-duration:20s] pr-4"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my intrests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                <Hobbies hobbies={hobbies} constraintRef={constraintRef} />
              </div>
            </Card>
            <Card className="h-[320px]  p-0 md:col-span-2 lg:col-span-1">
              {/* <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              /> */}
              <Map className="h-full w-full object-cover object-left-top"/>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-300 to-purple-400 rounded-full -z-20 animate-ping [animation-duration:2s]">
                  </div>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-300 to-purple-400 rounded-full -z-10">
                  </div>
                  <Image
                    src={smileMemoji}
                    alt="smiling memoji"
                    className="size-20"
                  />
                </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
