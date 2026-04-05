import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/components/ui/Footer";
import Contact from "@/components/sections/Contact";
import Nav from "@/components/ui/Nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: {
    default: "Joshua Lim - Full-Stack Developer",
    template: "%s | Joshua Lim",
  },
  description:
    "Experienced Full-Stack Web Developer proficient in frontend, backend, and database management. Explore my projects, experience, and get in touch.",
  keywords: [
    "Joshua Lim",
    "Full-Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Joshua Lim" }],
  creator: "Joshua Lim",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Joshua Lim Portfolio",
    title: "Joshua Lim - Full-Stack Developer",
    description:
      "Experienced Full-Stack Web Developer proficient in frontend, backend, and database management.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Lim - Full-Stack Developer",
    description:
      "Experienced Full-Stack Web Developer proficient in frontend, backend, and database management.",
  },
  metadataBase: new URL("https://joshualiim.vercel.app"),
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Nav />
        {children}
        <Analytics />
        <SpeedInsights />
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
