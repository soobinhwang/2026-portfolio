/// <reference types="vite/client" />
import React from "react";
import imgDetailThumbnail from "../assets/work/design-library/P3-Detail-Thumbnail.png";
import imgAudit1 from "../assets/work/design-library/Audit 1.png";
import imgAudit2 from "../assets/work/design-library/Audit 2.png";
import imgRequirementAnalysis from "../assets/work/design-library/Requirement Analysis.png";
import imgSolutionOverview1 from "../assets/work/design-library/Solution Overview 1.png";
import imgSolutionOverview2 from "../assets/work/design-library/Solution Overview 2.png";
import imgSolution1Before from "../assets/work/design-library/Solution 1 Before.png";
import imgSolution1After from "../assets/work/design-library/Solution 1 After.png";
import imgSolution2Before from "../assets/work/design-library/Solution 2 Before.png";
import imgSolution2After from "../assets/work/design-library/Solution 2 After.png";
import imgSolution3Before from "../assets/work/design-library/Solution 3 Before.png";
import imgSolution3After from "../assets/work/design-library/Solution 3 After.png";
import imgChallenge1 from "../assets/work/design-library/Challenge 1.png";
import NavBar from "../app/components/NavBar";
import Footer from "../app/components/Footer";
import ImpactSectionGRS from "./ImpactSectionGRS";

function Property() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch max-w-[774px] relative row-[2] self-start shrink-0" data-name="Property">
      <ImpactSectionGRS
        hideThird
        firstTitle="Increased Flexibility"
        firstSubtitle="Eliminated hardcoded values so the tool could adapt quickly to new requirements."
        secondTitle="Improved Workflow Efficiency"
        secondSubtitle="Streamlined budgeting/incentive request workflows to reduce errors during org changes."
      />
    </div>
  );
}

function SectionContainer1() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] relative shrink-0 w-full" data-name="Section Container">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase whitespace-nowrap">
        <p className="leading-[22.5px]">My Role</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center min-w-full relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-[min-content]">
        <p className="leading-[46px] whitespace-pre-wrap">Driving UX strategy and system design from ambiguity to launch</p>
      </div>
      <div className="flex flex-col font-geist justify-center min-w-full relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-[min-content]">
        <p className="leading-[22.5px] whitespace-pre-wrap">I led the work from audit to implementation, turning user pain points into a scalable component system with product and engineering.</p>
      </div>
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
    <div className="bg-[#f0f3f5] h-[266px] relative shrink-0 w-[774px]" data-name="section image lg">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-0 flex items-center justify-center px-[80px]">
          {/* Icon 1: Fragmented ring — Audit & Discovery */}
          <div className="flex flex-col items-center gap-[20px]">
            <svg viewBox="0 0 120 120" width="108" height="108" fill="none">
              <circle cx="60" cy="60" r="42" stroke="#1e242a" strokeWidth="9" strokeDasharray="20 10" strokeLinecap="round" />
            </svg>
            <span className="font-geist-mono text-[13px] text-[rgba(50,64,79,0.58)]">Audit & Research</span>
          </div>
          {arrow}
          {/* Icon 2: 3×3 grid — Component System */}
          <div className="flex flex-col items-center gap-[20px]">
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
            <span className="font-geist-mono text-[13px] text-[rgba(50,64,79,0.58)]">Component System</span>
          </div>
          {arrow}
          {/* Icon 3: 4-pointed north star — Shipped & Scaled */}
          <div className="flex flex-col items-center gap-[20px]">
            <svg viewBox="0 0 120 120" width="108" height="108" fill="none">
              <path d="M60 8 L65 55 L112 60 L65 65 L60 112 L55 65 L8 60 L55 55 Z" fill="#1e242a" />
            </svg>
            <span className="font-geist-mono text-[13px] text-[rgba(50,64,79,0.58)]">Shipped to Scale</span>
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

