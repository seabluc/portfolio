import React from 'react'
import InvertButton from './ui/InvertButton'
import { DirectionAwareHover } from './ui/DirectionAwareHover'
//import { LinkPreview } from './ui/LinkPreview'

const About = () => {
  return (
    <div className="h-[80vh] w-screen bg-[#8EAEC7] text-white flex flex-col px-8
     items-center relative bg-gradient-to-b from-[#8EAEC7] to-white via-[#8EAEC7]
     via-90% overflow-hidden" id="about">
      <h2 className="heading text-white pt-10 lg:pt-20">ABOUT</h2>
      <section className="flex p-4 mt-5 lg:mt-10 w-full max-w-6xl">
        <div className="flex mr-8 lg:mr-16 items-start">
          <DirectionAwareHover imageUrl="/portfolioPic1.png" hoverImageUrl="/portfolioPic2.png" />
        </div>
        <div className="flex flex-col justify-between items-start h-full ml-8 lg:ml-16">
          <p className="about-body">
            Before tech, my passion was food. After graduating from culinary school,
            I spent years in the food industry as a line cook.
            But after a work injury forced me to step back, I had to reconsider my career path.
          </p>
          {/*<p className="about-body">
            I took a leap and pursued my <LinkPreview url="https://www.uwb.edu/stem/undergraduate/majors/bscsse" className="underline">
            Bachelor&apos;s in Computer Science at the University of Washington,</LinkPreview> where
            I quickly absorbed new concepts and developed a strong interest in building responsive, intuitive web applications.
          </p>
          */}
          <p className="about-body">
            I took a leap and pursued my <a
              href="https://www.uwb.edu/stem/undergraduate/majors/bscsse"
              target="_blank" rel="noopener noreferrer" className="underline">
              Bachelor&apos;s in Computer Science at the University of Washington
            </a>, where I quickly absorbed new concepts and developed a strong interest in building responsive, intuitive web applications.
          </p>
          <p className="about-body">
            Outside of coding, I enjoy golfing, experimenting with new recipes, and playing competitive shooters.
          </p>
          <InvertButton
            title="Resume"
          />
        </div>
      </section>
      <div className="absolute bottom-0 left-0 w-full h-24 lg:bg-[#FFFFFF] lg:transform rotate-[-1.0deg] origin-bottom -mb-4" />
    </div>
  )
}

export default About
{/* include button linking to resume. update resume w/ hyperlinks. incorporate UW theme (bg)? */ }
