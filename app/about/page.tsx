"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { interests } from "@/data";
import NoiseBackground from "@/components/NoiseBackground";
import SplitText from "@/TextAnimations/SplitText";

const AboutPage = () => {
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
            <div className="grid grid-cols-1 md:grid-cols-12 items-center">
              <motion.div
                className="md:col-span-8 pb-5 md:pb-40"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Header />
                <Paragraph />
              </motion.div>

              <motion.div
                className="md:col-span-4 pb-10 flex justify-center md:justify-end"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <Portrait />
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              >
                <Header2 />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col space-y-2"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.6 + index * 0.1,
                    }}
                  >
                    <Interest
                      icon={interest.icon}
                      alt={interest.alt}
                      title={interest.title}
                      description={interest.description}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </NoiseBackground>
  );
};

const Header = () => (
  <header className="title md:text-lgTitle pb-5 md:pb-20">
    <div className="block">
      <SplitText text="PART-TIME" />
    </div>
    <div className="block">
      <SplitText text="I SIP COFFEE," />
    </div>
    <div className="block pl-12 md:pl-32">
      <SplitText text="FULL-TIME I" />
    </div>
    <div className="block pl-12 md:pl-32">
      <SplitText text="BREW IDEAS -" />
    </div>
  </header>
);

const Paragraph = () => (
  <p className="content md:text-lgContent text-gray italic">
    &quot;Growing up in New York City, I’ve always seen software development as a reflection of the
    city—fast-paced, constantly evolving, and full of possibilities. Just like New York thrives on
    innovation, coding is about adapting, solving problems, and building things that last. Every
    challenge is a chance to grow, every setback a lesson, and every success a new milestone. I’m
    excited to keep learning, creating, and shaping the digital world—one line of code at a
    time.&quot;
  </p>
);

const Portrait = () => (
  <Image
    alt="Portrait of Joshua Lim"
    src="/me.svg"
    width={408}
    height={488}
    className="rounded-md"
    priority
  />
);

const Header2 = () => (
  <SplitText text="-But There Is More To Me" className="heading md:text-lgHeading md:pb-10" />
);

const Interest = ({
  icon,
  alt,
  title,
  description,
}: {
  icon: string;
  alt: string;
  title: string;
  description: string;
}) => (
  <div>
    <div className="flex items-center space-x-2">
      <Image src={icon} alt={alt} width={16} height={16} className="md:w-8 md:h-8" />
      <h3 className="content2 text-gray md:text-lgContent2">{title}</h3>
    </div>

    <p className="content3 md:text-lgContent3">{description}</p>
  </div>
);

export default AboutPage;
