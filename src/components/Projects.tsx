import { projects } from '@/data'
import React from 'react'
import InvertButton from './ui/InvertButton'
import Link from 'next/link'

const Projects = () => {
  return (
    <section className="w-screen bg-blue-1 text-white flex flex-col px-8 items-center
    lg:bg-[linear-gradient(-2deg,white_14.85%,#8EAEC7_15%)] overflow-hidden "
      id="projects">
      <div className="lg:max-h-[85%] flex flex-col px-8 items-center lg:mb-64">
        <h2 className="heading mt-8 pt-8 lg:pt-2 pb-4 lg:pb-14 text-white">PROJECTS</h2>

        <div className="flex flex-col gap-4 lg:gap-12">
          {projects.map(({ id, title, iconLists, collabs, des, live, repo, img, demo }) => (
            <div key={id} className="flex flex-col lg:flex-row items-center lg:items-start gap-6 w-full max-w-5xl pb-6">

              <div className="flex flex-col flex-1 gap-4">
                <p className="text-center md:text-start font-semibold text-xl md:text-2xl lg:text-3xl md:my-2">{title}</p>

                <div className="flex justify-center md:justify-start gap-4">
                  {iconLists.map((icon) => (
                    <div key={icon}
                      className="size-8 lg:size-[52px] flex justify-center items-center">
                      <img src={icon} alt={icon} className="max-w-full h-auto object-cover" />
                    </div>
                  ))}
                </div>

                <div className="text-base md:text-lg">
                  <p className="font-medium">Collaborators: <span className="font-normal">{collabs}</span></p>
                </div>

                <div className="text-sm md:text-base">
                  <p className="font-normal">{des}</p>
                </div>

                <div className="flex gap-2">
                  {live && <InvertButton title={"Live webpage"} href={live} />}
                  {repo && <InvertButton title={"Source code"} href={repo} />}
                </div>
              </div>

              <div className="flex-1 flex justify-center lg:justify-end">
                {demo ? (
                  <div className="pb-2 border-b-2 md:border-none md:pb-0">
                    <Link href={demo} target="_blank" rel="noreferrer noopener">
                      <img src={img} alt={demo} className="w-full max-w-md rounded-lg shadow-lg" />
                    </Link>
                    <span className="flex flex-row items-center justify-center p-4"><InvertButton title={"Video Demo"} href={demo} /></span>
                  </div>
                ) : (
                  <img src={img} alt={title} className="w-full max-w-md rounded-lg shadow-lg" />
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects