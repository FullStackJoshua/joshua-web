import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/ui/Footer";
import Contact from "@/components/sections/Contact";
import Nav from "@/components/ui/Nav";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Joshua Portfolio",
  description: "Joshua's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="overflow-x-hidden">
        <Nav />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
