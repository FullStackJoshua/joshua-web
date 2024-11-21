"use client";

import React from "react";

const AboutPage = () => {
  const interests = [
    {
      icon: "/icons/coffee.svg",
      alt: "Coffee Icon",
      title: "Coffee Aficionado",
      description:
        "I’m a coffee aficionado who loves sipping on iced lattes and iced Americanos from every corner café I can find.",
    },
    {
      icon: "/icons/gym.svg",
      alt: "Gym Icon",
      title: "Gym Extraordinaire",
      description:
        "When I’m not savoring my coffee fix, you can find me at the gym, where I’m basically a rep-chasing, sweat-dripping dynamo.",
    },
    {
      icon: "/icons/compass.svg",
      alt: "Compass Icon",
      title: "Urban Explorer",
      description:
        "In my downtime, I’m a city sleuth, discovering hidden gems and quirky spots. Every stroll turns into an adventure!",
    },
  ];

  return (
    <section className="bg-noiseonwhite text-black  px-7">
      <div className="space-y-4 mb-10">
        <h1 className="title text-center">
          PART-TIME I CODE, <br /> FULL-TIME I DEBUG -
        </h1>
        <p className="content2 text-gray">
          Growing up in bustling New York, I see software development as a reflection of city life -
          always evolving and full of possibilities. I’m excited to see where this journey takes me.
          <br />
          <br />
          Onward and upward! I’m building my biz and teaming up with fellow innovators—small steps,
          grand adventures!
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <img src="/me.svg" alt="Profile Picture" className="w-72 h-80 rounded-lg" />
      </div>

      <div className="space-y-4 mb-10">
        <h2 className="title">- BUT THERE IS MORE TO ME</h2>
      </div>

      <div className="space-y-8">
        {interests.map((interest, index) => (
          <div key={index} className="flex items-start space-x-4">
            <img src={interest.icon} alt={interest.alt} className="w-4 h-4 flex-shrink-0" />
            <div>
              <h3 className="content">{interest.title}</h3>
              <p className="content2 text-gray pt-2">{interest.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutPage;
