import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section className="bg-noiseonwhite grid grid-cols-1 px-7 pb-10">
      <header className="title md:text-lgTitle">
        HI THERE -
        <br />
        <span className="title pb-6 flex justify-end md:text-lgTitle">I’M JOSHUA LIM</span>
      </header>

      <article className="content pb-5 text-gray md:text-lgContent">
        An experienced Full-Stack Web Developer proficient in all areas of web development,
        including frontend, backend, and database management.
      </article>
      <figure className="">
        <Image
          alt="Portrait of Joshua Lim"
          src="/me.svg"
          width={408}
          height={488}
          className="rounded-md mx-auto md:mx-0"
          priority
        />
      </figure>

      <div className="mt-2 flex justify-between items-center content3 text-gray md:text-lgContent3">
        <div className="flex items-center">
          <Image
            src="/icons/globe.svg"
            alt="Location: Brooklyn, New York"
            width={14}
            height={14}
            className="md:w-[24px] md:h-[24px]"
          />
          <span className="pl-1">Brooklyn, New York</span>
        </div>

        <div className="hidden md:flex items-center">
          <button className="flex items-center">
            <span className="pr-1">(Scroll For More)</span>
            <Image
              src="/icons/arrowdown.svg"
              alt="Arrow Down Icon"
              width={24}
              height={24}
              className="animate-bounce"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
