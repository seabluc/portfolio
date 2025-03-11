import { projects } from '@/data'
import React from 'react'
import InvertButton from './ui/InvertButton'
import Link from 'next/link'
import { motion } from 'motion/react'

const Projects = () => {
  return (
    <section className="w-screen bg-blue-1 text-white flex flex-col px-8 items-center
    lg:bg-[linear-gradient(-2deg,white_14.85%,#8EAEC7_15%)] overflow-hidden "
      id="projects">
      <div className="lg:max-h-[85%] flex flex-col px-8 items-center lg:mb-64">
        <motion.h2
          initial={{ opacity: 0, y: -0.1 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
          viewport={{ once: true }}
          className="heading mt-16 mb-12 md:mb-16 text-white">PROJECTS
        </motion.h2>

        <div className="flex flex-col gap-4 lg:gap-12 pb-6">
          {projects.map(({ id, title, iconLists, collabs, des, live, repo, img, demo }) => (
            <div key={id} className="flex flex-col lg:flex-row items-center lg:items-start gap-6 w-full max-w-5xl pb-6">

              {/* Left section - Project description */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1.0, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="flex flex-col flex-1 gap-4">
                <p className="text-center md:text-start font-semibold text-[22px] md:text-2xl lg:text-3xl md:my-2">{title}</p>

                <div className="flex justify-center md:justify-start gap-4">
                  {iconLists.map((icon) => (
                    <div key={icon}
                      className="size-8 lg:size-[52px] flex justify-center items-center">
                      <img src={icon} alt={icon} className="max-w-full h-auto object-cover" />
                    </div>
                  ))}
                </div>

                <div className="text-base md:text-lg">
                  <p className="font-medium">Collaborators: <span className="font-normal italic">{collabs}</span></p>
                </div>

                <div className="text-[15px] md:text-base">
                  <p className="font-normal">{des}</p>
                </div>

                <div className="flex gap-2">
                  {live && <InvertButton title={"Live webpage"} href={live} />}
                  {repo && <InvertButton title={"Source code"} href={repo} />}
                </div>
              </motion.div>

              {/* Right section - Project thumbnail/video demo */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1.0, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="flex-1 flex justify-center lg:justify-end">
                {demo ? (
                  <div className="pb-4 border-b-2 md:border-none md:pb-0">
                    <Link href={demo} target="_blank" rel="noreferrer noopener">
                      <img src={img} alt={demo} className="w-full max-w-md rounded-lg shadow-lg" />
                    </Link>
                    <span className="flex flex-row items-center justify-center p-4"><InvertButton title={"Video Demo"} href={demo} /></span>
                  </div>
                ) : (
                  <img src={img} alt={title} className="w-full max-w-md rounded-lg shadow-lg" />
                )}
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects