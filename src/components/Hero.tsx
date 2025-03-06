import React from 'react'
import Nav from './Nav'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import InvertButton from './ui/InvertButton'
import { motion } from "framer-motion"
import { navItems } from '@/data'
//import { FlipWords } from './ui/FlipWords'

const Hero = () => {
  {/*let words = [
    'full-stack developer', 'culinary enthusiast', 'computer geek',
  ];*/}

  return (
    <header className="h-screen w-screen bg-white flex flex-col">
      {/* Add Seattle silhouette bg */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.25, duration: 0.50, ease: "easeOut" }}
      >
        <Nav />
      </motion.div>
      <div className="flex flex-1 justify-center items-center">
        <div className="flex flex-col justify-center items-start lg:mr-[28rem] lg:mb-[7.5rem]">
          <TextGenerateEffect
            className="text-[32px] md:text-5xl lg:text-6xl"
            words="Hi, I'm Sean-Luc Ghim."
            duration={0.75}
          />
          <TextGenerateEffect
            className="md:tracking-wider text-xl md:text-lg lg:text-4xl"
            words="I'm a full-stack developer."
            duration={0.75}
          />
          {/*{`I'm a ${<FlipWords words={words} duration={1000} />}.`}*/}
          <motion.div
            className="flex flex-row mt-4 lg:mt-6 items-center justify-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.25, duration: 0.75, ease: "easeOut" }}
          >
            {navItems.map((section: any, idx: number) => (
              <InvertButton
                key={idx}
                title={section.name}
                className={section.hero}
                href={section.link}
                hero={true} />
            ))}
          </motion.div>
        </div>
      </div>
    </header>
  )
}

export default Hero