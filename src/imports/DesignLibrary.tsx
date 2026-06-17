/// <reference types="vite/client" />
import { useEffect, useRef, useState } from "react";
import imgDetailThumbnail from "../assets/work/design-library/P3-Detail-Thumbnail.png";
import imgAudit1 from "../assets/work/design-library/Audit 1.png";
import imgAudit2 from "../assets/work/design-library/Audit 2.png";
import imgIssueDefined1 from "../assets/work/design-library/Issue defined 1.png";
import imgIssueDefined2 from "../assets/work/design-library/Issue defined 2.png";
import imgIssueDefined3 from "../assets/work/design-library/Issue defined 3.png";
import imgRequirementAnalysis from "../assets/work/design-library/Requirement Analysis.png";
import imgDesignGoal from "../assets/work/design-library/Design Goal.png";
import imgSolutionOverview1 from "../assets/work/design-library/Solution Overview 1.png";
import imgSolutionOverview2 from "../assets/work/design-library/Solution Overview 2.png";
import imgSolution1Before from "../assets/work/design-library/Solution 1 Before.png";
import imgSolution1After from "../assets/work/design-library/Solution 1 After.png";
import imgSolutionTwo from "../assets/work/design-library/Solution 2.png";
import imgSolution2Before from "../assets/work/design-library/Solution 2 Before.png";
import imgSolution2After from "../assets/work/design-library/Solution 2 After.png";
import imgSolutionThree from "../assets/work/design-library/Solution 3.png";
import imgSolution3Before from "../assets/work/design-library/Solution 3 Before.png";
import imgSolution3After from "../assets/work/design-library/Solution 3 After.png";
import imgDesignOutcome from "../assets/work/design-library/Design Outcome.png";
import imgDesignOutcome1 from "../assets/work/design-library/Design Outcome 1.png";
import imgDesignOutcome2 from "../assets/work/design-library/Design Outcome 2.png";
import imgChallenge from "../assets/work/design-library/Challenge.png";
import imgStar from "../assets/work/reward-storefront/star.png";
import NavBar from "../app/components/NavBar";
import Footer from "../app/components/Footer";
import MoreProjects from "../app/components/MoreProjects";
import ImpactSectionGRS from "./ImpactSectionGRS";
import { Dialog, DialogContent, DialogTrigger } from "../app/components/ui/dialog";

function ZoomableImage({
  src,
  alt = "",
  ariaLabel,
  darkBadge = false,
}: {
  src: string;
  alt?: string;
  ariaLabel: string;
  darkBadge?: boolean;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="bg-[#f0f3f5] relative shrink-0 w-full cursor-pointer group rounded-[12px] overflow-hidden"
          data-name="zoomable image"
          aria-label={ariaLabel}
        >
          <div className="overflow-clip relative rounded-[inherit] w-full">
            <img loading="lazy" decoding="async" alt={alt} className="block w-full h-auto object-contain" src={src} />
          </div>
          <div
            className={`absolute right-[12px] top-[12px] flex h-[24px] w-[24px] items-center justify-center rounded-[7px] border transition-opacity duration-200 group-hover:opacity-90 ${
              darkBadge ? "bg-[rgba(30,36,42,0.78)] border-[#1e242a]" : "bg-white/60 border-[#eceff2]"
            }`}
            aria-hidden="true"
          >
            <svg aria-hidden="true" className="h-[14px] w-[14px]" fill="none" viewBox="0 0 24 24">
              <path
                d="M14 3h7v7M21 3l-7 7M10 21H3v-7M3 21l7-7"
                stroke={darkBadge ? "#f0f3f5" : "#6b7785"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.4"
              />
            </svg>
          </div>
          <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
        </button>
      </DialogTrigger>
      <DialogContent className="w-[1362px] max-w-[96vw] sm:w-[1362px] sm:max-w-[96vw] p-0 border-0 bg-transparent shadow-none">
        <img loading="lazy" decoding="async" alt={alt} className="w-full h-auto max-h-[90vh] object-contain rounded-[12px]" src={src} />
      </DialogContent>
    </Dialog>
  );
}

function Property() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch max-w-[774px] relative row-[4] self-start shrink-0 w-full" data-name="Property">
      <ImpactSectionGRS
        hideThird
        impactTitle="Higher task success and user confidence"
        firstTitle="Clear operational visibility"
        firstSubtitle="Managers could view incentive details, budgets, and status updates from a single place."
        secondTitle="Reduced mistakes in high-pressure tasks"
        secondSubtitle="Clear feedback and system guidance helped users complete submissions and status updates with more confidence."
      />
    </div>
  );
}

function ContextSection() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch max-w-[774px] relative row-[4] self-start shrink-0 w-full" data-name="Context Section">
      <div className="content-stretch flex flex-col font-normal gap-[16px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
        <div className="flex flex-col font-inter justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.48)] tracking-[-0.5px] w-full">
          <p className="leading-[22.5px] whitespace-pre-wrap">Context</p>
        </div>
        <div className="flex flex-col font-inter font-medium justify-center relative shrink-0 text-[#1e242a] text-[30px] sm:text-[35px] tracking-[-0.04em] w-full">
          <p className="leading-[40px] sm:leading-[46px] whitespace-pre-wrap">Why the project started</p>
        </div>
      </div>
      <div className="flex flex-col font-inter justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.04em] w-full">
        <ul className="list-disc pl-[20px] space-y-[8px]">
          <li className="leading-[22.5px]">The project began when the client requested additional operational capabilities for the existing Budget Incentive Manager.</li>
          <li className="leading-[22.5px]">While evaluating the current experience, I identified underlying UX issues that needed to be resolved to support long-term scalability and expansion.</li>
        </ul>
      </div>
    </div>
  );
}

function SectionContainer1() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[16px] items-start leading-[0] relative shrink-0 w-full" data-name="Section Container">
      <div className="flex flex-col font-inter justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.48)] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[22.5px]">My Role</p>
      </div>
      <div className="flex flex-col font-inter font-medium justify-center min-w-full relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.04em] w-[min-content]">
        <p className="leading-[40px] sm:leading-[46px] whitespace-pre-wrap">UX improvement and workflow redesign for incentive operations</p>
      </div>
    </div>
  );
}

function MyRoleDescription() {
  return (
    <div className="flex flex-col font-inter justify-center min-w-full relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.04em] w-[min-content]">
      <p className="leading-[22.5px] whitespace-pre-wrap">{`I led the UX improvement of the Budget Incentive Manager by identifying usability gaps across Incentive, Budget, and Reconciliation modules and redesigning the workflows to support clearer operational decision-making.

My work focused on improving system clarity, reducing user errors in high-pressure financial tasks, and introducing scalable UI patterns that improve consistency across the platform.`}</p>
    </div>
  );
}

function SectionImageLg() {
  const arrow = (
    <div className="flex items-center justify-center shrink-0 mx-[24px] mb-[28px]">
      <svg width="36" height="20" viewBox="0 0 36 20" fill="none">
        <path d="M2 14 Q18 5 34 14" stroke="rgba(50,64,79,0.28)" strokeWidth="1.25" fill="none" strokeLinecap="round" />
        <path d="M27 10 L34 14 L27 18" stroke="rgba(50,64,79,0.28)" strokeWidth="1.25" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
  return (
    <div className="bg-[#f0f3f5] h-[266px] relative shrink-0 w-full rounded-[12px] overflow-hidden" data-name="section image lg">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-0 flex items-center justify-center px-[16px] sm:px-[80px] scale-[0.72] sm:scale-100 origin-center">
          {/* Icon 1: Fragmented ring — Audit & Discovery */}
          <div className="flex w-[108px] flex-col items-center gap-[20px]">
            <svg viewBox="0 0 120 120" width="108" height="108" fill="none">
              <circle cx="60" cy="60" r="42" stroke="#1e242a" strokeWidth="9" strokeDasharray="20 10" strokeLinecap="round" />
            </svg>
            <span className="w-full text-center font-inter text-[13px] text-[rgba(50,64,79,0.58)]">Audit & Research</span>
          </div>
          {arrow}
          {/* Icon 2: 3×3 grid — Component System */}
          <div className="flex w-[108px] flex-col items-center gap-[20px]">
            <svg viewBox="0 0 120 120" width="108" height="108" fill="none">
              <rect x="20" y="20" width="22" height="22" rx="4" fill="#1e242a" />
              <rect x="49" y="20" width="22" height="22" rx="4" fill="#1e242a" />
              <rect x="78" y="20" width="22" height="22" rx="4" fill="#1e242a" />
              <rect x="20" y="49" width="22" height="22" rx="4" fill="#1e242a" />
              <rect x="49" y="49" width="22" height="22" rx="4" fill="#1e242a" />
              <rect x="78" y="49" width="22" height="22" rx="4" fill="#1e242a" />
              <rect x="20" y="78" width="22" height="22" rx="4" fill="#1e242a" />
              <rect x="49" y="78" width="22" height="22" rx="4" fill="#1e242a" />
              <rect x="78" y="78" width="22" height="22" rx="4" fill="#1e242a" />
            </svg>
            <span className="w-full text-center font-inter text-[13px] text-[rgba(50,64,79,0.58)]">Component System</span>
          </div>
          {arrow}
          {/* Icon 3: 4-pointed north star — Shipped & Scaled */}
          <div className="flex w-[108px] flex-col items-center gap-[20px]">
            <svg viewBox="0 0 120 120" width="108" height="108" fill="none">
              <path d="M60 8 L65 55 L112 60 L65 65 L60 112 L55 65 L8 60 L55 55 Z" fill="#1e242a" />
            </svg>
            <span className="w-full text-center font-inter text-[13px] text-[rgba(50,64,79,0.58)]">Shipped to Scale</span>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <SectionImageLg />
    </div>
  );
}

function DesignOutcomeHeroSection() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch max-w-[774px] relative row-[2] self-start shrink-0 w-full" data-name="Design Outcome Hero">
      <ZoomableImage src={imgDesignOutcome} ariaLabel="Open design outcome image full view" darkBadge />
    </div>
  );
}

