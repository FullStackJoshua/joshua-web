"use client";

import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import Image from "next/image";

const ProjectPage = ({ params }: { params: { slug: string } }) => {
  const router = useRouter();
  const { slug } = params;

  // Find the project based on the slug
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return <p className="text-center text-white mt-20">Project not found!</p>;
  }

  return (
    <section className="bg-black text-white px-5 py-10 md:px-20 md:py-20">
      <div className="container mx-auto">
        {/* Project Header */}
        <div className="mb-10">
          <h1 className="title text-4xl md:text-6xl font-bold">{project.title}</h1>
          <p className="content text-gray text-sm">(by {project.author})</p>
        </div>

        {/* Main Image */}
        <div className="mb-12">
          <Image
            src={project.mainImage}
            alt={project.title}
            width={1200}
            height={800}
            className="w-full rounded-md"
          />
        </div>

        {/* About The Project */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="title text-2xl font-bold mb-4">About The Project</h2>
            <p className="content text-gray text-lg leading-relaxed">{project.description}</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="font-bold text-sm">Project Role</p>
              <p className="text-gray">{project.role}</p>
            </div>
            <div>
              <p className="font-bold text-sm">Duration</p>
              <p className="text-gray">{project.duration}</p>
            </div>
            <div>
              <p className="font-bold text-sm">Category</p>
              <p className="text-gray">{project.category}</p>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {project.gallery.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`${project.title} screenshot ${index + 1}`}
              width={400}
              height={300}
              className="rounded-md"
            />
          ))}
        </div>

        {/* Technologies Used */}
        <div className="mb-16">
          <h2 className="title text-2xl font-bold mb-4">Technologies Used</h2>
          <p className="content text-gray text-lg leading-relaxed">{project.technologies}</p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => router.push(project.previousSlug || "/projects")}
            className="text-gray hover:text-white text-lg font-bold"
          >
            &lt; LAST
          </button>
          <button
            onClick={() => router.push(project.nextSlug || "/projects")}
            className="text-gray hover:text-white text-lg font-bold"
          >
            NEXT &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
