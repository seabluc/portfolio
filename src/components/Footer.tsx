import React from 'react'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          <span className="text-purple">CONTACT</span> ME
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Interested in working together? Let&apos;s connect!
        </p>
      </div>

      <div className="flex mt-8 sm:mb-2 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light mb-4">© 2025 Sean-Luc Ghim</p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <a key={profile.id} href={profile.link} target="_blank">
              <div key={profile.id}
                className="w-10 h-10 flex justify-center items-center 
                cursor-pointer backdrop-filter backdrop-blur-lg saturate-180
                bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <img src={profile.img} alt={`${profile.id}`} width={20} height={20} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer