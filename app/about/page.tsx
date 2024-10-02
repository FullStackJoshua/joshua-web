import React from "react";
import Image from "next/image";

const about = () => {
  return (
    <section className="px-20 py-20 bg-noiseonwhite text-black">
      {/* Main Title Section */}

      <div className="flex grid-col mb-20 justify-between">
        <div>
          <h1 className="title font-black leading-tight">
            PART-TIME <br /> I CODE,
          </h1>

          <h1 className="title font-black leading-tight pl-28 pt-10">
            FULL-TIME <br />I DEBUG -
          </h1>
          <p className="text-gray content leading-relaxed mt-64 mb-8 pl-24">
            Growing up in bustling New York, I see software <br />
            development as a reflection of my life – always <br /> evolving and full of
            possibilities. I'm excited to <br />
            see where this journey takes me.
            <br />
            <br />
          </p>
          <p className="text-gray content leading-relaxed mb-8 pl-10">
            Onward and upward! I’m building my biz and
            <br /> teaming up with fellow innovators—small steps,
            <br /> grand adventures!
          </p>
        </div>

        <Image alt="Portrait of Me" src="/me.svg" width={700} height={840} className="pt-52" />
      </div>

      <div className="grid grid-cols-[1fr,2fr] grid-rows-3 pl-24">
        <div></div>
        <h2 className="heading font-bold">
          - BUT THERE IS MORE TO <br />
          ME
        </h2>
        <h3 className="content2  pb-20 font-bold text-gray coffee">Coffee Aficionado</h3>
        <p className="content">
          I'm a coffee aficionado who loves sipping on iced <br />
          lattes and cortados from every corner café
          <br /> I can find.
        </p>

        <h3 className="content2  pb-20 font-bold text-gray gym">Gym Extraordinaire</h3>
        <p className="content">
          When I'm not savoring my coffee fix, you can find me
          <br /> at the gym, where I'm basically a rep-chasing, sweat-
          <br />
          dripping dynamo.
        </p>

        <h3 className="content2  pb-20 font-bold text-gray compass">Urban Explorer</h3>
        <p className="content">
          In my downtime, I'm a city sleuth, discovering hidden
          <br /> gems and quirky spots. Every stroll turns into an
          <br />
          adventure!
        </p>
      </div>
    </section>
  );
};

export default about;
