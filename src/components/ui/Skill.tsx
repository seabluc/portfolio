import { languages, technologies } from '@/data'
//import Image from 'next/image'
import React from 'react'


const Skills = () => {
  return (
    <div className="h-[80vh] w-screen bg-white text-[#212227] " id="skills">
      <section className="flex flex-col px-8
     items-center relative overflow-hidden">
        <h2 className="heading text-[#212227]">SKILLS</h2>
        <div className="flex pt-20 gap-80 items-start">
          <div className="flex flex-col gap-3">
            <h3 className="">Languages</h3>
            {languages.map((logo) => (
              <div key={logo.id} className="w-10 h-10 flex justify-center items-center">
                <img src={logo.img} alt={`${logo.id}`} width={36} height={36} />
                {/*<Image src={logo.img} alt={`${logo.id}`} width={36} height={36} className="backdrop-filter backdrop-blur-lg saturate-180"/>*/}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="">Technologies</h3>
            {technologies.map((logo) => (
              <div key={logo.id} className="w-10 h-10 flex justify-center items-center">
                {/*<Image src={logo.img} alt={`${logo.id}`} width={36} height={36} className="backdrop-filter backdrop-blur-lg saturate-180"/>*/}
                <img src={logo.img} alt={`${logo.id}`} width={36} height={36} />
              </div>
            ))}
          </div>
        </div>
      </section >
      {/*<div className="absolute bottom-0 left-0 w-full h-24 lg:bg-[#FFFFFF] lg:transform rotate-[-1deg] origin-bottom"></div>*/}
    </div >
  )
}

export default Skills