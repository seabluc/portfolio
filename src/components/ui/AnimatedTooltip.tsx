"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    img: string;
    link: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {items.map((item, idx) => (
        <div
          className="lg:mr-5 lg:mt-2 relative group"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 175,
                    damping: 20,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-8 -left-4 translate-x-1/2 flex text-sm flex-col items-center justify-center rounded-md bg-[#212227] bg-opacity-0 z-50 px-2 py-1"
              >
                <div className="absolute inset-x-10 w-[20%] h-px " />
                <div className="absolute left-10 w-[40%] h-px " />
                <div className="font-semibold text-[#8EAEC7] text-base">
                  {item.name}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <Link href={item.link} target="_blank">
            <Image
              onMouseMove={handleMouseMove}
              height={36}
              width={36}
              src={item.img}
              alt={item.name}
              className="cursor-pointer object-cover !m-0 !p-0 p object-top h-10 w-10
            group-hover:scale-105 transition duration-500"/>
          </Link>
        </div>
      ))}
    </>
  );
};
