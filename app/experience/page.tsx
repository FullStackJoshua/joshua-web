import { Metadata } from "next";
import ExperienceContent from "./ExperienceContent";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Joshua Lim's professional work experience — Technical Lead at Meta, Data Analyst, and Technical Product Manager.",
};

export default function ExperiencePage() {
  return <ExperienceContent />;
}
