"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { navItems } from "@/data";

export const Nav = ({ className }: { className?: string }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className={`relative pt-8 pb-8 px-7 bg-noiseonwhite ${className} md:px-24 md:pb-8`}>
      <nav className="flex items-center justify-between">
        <Link
          href="/"
          className="button text-gray lg:text-lgButton hover:text-black hover:underline transition"
        >
          © 2024
        </Link>

        <div className="hidden lg:flex space-x-8">
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              href={item.path}
              className="button lg:text-lgButton text-gray hover:text-black relative group transition"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span className="relative">
                {hoveredIndex === index ? (
                  <>
                    <span className="text-gray transition duration-300">{"< "}</span>
                    {item.title}
                    <span className="text-gray transition duration-300">{" >"}</span>
                  </>
                ) : (
                  item.title
                )}
              </span>
            </Link>
          ))}
        </div>

        <button className="md:hidden text-gray focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>
    </div>
  );
};

export default Nav;
