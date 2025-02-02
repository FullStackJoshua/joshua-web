"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data";
import { motion, AnimatePresence } from "framer-motion";
import NoiseBackground from "../NoiseBackground";

interface NavItemType {
  title: string;
  path: string;
}

export const Nav = ({ className }: { className?: string }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const isActive = (path: string) => pathname === path;
  const isProjectsPage = pathname.startsWith("/projects");
  const noiseMode = isProjectsPage ? "dark" : "light";

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  type NavItemProps = {
    item: NavItemType;
    index: number;
    hoveredIndex: number | null;
    setHoveredIndex: (index: number | null) => void;
  };

  const NavItem = ({ item, index, hoveredIndex, setHoveredIndex }: NavItemProps) => {
    const hoverTextColor = isProjectsPage ? "text-white" : "text-black";

    return (
      <Link
        key={item.path}
        href={item.path}
        target={item.title === "Blog" ? "_blank" : undefined}
        rel={item.title === "Blog" ? "noopener noreferrer" : undefined}
        className={`button lg:text-lgButton text-gray hover:${hoverTextColor} relative group transition ${
          isActive(item.path) ? "font-bold underline" : ""
        }`}
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
    );
  };

  return (
    <NoiseBackground mode={noiseMode} intensity={0.1}>
      <div className={`w-full bg-transparent ${className}`}>
        <div className="relative pt-8 pb-8 px-7 md:px-24 md:pb-8">
          <nav className="flex items-center justify-between">
            <Link
              href="/"
              className={`button text-gray lg:text-lgButton transition hover:underline ${
                isProjectsPage ? "hover:text-white" : "hover:text-black"
              }`}
            >
              © 2025
            </Link>

            <div className="hidden lg:flex space-x-8">
              {navItems.map((item: NavItemType, index: number) => (
                <NavItem
                  key={item.path}
                  item={item}
                  index={index}
                  hoveredIndex={hoveredIndex}
                  setHoveredIndex={setHoveredIndex}
                />
              ))}
            </div>

            <button
              className="lg:hidden text-gray focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
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
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black bg-opacity-50 z-40"
                  onClick={toggleMenu}
                />
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={mobileMenuVariants}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="lg:hidden fixed top-0 left-0 w-full bg-white shadow-md z-50"
                >
                  <button
                    className="absolute top-4 right-4 text-gray focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Close menu"
                  >
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <ul className="flex flex-col items-start space-y-4 py-4 px-6">
                    {navItems.map((item: NavItemType) => (
                      <li key={item.path}>
                        <Link
                          href={item.path}
                          target={item.title === "Blog" ? "_blank" : undefined}
                          rel={item.title === "Blog" ? "noopener noreferrer" : undefined}
                          className={`button text-gray lg:text-lgButton hover:${
                            isProjectsPage ? "text-white" : "text-black"
                          } transition`}
                          onClick={() => setMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </NoiseBackground>
  );
};

export default Nav;
