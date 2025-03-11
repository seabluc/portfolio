import React from 'react'
import Nav from './Nav'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import InvertButton from './ui/InvertButton'
import { motion } from "framer-motion"
import { navItems } from '@/data'

const Hero = () => {
  return (
    <header className="relative h-screen w-screen bg-white flex flex-col z-0">
      {/* 
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.25, duration: 0.75, ease: "easeOut" }}
      >
        <img src="/seattle-bg.svg" alt="seattle" className="absolute -left-7 top-3 object-cover -z-10" />
      </motion.div>
      */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0, duration: 0.75, ease: "easeOut" }}
      >
        <Nav />
      </motion.div>
      <div className="flex flex-1 justify-center items-center relative z-10">
        <div className="flex flex-col justify-center items-start lg:mr-[28rem] lg:mb-[7.5rem]">
          <TextGenerateEffect
            className="text-[32px] md:text-5xl lg:text-6xl"
            words="Hi, I'm Sean-Luc Ghim."
          />
          <TextGenerateEffect
            className="md:tracking-wider text-xl md:text-lg lg:text-4xl"
            words="I'm a full-stack developer."
          />
          <motion.div
            className="flex flex-row mt-4 lg:mt-6 items-center justify-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.75, ease: "easeOut" }}
          >
            {navItems.map((section, idx: number) => (
              <InvertButton
                key={idx}
                title={section.name}
                className={section.hero}
                href={section.link}
                hero={section.link} />
            ))}
          </motion.div>
        </div>
      </div>
    </header>
  )
}

export default Hero