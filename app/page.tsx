"use client";

import Hero from "@/components/sections/Hero";
import LittleAboutMe from "@/components/sections/LittleAboutMe";
import LittleProjects from "@/components/sections/LittleProjects";
import NoiseBackground from "@/components/NoiseBackground";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-x-hidden mx-auto">
      <div className="w-full">
        <NoiseBackground mode="light" intensity={0.1}>
          <Hero />
        </NoiseBackground>
        <NoiseBackground mode="dark" intensity={0.1}>
          <LittleAboutMe />
          <LittleProjects />
        </NoiseBackground>
      </div>
    </main>
  );
}
