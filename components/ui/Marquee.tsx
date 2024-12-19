"use client";

import React from "react";
import MarqueeItem from "./MarqueeItem";

const Marquee = () => {
  const upperMarquee = [
    { src: "/techStack/01.svg", text: "HTML" },
    { src: "/techStack/02.svg", text: "CSS" },
    { src: "/techStack/03.svg", text: "JavaScript" },
    { src: "/techStack/04.svg", text: "Tailwind" },
    { src: "/techStack/05.svg", text: "TypeScript" },
    { src: "/techStack/06.svg", text: "Python" },
    { src: "/techStack/07.svg", text: "MySQL" },
  ];

  const lowerMarquee = [
    { src: "/techStack/09.svg", text: "React" },
    { src: "/techStack/08.svg", text: "Java" },
    { src: "/techStack/10.svg", text: "Git" },
    { src: "/techStack/11.svg", text: "GitHub" },
    { src: "/techStack/12.svg", text: "VS Code" },
    { src: "/techStack/13.svg", text: "Postman" },
    { src: "/techStack/14.svg", text: "Next.Js" },
  ];

  return (
    <div className="container mx-auto py-5">
      <MarqueeItem images={upperMarquee} from={"0%"} to={"-100%"} />
      <MarqueeItem images={lowerMarquee} from={"-100%"} to={"0%"} />
    </div>
  );
};

export default Marquee;