function ContentSections() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch max-w-[774px] relative row-[9] self-start shrink-0" data-name="Content Sections">
      <SectionContainer1 />
      <Frame13 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Audit</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Audited existing components and user flows</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">{`Given the project's large scale, I created a user flow and sitemap to simplify communication and align the team's understanding, focusing on two key user tasks: submitting forms and tracking submissions.`}</p>
      </div>
    </div>
  );
}

function SectionImageLg1() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-[774px]" data-name="section image lg">
      <div className="overflow-clip relative rounded-[inherit] w-full">
        <img alt="" className="block w-full h-auto object-contain" src={imgAudit1} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SectionImageLg1b() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-[774px]" data-name="section image lg">
      <div className="overflow-clip relative rounded-[inherit] w-full">
        <img alt="" className="block w-full h-auto object-contain" src={imgAudit2} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
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
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start max-w-[774px] relative row-[10] self-start shrink-0 w-[774px]" data-name="Property">
      <Frame5 />
      <Frame14 />
    </div>
  );
}

function Frame5Requirement() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Requirement Analysis</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Analyzed requirements and usages for new components</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">{`I found there was an inconsistency and accessibility issues in the user interface and in displaying information, no feedback in the submission process or status which made it easy to make mistakes.`}</p>
      </div>
    </div>
  );
}

function SectionImageLgRequirement() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-[774px]" data-name="section image lg">
      <div className="overflow-clip relative rounded-[inherit] w-full">
        <img alt="" className="block w-full h-auto object-contain" src={imgRequirementAnalysis} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
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
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start max-w-[774px] relative row-[11] self-start shrink-0 w-[774px]" data-name="Property">
      <Frame5Requirement />
      <Frame14Requirement />
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] relative shrink-0 w-full" data-name="Section Header">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[#858e97] text-[13px] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">B2B SaaS</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[42px] tracking-[-1.04px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Design Library</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[#5b6a79] text-[16px] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Redesigning the interface that reduced user frustration and task completion time</p>
      </div>
    </div>
  );
}

function Thumbnail() {
  return (
    <div className="bg-[#f0f3f5] h-[440px] shrink-0 w-[774px] overflow-clip relative" data-name="Detail Thumbnail">
      <img alt="" className="absolute inset-0 size-full object-cover" src={imgDetailThumbnail} />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[76px] items-center pb-[12px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ebeced] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-geist-mono font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-[72px]">
        <p className="leading-[22.5px] whitespace-pre-wrap">Role</p>
      </div>
      <div className="flex flex-col font-geist font-normal justify-center leading-[0] relative shrink-0 text-[#5b6a79] text-[15px] whitespace-nowrap">
        <p>
          <span className="leading-[24px]">{`UX `}</span>
          <span className="font-geist font-normal leading-[24px]">•</span>
          <span className="leading-[24px]">{` Product Designer`}</span>
        </p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[76px] items-center pb-[12px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ebeced] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-geist-mono font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-[72px]">
        <p className="leading-[22.5px] whitespace-pre-wrap">Timeline</p>
      </div>
      <div className="flex flex-col font-geist font-normal justify-center leading-[0] relative shrink-0 text-[#5b6a79] text-[15px] whitespace-nowrap">
        <p className="leading-[24px]">5 months · Aug 2022 - Jan 2023</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[76px] items-center pb-[12px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ebeced] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-geist-mono font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-[72px]">
        <p className="leading-[22.5px] whitespace-pre-wrap">Team</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-geist font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#5b6a79] text-[15px]">
        <p className="leading-[24px] whitespace-pre-wrap">{`1 Designer · 1 Developer · UX Team Manager · Business Analyst `}</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex font-normal gap-[76px] items-center leading-[0] relative shrink-0 text-[15px] w-full" data-name="Container">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[rgba(50,64,79,0.58)] uppercase w-[72px]">
        <p className="leading-[22.5px] whitespace-pre-wrap">Skills</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[#5b6a79] whitespace-nowrap">
        <p className="leading-[24px]">{`Problem Framing · Solution Scoping ·  UI Design`}</p>
      </div>
    </div>
  );
}

function Property4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[774px]" data-name="Property">
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
    </div>
  );
}

