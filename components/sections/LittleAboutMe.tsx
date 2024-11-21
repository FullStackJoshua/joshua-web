function LittleAboutMe() {
  return (
    <section className="flex flex-row py-20 px-6">
      <article className="content">
        <header className="title pb-12">A LITTLE ABOUT ME -</header>
        <p className="pb-2 ">
          I&#39;m a passionate and innovative software developer, committed to bringing your digital
          visions to life. Along my developer journey, I&#39;ve gained expertise in front-end and
          back-end development, database management, and project leadership.
        </p>

        <p>
          I am enthusiastic about utilizing the newest technologies to provide creative solutions
          and am always excited to network with professionals who share the same mindset.
        </p>
        <div className="flex items-center pt-10">
          <span className="button text-gray ">(Know More About Me)</span>
          <img src="/icons/arrowup.svg" alt="Arrow Up Icon" className="w-3 h-3 ml-2" />
        </div>
      </article>
    </section>
  );
}

export default LittleAboutMe;
