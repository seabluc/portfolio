import React from 'react'
import { contactIcons } from '@/data'
import { motion } from 'motion/react'

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-10 pb-10 lg:p-4" id="contact">
      <div className="flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: -0.1 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
          viewport={{ once: true }}
          className="heading text-black-1 lg:max-w-[45vw]">CONTACT
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-black-1 my-5 text-center font-normal md:font-medium text-base md:text-lg">
          Interested in working together? Let&apos;s connect!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex items-center md:gap-4 gap-6 md:my-1 ">
          {contactIcons.map((icon) => (
            <a key={icon.id} href={icon.link} target="_blank" rel="noopener noreferrer">
              <div key={icon.id}
                className="size-10 flex justify-center items-center 
                cursor-pointer backdrop-filter backdrop-blur-lg saturate-180
                bg-opacity-75 bg-blue-2 rounded-xl border border-black-3">
                <img src={icon.img} alt={`${icon.id}`} width={24} height={24} />
              </div>
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="flex mt-4 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light mt-1 md:mt-0">© 2025 Sean-Luc Ghim</p>
      </motion.div>
    </footer>
  )
}

export default Footer