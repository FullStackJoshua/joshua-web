"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

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

const Marquee: React.FC = () => {
  const marqueeTopRef = useRef<HTMLDivElement>(null);
  const marqueeBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeTop = marqueeTopRef.current;
    const marqueeBottom = marqueeBottomRef.current;

    if (marqueeTop && marqueeBottom) {
      // Top Marquee Animation (Right to Left)
      gsap.to(marqueeTop, {
        x: "-100%",
        duration: 20,
        ease: "linear",
        repeat: -1,
      });

      // Bottom Marquee Animation (Left to Right)
      gsap.to(marqueeBottom, {
        x: "100%",
        duration: 20,
        ease: "linear",
        repeat: -1,
      });
    }
  }, []);

  return (
    <div className="bg-black py-10 overflow-hidden">
      {/* Top Marquee */}
      <div ref={marqueeTopRef} className="flex gap-6 whitespace-nowrap w-max">
        {[...skills, ...skills].map((skill, index) => (
          <span
            key={index}
            className="text-white border border-white px-4 py-2 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Bottom Marquee */}
      <div ref={marqueeBottomRef} className="flex gap-6 whitespace-nowrap w-max mt-5">
        {[...skills, ...skills].map((skill, index) => (
          <span
            key={index}
            className="text-white border border-white px-4 py-2 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
