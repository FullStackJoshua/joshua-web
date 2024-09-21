import React from "react";
import Image from "next/image";

function LittleAboutMe() {
  return (
    <section className="flex flex-row bg-cubeBlack bg-black px-20 pb-80">
      <article className="pt-80">
        <header>
          <p className="heading text-white-25 pb-36">A LITTLE ABOUT ME -</p>
        </header>
        <p className="content text-white-25 pl-24 pr-52">
          I&#39;m a passionate and innovative software developer, committed to bringing your digital
          visions to life. Along my developer journey, I&#39;ve gained expertise in front-end and
          back-end development, database management, and project leadership.
        </p>
      </article>
      <article className="pt-80">
        <footer className="button flex flex-nowrap text-[#7d7d7d] pt-60 pb-16 arrowup">
          (Know More About Me)
        </footer>
        <p className="content text-white-25">
          I am enthusiastic about utilizing the newest technologies to provide creative solutions
          and am always excited to network with professionals who share the same mindset.
        </p>
      </article>
    </section>
  );
}

export default LittleAboutMe;
