/// <reference types="vite/client" />
import React from "react";
import imgMyRole from "../assets/work/reward-storefront/My Role.png";
import imgDetailThumbnail from "../assets/work/reward-storefront/P2-Detail-Thumbnail.png";
import imgPrioritization from "../assets/work/reward-storefront/Prioritization.png";
import imgProgramStructureAnalysis from "../assets/work/reward-storefront/program structure analysis.png";
import imgSolution from "../assets/work/reward-storefront/Solution.png";
import imgBackground from "../assets/work/reward-storefront/Background.png";
import imgChallenge1 from "../assets/work/reward-storefront/Challenge 1.png";
import imgChallenge2 from "../assets/work/reward-storefront/Challenge 2.png";
import videoSolution1 from "../assets/work/reward-storefront/Solution 1.mov";
import videoSolution2 from "../assets/work/reward-storefront/Solution 2.mov";
import NavBar from "../app/components/NavBar";
import Footer from "../app/components/Footer";
import { Dialog, DialogContent, DialogTrigger } from "../app/components/ui/dialog";
import ImpactSectionGRS from "./ImpactSectionGRS";

function Property() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch max-w-[774px] relative row-[3] self-start shrink-0" data-name="Property">
      <ImpactSectionGRS />
    </div>
  );
}

function SectionContainer1() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[16px] items-start leading-[0] relative shrink-0 w-full" data-name="Section Container">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase whitespace-nowrap">
        <p className="leading-[22.5px]">My Role</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center min-w-full relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-[min-content]">
        <p className="leading-[46px] whitespace-pre-wrap">Problem framing and scalable discovery design</p>
      </div>
    </div>
  );
}

function MyRoleDescription() {
  return (
    <div className="flex flex-col font-geist justify-center min-w-full relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-[min-content]">
      <p className="leading-[22.5px] whitespace-pre-wrap">I led the end-to-end redesign of the storefront discovery experience - defining the problem through sitemap and competitive analysis, aligning with Product and Engineering, and delivering system-level UI patterns that could scale across programs.</p>
    </div>
  );
}

function SectionImageLg() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-full" data-name="section image lg">
      <div className="overflow-clip relative rounded-[inherit] w-full">
        <img loading="lazy" decoding="async" alt="" className="block w-full h-auto object-contain" src={imgMyRole} />
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
    <div className="col-[1] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch max-w-[774px] relative row-[2] self-start shrink-0" data-name="Content Sections">
      <SectionContainer1 />
      <MyRoleDescription />
      <Frame13 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[16px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Sitemap Audit</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Three frictions that slowed reward discovery{"\n"}and hid the storefront’s full value</p>
      </div>
    </div>
  );
}

function ProgramStructureAnalysisDescription() {
  return (
    <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
      <p className="leading-[22.5px] whitespace-pre-wrap">
        I reviewed the end-to-end user flow of the current storefront to understand how it was structured and where discovery broke down. This revealed 3 friction points:
      </p>
      <ul className="list-disc pl-[20px] mt-[8px] space-y-[4px] leading-[22.5px]">
        <li>What's available wasn't visible early, so discovery slowed.</li>
        <li>Applicable points weren't clear, so users hesitated.</li>
        <li>Site hierarchy wasn't visible upfront, so navigation felt uncertain.</li>
      </ul>
    </div>
  );
}

function SectionImageLg1() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="bg-[#f0f3f5] relative shrink-0 w-full cursor-pointer group"
          data-name="section image lg"
          aria-label="Open program structure analysis full view"
        >
          <div className="overflow-clip relative rounded-[inherit] w-full">
            <img loading="lazy" decoding="async" alt="" className="block w-full h-auto object-contain" src={imgProgramStructureAnalysis} />
          </div>
          <div
            className="absolute right-[12px] top-[12px] flex h-[24px] w-[24px] items-center justify-center rounded-[7px] bg-white/60 border border-[#eceff2] transition-opacity duration-200 group-hover:opacity-80"
            aria-hidden="true"
          >
            <svg aria-hidden="true" className="h-[14px] w-[14px]" fill="none" viewBox="0 0 24 24">
              <path
                d="M14 3h7v7M21 3l-7 7M10 21H3v-7M3 21l7-7"
                stroke="#6b7785"
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
        <img loading="lazy" decoding="async"
          alt=""
          className="w-full h-auto max-h-[90vh] object-contain rounded-[12px]"
          src={imgProgramStructureAnalysis}
        />
      </DialogContent>
    </Dialog>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <SectionImageLg1 />
    </div>
  );
}

function Property1() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[16px] items-start max-w-[774px] relative row-[8] self-start shrink-0 w-full" data-name="Property">
      <Frame5 />
      <ProgramStructureAnalysisDescription />
      <Frame14 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[16px] items-start leading-[0] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">User Behaviour Analysis</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Why users need discovery first</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">
          Before redesigning UI, I audited leading e-commerce storefronts to see how they surface breadth fast and orient shoppers early, then translated those patterns to a points-based rewards store where eligibility rules and point balances decide what’s actually redeemable.
        </p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
      <div className="content-stretch flex flex-col font-geist font-normal gap-[16px] items-center justify-center leading-[0] p-[24px] relative text-[16px] w-full">
          <div className="flex flex-col justify-center relative shrink-0 text-[#32404f] w-full">
            <p className="leading-[22.5px] whitespace-pre-wrap">Rewards users arrive without purchase intent</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-[#858e97] w-full">
            <p className="leading-[22.5px] whitespace-pre-wrap">Unlike traditional e-commerce, rewards users don’t visit with a specific product in mind. Infrequent visits to spend accumulated points make exploration more important than search.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
      <div className="content-stretch flex flex-col font-geist font-normal gap-[16px] items-center justify-center leading-[0] p-[24px] relative text-[16px] w-full">
          <div className="flex flex-col justify-center relative shrink-0 text-[#32404f] w-full">
            <p className="leading-[22.5px] whitespace-pre-wrap">Infrequent visits weaken product awareness</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-[#858e97] w-full">
            <p className="leading-[22.5px] whitespace-pre-wrap">Because users don’t visit often, they don’t have a clear sense of what the store offers. Over time, it becomes hard to understand the full breadth of rewards.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
      <div className="content-stretch flex flex-col font-geist font-normal gap-[16px] items-center justify-center leading-[0] p-[24px] relative text-[16px] w-full">
          <div className="flex flex-col justify-center relative shrink-0 text-[#32404f] w-full">
            <p className="leading-[22.5px] whitespace-pre-wrap">Search fails without prior discovery</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-[#858e97] w-full">
            <p className="leading-[22.5px] whitespace-pre-wrap">Search only works once users know what exists. Without upfront visibility into available options, users don’t know what to search for and disengage early.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame19 />
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[774px] relative shrink-0 w-full">
      <Frame23 />
      <Frame22 />
    </div>
  );
}

function Property2() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[16px] items-start max-w-[774px] relative row-[10] self-start shrink-0 w-full" data-name="Property">
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[16px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Prioritization</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Decide what to improve first</p>
      </div>
    </div>
  );
}

function PrioritizationDescription() {
  return (
    <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
      <p className="leading-[22.5px] whitespace-pre-wrap">Using the audit as a map, with the UX lead, Senior UX designer, and Product Lead, I surfaced the improvements that mattered most and prioritized them with the team across impact, engineering effort, and release speed, staying out of over-engineering.</p>
    </div>
  );
}

function SectionImageLg2() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-full" data-name="section image lg">
      <div className="overflow-clip relative rounded-[inherit] w-full">
        <img loading="lazy" decoding="async" alt="" className="block w-full h-auto object-contain" src={imgPrioritization} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <SectionImageLg2 />
    </div>
  );
}

function Property3() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[16px] items-start max-w-[774px] relative row-[9] self-start shrink-0 w-full" data-name="Property">
      <Frame7 />
      <PrioritizationDescription />
      <Frame15 />
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[16px] items-start leading-[0] relative shrink-0 w-full" data-name="Section Header">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[#858e97] text-[13px] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">E-commerce</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[42px] tracking-[-1.04px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Global Reward Storefront</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[#5b6a79] text-[16px] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Improving discoverability in a high-choice shopping platform</p>
      </div>
    </div>
  );
}

function Thumbnail() {
  return (
    <div className="bg-[#f0f3f5] h-[440px] shrink-0 w-full overflow-clip relative" data-name="Detail Thumbnail">
      <img loading="eager" fetchPriority="high" decoding="async" alt="" className="absolute inset-0 size-full object-cover" src={imgDetailThumbnail} />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[8px] sm:gap-[76px] items-start sm:items-center pb-[12px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ebeced] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-geist-mono font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full sm:w-[72px]">
        <p className="leading-[22.5px] whitespace-pre-wrap">Role</p>
      </div>
      <div className="flex flex-col font-geist font-normal justify-center leading-[0] min-h-px min-w-0 relative text-[#5b6a79] text-[15px] w-full">
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
    <div className="content-stretch flex flex-col sm:flex-row gap-[8px] sm:gap-[76px] items-start sm:items-center pb-[12px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ebeced] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-geist-mono font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full sm:w-[132px]">
        <p className="leading-[22.5px] whitespace-nowrap">Timeline</p>
      </div>
      <div className="flex flex-col font-geist font-normal justify-center leading-[0] min-h-px min-w-0 relative text-[#5b6a79] text-[15px] w-full">
        <p className="leading-[24px]">Jan - Apr 2025 (4 months)</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[8px] sm:gap-[76px] items-start sm:items-center pb-[12px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ebeced] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-geist-mono font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full sm:w-[132px]">
        <p className="leading-[22.5px] whitespace-nowrap">Team</p>
      </div>
      <div className="flex flex-col font-geist font-normal justify-center leading-[0] min-h-px min-w-0 relative text-[#5b6a79] text-[15px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">{`Product Lead · UX Lead · 2 UX Designers · 1 Developer · CS Team · Business Analysts `}</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row font-normal gap-[8px] sm:gap-[76px] items-start sm:items-center leading-[0] pb-[12px] relative shrink-0 text-[15px] w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ebeced] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[rgba(50,64,79,0.58)] uppercase w-full sm:w-[132px]">
        <p className="leading-[22.5px] whitespace-nowrap">Contribution</p>
      </div>
      <div className="flex flex-col font-geist justify-center min-h-px min-w-0 relative text-[#5b6a79] w-full">
        <p className="leading-[24px]">{`Problem Framing · Solution Scoping ·  UI Design`}</p>
      </div>
    </div>
  );
}

function GRSMetaContainerDeliverable() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[8px] sm:gap-[76px] items-start sm:items-center pb-[12px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ebeced] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-geist-mono font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full sm:w-[132px]">
        <p className="leading-[22.5px] whitespace-nowrap">Deliverable</p>
      </div>
      <div className="flex flex-col font-geist font-normal justify-center leading-[0] min-h-px min-w-0 relative text-[#5b6a79] text-[15px] w-full">
        <p className="leading-[24px]">Web App</p>
      </div>
    </div>
  );
}

function GRSMetaContainerTargetUsers() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[8px] sm:gap-[76px] items-start sm:items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-geist-mono font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full sm:w-[132px]">
        <p className="leading-[22.5px] whitespace-nowrap">Target Users</p>
      </div>
      <div className="flex flex-col font-geist font-normal justify-center leading-[0] min-h-px min-w-0 relative text-[#5b6a79] text-[15px] w-full">
        <p className="leading-[24px]">Employees participating in rewards &amp; recognition programs</p>
      </div>
    </div>
  );
}

function Property4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Property">
      <Container5 />
      <Container6 />
      <Container7 />
      <GRSMetaContainerDeliverable />
      <GRSMetaContainerTargetUsers />
    </div>
  );
}

function ContentSections1() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[16px] items-start max-w-[774px] pt-[48px] relative row-[1] self-start shrink-0 w-full" data-name="Content Sections">
      <SectionHeader />
      <Thumbnail />
      <Property4 />
    </div>
  );
}

function SectionContainer2() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[16px] items-start leading-[0] relative shrink-0 w-full" data-name="Section Container">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Background</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Employees redeem points for rewards in the storefront</p>
      </div>
    </div>
  );
}

function BackgroundDescription() {
  return (
    <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
      <p className="leading-[22.5px] whitespace-pre-wrap">
        Global Rewards Storefront is the redemption layer of the engagement platform, where employees redeem points for products, gift cards, or experiences.
      </p>
    </div>
  );
}

function SectionContainer2b() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[16px] items-start leading-[0] relative shrink-0 w-full" data-name="Section Container">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Why it matters</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Discovery drives engagement</p>
      </div>
    </div>
  );
}

function BackgroundDescription2() {
  return (
    <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
      <p className="leading-[22.5px] whitespace-pre-wrap">
        Most rewards users arrive to discover, not search.
        <br />
        <br />
        If the storefront doesn’t clearly expose what’s available, the experience feels smaller than it actually is. When discovery is slow or hidden behind multiple steps, users miss the full breadth of rewards, weakening excitement, discovery, and overall program engagement.
      </p>
    </div>
  );
}

function InlineWhyItMatters() {
  return (
    <div className="flex flex-col gap-[12px] items-start w-full">
      <SectionContainer2b />
      <BackgroundDescription2 />
    </div>
  );
}

function Property5() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-full" data-name="Property">
      <div className="overflow-clip relative rounded-[inherit] w-full">
        <img loading="lazy" decoding="async" alt="" className="block w-full h-auto object-contain" src={imgBackground} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ContentSections2() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch max-w-[774px] relative row-[4] self-start shrink-0" data-name="Content Sections">
      <SectionContainer2 />
      <BackgroundDescription />
      <Property5 />
    </div>
  );
}

function ContentSections2b() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch max-w-[774px] relative row-[5] self-start shrink-0" data-name="Content Sections">
      <InlineWhyItMatters />
    </div>
  );
}

function SectionContainer7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section Container">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">outcome</p>
      </div>
    </div>
  );
}

function SubsectionContainer4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Subsection Container">
      <div className="flex flex-col font-geist font-normal items-start leading-[26px] relative text-[16px] w-full">
        <p className="leading-[26px] text-[#5b6a79] whitespace-pre-wrap">
          Discovery became faster and clearer, helping users quickly understand their points and discover reward categories with confidence.
        </p>
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
      <SubsectionContainer4 />
    </div>
  );
}

function SubsectionContainer6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Subsection Container">
      <div className="flex flex-col font-geist font-normal items-start leading-[26px] relative text-[16px] w-full">
        <p className="leading-[26px] text-[#5b6a79] whitespace-pre-wrap">
          The redesign introduced reusable discovery patterns that scaled consistently across storefront programs.
        </p>
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
      <SubsectionContainer6 />
    </div>
  );
}

function SubsectionContainer8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Subsection Container">
      <div className="flex flex-col font-geist font-normal items-start leading-[26px] relative text-[16px] w-full">
        <p className="leading-[26px] text-[#5b6a79] whitespace-pre-wrap">
          Surfacing the reward catalogue earlier made the program’s value clearer and increased the likelihood of reward redemption.
        </p>
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
      <SubsectionContainer8 />
    </div>
  );
}

function SectionContainer6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section Container">
      <SectionContainer7 />
      <div className="content-stretch grid grid-cols-1 sm:grid-cols-3 gap-[36px] items-start w-full">
        <SectionContainer8 />
        <SubsectionContainer5 />
        <SubsectionContainer7 />
      </div>
    </div>
  );
}

function ContentSections3() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch max-w-[774px] relative row-[16] self-start shrink-0" data-name="Content Sections">
      <SectionContainer6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[16px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Problem</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Users couldn’t discover what their points could unlock, which led to fewer reward redemptions</p>
      </div>
    </div>
  );
}

function SectionImageLg3() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="bg-[#f0f3f5] relative shrink-0 w-full cursor-pointer group"
          data-name="section image lg"
          aria-label="Open challenge image 1 full view"
        >
          <div className="overflow-clip relative rounded-[inherit] w-full">
            <img loading="lazy" decoding="async" alt="" className="block w-full h-auto object-contain" src={imgChallenge1} />
          </div>
          <div
            className="absolute right-[12px] top-[12px] flex h-[24px] w-[24px] items-center justify-center rounded-[7px] bg-white/60 border border-[#eceff2] transition-opacity duration-200 group-hover:opacity-80"
            aria-hidden="true"
          >
            <svg aria-hidden="true" className="h-[14px] w-[14px]" fill="none" viewBox="0 0 24 24">
              <path
                d="M14 3h7v7M21 3l-7 7M10 21H3v-7M3 21l7-7"
                stroke="#6b7785"
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
        <img loading="lazy" decoding="async" alt="" className="w-full h-auto max-h-[90vh] object-contain rounded-[12px]" src={imgChallenge1} />
      </DialogContent>
    </Dialog>
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
    <div className="col-[1] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch max-w-[774px] relative row-[6] self-start shrink-0" data-name="Property">
      <Frame4 />
      <Frame12 />
      <div className="flex flex-col font-normal gap-[16px] items-start leading-[0] relative shrink-0 w-full mt-[170px]">
        <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
          <p className="leading-[22.5px] whitespace-pre-wrap">How Might We</p>
        </div>
        <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-full">
          <p className="leading-[46px] whitespace-pre-wrap">How might we help users quickly see what their points can unlock so they can discover with confidence?</p>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[16px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Design Goal</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Orient users fast, then reveal the full breadth</p>
      </div>
    </div>
  );
}

function SolutionOverviewDescription() {
  return (
    <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
      <p className="leading-[22.5px] whitespace-pre-wrap">To reduce frictions, I designed discoverability as a system with 2 layers: establishing a clear mental model to anchor users in context, followed by early exposure of product breadth to accelerate discovery.</p>
    </div>
  );
}

