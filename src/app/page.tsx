"use client";

import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "../data";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "../components/Footer";
import Grid from "../components/Grid";
import RecentProjects from "../components/RecentProjects";

//change favicon and font
export default function Home() {
  return (
    <main className="bg-black-100 flex justify-center items-center
    flex-col sm:px-10 px-5 overflow-hidden">
      <FloatingNav navItems={navItems} />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Grid />
      <RecentProjects />
      <Contact />
      <Footer />
    </main>
  );
}
