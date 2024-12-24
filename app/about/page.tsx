"use client";

import React from "react";
import Image from "next/image";
import { interests } from "@/data";

const AboutPage = () => {
  return (
    <section className="bg-noiseonwhite px-7 md:pb-20">
      <div className="container mx-auto">
        {/* Two-column layout for header, text, and portrait */}
        <div className="grid grid-cols-1 md:grid-cols-12 items-center">
          {/* Left column: Header and Paragraph */}
          <div className="md:col-span-8 pb-5 md:pb-40">
            <Header />
            <Paragraph />
          </div>
          {/* Right column: Portrait */}
          <div className="md:col-span-4 pb-10 flex justify-center md:justify-end ">
            <Portrait />
          </div>
        </div>

        {/* Section for interests */}
        <div>
          <Header2 />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
            {interests.map((interest, index) => (
              <Interest
                key={index}
                icon={interest.icon}
                alt={interest.alt}
                title={interest.title}
                description={interest.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Header = () => (
  <header className="title md:text-lgTitle pb-5">
    PART-TIME <br />I SIP COFFEE, <br />
    <span className="block pl-12 md:pl-32">FULL-TIME I BREW IDEAS -</span>
  </header>
);

const Paragraph = () => (
  <p className="content md:text-lgContent text-gray leading-relaxed">
    Growing up in bustling New York, I see software development as a reflection of city life -
    always evolving and full of possibilities. I’m excited to see where this journey takes me.
    <br />
    Onward and upward! I’m building my biz and teaming up with fellow innovators—small steps, grand
    adventures!
  </p>
);

const Portrait = () => (
  <Image
    alt="Portrait of Joshua Lim"
    src="/me.svg"
    width={408}
    height={488}
    className="rounded-md w-full max-w-xs"
    priority
  />
);

const Header2 = () => (
  <h2 className="heading md:text-lgHeading md:pb-10">- BUT THERE IS MORE TO ME</h2>
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
  <div className="flex flex-col space-y-2">
    {/* Icon and Title */}
    <div className="flex items-center space-x-2">
      <Image src={icon} alt={alt} width={16} height={16} className="md:w-8 md:h-8" />
      <h3 className="content2 text-gray md:text-lgContent2">{title}</h3>
    </div>
    {/* Description */}
    <p className="content3  md:text-lgContent3">{description}</p>
  </div>
);

export default AboutPage;
