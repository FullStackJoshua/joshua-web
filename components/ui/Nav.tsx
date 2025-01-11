"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { navItems } from "@/data";
import { motion, AnimatePresence } from "framer-motion";

export const Nav = ({ className }: { className?: string }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  if (!isMounted) {
    return null;
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

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
              target={item.title === "Blog" ? "_blank" : undefined}
              rel={item.title === "Blog" ? "noopener noreferrer" : undefined}
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

        <button className="lg:hidden text-gray focus:outline-none" onClick={toggleMenu}>
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

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md z-50"
          >
            <ul className="flex flex-col items-start space-y-4 py-4 px-6">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    target={item.title === "Blog" ? "_blank" : undefined}
                    rel={item.title === "Blog" ? "noopener noreferrer" : undefined}
                    className="button text-gray lg:text-lgButton hover:text-black transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Nav;
