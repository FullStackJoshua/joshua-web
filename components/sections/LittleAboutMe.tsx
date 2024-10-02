import React from "react";
import Image from "next/image";

function LittleAboutMe() {
  return (
    <section className="flex flex-row bg-cubeBlack bg-black px-20 pb-80">
      <article className="pt-80 sm:pt-20 lg:pt-80">
        <header>
          <p className="heading text-white pb-36">A LITTLE ABOUT ME -</p>
        </header>
        <p className="content text-white pl-10 sm:pl-10 sm:pr-10 lg:pl-24 lg:pr-52">
          I&#39;m a passionate and innovative software developer, committed to bringing your digital
          visions to life. Along my developer journey, I&#39;ve gained expertise in front-end and
          back-end development, database management, and project leadership.
        </p>
      </article>
      <article className="pt-80 sm:pt-20 lg:pt-80">
        <div className="button flex text-gray pt-60 pb-16 arrowup">(Know More About Me)</div>
        <p className="content text-white">
          I am enthusiastic about utilizing the newest technologies to provide creative solutions
          and am always excited to network with professionals who share the same mindset.
        </p>
      </article>
    </section>
  );
}

export default LittleAboutMe;