function SectionImageLg4() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-full" data-name="section image lg">
      <div className="overflow-clip relative rounded-[inherit] w-full">
        <img loading="lazy" decoding="async" alt="" className="block w-full h-auto object-contain" src={imgSolution} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <SectionImageLg4 />
    </div>
  );
}

function Property7() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch max-w-[774px] relative row-[12] self-start shrink-0" data-name="Property">
      <Frame8 />
      <SolutionOverviewDescription />
      <Frame16 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[16px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Solution 1</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Clarify context first with location and points display</p>
      </div>
    </div>
  );
}

function SolutionOneDescription() {
  return (
    <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
      <p className="leading-[22.5px] whitespace-pre-wrap">To remove this cognitive friction, I redesigned the master header and points display to create a consistent orientation layer across the storefront. This clarified program context, applicable points, and pathways across storefronts.</p>
    </div>
  );
}

function SectionImageLg5() {
  return (
    <div className="bg-[#f0f3f5] max-[560px]:bg-transparent h-[300px] max-[560px]:h-auto relative shrink-0 w-full" data-name="section image lg">
      <div className="overflow-clip max-[560px]:overflow-visible relative rounded-[inherit] max-[560px]:rounded-none h-full max-[560px]:h-auto w-full">
        <video
          className="absolute inset-x-0 top-[50px] bottom-0 w-full object-contain scale-[0.91] origin-top max-[560px]:static max-[560px]:block max-[560px]:h-auto max-[560px]:w-full max-[560px]:scale-100"
          src={videoSolution1}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none max-[560px]:hidden" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <SectionImageLg5 />
    </div>
  );
}

function Property8() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch max-w-[774px] relative row-[13] self-start shrink-0" data-name="Property">
      <Frame9 />
      <SolutionOneDescription />
      <Frame17 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[16px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Solution 2</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Reveal the full catalogue early</p>
      </div>
    </div>
  );
}

function SolutionTwoDescription() {
  return (
    <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
      <p className="leading-[22.5px] whitespace-pre-wrap">To remove navigational friction, I surfaced category structures early through upfront category displays and a mega-menu. This allowed users to scan available options quickly and jump directly to relevant areas while showcasing the platform’s breadth as a competitive strength.</p>
    </div>
  );
}

function SectionImageLg6() {
  return (
    <div className="bg-[#f0f3f5] max-[560px]:bg-transparent h-[350px] max-[560px]:h-auto relative shrink-0 w-full" data-name="section image lg">
      <div className="overflow-clip max-[560px]:overflow-visible relative rounded-[inherit] max-[560px]:rounded-none h-full max-[560px]:h-auto w-full">
        <video
          className="absolute inset-x-0 top-[50px] bottom-0 w-full object-contain scale-[0.91] origin-top max-[560px]:static max-[560px]:block max-[560px]:h-auto max-[560px]:w-full max-[560px]:scale-100"
          src={videoSolution2}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none max-[560px]:hidden" />
    </div>
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
    <div className="col-[1] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch max-w-[774px] relative row-[14] self-start shrink-0" data-name="Property">
      <Frame10 />
      <SolutionTwoDescription />
      <Frame18 />
    </div>
  );
}

function SectionContainer() {
  return (
    <div className="gap-[110px] sm:gap-[170px] grid-cols-1 grid-rows-[repeat(16,_fit-content(100%))] grid max-w-[774px] pb-[48px] relative shrink-0 w-full" data-name="Section Container">
      <ContentSections1 />
      <ContentSections />
      <Property />
      <ContentSections2 />
      <ContentSections2b />
      <Property6 />
      <div className="bg-[rgba(50,64,79,0.1)] col-[1] h-px justify-self-stretch row-[7] shrink-0" data-name="Horizontal Divider" />
      <Property1 />
      <Property3 />
      <Property2 />
      <div className="bg-[rgba(50,64,79,0.1)] col-[1] h-px justify-self-stretch row-[11] shrink-0" data-name="Horizontal Divider" />
      <Property7 />
      <Property8 />
      <Property9 />
      <div className="bg-[rgba(50,64,79,0.1)] col-[1] h-px justify-self-stretch row-[15] shrink-0" data-name="Horizontal Divider" />
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

export default function GlobalRewardStorefront() {
  return (
    <div className="bg-[#fbfdfd] content-stretch flex flex-col items-center min-h-screen pt-[96px] sm:pt-[110px] px-[20px] relative w-full" data-name="Global Reward Storefront">
      <MainContent />
      <Footer maxWidthClass="max-w-[774px]" emailVariant="text" paddingXClass="px-[20px] sm:px-0" />
      <NavBar />
    </div>
  );
}