function DLMyRoleAndImpact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const cards = [
    { title: "Clear operational visibility", desc: "Managers could view incentive details, budgets, and status updates from a single place." },
    { title: "Reduced mistakes in high-pressure tasks", desc: "Clear feedback and system guidance helped users complete submissions and status updates with more confidence." },
  ];

  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch max-w-[774px] relative row-[2] self-start shrink-0 w-full" data-name="Content Sections">
      <div className="flex flex-col gap-[10px] items-start w-full">
        <p className="font-inter text-[15px] text-[rgba(50,64,79,0.48)] tracking-[-0.5px] leading-[22.5px]">My role &amp; Impact</p>
        <ul className="list-disc pl-[24px] flex flex-col gap-0">
          <li className="font-inter text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.04em] leading-[22.5px]">Led <span className="text-[#1e242a]">UX improvement</span> of Budget Incentive Manager, identifying usability gaps across Incentive, Budget, and Reconciliation modules</li>
          <li className="font-inter text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.04em] leading-[22.5px]">Redesigned <span className="text-[#1e242a]">workflows and 8 core modals</span> to support clearer operational decision-making</li>
          <li className="font-inter text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.04em] leading-[22.5px]">Introduced <span className="text-[#1e242a]">scalable UI patterns</span> to improve consistency across the platform</li>
        </ul>
      </div>
      <div ref={containerRef} className="flex gap-[10px] items-stretch w-full overflow-hidden">
        {cards.map((card, i) => (
          <div
            key={card.title}
            className="bg-[#f0f3f5] flex flex-col flex-1 gap-[8px] items-start p-[24px] rounded-[8px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transitionDelay: `${i * 120}ms`,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(40px)",
            }}
          >
            <div className="font-inter font-medium text-[#1e242a] text-[16px] tracking-[-0.04em] leading-[22.5px]">{card.title}</div>
            <div className="font-inter text-[14px] text-[rgba(50,64,79,0.58)] tracking-[-0.04em] leading-[21px]">{card.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContentSections() {
  return <DLMyRoleAndImpact />;
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[16px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-inter justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.48)] tracking-[-0.5px] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Key Issues</p>
      </div>
      <div className="flex flex-col font-inter font-medium justify-center relative shrink-0 text-[#1e242a] text-[30px] sm:text-[35px] tracking-[-0.04em] w-full">
        <p className="leading-[40px] sm:leading-[46px] whitespace-pre-wrap">3 key issues that prevented user flows</p>
      </div>
    </div>
  );
}

function KeyIssuesIntro() {
  return null;
}

