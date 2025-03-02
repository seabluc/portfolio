import React from 'react'

const InvertButton = ({
  title, handleClick, otherClasses
}: {
  title: string; handleClick?: () => void; otherClasses?: string;
}) => {
  return (
    <button className="px-4 py-2 rounded-md bg-[#8EAEC7] text-white font-bold
    text-sm md:text-base lg:text-lg transition duration-200 hover:bg-white
    border border-white hover:text-[#8EAEC7]  hover:border-white" onClick={handleClick}>
      <span className={`${otherClasses}`}>
        {title}
      </span>
    </button>
  )
}

export default InvertButton