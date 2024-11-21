"use client";

import React from "react";

const projects = [
  {
    year: "2023",
    number: "01",
    image: "/path/to/project1.png",
    name: "Sandbox Project Name",
  },
  {
    year: "2023",
    number: "02",
    image: "/path/to/project2.png",
    name: "Sandbox Project Name",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-10 px-5">
      <h2 className="title mb-8">MY PROJECTS -</h2>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="space-y-4">
            <div className="flex justify-between items-center text-content3 text-gray">
              <span>Year {project.year}</span>
              <span>{project.number}</span>
            </div>

            <div className="rounded-lg overflow-hidden">
              <img src={project.image} alt={project.name} className="w-full object-cover" />
            </div>

            <h3 className="text-lg font-medium">{project.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