function KeyIssueBlock({
  title,
  description,
  image,
  ariaLabel,
}: {
  title: string;
  description: string;
  image: string;
  ariaLabel: string;
}) {
  return (
    <div className="flex flex-col gap-[16px] w-full">
      <div className="flex flex-col font-inter justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.04em] w-full">
        <p className="leading-[22.5px] text-[#32404f]">{title}</p>
        <p className="leading-[22.5px]">{description}</p>
      </div>
      <ZoomableImage src={image} ariaLabel={ariaLabel} />
    </div>
  );
}

function SectionImageLg1() {
  return (
    <ZoomableImage src={imgAudit1} ariaLabel="Open first audit image full view" />
  );
}

function SectionImageLg1b() {
  return (
    <ZoomableImage src={imgAudit2} ariaLabel="Open second audit image full view" />
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <SectionImageLg1 />
      <SectionImageLg1b />
    </div>
  );
}

function Property1() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start max-w-[774px] relative row-[6] self-start shrink-0 w-full" data-name="Property">
      <Frame5 />
      <KeyIssuesIntro />
      <KeyIssueBlock
        title="1. Inconsistent interface patterns created confusion"
        description="Layouts and information hierarchy varied across modules, making it difficult for users to predict how the system behaved."
        image={imgIssueDefined1}
        ariaLabel="Open issue defined one image full view"
      />
      <KeyIssueBlock
        title="2. Lack of feedback during submission increased errors"
        description="Critical actions such as submissions and status updates lacked clear confirmation and progress feedback."
        image={imgIssueDefined2}
        ariaLabel="Open issue defined two image full view"
      />
      <KeyIssueBlock
        title="3. No centralized view for monitoring incentives"
        description="Users had to navigate across multiple screens to check program details, budgets, and status updates."
        image={imgIssueDefined3}
        ariaLabel="Open issue defined three image full view"
      />
    </div>
  );
}

function Frame5Requirement() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[16px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-inter justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.48)] tracking-[-0.5px] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Requirement Analysis</p>
      </div>
      <div className="flex flex-col font-inter font-medium justify-center relative shrink-0 text-[#1e242a] text-[30px] sm:text-[35px] tracking-[-0.04em] w-full">
        <p className="leading-[40px] sm:leading-[46px] whitespace-pre-wrap">Analyzed requirements and usages for new{"\n"}components</p>
      </div>
    </div>
  );
}

function RequirementAnalysisDescription() {
  return (
    <div className="flex flex-col font-inter justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.04em] w-full">
      <p className="leading-[22.5px] whitespace-pre-wrap">{`I found inconsistent UI patterns, accessibility issues, and weak status feedback across the submission flow, which made it easy for users to miss important information and make mistakes.`}</p>
    </div>
  );
}

function SectionImageLgRequirement() {
  return (
    <ZoomableImage src={imgRequirementAnalysis} ariaLabel="Open requirement analysis image full view" />
  );
}

function Frame14Requirement() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <SectionImageLgRequirement />
    </div>
  );
}

function PropertyRequirement() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[16px] items-start max-w-[774px] relative row-[7] self-start shrink-0 w-full" data-name="Property">
      <Frame5Requirement />
      <RequirementAnalysisDescription />
      <Frame14Requirement />
    </div>
  );
}

function DesignGoalSection() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[16px] items-start max-w-[774px] relative row-[8] self-start shrink-0 w-full" data-name="Design Goal Section">
      <div className="content-stretch flex flex-col font-normal gap-[16px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
        <div className="flex flex-col font-inter justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.48)] tracking-[-0.5px] w-full">
          <p className="leading-[22.5px] whitespace-pre-wrap">Design Goal</p>
        </div>
        <div className="flex flex-col font-inter font-medium justify-center relative shrink-0 text-[#1e242a] text-[30px] sm:text-[35px] tracking-[-0.04em] w-full">
          <p className="leading-[40px] sm:leading-[46px] whitespace-pre-wrap">Create a predictable management system that supports confident decision-making</p>
        </div>
      </div>
      <div className="flex flex-col font-inter justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.04em] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">This approach ensures users can understand system state quickly and complete high-stakes tasks with confidence.</p>
      </div>
      <ZoomableImage src={imgDesignGoal} ariaLabel="Open design goal image full view" />
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[16px] items-start leading-[0] relative shrink-0 w-full" data-name="Section Header">
      {/* <div className="flex flex-col font-inter justify-center relative shrink-0 text-[#858e97] text-[13px] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Data Visualization</p>
      </div> */}
      <div className="flex flex-col font-inter font-medium justify-center relative shrink-0 text-[#1e242a] text-[34px] sm:text-[42px] tracking-[-0.04em] w-full">
        <p className="leading-[42px] sm:leading-[normal] whitespace-pre-wrap">Budget & Incentive Manager</p>
      </div>
      <div className="flex flex-col font-inter justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.04em] w-full">
        <p className="leading-[22.5px]">Centralized pages and a consistent UI revamp that reduced clicks, errors, and frustration.</p>
      </div>
    </div>
  );
}

