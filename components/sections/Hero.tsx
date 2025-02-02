"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SplitText from "@/TextAnimations/SplitText";

export default function Hero() {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="px-7 pb-10">
      <div className="container mx-auto">
        <IntroHeader />
        <div className="max-w-6xl mx-auto">
          <div className="md:flex md:flex-row-reverse md:items-center md:justify-between md:gap-16 lg:gap-32">
            <IntroParagraph />
            <Portrait />
          </div>
          <div className="flex justify-between items-center">
            <Location />
            <ScrollForMore onClick={handleScrollToAbout} />
          </div>
        </div>
      </div>
    </section>
  );
}

const IntroHeader = () => (
  <div className="lg:translate-y-1/4 title sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
    <SplitText text="HI THERE -" />
    <SplitText text="I'M JOSHUA LIM" className="justify-end" />
  </div>
);

const IntroParagraph = () => (
  <motion.p
    className="content py-8 text-gray md:text-lgContent max-w-lg lg:mr-auto lg:pl-10"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    An experienced Full-Stack Web Developer proficient in all areas of web development, including
    frontend, backend, and database management.
  </motion.p>
);

const Portrait = () => (
  <Image
    alt="Portrait of Joshua Lim"
    src="/me.svg"
    width={408}
    height={488}
    className="rounded-md mx-auto md:mx-0 mb-4 w-full lg:max-w-xs"
    priority
  />
);

interface IconProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  additionalClasses?: string;
}

const Icon: React.FC<IconProps> = ({ src, alt, width, height, additionalClasses = "" }) => (
  <Image src={src} alt={alt} width={width} height={height} className={additionalClasses} />
);

const Location = () => (
  <div className="button md:text-lgButton text-gray flex items-center gap-1">
    <Icon
      src="/icons/globe.svg"
      alt="Globe icon"
      width={15}
      height={15}
      additionalClasses="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5"
    />
    <span>Brooklyn, New York</span>
  </div>
);

const ScrollForMore = ({ onClick }: { onClick: () => void }) => (
  <div className="button md:text-lgButton text-gray hidden md:flex md:items-center">
    <button onClick={onClick} className="flex items-center gap-1">
      <span>(Scroll For More)</span>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <Image
          src="/icons/arrowdown.svg"
          alt="Arrow Down Icon for scrolling"
          width={25}
          height={25}
          className="md:w-4 md:h-4 lg:w-5 lg:h-5"
        />
      </motion.div>
    </button>
  </div>
);
