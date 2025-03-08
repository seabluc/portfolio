import React from 'react'
import InvertButton from './ui/InvertButton'
import { DirectionAwareHover } from './ui/DirectionAwareHover'

const About = () => {
  return (
    <section className="w-screen bg-blue-1 flex flex-col px-8 items-center
    lg:bg-[linear-gradient(-2.3deg,white_14.85%,#8EAEC7_15%)] overflow-hidden"
      id="about">
      <div className="lg:max-h-[65%] flex flex-col px-8 items-center lg:mb-64">
        <h2 className="heading pt-16 pb-14 lg:py-20 text-white">ABOUT</h2>
        <div className="flex flex-col gap-4 lg:gap-12">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 w-full max-w-5xl pb-6">
            {/* Left section - portfolio pic */}
            <div className="flex-1 flex justify-center">
              <DirectionAwareHover imageUrl="/portfolioPic1.png" hoverImageUrl="/portfolioPic2.png" />
            </div>

            {/* Right section - About text */}
            <div className="flex flex-col flex-1 gap-2 md:gap-4 lg:gap-6">
              <p className="about-body">
                Before tech, my passion was food. Upon graduating from culinary school,
                I spent years in the food industry as a line cook.
                But after a work injury forced me to step back, I had to reconsider my career path.
              </p>
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
              <div className="py-4 md:py-2 lg:py-1">
                <InvertButton title="Resume" href="/SeanLucGhim-Resume-LaTex.pdf"/>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default About