function Thumbnail() {
  return (
    <div className="bg-[#f0f3f5] h-[240px] sm:h-[440px] shrink-0 w-full overflow-clip relative rounded-[12px]" data-name="Detail Thumbnail">
      <img loading="eager" fetchPriority="high" decoding="async" alt="" className="absolute inset-0 size-full object-cover" src={imgDetailThumbnail} />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[8px] sm:gap-[76px] items-start sm:items-center pb-[12px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ebeced] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-inter font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(50,64,79,0.48)] tracking-[-0.5px] w-full sm:w-[72px]">
        <p className="leading-[22.5px] whitespace-pre-wrap">Role</p>
      </div>
      <div className="flex flex-col font-inter font-normal justify-center leading-[0] min-h-px min-w-0 relative text-[#5b6a79] text-[15px] w-full">
        <p>
          <span className="leading-[24px]">{`UX `}</span>
          <span className="font-inter font-normal leading-[24px]">•</span>
          <span className="leading-[24px]">{` Product Designer`}</span>
        </p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[8px] sm:gap-[76px] items-start sm:items-center pb-[12px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ebeced] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-inter font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(50,64,79,0.48)] tracking-[-0.5px] w-full sm:w-[132px]">
        <p className="leading-[22.5px] whitespace-nowrap">Timeline</p>
      </div>
      <div className="flex flex-col font-inter font-normal justify-center leading-[0] min-h-px min-w-0 relative text-[#5b6a79] text-[15px] w-full">
        <p className="leading-[24px]">Aug 2022 - Jan 2023 (5 months)</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[8px] sm:gap-[76px] items-start sm:items-center pb-[12px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ebeced] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-inter font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(50,64,79,0.48)] tracking-[-0.5px] w-full sm:w-[132px]">
        <p className="leading-[22.5px] whitespace-nowrap">Team</p>
      </div>
      <div className="flex flex-col font-inter font-normal justify-center leading-[0] min-h-px min-w-0 relative text-[#5b6a79] text-[15px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">{`1 Designer · 1 Developer · UX Team Manager · Business Analyst `}</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row font-normal gap-[8px] sm:gap-[76px] items-start sm:items-center leading-[0] pb-[12px] relative shrink-0 text-[15px] w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ebeced] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-inter justify-center relative shrink-0 text-[rgba(50,64,79,0.48)] tracking-[-0.5px] w-full sm:w-[132px]">
        <p className="leading-[22.5px] whitespace-nowrap">Contribution</p>
      </div>
      <div className="flex flex-col font-inter justify-center min-h-px min-w-0 relative text-[#5b6a79] w-full">
        <p className="leading-[24px]">Problem Framing · Information Architecture · UI Design</p>
      </div>
    </div>
  );
}

function DLMetaContainerDeliverable() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[8px] sm:gap-[76px] items-start sm:items-center pb-[12px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ebeced] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-inter font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(50,64,79,0.48)] tracking-[-0.5px] w-full sm:w-[132px]">
        <p className="leading-[22.5px] whitespace-nowrap">Deliverable</p>
      </div>
      <div className="flex flex-col font-inter font-normal justify-center leading-[0] min-h-px min-w-0 relative text-[#5b6a79] text-[15px] w-full">
        <p className="leading-[24px]">Web App</p>
      </div>
    </div>
  );
}

