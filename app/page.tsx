import Hero from "@/components/sections/Hero";
import LittleAboutMe from "@/components/sections/LittleAboutMe";
import LittleProjects from "@/components/sections/LittleProjects";
import Contact from "@/components/sections/Contact";
import { Marquee } from "@/components/ui/Marquee";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto  bg-noiseonwhite">
      <div className="w-full">
        <Hero />
        <LittleAboutMe />
        <LittleProjects />
        {/* <Marquee /> */}
      </div>
    </main>
  );
}
