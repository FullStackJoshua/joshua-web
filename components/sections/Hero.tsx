import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section className="grid grid-rows-auto gap-11 px-7 lg:mx-16 lg:grid lg:grid-rows-4">
      <header className="title lg:text-lg-title lg:col-span-4">
        <h1>
          HI THERE - <br />
          <span className="flex justify-end ">I’M JOSHUA LIM</span>
        </h1>
      </header>

      <article className="content text-gray lg:text-lg-content lg:pl-48 lg:pr-72">
        An experienced Full-Stack Web Developer proficient in all areas of web development,
        including frontend, backend, and database management.
      </article>
      <figure className="mx-auto lg:pl-32 w-full lg:row-span-2">
        <Image
          alt="Portrait of Joshua Lim"
          src="/me.svg"
          width={408}
          height={488}
          className="rounded-md"
        />
      </figure>
      <div className=" flex button text-gray -mt-7 lg:text-lg-button justify-between items-center">
        {/* Location Section */}
        <address className="flex items-center">
          <img src="/icons/globe.svg" alt="Globe Icon" className="w-4 h-4  lg:w-6 lg:h-6 mr-2" />
          Brooklyn, New York
        </address>

        {/* Scroll Indicator for Desktop */}
        <div className="hidden lg:flex items-center space-x-2">
          <span>(Scroll For More)</span>
          <img src="/icons/arrowdown.svg" alt="Arrow Down Icon" className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
