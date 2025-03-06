import { navIcons } from '@/data'
import React from 'react'
import { AnimatedTooltip } from './ui/AnimatedTooltip'

const Nav = () => {
  return (
    <nav className="w-screen bg-white pt-6 lg:pr-11">
      <div className="flex items-center justify-evenly lg:justify-end lg:gap-11">
        <AnimatedTooltip items={navIcons} />
      </div>
    </nav>
  )
}

export default Nav