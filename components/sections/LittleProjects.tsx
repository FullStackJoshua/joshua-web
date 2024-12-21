"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    year: "Year 2023",
    number: "01",
    name: "Sandbox Project Name",
    image: "/images/project1.jpg", // Replace with your image path
    link: "/projects/sandbox-project",
  },
  {
    year: "Year 2024",
    number: "02",
    name: "Someother Side Stuff",
    image: "/images/project2.jpg", // Replace with your image path
    link: "/projects/another-project",
  },
];

const ProjectsUI = () => {
  return (
    <section className="text-white px-7 py-20">
      <div className="container mx-auto">
        <h2 className="title text-4xl md:text-6xl font-bold mb-10">MY PROJECTS -</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <Link href={project.link} key={index}>
              <div className="relative group">
                {/* Project Image */}
                <div className="overflow-hidden rounded-md">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={600}
                    height={400}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Overlay Info */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-gray-400">{project.year}</p>
                  <p className="text-2xl font-bold">{project.name}</p>
                </div>

                {/* Year and Project Number */}
                <div className="absolute top-4 left-4">
                  <p className="text-gray-400 text-sm">{project.year}</p>
                  <p className="text-white text-2xl font-bold">{project.number}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsUI;
