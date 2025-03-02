"use client";

import { FloatingNav } from "@/components/ui/FloatingNav";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "@/components/Skills";
import Grid from "../components/Grid";
import Projects from "../components/Projects";
import { navItems } from "../data";
import Contact from "@/components/Contact";
import Footer from "../components/Footer";

//change favicon
export default function Home() {
  return (
    <main className="bg-black-100 flex justify-center items-center
    flex-col sm:px-10 px-5 overflow-hidden">
      <FloatingNav navItems={navItems} />
      <Hero />
      <About />
      <Skills />
      <Grid />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
