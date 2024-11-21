"use client";

import React from "react";

const ProjectPage = () => {
  return (
    <section className="bg-noiseonblack bg-black text-white py-10 px-5">
      <header className="flex justify-between items-center mb-8">
        <h1 className="title">SANDBOX PROJECT</h1>
        <button className="content text-gray">More Projects</button>
      </header>

      <div className="space-y-8">
        <div className="rounded-lg overflow-hidden">
          <img
            src="/path/to/project-image.png"
            alt="Sandbox Project"
            className="w-full object-cover"
          />
        </div>

        <div className="space-y-6">
          <h2 className="heading">About This Project</h2>
          <p className="content2 text-gray">
            This project focuses on creating solutions for enhanced productivity using modern
            technologies like React and Node.js. It streamlines workflows, reduces complexity, and
            scales for business needs.
          </p>

          {/* Project Details */}
          <div className="grid grid-cols-2 gap-4 content2">
            <div>
              <h3 className="font-bold">Project Stack</h3>
              <p className="text-gray">Frontend & Backend</p>
            </div>
            <div>
              <h3 className="font-bold">Duration</h3>
              <p className="text-gray">August 2024</p>
            </div>
            <div>
              <h3 className="font-bold">Category</h3>
              <p className="text-gray">Private Side Project</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Images */}
      <div className="mt-10 space-y-6">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <div key={index} className="rounded-lg overflow-hidden">
            <img
              src="/path/to/secondary-image.png"
              alt={`Project Screenshot ${index + 1}`}
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-10">
        <button className="text-sm px-4 py-2 border border-white rounded-lg hover:bg-gray-800 transition">
          &lt; LAST
        </button>
        <button className="text-sm px-4 py-2 border border-white rounded-lg hover:bg-gray-800 transition">
          NEXT &gt;
        </button>
      </div>
    </section>
  );
};

export default ProjectPage;
