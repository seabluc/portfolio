"use client";

import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "../data";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "@/components/Skills";
//import Education from "@/components/Education";
import Projects from "@/components/Projects";
//import Contact from "@/components/Contact";
import Footer from "../components/Footer";

//change favicon and font
export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col overflow-hidden">
      <FloatingNav navItems={navItems} />
      <Hero />
      <About />
      <Skills />
      {/*<Education />*/}
      <Projects />
      {/*<Contact />*/}
      <Footer />
    </main>
  );
}
