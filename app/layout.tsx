import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/ui/Footer";
import Contact from "@/components/sections/Contact";
import Nav from "@/components/ui/Nav";
import Head from "next/head";

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
      <Head>
        <title>Joshua Lim - Full-Stack Developer</title>
        <meta
          name="description"
          content="Experienced Full-Stack Web Developer proficient in frontend, backend, and database management."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="overflow-x-hidden">
        <Nav />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
