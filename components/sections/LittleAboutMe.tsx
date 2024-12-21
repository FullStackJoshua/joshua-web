"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Marquee from "@/components/ui/Marquee";

const LittleAboutMe = () => {
  return (
    <section id="about-section" className="bg-noiseonwhite px-7 py-12 md:pt-40">
      <div className="container pb-12 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 md:pb-36 md:gap-0 items-start">
        <div>
          <Header />
          <Paragraph />
        </div>
        <div className="flex flex-col h-full md:pt-44">
          <Paragraph2 />
          <MoreAboutMe />
        </div>
      </div>
      <Marquee />
    </section>
  );
};

const Header = () => (
  <h2 className="heading mb-5 md:text-lgHeading md:mb-12 md:whitespace-nowrap">
    A LITTLE ABOUT ME -
  </h2>
);

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Paragraph = () => (
  <motion.p
    className="content leading-relaxed md:pl-16 md:text-lgContent md:order-1"
    variants={fadeInVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    I&#39;m a passionate and innovative software developer, committed to bringing your digital
    visions to life. Along my developer journey, I&#39;ve gained expertise in front-end and back-end
    development, database management, and project leadership.
  </motion.p>
);

const Paragraph2 = () => (
  <motion.p
    className="content leading-relaxed md:text-lgContent md:order-1 max-w-lg lg:ml-auto"
    variants={fadeInVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 2, ease: "easeOut" }}
  >
    I am enthusiastic about utilizing the newest technologies to provide creative solutions and am
    always excited to network with professionals who share the same mindset.
  </motion.p>
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

const MoreAboutMe = () => (
  <motion.div
    className="flex pt-5 items-center text-gray group md:order-0 max-w-lg md:pl-24 md:pb-10"
    variants={fadeInVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 2, ease: "easeOut" }}
  >
    <Link href="/about" passHref>
      <span className="button text-gray mr-2 md:text-lgButton hover:text-white hover:underline transition">
        (Know More About Me)
      </span>
    </Link>
    <Link href="/about" passHref>
      <Icon
        src="/icons/arrowup.svg"
        alt="Arrow Up Icon"
        width={16}
        height={16}
        additionalClasses="transition-transform duration-300 group-hover:translate-x-1  group-hover:-translate-y-1 w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5"
      />
    </Link>
  </motion.div>
);

export default LittleAboutMe;
