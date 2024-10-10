import React from "react";
import StarIcon from "@/assets/iconComponents/Star";
import CustomIcon from "./Icon";
import { twMerge } from "tailwind-merge";

const CardHeader = ({
  title,
  description,
  className
}: {
  title: string;
  description: string;
  className?:string;
}) => {
  return (
    <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10",className)}>
      <div className="inline-flex items-center gap-2">
        <StarIcon className="size-9 text-emerald-300" />
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>
      <p className="text-sm max-w-xs lg:text-base text-white/60 mt-2">{description}</p>
    </div>
  );
};

export default CardHeader;
