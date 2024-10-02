import React from "react";
import Link from "next/link";
import { footerItems } from "@/data"; // Adjust the path as needed

function Footer({ className }: { className?: string }) {
  return (
    <footer className={`flex justify-between items-center py-8 px-20 bg-noiseonwhite ${className}`}>
      {/* Social Links */}
      <div className="flex gap-8">
        {footerItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`button text-[#7d7d7d] ${item.className}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.title}
          </Link>
        ))}
      </div>

      {/* Copyright Section */}
      <p className="button text-[#7d7d7d]">© 2024. Joshua Lim</p>
    </footer>
  );
}

export default Footer;
