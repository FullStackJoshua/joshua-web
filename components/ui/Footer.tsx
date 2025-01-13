"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { footerItems } from "@/data";

function Footer({ className }: { className?: string }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className={`bg-noiseonwhite flex flex-col md:flex-row justify-between items-center py-8 px-5 button md:text-lgButton md:px-20 ${className}`}
    >
      <div className="flex gap-6 justify-center items-center md:justify-start">
        {footerItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Go to ${item.title}`}
            className="flex items-center gap-2 text-gray hover:text-black hover:scale-105 transition"
          >
            <Image
              src={item.icon}
              alt={`${item.title} Icon`}
              width={32}
              height={32}
              priority={item.title === "LinkedIn"}
            />
            <span className="hidden md:inline">{item.title}</span>
          </Link>
        ))}
      </div>

      <button
        onClick={scrollToTop}
        className="mt-6 md:mt-0 md:text-right text-gray hover:text-black hover:underline transition"
        aria-label="Scroll to top"
      >
        © 2025. Joshua Lim
      </button>
    </footer>
  );
}

export default Footer;
