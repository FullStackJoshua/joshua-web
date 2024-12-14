import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section className="grid grid-cols-1 px-7 pb-16 md:grid-cols-12 md:gap-8 md:px-16 md:pb-20">
      {/* Image Section (Moves to the left for desktop) */}
      <figure className="order-2 md:order-1 md:col-span-5 md:self-start">
        <Image
          alt="Portrait of Joshua Lim"
          src="/me.svg"
          width={408}
          height={488}
          className="rounded-md mx-auto md:mx-0"
          priority
        />

        <div className="mt-4 flex justify-between items-center text-gray md:mt-8">
          <address className="flex content2 items-center not-italic">
            <Image
              src="/icons/globe.svg"
              alt="Location: Brooklyn, New York"
              width={24}
              height={24}
            />
            Brooklyn, New York
          </address>

          <div className="hidden md:flex items-center space-x-2">
            <button className="flex items-center">
              <span className="md:text-lg-button">(Scroll For More)</span>
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
      </figure>

      <div className="order-1 md:order-2 md:col-span-7 md:pl-8">
        <header className="title pb-6 md:pb-8 text-left md:text-lg-title">
          HI THERE - <br />
          <span className="flex justify-center">I’M JOSHUA LIM</span>
        </header>

        <article className="content2 pb-5 text-gray md:text-lg-content md:mt-4">
          An experienced Full-Stack Web Developer proficient in all areas of web development,
          including frontend, backend, and database management.
        </article>
      </div>
    </section>
  );
}

export default Hero;
