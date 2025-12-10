"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SplitText from "@/TextAnimations/SplitText";
import { footerItems } from "@/data";
import Link from "next/link";

export default function Hero() {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="px-7 pb-10 md:pb-40">
      <div className="container mx-auto">
        <IntroHeader />
        <div className="max-w-8xl md:pl-10 mx-auto">
          <div className="md:flex md:flex-row-reverse md:items-center md:justify-between md:gap-16 lg:gap-48">
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
  <h1 className="lg:translate-y-1/4 title md:text-lgTitle">
    <SplitText text="HI THERE -" />
    <SplitText text="I'M JOSHUA LIM" className="justify-end" />
  </h1>
);

const IntroParagraph = () => (
  <motion.div
    className="content my-8 text-gray md:text-lgContent lg:mr-auto md:pl-10 max-w-3xl"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    Experienced Software Developer. I love solving complex problems and building web solutions that
    are fast, scalable, and future-ready.
    <Socials />
  </motion.div>
);

const Portrait = () => (
  <Image
    alt="Portrait of Joshua Lim"
    src="/me.JPG"
    width={408}
    height={488}
    className="rounded-md md:mx-0 mb-5 w-full lg:max-w-sm"
    priority
  />
);

const Socials = () => (
  <div className="flex gap-4 justify-center items-center md:justify-start pt-5">
    {footerItems.map((item) => (
      <Link
        key={item.path}
        href={item.path}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Go to ${item.title}`}
        className="flex items-center gap-2 text-gray hover:text-black hover:scale-105 transition"
      >
        <Image
          src={item.icon}
          alt={`${item.title} Icon`}
          width={32}
          height={32}
          priority={item.title === "LinkedIn"}
        />
        <span className="hidden md:inline">{item.title}</span>
      </Link>
    ))}
  </div>
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
  <div className="button md:text-lgButton text-gray flex items-center gap-2">
    <Icon
      src="/icons/globe.svg"
      alt="Globe icon"
      width={16}
      height={16}
      additionalClasses="md:w-4 md:h-4 lg:w-6 lg:h-6"
    />
    <span>Brooklyn, New York</span>
  </div>
);

const ScrollForMore = ({ onClick }: { onClick: () => void }) => (
  <div className="button md:text-lgButton text-gray hidden md:flex md:items-center">
    <button onClick={onClick} className="flex items-center gap-2">
      <span>(Scroll For More)</span>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <Image
          src="/icons/arrowdown.svg"
          alt="Arrow Down Icon for scrolling"
          width={16}
          height={16}
          className="md:w-4 md:h-4 lg:w-6 lg:h-6"
        />
      </motion.div>
    </button>
  </div>
);