function ContentSections1() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start max-w-[774px] pt-[48px] relative row-[1] self-start shrink-0 w-[774px]" data-name="Content Sections">
      <SectionHeader />
      <Thumbnail />
      <Property4 />
    </div>
  );
}

function SectionContainer7() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Section Container">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">outcome</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[42px] tracking-[-0.9px] w-full">
        <p className="leading-[50px] whitespace-pre-wrap">Created a scalable foundation for faster product evolution</p>
      </div>
    </div>
  );
}

function SubsectionContainer4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Subsection Container">
      <div className="flex font-geist font-normal items-start leading-[26px] relative text-[#5b6a79] text-[16px] w-full">
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
      <div className="flex flex-col font-newsreader font-normal justify-center leading-[0] relative shrink-0 text-[#1e242a] text-[24px] tracking-[-0.3px] w-full">
        <p className="leading-[30px] whitespace-pre-wrap">{`Product & UX`}</p>
      </div>
      <div aria-hidden="true" className="bg-[#d6dce1] h-px w-[56px]" />
      <SubsectionContainer4 />
    </div>
  );
}

function SubsectionContainer6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Subsection Container">
      <div className="flex font-geist font-normal items-start leading-[26px] relative text-[#5b6a79] text-[16px] w-full">
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
      <div className="flex flex-col font-newsreader font-normal justify-center leading-[0] relative shrink-0 text-[#1e242a] text-[24px] tracking-[-0.3px] w-full">
        <p className="leading-[30px] whitespace-pre-wrap">{`Team & Ops`}</p>
      </div>
      <div aria-hidden="true" className="bg-[#d6dce1] h-px w-[56px]" />
      <SubsectionContainer6 />
    </div>
  );
}

function SubsectionContainer8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Subsection Container">
      <div className="flex font-geist font-normal items-start leading-[26px] relative text-[#5b6a79] text-[16px] w-full">
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
      <div className="flex flex-col font-newsreader font-normal justify-center leading-[0] relative shrink-0 text-[#1e242a] text-[24px] tracking-[-0.3px] w-full">
        <p className="leading-[30px] whitespace-pre-wrap">Business</p>
      </div>
      <div aria-hidden="true" className="bg-[#d6dce1] h-px w-[56px]" />
      <SubsectionContainer8 />
    </div>
  );
}

function SectionContainer6() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Section Container">
      <SectionContainer7 />
      <div className="content-stretch grid grid-cols-3 gap-[36px] items-start w-full">
        <SectionContainer8 />
        <SubsectionContainer5 />
        <SubsectionContainer7 />
      </div>
    </div>
  );
}

function ContentSections3() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch max-w-[774px] relative row-[13] self-start shrink-0" data-name="Content Sections">
      <SectionContainer6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Challenge</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Unclear and inconsistent submission experience</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">The product was initially developed without solid UX guidelines and lacked understanding of end user behaviour, causing frustration. </p>
      </div>
    </div>
  );
}

function SectionImageLg3() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-[774px]" data-name="section image lg">
      <div className="overflow-clip relative rounded-[inherit] w-full">
        <img alt="" className="block w-full h-auto object-contain" src={imgChallenge1} />
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
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch max-w-[774px] relative row-[3] self-start shrink-0" data-name="Property">
      <Frame4 />
      <Frame12 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Solution</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Built a component library for consistency and faster delivery</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">to ensure a consistent user experience and streamline the development process</p>
      </div>
    </div>
  );
}

function SectionImageLg4() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-[774px]" data-name="section image lg">
      <div className="overflow-clip relative rounded-[inherit] w-full">
        <img alt="" className="block w-full h-auto object-contain" src={imgSolutionOverview1} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SectionImageLg4b() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-[774px]" data-name="section image lg">
      <div className="overflow-clip relative rounded-[inherit] w-full">
        <img alt="" className="block w-full h-auto object-contain" src={imgSolutionOverview2} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <SectionImageLg4 />
      <SectionImageLg4b />
    </div>
  );
}

