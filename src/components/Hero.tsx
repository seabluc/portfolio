import React from 'react'
import Nav from './Nav'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { ImArrowUpRight2 } from 'react-icons/im'
import InvertButton from './ui/InvertButton'

const Hero = () => {
  return (
    <div className="h-screen w-screen dark:bg-white bg-white flex flex-col">
      <Nav />
      <div className="flex flex-1 justify-center items-center">
        <div className="flex flex-col justify-center items-start lg:mr-[28rem] lg:mb-[7.5rem]">
        <TextGenerateEffect
          className="text-[32px] md:text-5xl lg:text-6xl"
          words="Hi, I'm Sean-Luc Ghim."
          duration={0.75}
        />
        <TextGenerateEffect
          className="md:tracking-wider text-xl md:text-lg lg:text-4xl"
          words="I'm a full-stack developer"
          duration={1.25}
        />
        {/*
          <a href="#contact">
            <MagicButton
              title="Contact Me"
              icon={<ImArrowUpRight2 />}
              position='right'
            />
          </a>
          */}
        {/*
          <a href="#contact">
            <InvertButton
              title="Contact Me"
            />
          </a>
          */}
        <TextGenerateEffect
          words="..."
        />
        </div>
      </div>
    </div>
  )
}

export default Hero