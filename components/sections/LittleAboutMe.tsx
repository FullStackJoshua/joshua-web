import Link from "next/link";

function LittleAboutMe() {
  return (
    <section className="py-16 px-6 md:py-48 md:px-20 lg:px-20">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-40 items-start">
        {/* Left Column */}
        <div>
          <h2 className="heading mb-5 md:text-lgHeading md:mb-10 md:whitespace-nowrap">
            A LITTLE ABOUT ME -
          </h2>
          <p className="content leading-relaxed md:pl-12 md:text-lgContent">
            I&#39;m a passionate and innovative software developer, committed to bringing your
            digital visions to life. Along my developer journey, I&#39;ve gained expertise in
            front-end and back-end development, database management, and project leadership.
          </p>
        </div>

        {/* Right Column */}
        <div className="flex flex-col h-full md:pt-36 md:pr-12">
          {/* Paragraph Text */}
          <p className="content leading-relaxed md:text-lgContent md:order-1">
            I am enthusiastic about utilizing the newest technologies to provide creative solutions
            and am always excited to network with professionals who share the same mindset.
          </p>
          <Link href="/about" passHref>
            <div className="flex items-center pt-8 text-gray group hover:text-foreground-dark cursor-pointer md:order-0 md:pb-10">
              <span className="button text-gray mr-2 md:text-lgButton">(Know More About Me)</span>
              <img
                src="/icons/arrowup.svg"
                alt="Arrow Up Icon"
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LittleAboutMe;
