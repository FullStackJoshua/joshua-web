import { Metadata } from "next";
import ProjectsContent from "./ProjectsContent";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Joshua Lim's portfolio of web development projects built with Next.js, React, TypeScript, and more.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
