import { languages, technologies1, technologies2, skills } from '@/data'
import React from 'react'

const Skills = () => {
  return (
    <section className="w-screen bg-white flex flex-col px-8 items-center
    lg:bg-[linear-gradient(-2.3deg,#8EAEC7_14.85%,white_15%)] overflow-hidden"
      id="skills">
      <div className="md:max-h-[65%] md:max-w-2xl flex flex-col items-center lg:mb-64 ">
        <h2 className="heading pt-16 pb-14 md:pt-0 md:pb-2 text-black-1">SKILLS</h2>
        <div className="flex flex-wrap justify-center pb-16 md:pt-10 lg:pt-12 gap-6 lg:gap-9 lg:pb-0">
          {skills.map((logo) => (
            <div key={logo.id} className="flex justify-center items-center w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16">
              <img src={logo.img} alt={`${logo.id}`} width={64} height={64} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills