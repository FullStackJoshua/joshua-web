"use client";

import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import NoiseBackground from "@/components/NoiseBackground";
import SplitText from "@/TextAnimations/SplitText";

const ProjectsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <NoiseBackground mode="dark" intensity={0.1}>
      <motion.section
        className="text-white px-5 pb-10 md:px-20 md:pb-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto">
          {/* Page Header */}
          <SplitText text="Projects" className="title md:text-lgTitle mb-10" />

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {projects.map((project) => (
              <motion.div key={project.slug} className="cursor-pointer" variants={itemVariants}>
                <Link href={`/projects/${project.slug}`}>
                  <Image
                    src={project.mainImage}
                    alt={project.title}
                    width={1920}
                    height={1080}
                    className="w-full rounded-md hover:scale-105 transition-transform duration-300"
                  />
                  <h2 className="content md:text-lgContent mt-4">{project.title}</h2>
                  <p className="button md:text-lgButton text-gray mt-2">
                    {project.description.slice(0, 100)}...
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </NoiseBackground>
  );
};

export default ProjectsPage;
