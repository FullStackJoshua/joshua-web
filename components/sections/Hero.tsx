import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section className="grid grid-rows-4 px-20 sm:px-10 lg:px-20">
      <header className="col-span-4 title">
        <h1>HI THERE -</h1>
      </header>

      <figure className="row-span-2 ml-32">
        <Image alt="Portrait of Joshua Lim" src="/me.svg" width={408} height={488} />
      </figure>

      <header className="col-span-3">
        <h1 className="title flex justify-end">I’M JOSHUA LIM</h1>
      </header>

      <article className="content text-gray pl-48 pr-72">
        An experienced Full-Stack Web Developer proficient in all areas of web development,
        including frontend, backend, and database management.
      </article>

      <footer className="col-span-4 flex justify-between pl-32 pt-6 place-items-start">
        <address className="button text-gray flex items-center globe">Brooklyn, New York</address>

        <div className="button text-gray flex items-center arrowdown">(Scroll For More)</div>
      </footer>
    </section>
  );
}

export default Hero;
