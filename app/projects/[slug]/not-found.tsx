import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 bg-black">
      <h1 className="heading md:text-lgHeading text-white mb-4">
        Project Not Found
      </h1>
      <p className="content md:text-lgContent text-gray mb-8">
        This project doesn&apos;t exist or may have been removed.
      </p>
      <Link
        href="/projects"
        className="button md:text-lgButton py-3 px-8 bg-white text-black rounded-md hover:bg-gray transition"
      >
        View All Projects
      </Link>
    </div>
  );
}
