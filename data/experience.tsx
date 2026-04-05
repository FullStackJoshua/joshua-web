export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export const experiences: ExperienceEntry[] = [
  {
    role: "Technical Lead",
    company: "Meta",
    location: "New York, NY (Remote)",
    startDate: "Dec 2025",
    endDate: "Present",
    bullets: [
      "Worked closely with project managers/research scientists to curate the project life cycle of documentation standards, streamline workflows, and coordinate quality reviews across multiple programming projects",
      "Prepared documentation for weekly business reviews, including guidelines, quality metrics, and readouts, while proactively identifying and mitigating project roadblocks",
      "Acted as day-to-day lead across multiple concurrent GenAI projects, aligning priorities and decision-making criteria within and across project pillars to drive speed and operational simplicity with a team of 25+",
      "Implemented automation solutions that reduced manual overhead by 30%, significantly improving team efficiency and project turnaround time",
      "Standardized DLA onboarding and training materials across GenAI initiatives, advising annotators on best practices for quality assurance and data annotation to ensure consistency at scale",
    ],
  },
  {
    role: "Data Analyst",
    company: "Meta",
    location: "New York, NY (Remote)",
    startDate: "Apr 2025",
    endDate: "Dec 2025",
    bullets: [
      "Reduced false positive error rates by 25% on data evaluations by auditing analyst work and implementing targeted feedback loops that improved overall annotation consistency",
      "Built a pipeline that batched API calls to image generation services, automating the ingestion of researcher prompt spreadsheets and delivery of organized image outputs to internal storage, reducing costs by 70%",
      "Organized React dashboards to visualize and compare vendor model outputs, accelerating annotation QA decisions by 30%",
    ],
  },
  {
    role: "Technical Product Manager · Intern",
    company: "Unadat, Inc.",
    location: "New York, NY",
    startDate: "Mar 2024",
    endDate: "Apr 2025",
    bullets: [
      "Orchestrated leadership and coordination of nine Software Engineer interns through complete agile project lifecycles, resulting in 40% increase in project delivery efficiency",
      "Facilitated sprint planning, midweek huddles, and sub-team syncs to proactively address impediments and maintain project momentum",
      "Presented progress reports to CEO and CTO; managed project tracking in Linear and maintained documentation to support team alignment and continuous improvement",
    ],
  },
];