function Property7() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch max-w-[774px] relative row-[4] self-start shrink-0" data-name="Property">
      <Frame8 />
      <Frame16 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Solution 1</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Enhanced reliability via consistency and accessibility</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Improved the readability</p>
      </div>
    </div>
  );
}

function SectionImageLg5() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-[774px]" data-name="section image lg">
      <div className="overflow-clip relative rounded-[inherit] w-full">
        <img alt="" className="block w-full h-auto object-contain" src={imgSolution1Before} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SectionImageLg5b() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-[774px]" data-name="section image lg">
      <div className="overflow-clip relative rounded-[inherit] w-full">
        <img alt="" className="block w-full h-auto object-contain" src={imgSolution1After} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
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
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch max-w-[774px] relative row-[5] self-start shrink-0" data-name="Property">
      <Frame9 />
      <Frame17 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Solution 2</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Guidance, error prevention and recovery</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">It empowers users to confidently interact with the product and complete tasks independently, reducing mistakes and ensuring smooth user flows.</p>
      </div>
    </div>
  );
}

function SectionImageLg6() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-[774px]" data-name="section image lg">
      <div className="overflow-clip relative rounded-[inherit] w-full">
        <img alt="" className="block w-full h-auto object-contain" src={imgSolution2Before} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SectionImageLg6b() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-[774px]" data-name="section image lg">
      <div className="overflow-clip relative rounded-[inherit] w-full">
        <img alt="" className="block w-full h-auto object-contain" src={imgSolution2After} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <SectionImageLg6 />
      <SectionImageLg6b />
    </div>
  );
}

function Property9() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch max-w-[774px] relative row-[6] self-start shrink-0" data-name="Property">
      <Frame10 />
      <Frame18 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Solution 3</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Increased task completion rate via optimized modals</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Modals are integral to the user's main tasks, providing visual indicators and guidelines to reduce errors and completion time.</p>
      </div>
    </div>
  );
}

function SectionImageLg7() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-[774px]" data-name="section image lg">
      <div className="overflow-clip relative rounded-[inherit] w-full">
        <img alt="" className="block w-full h-auto object-contain" src={imgSolution3Before} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SectionImageLg7b() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-[774px]" data-name="section image lg">
      <div className="overflow-clip relative rounded-[inherit] w-full">
        <img alt="" className="block w-full h-auto object-contain" src={imgSolution3After} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <SectionImageLg7 />
      <SectionImageLg7b />
    </div>
  );
}

function Property10() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch max-w-[774px] relative row-[7] self-start shrink-0" data-name="Property">
      <Frame11 />
      <Frame19 />
    </div>
  );
}

function SectionContainer() {
  return (
    <div className="gap-[170px] grid-cols-[repeat(1,_fit-content(100%))] grid-rows-[repeat(13,_fit-content(100%))] inline-grid max-w-[774px] pb-[48px] relative shrink-0" data-name="Section Container">
      <Property />
      <ContentSections />
      <div className="bg-[rgba(50,64,79,0.1)] col-[1] h-px justify-self-stretch row-[8] shrink-0" data-name="Horizontal Divider" />
      <div className="bg-[rgba(50,64,79,0.1)] col-[1] h-px justify-self-stretch row-[12] shrink-0" data-name="Horizontal Divider" />
      <Property1 />
      <PropertyRequirement />
      <ContentSections1 />
      <ContentSections3 />
      <Property6 />
      <Property7 />
      <Property8 />
      <Property9 />
      <Property10 />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex items-center max-w-[774px] relative shrink-0" data-name="Content Container">
      <SectionContainer />
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex gap-[32px] items-start max-w-[774px] relative shrink-0 w-[774px]" data-name="Main Content">
      <ContentContainer />
    </div>
  );
}

export default function DesignLibrary() {
  return (
    <div className="bg-[#fbfdfd] content-stretch flex flex-col items-center min-h-screen pt-[110px] relative w-full" data-name="Design Library">
      <MainContent />
      <Footer maxWidthClass="max-w-[774px]" emailVariant="text" />
      <NavBar />
    </div>
  );
}
