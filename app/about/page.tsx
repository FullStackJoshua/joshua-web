import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Joshua Lim — a Full-Stack Developer based in New York City passionate about building impactful web applications.",
};

export default function AboutPage() {
  return <AboutContent />;
}
