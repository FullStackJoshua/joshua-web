"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { navItems } from "@/data";

export const Nav = ({ className }: { className?: string }) => {
  const [isMounted, setIsMounted] = useState(false);
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

  return (
    <div className={`pt-12 pb-12 px-7 bg-noiseonwhite ${className} lg:px-24`}>
      <nav className="flex items-center justify-between">
        {/* Logo or Home Link */}
        <Link
          href="/"
          className="button text-gray lg:text-lg-button
      "
        >
          © 2024
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex space-x-8">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path} className="button lg:text-lg-button text-gray">
              {item.title}
            </Link>
          ))}
        </div>

        {/* Hamburger Icon for Mobile */}
        <button className="md:hidden text-gray focus:outline-none" onClick={toggleMenu}>
          {/* SVG for Hamburger Icon */}
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className="block text-gray py-2 px-4 hover:bg-gray-200"
                  onClick={() => setMenuOpen(false)} // Close menu on click
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
