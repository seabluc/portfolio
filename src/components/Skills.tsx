import { skills } from '@/data'
import React from 'react'
import { motion } from 'motion/react'

const Skills = () => {
  return (
    <section className="w-screen bg-white flex flex-col px-8 items-center
    lg:bg-[linear-gradient(-2.3deg,#8EAEC7_14.85%,white_15%)] overflow-hidden"
      id="skills">
      <div className="md:max-h-[65%] md:max-w-2xl flex flex-col items-center lg:mb-64">
        <motion.h2
          initial={{ opacity: 0, y: -0.1 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
          viewport={{ once: true }}
          className="heading mt-16 mb-12 md:mt-0 md:mb-2 text-black-1">SKILLS
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.0, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center pb-16 md:pt-10 lg:pt-12 gap-6 lg:gap-9 lg:pb-0">
          {skills.map((logo) => (
            <div key={logo.id} className="flex justify-center items-center w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16">
              <img src={logo.img} alt={`${logo.id}`} width={64} height={64} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills