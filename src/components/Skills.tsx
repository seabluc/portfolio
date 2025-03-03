import { languages, technologies1, technologies2 } from '@/data'
import React from 'react'

const Skills = () => {
  return (
    <div className="lg:h-[60vh] w-screen bg-white relative bg-gradient-to-b
    from-white to-[#8EAEC7] via-white via-90% overflow-hidden" id="skills">
      <section className="flex flex-col px-8 items-center">
        <h2 className="heading text-[#212227]">SKILLS</h2>
        <div className="flex pt-12 gap-6">
          {languages.map((logo) => (
            <div key={logo.id} className="flex justify-center items-center w-16 h-16">
              <img src={logo.img} alt={`${logo.id}`} width={64} height={64} />
            </div>
          ))}
        </div>

        <div className="flex pt-12 gap-6">
          {technologies1.map((logo) => (
            <div key={logo.id} className="flex justify-center items-center w-16 h-16">
              <img src={logo.img} alt={`${logo.id}`} width={64} height={64} />
            </div>
          ))}
        </div>

        <div className="flex pt-12 gap-6">
          {technologies2.map((logo) => (
            <div key={logo.id} className="flex justify-center items-center w-16 h-16">
              <img src={logo.img} alt={`${logo.id}`} width={64} height={64} />
            </div>
          ))}
        </div>
      </section >
      <div className="absolute bottom-0 left-0 w-full h-24 lg:bg-[#8EAEC7] lg:transform rotate-[-1.0deg] origin-bottom -mb-4"></div>
    </div >
  )
}

export default Skills