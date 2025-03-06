import React from 'react'
import { cn } from "@/utils/cn";
import Link from 'next/link';

const InvertButton = ({
  title,
  className,
  handleClick,
  href,
  hero,
}: {
  title: string;
  className?: string;
  handleClick?: () => void;
  href?: string;
  hero?: string;
}) => {

  const buttonClasses = cn(
    "px-4 py-2 rounded-md bg-[#8EAEC7] text-white font-bold text-sm md:text-base lg:text-lg transition duration-200 hover:bg-white border border-white hover:text-[#8EAEC7] hover:border-white",
    className
  );

  if (hero) {
    return (
      <Link href={hero} className={buttonClasses}>
        {title}
      </Link>
    );
  }

  if (href) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer" className={buttonClasses}>
        {title}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} onClick={handleClick}>
      {title}
    </button>
  )
}

export default InvertButton