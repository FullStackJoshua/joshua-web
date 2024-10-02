"use client";
import React, { useState } from "react";

function LittleProjects() {
  // Pagination state: 0 for first page, 1 for second
  const [pageIndex, setPageIndex] = useState(0);

  // Data for the projects
  const projects = [
    {
      year: 2023,
      number: "01",
      title: "Sandbox Project Name",
      imgSrc: "/path-to-image1.jpg",
    },
    {
      year: 2024,
      number: "02",
      title: "Someother Side Stuff",
      imgSrc: "/path-to-image2.jpg",
    },
  ];

  const handleNext = () => {
    setPageIndex((prevIndex) => (prevIndex + 1) % 2); // Loops through pages
  };

  const handlePrev = () => {
    setPageIndex((prevIndex) => (prevIndex === 0 ? 1 : prevIndex - 1)); // Loops backwards
  };

  return (
    <section className="bg-noiseonblack bg-black px-20 py-60">
      <h2 className="heading text-white">MY PROJECTS -</h2>

      <div className="mt-16 grid grid-cols-2 gap-40">
        {projects.slice(pageIndex, pageIndex + 2).map((project, index) => (
          <div key={index} className="flex flex-col gap-5">
            <div className="flex justify-between text-gray button">
              <span>Year {project.year}</span>
              <span>{project.number}</span>
            </div>

            <div className="relative bg-white box-content h-96 w-full">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>

            <h3 className="text-white content">{project.title}</h3>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-2 mt-10">
        <button
          className={`h-4 w-4 rounded-full ${pageIndex === 0 ? "bg-white" : "bg-gray"}`}
          onClick={() => setPageIndex(0)}
        ></button>
        <button
          className={`h-2 w-2 rounded-full ${pageIndex === 1 ? "bg-white" : "bg-gray"}`}
          onClick={() => setPageIndex(1)}
        ></button>
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-between items-center mt-10">
        <button className="text-white" onClick={handlePrev}>
          Previous
        </button>
        <button className="text-white" onClick={handleNext}>
          Next
        </button>
      </div>
    </section>
  );
}

export default LittleProjects;