function DLMetaContainerTargetUsers() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[8px] sm:gap-[76px] items-start sm:items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-inter font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(50,64,79,0.48)] tracking-[-0.5px] w-full sm:w-[132px]">
        <p className="leading-[22.5px] whitespace-nowrap">Client</p>
      </div>
      <div className="flex flex-col font-inter font-normal justify-center leading-[0] min-h-px min-w-0 relative text-[#5b6a79] text-[15px] w-full">
        <p className="leading-[24px]">AT&amp;T</p>
      </div>
    </div>
  );
}

function Property4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Property">
      <Container5 />
      <Container6 />
      {/* <Container7 /> */}
      <DLMetaContainerDeliverable />
      <DLMetaContainerTargetUsers />
    </div>
  );
}

function ContentSections1() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start max-w-[774px] pt-[48px] relative row-[1] self-start shrink-0 w-full" data-name="Content Sections">
      <SectionHeader />
      <Thumbnail />
      <Property4 />
    </div>
  );
}

function SectionContainer7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section Container">
      <div className="flex flex-col font-inter justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.48)] tracking-[-0.5px] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Outcome</p>
      </div>
    </div>
  );
}

function SubsectionContainer4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Subsection Container">
      <div className="flex font-inter font-normal items-start leading-[26px] relative text-[#5b6a79] text-[16px] w-full">
        <span className="leading-[26px] whitespace-pre-wrap">
          Made core journeys clearer and more consistent with reusable UI patterns.
        </span>
      </div>
    </div>
  );
}

function SectionContainer8() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section Container">
      <div className="flex flex-col font-inter font-medium font-normal justify-center leading-[0] relative shrink-0 text-[#1e242a] text-[24px] tracking-[-0.3px] w-full">
        <p className="leading-[30px] whitespace-pre-wrap">{`Product & UX`}</p>
      </div>
      <SubsectionContainer4 />
    </div>
  );
}

function SubsectionContainer6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Subsection Container">
      <div className="flex font-inter font-normal items-start leading-[26px] relative text-[#5b6a79] text-[16px] w-full">
        <span className="leading-[26px] whitespace-pre-wrap">
          Reduced handoff overhead by introducing shared components and clearer system rules.
        </span>
      </div>
    </div>
  );
}

function SubsectionContainer5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Subsection Container">
      <div className="flex flex-col font-inter font-medium font-normal justify-center leading-[0] relative shrink-0 text-[#1e242a] text-[24px] tracking-[-0.3px] w-full">
        <p className="leading-[30px] whitespace-pre-wrap">{`Team & Ops`}</p>
      </div>
      <SubsectionContainer6 />
    </div>
  );
}

function SubsectionContainer8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Subsection Container">
      <div className="flex font-inter font-normal items-start leading-[26px] relative text-[#5b6a79] text-[16px] w-full">
        <span className="leading-[26px] whitespace-pre-wrap">
          Enabled faster iteration with lower risk by reducing one-off design work.
        </span>
      </div>
    </div>
  );
}

function SubsectionContainer7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Subsection Container">
      <div className="flex flex-col font-inter font-medium font-normal justify-center leading-[0] relative shrink-0 text-[#1e242a] text-[24px] tracking-[-0.3px] w-full">
        <p className="leading-[30px] whitespace-pre-wrap">Business</p>
      </div>
      <SubsectionContainer8 />
    </div>
  );
}

function SectionContainer6() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const cards = [
    { title: "User Impact", desc: "Made core journeys clearer and more consistent with reusable UI patterns." },
    { title: "Business Impact", desc: "Reduced handoff overhead and enabled faster iteration with lower risk by reducing one-off design work." },
  ];

  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Section Container">
      <SectionContainer7 />
      <div ref={containerRef} className="flex flex-col gap-[12px] w-full overflow-hidden">
        {cards.map((card, i) => (
          <div
            key={card.title}
            className="flex flex-col gap-[8px] items-start w-full bg-[#f0f3f5] rounded-[12px] p-[24px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transitionDelay: `${i * 120}ms`,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(40px)",
            }}
          >
            <div className="font-inter font-medium text-[20px] text-[#32404f] tracking-[-0.04em] leading-[31.8px]">{card.title}</div>
            <p className="font-inter text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.04em] leading-[22.5px]">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContentSections3() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch max-w-[774px] relative row-[14] self-start shrink-0 w-full" data-name="Content Sections">
      <SectionContainer6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[16px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-inter justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.48)] tracking-[-0.5px] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Problem</p>
      </div>
      <div className="flex flex-col font-inter font-medium justify-center relative shrink-0 text-[#1e242a] text-[30px] sm:text-[35px] tracking-[-0.04em] w-full">
        <p className="leading-[40px] sm:leading-[46px] whitespace-pre-wrap">Users struggled to manage tasks with confidence, increasing the risk of mistakes and cognitive load</p>
      </div>
    </div>
  );
}

