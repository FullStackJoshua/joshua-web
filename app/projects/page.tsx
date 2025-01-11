"use client";

import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <motion.section
      className="bg-black text-white px-5 py-10 md:px-20 md:py-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto">
        {/* Page Header */}
        <motion.h1
          className="heading md:text-lgHeading mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Projects
        </motion.h1>

        {/* Projects Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants}>
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
  );
};

export default ProjectsPage;
