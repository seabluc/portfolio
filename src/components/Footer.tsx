import React from 'react'
import { socialMedia } from '@/data'
{/*<footer className="h-[50vh] w-full pt-10 pb-10" id="contact"> Might create an individual Contact me component and only have the stupid copyright logo in footer*/ }
const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          <span className="text-[#BDD4E7]">CONTACT</span> ME
        </h1>
        <p className="text-white-200 md:mt-6 my-5 text-center">
          Interested in working together? Let&apos;s connect!
        </p>
        <div className="flex items-center md:gap-4 gap-6 md:my-2">
          {socialMedia.map((icon) => (
            <a key={icon.id} href={icon.link} target="_blank">
              <div key={icon.id}
                className="w-10 h-10 flex justify-center items-center 
                cursor-pointer backdrop-filter backdrop-blur-lg saturate-180
                bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <img src={icon.img} alt={`${icon.id}`} width={20} height={20} />
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="flex mt-4 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light my-1 lg:mt-6">© 2025 Sean-Luc Ghim</p>
      </div>
    </footer>
  )
}

export default Footer