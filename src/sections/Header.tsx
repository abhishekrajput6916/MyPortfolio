"use client"
import Link from "next/link";
import { useState } from "react";
const activeLinkStyle=" bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" 

export const Header = () => { 
  const [activeTab,setActiveTab]=useState('home');
  const handleTabChange= (tab:string)=>{
    setActiveTab(tab);
  }
  return( <div className="flex justify-center items-center fixed inset-x-0 top-3 w-screen z-20">
      <nav className="flex gap-1 p-0.5  border backdrop-blur-md border-white/15 rounded-full bg-white/10 ">
        <Link href="#home" className={`nav-item ${activeTab==="home" && activeLinkStyle}`} onClick={()=>handleTabChange("home")}>Home</Link>
        <Link href="#my-projects" className={`nav-item ${activeTab==="projects" && activeLinkStyle}`} onClick={()=>handleTabChange("projects")}>Projects</Link>
        <Link href="#about-section" className={`nav-item ${activeTab==="about" && activeLinkStyle}`} onClick={()=>handleTabChange("about")}>About</Link>
        <Link href="#contact" className={`nav-item ${activeTab==="contact" && activeLinkStyle}`} onClick={()=>handleTabChange("contact")}>Contact</Link>
      </nav>
    </div>
  );
};
