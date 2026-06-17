import { Link as RouterLink } from "react-router";
import imgP1 from "../../assets/landing/P1 Thumbnail.png";
import imgP2 from "../../assets/landing/P2 Thumbnail.png";
import imgP3 from "../../assets/landing/P3 Thumbnail.png";
import imgP4 from "../../assets/landing/P4 Thumbnail.png";
import imgP5 from "../../assets/landing/P5 Thumbnail.png";
import imgP6 from "../../assets/landing/P6 Thumbnail.png";
import imgAiP2 from "../../assets/ai/project-2/ai-p2-thumbnail.png";
import videoAiP1 from "../../assets/ai/project-1/thumbnail.mp4";

type Project = {
  id: string;
  to?: string;
  title: string;
  tags: string[];
  thumbnailSrc?: string;
  thumbnailVideoSrc?: string;
  thumbnailBg: string;
};

const PROJECTS: Project[] = [
  {
    id: "engagement-platform",
    to: "/engagement-platform",
    title: "Rewards & Recognition Platform",
    tags: ["B2B SaaS", "Employee Experience"],
    thumbnailSrc: imgP1,
    thumbnailBg: "#fbfdfd",
  },
  {
    id: "global-reward-storefront",
    to: "/global-reward-storefront",
    title: "Global Reward Storefront",
    tags: ["B2B SaaS", "E-commerce"],
    thumbnailSrc: imgP2,
    thumbnailBg: "#1e242a",
  },
  {
    id: "design-library",
    to: "/design-library",
    title: "Budget & Incentive Manager",
    tags: ["B2C", "Data Visualization"],
    thumbnailSrc: imgP4,
    thumbnailBg: "#1e242a",
  },
  {
    id: "c1-wallet",
    title: "C1 Wallet",
    tags: ["Rewards Wallet"],
    thumbnailSrc: imgP3,
    thumbnailBg: "#1e242a",
  },
  {
    id: "wefair",
    to: "/wefair",
    title: "Ethical Shopping App WeFair",
    tags: ["Hackathon", "2nd Place"],
    thumbnailSrc: imgP5,
    thumbnailBg: "#fbfdfd",
  },
  {
    id: "connecteer",
    to: "/connecteer",
    title: "Volunteer Matching App Connecteer",
    tags: ["Hackathon", "2nd Place"],
    thumbnailSrc: imgP6,
    thumbnailBg: "#fbfdfd",
  },
  {
    id: "ai-project-2",
    to: "/ai/project-2",
    title: "Design Decision Note",
    tags: ["Figma Plugin"],
    thumbnailSrc: imgAiP2,
    thumbnailBg: "#fbfdfd",
  },
  {
    id: "ai-project-1",
    to: "/ai/project-1",
    title: "Chat GPT Feature Concepts",
    tags: ["Proof of Concept"],
    thumbnailVideoSrc: videoAiP1,
    thumbnailBg: "#fbfdfd",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const thumbnail = (
    <div
      className="outline-none shrink-0 w-full relative rounded-[18px] overflow-hidden transition-opacity duration-300 ease-in-out group-hover:opacity-60"
      style={{ backgroundColor: project.thumbnailBg }}
      data-cursor={project.to ? "project" : "coming-soon"}
    >
      {project.thumbnailVideoSrc ? (
        <video
          className="block w-full h-auto object-contain"
          src={project.thumbnailVideoSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
      ) : (
        <img
          loading="lazy"
          decoding="async"
          alt=""
          className="block w-full h-auto object-contain"
          src={project.thumbnailSrc}
        />
      )}
    </div>
  );

  const info = (
    <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="flex flex-row gap-[6px] flex-wrap">
        {project.tags.map((tag) => (
          <span key={tag} className="border border-[#e4e7ea] rounded-full px-[12px] py-[4px] text-[12px] font-inter font-normal text-[#9ba3af]">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-col font-inter font-medium justify-center relative shrink-0 text-[#1e242a] text-[20px] tracking-[-0.4px]">
        <p className="leading-[26px] sm:leading-[28px]">{project.title}</p>
      </div>
    </div>
  );

  if (project.to) {
    return (
      <RouterLink
        to={project.to}
        className="content-stretch flex flex-col gap-[16px] items-start relative group w-full"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {thumbnail}
        {info}
      </RouterLink>
    );
  }

  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative group w-full" data-cursor="coming-soon">
      {thumbnail}
      {info}
    </div>
  );
}

const NEXT_IDS: Record<string, [string, string]> = {
  "engagement-platform":      ["global-reward-storefront", "design-library"],
  "global-reward-storefront": ["design-library",           "c1-wallet"],
  "design-library":           ["c1-wallet",                "wefair"],
  "wefair":                   ["connecteer",               "engagement-platform"],
  "connecteer":               ["ai-project-2",             "ai-project-1"],
  "ai-project-2":             ["ai-project-1",             "engagement-platform"],
  "ai-project-1":             ["engagement-platform",      "global-reward-storefront"],
};

export default function MoreProjects({ currentId }: { currentId: string }) {
  const [id1, id2] = NEXT_IDS[currentId] ?? [];
  const next1 = PROJECTS.find((p) => p.id === id1)!;
  const next2 = PROJECTS.find((p) => p.id === id2)!;

  return (
    <div className="flex flex-col gap-[32px] items-start max-w-[774px] mx-auto w-full px-[20px] sm:px-0 pt-[80px] sm:pt-[120px]">
      <p className="font-inter font-medium text-[#1e242a] text-[20px] tracking-[-0.4px] leading-[28px]">More projects</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px] sm:gap-[32px] items-start w-full">
        <ProjectCard project={next1} />
        <ProjectCard project={next2} />
      </div>
    </div>
  );
}
