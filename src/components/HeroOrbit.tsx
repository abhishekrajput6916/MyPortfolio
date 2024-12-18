import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const HeroOrbit = ({
  children,
  size,
  rotation,
  orbitDuration,
  shouldOrbit,
  shouldSpin,
  spinDuration,
  animation,
  className
}: PropsWithChildren<{
  size?: number;
  rotation: number;
  orbitDuration?: string;
  shouldOrbit?: boolean;
  shouldSpin?:boolean;
  spinDuration?:string;
  animation?:string;
  className?:string;
}>) => {
  return (
    <>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div
          className={twMerge(shouldOrbit && animation )}
          style={{
            animationDuration: orbitDuration,
          }}
        >
          <div
            className={twMerge("flex items-start justify-start",className)}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              transform: `rotate(${rotation}deg)`,
            }}
          >
            <div className={twMerge(shouldSpin && "animate-spin")}
            style={{
              animationDuration:spinDuration,
            }}
            >
              <div
                className="inline-flex"
                style={{
                  transform: `rotate(${rotation * -1}deg)`,
                }}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroOrbit;
