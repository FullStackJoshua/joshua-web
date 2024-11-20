import React from "react";
import Link from "next/link";
import Image from "next/image";
import { footerItems } from "@/data";

function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={`flex flex-col md:flex-row justify-between items-center py-8 px-5 md:px-20 ${className}`}
    >
      {/* Social Links */}
      <div className="flex gap-6 justify-center items-center md:justify-start">
        {footerItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray hover:text-black transition"
          >
            {/* SVG Icon */}
            <Image src={item.icon} alt={`${item.title} Icon`} width={32} height={32} />
            <span className="hidden md:inline">{item.title}</span>
          </Link>
        ))}
      </div>

      {/* Copyright Section */}
      <p className="text-center mt-6 md:mt-0 md:text-right text-gray text-content3">
        © 2024. Joshua Lim
      </p>
    </footer>
  );
}

export default Footer;
