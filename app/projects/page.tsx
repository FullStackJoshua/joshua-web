import React from "react";
import Image from "next/image";

const ProjectPage = () => {
  return (
    <section className="bg-noiseonblack bg-black text-white px-20 py-24">
      {/* Header Section */}
      <header className="flex justify-between items-center mb-12">
        <h1 className="title font-bold text-white">
          SANDBOX <br />
          PROJECT
        </h1>
        <span className="text-gray-500 text-lg">01 / 02</span>
      </header>

      {/* Project Image */}
      <div className="flex justify-center mb-16">
        <Image
          alt="Project Image"
          src="/project-main.png" // Change to your actual image path
          width={800}
          height={450}
          className="rounded-md"
        />
      </div>

      {/* About the Project */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">About The Project</h2>
          <p className="text-gray-400 leading-relaxed">
            Meet TaskMaster Pro, the ultimate productivity wizard designed to help individuals and
            teams get their tasks in order. Whether it’s keeping track of daily goals or managing a
            full-blown project, TaskMaster Pro helps bring clarity and order to your work life.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
          <div className="flex flex-col gap-4 text-gray-400">
            <div className="flex justify-between">
              <span>Project Role:</span>
              <span>Frontend & Backend</span>
            </div>
            <div className="flex justify-between">
              <span>Completion:</span>
              <span>August 2024</span>
            </div>
            <div className="flex justify-between">
              <span>Category:</span>
              <span>Personal Side Project</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div>
          <Image
            alt="Gallery Image 1"
            src="/project-gallery-1.png" // Change to your actual image path
            width={400}
            height={300}
            className="rounded-md"
          />
        </div>
        <div>
          <Image
            alt="Gallery Image 2"
            src="/project-gallery-2.png" // Change to your actual image path
            width={400}
            height={300}
            className="rounded-md"
          />
        </div>
        <div>
          <Image
            alt="Gallery Image 3"
            src="/project-gallery-3.png" // Change to your actual image path
            width={400}
            height={300}
            className="rounded-md"
          />
        </div>
        <div>
          <Image
            alt="Gallery Image 4"
            src="/project-gallery-4.png" // Change to your actual image path
            width={400}
            height={300}
            className="rounded-md"
          />
        </div>
      </div>

      {/* Technologies Used */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <p className="text-gray-400 leading-relaxed">
          TaskMaster Pro leverages cutting-edge technologies for both front-end and back-end
          development. React was used for creating interactive UIs, while Node.js and Express
          powered the back-end for task management and database operations.
        </p>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center">
        <button className="text-xl font-semibold text-gray-400 hover:text-white transition-colors">
          &lt; LAST
        </button>
        <button className="text-xl font-semibold text-gray-400 hover:text-white transition-colors">
          NEXT &gt;
        </button>
      </div>
    </section>
  );
};

export default ProjectPage;
