import React from 'react'
import { contactIcons } from '@/data'

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-10 pb-10 lg:p-4" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading text-black-1 lg:max-w-[45vw]">CONTACT</h1>
        <p className="text-black-1 my-5 text-center font-normal md:font-medium text-base md:text-lg">
          Interested in working together? Let&apos;s connect!
        </p>
        <div className="flex items-center md:gap-4 gap-6 md:my-1 ">
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
        </div>
      </div>

      <div className="flex mt-4 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light mt-1 md:mt-0">© 2025 Sean-Luc Ghim</p>
      </div>
    </footer>
  )
}

export default Footer