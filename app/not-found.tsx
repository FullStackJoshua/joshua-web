import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 bg-white">
      <h1 className="title md:text-lgTitle text-black mb-4">404</h1>
      <p className="content md:text-lgContent text-gray mb-8">
        This page doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="button md:text-lgButton py-3 px-8 bg-black text-white rounded-md hover:bg-gray transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
