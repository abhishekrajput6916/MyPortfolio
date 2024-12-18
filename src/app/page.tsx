"use client"
import { useState } from "react";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import GithubGraph from "@/sections/GithubGraph";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection/>
      {/* <TestimonialsSection/> */}
      <AboutSection/>
      <GithubGraph/>
      <ContactSection showForm={showForm} toggleShowForm={()=>setShowForm(old=>!old)} />
      <Footer />
    </>
  );
}