function ProblemDescription() {
  return (
    <div className="flex flex-col font-inter justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.04em] w-full">
      <p className="leading-[22.5px] whitespace-pre-wrap">The product was initially developed without clear UX standards or a strong understanding of end-user behavior, which led to inconsistent patterns, avoidable friction, and user frustration.</p>
    </div>
  );
}

function SectionImageLg3() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-full rounded-[12px] overflow-hidden" data-name="section image lg">
      <div className="overflow-clip relative rounded-[inherit] w-full">
        <img loading="lazy" decoding="async" alt="" className="block w-full h-auto object-contain" src={imgChallenge} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <SectionImageLg3 />
    </div>
  );
}

function Property6() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch max-w-[774px] relative row-[4] self-start shrink-0 w-full" data-name="Property">
      <Frame4 />
      <ProblemDescription />
      <Frame12 />
    </div>
  );
}

function HmwSection() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch max-w-[774px] relative row-[5] self-start shrink-0 w-full" data-name="HMW Section">
      <div className="bg-[rgba(50,64,79,0.1)] h-px w-full" />
      <div className="flex flex-col font-normal gap-[16px] items-center leading-[0] relative shrink-0 w-full text-center py-[110px] sm:py-[170px]">
        <img loading="lazy" decoding="async" alt="" className="h-[26px] w-[26px]" src={imgStar} />
        <div className="flex flex-col font-inter justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.48)] tracking-[-0.5px] w-full">
          <p className="leading-[22.5px] whitespace-pre-wrap">How Might We</p>
        </div>
        <div className="flex flex-col font-inter font-medium justify-center relative shrink-0 text-[#1e242a] text-[26px] tracking-[-0.04em] w-full">
          <p className="leading-[40px] whitespace-pre-wrap">How might we help managers clearly understand system state and manage incentives with confidence in a high-stakes environment?</p>
        </div>
      </div>
      <div className="bg-[rgba(50,64,79,0.1)] h-px w-full" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[16px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-inter justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.48)] tracking-[-0.5px] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Solution 1</p>
      </div>
      <div className="flex flex-col font-inter font-medium justify-center relative shrink-0 text-[#1e242a] text-[30px] sm:text-[35px] tracking-[-0.04em] w-full">
        <p className="leading-[40px] sm:leading-[46px] whitespace-pre-wrap">All-in-one pages for faster, clearer actions</p>
      </div>
    </div>
  );
}

function Solution1Description() {
  return (
    <div className="flex flex-col font-inter justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.04em] w-full">
      <p className="leading-[22.5px] whitespace-pre-wrap">I introduced a centralized management page that consolidates the key information needed to manage incentive programs.</p>
      <div className="mt-[12px]">
        <p className="leading-[22.5px] whitespace-pre-wrap">Managers can now:</p>
        <ul className="list-disc pl-[20px] mt-[8px] space-y-[4px]">
          <li className="leading-[22.5px]">View incentive details</li>
          <li className="leading-[22.5px]">Track progress</li>
          <li className="leading-[22.5px]">Update program status</li>
          <li className="leading-[22.5px]">Monitor related budget information</li>
        </ul>
      </div>
      <p className="leading-[22.5px] whitespace-pre-wrap mt-[12px]">This reduces navigation overhead and allows users to manage incentives from a single operational view rather than jumping across multiple pages.</p>
    </div>
  );
}

function SectionImageLg5() {
  return (
    <ZoomableImage src={imgSolutionOverview2} ariaLabel="Open solution one first image full view" />
  );
}

function SectionImageLg5b() {
  return (
    <ZoomableImage src={imgDesignOutcome1} ariaLabel="Open solution one second image full view" />
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <SectionImageLg5 />
      <SectionImageLg5b />
    </div>
  );
}

