"use client";

import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";

const ProjectsPage = () => {
  return (
    <section className="bg-black text-white px-5 py-10 md:px-20 md:py-20">
      <div className="container mx-auto">
        <h1 className="title text-4xl md:text-6xl font-bold mb-10">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link href={`/projects/${project.slug}`} key={project.slug}>
              <div className="cursor-pointer">
                <Image
                  src={project.mainImage}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full rounded-md"
                />
                <h2 className="text-2xl font-bold mt-4">{project.title}</h2>
                <p className="text-gray mt-2">{project.description.slice(0, 100)}...</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
