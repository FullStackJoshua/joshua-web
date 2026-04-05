"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiences, ExperienceEntry } from "@/data/experience";
import NoiseBackground from "@/components/NoiseBackground";
import SplitText from "@/TextAnimations/SplitText";

const ExperienceContent = () => {
  return (
    <NoiseBackground mode="light" intensity={0.1}>
      <div className="relative min-h-screen overflow-hidden">
        <motion.section
          className="px-5 md:pb-20 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto">
            <motion.div
              className="pb-10 md:pb-20"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="title md:text-lgTitle block">
                <SplitText text="WORK" />
              </h1>
              <h1 className="title md:text-lgTitle block pl-12 md:pl-32">
                <SplitText text="EXPERIENCE" />
              </h1>
            </motion.div>

            <div className="flex flex-col space-y-12 md:space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.4 + index * 0.15,
                  }}
                >
                  <ExperienceCard experience={exp} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </NoiseBackground>
  );
};

const ExperienceCard = ({ experience }: { experience: ExperienceEntry }) => (
  <div className="border-t border-gray/30 pt-6">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="md:col-span-3">
        <p className="content3 md:text-lgContent3 text-gray">
          {experience.startDate} — {experience.endDate}
        </p>
        <p className="content3 md:text-lgContent3 text-gray">
          {experience.location}
        </p>
      </div>

      <div className="md:col-span-9">
        <h3 className="content2 md:text-lgContent2 text-black">
          {experience.role}
        </h3>
        <p className="content md:text-lgContent text-gray italic mb-4">
          {experience.company}
        </p>
        <ul className="list-disc list-outside pl-5 space-y-2">
          {experience.bullets.map((bullet, i) => (
            <li key={i} className="content3 md:text-lgContent3 text-black">
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default ExperienceContent;
