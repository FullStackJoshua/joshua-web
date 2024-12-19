import Hero from "@/components/sections/Hero";
import LittleAboutMe from "@/components/sections/LittleAboutMe";
import LittleProjects from "@/components/sections/LittleProjects";
import Marquee from "@/components/ui/Marquee";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-x-hidden mx-auto">
      <div className="w-full">
        <Hero />
        <div className="bg-black bg-noiseonblack text-white">
          <LittleAboutMe />
          <Marquee />
          <LittleProjects />
        </div>
      </div>
    </main>
  );
}
