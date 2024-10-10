import React from "react";

import TechIcon from "@/components/TechIcon";
import { twMerge } from "tailwind-merge";

const ToolboxItems = ({
  items,
  className,
  itemsWrapperClass,
}: {
  items: {
    title: string;
    icon: React.ElementType;
  }[];
  className?:string;
  itemsWrapperClass?:string;
}) => {
  return (
    <div className={twMerge("flex  [mask-image:linear-gradient(to_right,transparent,black_90%,transparent)]",className)}>
      <div className={twMerge("flex py-0.5 gap-6 flex-none pr-6",itemsWrapperClass)}>
        {items.map((item) => (
          <div 
            key={item.title}
            className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10"
          >
            <TechIcon component={item.icon} />
            <span className="font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolboxItems;
