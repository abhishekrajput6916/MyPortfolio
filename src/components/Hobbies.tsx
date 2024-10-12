"use client"
import React from 'react'
import { motion } from "framer-motion";


const Hobbies = ({hobbies,constraintRef}:{hobbies:{
    title: string,
    emoji: string,
    left: string,
    top: string,
}[];
constraintRef:React.RefObject<HTMLElement>;
}) => {
  return (
    <>
    {hobbies.map((hobbie) => (
        <motion.div
          key={hobbie.title}
          className="inline-flex absolute items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5"
          style={{ left: hobbie.left, top: hobbie.top }}
          drag
          dragConstraints={constraintRef}
        >
          <span className="font-medium text-gray-950">
            {hobbie.title}
          </span>
          <span className="font-medium text-gray-950">
            {hobbie.emoji}
          </span>
        </motion.div>
      ))}
      </>
  )
}

export default Hobbies