function Property8() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch max-w-[774px] relative row-[10] self-start shrink-0 w-full" data-name="Property">
      <Frame9 />
      <Solution1Description />
      <Frame17 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[16px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-inter justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.48)] tracking-[-0.5px] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Solution 2</p>
      </div>
      <div className="flex flex-col font-inter font-medium justify-center relative shrink-0 text-[#1e242a] text-[30px] sm:text-[35px] tracking-[-0.04em] w-full">
        <p className="leading-[40px] sm:leading-[46px] whitespace-pre-wrap">Redesigning core task modals for clarity and consistency</p>
      </div>
    </div>
  );
}

function Solution2Description() {
  return (
    <div className="flex flex-col font-inter justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.04em] w-full">
      <p className="leading-[22.5px] whitespace-pre-wrap">{`Because incentive submission and calculation happen inside modals, improving them was critical to the overall workflow. I redesigned and standardized 8 modals to make the experience more consistent, clearer to follow, and easier to complete with confidence.`}</p>
    </div>
  );
}

function SectionImageLg6() {
  return (
    <ZoomableImage src={imgSolutionTwo} ariaLabel="Open solution two image full view" />
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <SectionImageLg6 />
    </div>
  );
}

function Property9() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch max-w-[774px] relative row-[11] self-start shrink-0 w-full" data-name="Property">
      <Frame10 />
      <Solution2Description />
      <Frame18 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[16px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-inter justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.48)] tracking-[-0.5px] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Solution 3</p>
      </div>
      <div className="flex flex-col font-inter font-medium justify-center relative shrink-0 text-[#1e242a] text-[30px] sm:text-[35px] tracking-[-0.04em] w-full">
        <p className="leading-[40px] sm:leading-[46px] whitespace-pre-wrap">Guidance and confidence in high-stakes tasks</p>
      </div>
    </div>
  );
}

function Solution3Description() {
  return (
    <div className="flex flex-col font-inter justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.04em] w-full">
      <p className="leading-[22.5px] whitespace-pre-wrap">{`I introduced clearer submission feedback, status indicators, and error-prevention patterns across the submission journey. The experience needed stronger feedback and guidance because tworkflows involve financial decisions,

The system now supports both error prevention and recovery, helping users confidently complete critical tasks and reducing mistakes.`}</p>
    </div>
  );
}

function SectionImageLg7() {
  return (
    <ZoomableImage src={imgSolutionThree} ariaLabel="Open solution three image full view" />
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <SectionImageLg7 />
    </div>
  );
}

function Property10() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch max-w-[774px] relative row-[12] self-start shrink-0 w-full" data-name="Property">
      <Frame11 />
      <Solution3Description />
      <Frame19 />
    </div>
  );
}

function SectionContainer() {
  return (
    <div className="gap-[110px] sm:gap-[200px] grid-cols-1 grid-rows-[repeat(14,_fit-content(100%))] grid max-w-[774px] pb-[48px] relative shrink-0 w-full" data-name="Section Container">
      <ContentSections1 />
      <ContentSections />
      <div className="bg-[rgba(50,64,79,0.1)] col-[1] h-px justify-self-stretch row-[3] shrink-0" data-name="Horizontal Divider" />
      <Property6 />
      <HmwSection />
      <Property1 />
      <PropertyRequirement />
      <DesignGoalSection />
      <div className="bg-[rgba(50,64,79,0.1)] col-[1] h-px justify-self-stretch row-[9] shrink-0" data-name="Horizontal Divider" />
      <Property8 />
      <Property9 />
      <Property10 />
      <div className="bg-[rgba(50,64,79,0.1)] col-[1] h-px justify-self-stretch row-[13] shrink-0" data-name="Horizontal Divider" />
      <ContentSections3 />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex items-center max-w-[774px] relative shrink-0 w-full" data-name="Content Container">
      <SectionContainer />
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex gap-[16px] items-start max-w-[774px] relative shrink-0 w-full" data-name="Main Content">
      <ContentContainer />
    </div>
  );
}

export default function DesignLibrary() {
  return (
    <div className="bg-[#fbfdfd] content-stretch flex flex-col items-center min-h-screen pt-[96px] sm:pt-[110px] relative w-full px-[20px]" data-name="Design Library">
      <MainContent />
      <MoreProjects currentId="design-library" />
      <Footer maxWidthClass="max-w-[774px]" paddingXClass="px-[20px] sm:px-0" />
      <NavBar />
    </div>
  );
}
