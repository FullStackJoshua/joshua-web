"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "SQL",
  "Java",
  "React",
  "Tailwind",
  "Next",
  "Vite",
  "Git",
  "GitHub",
  "VS Code",
  "Postman",
  "MySQL",
  "MongoDB",
  "MSSQL",
];

const Marquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (marqueeRef.current) {
      // Dynamically calculate the width of the content
      const width = marqueeRef.current.scrollWidth;
      setContentWidth(width);
    }
  }, [marqueeRef]);

  const marqueeVariants = {
    animate: {
      x: [0, -contentWidth], // Use the dynamically calculated width
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 35,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="relative w-full overflow-hidden py-10">
      {/* Top Marquee */}
      <motion.div
        ref={marqueeRef}
        className="flex whitespace-nowrap w-max"
        variants={marqueeVariants}
        animate="animate"
      >
        {[...skills, ...skills].map((skill, index) => (
          <span
            key={index}
            className="border border-white px-4 py-2 rounded-full mx-2 text-sm flex-shrink-0"
          >
            {skill}
          </span>
        ))}
      </motion.div>

      {/* Bottom Marquee (Reverse Direction) */}
      <motion.div
        className="flex whitespace-nowrap w-max mt-5"
        variants={{
          animate: {
            x: [0, contentWidth],
            transition: {
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            },
          },
        }}
        animate="animate"
      >
        {[...skills, ...skills].map((skill, index) => (
          <span
            key={index}
            className="border border-white px-4 py-2 rounded-full mx-2 text-sm flex-shrink-0"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
