"use client"
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import GithubGraph from "@/sections/GithubGraph";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { useState } from "react";

export default function Home() {
  const [showForm,setShowForm]=useState(false);

  return (
    <div className="">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection/>
      {/* <TestimonialsSection/> */}
      <AboutSection/>
      <GithubGraph/>
      <ContactSection showForm={showForm} toggleShowForm={()=>setShowForm(old=>!old)} />
      <Footer />
    </div>
  );
}
