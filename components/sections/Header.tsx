"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { navItems } from "@/data";

const Header = ({ className }: { className?: string }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className={`pt-12 pb-12 px-24 bg-noiseonwhite ${className}`}>
      <nav className="flex items-center justify-between">
        <Link href="/" className="button text-[#7d7d7d]">
          © 2024
        </Link>
        <div className="flex space-x-8">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path} className="button text-[#7d7d7d]">
              {item.title}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Header;
