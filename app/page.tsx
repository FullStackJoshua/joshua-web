import Hero from "@/components/sections/Hero";
import LittleAboutMe from "@/components/sections/LittleAboutMe";
import LittleProjects from "@/components/sections/LittleProjects";
import Contact from "@/components/sections/Contact";
import Marquee from "@/components/ui/Marquee";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-x-hidden mx-auto">
      <div className="w-full">
        <div className="bg-noiseonwhite">
          <Hero />
        </div>
        <div className="bg-noiseonblack bg-black text-white">
          <LittleAboutMe />
          <Marquee />
          <LittleProjects />
        </div>
      </div>
    </main>
  );
}
