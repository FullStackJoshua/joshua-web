"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 bg-white">
      <h1 className="heading md:text-lgHeading text-black mb-4">
        Something went wrong
      </h1>
      <p className="content md:text-lgContent text-gray mb-8">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="button md:text-lgButton py-3 px-8 bg-black text-white rounded-md hover:bg-gray transition"
      >
        Try Again
      </button>
    </div>
  );
}
