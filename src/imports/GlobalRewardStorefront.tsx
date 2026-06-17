/// <reference types="vite/client" />
import React, { useEffect, useRef, useState } from "react";
import imgMyRole from "../assets/work/reward-storefront/My Role.png";
import imgDetailThumbnail from "../assets/work/reward-storefront/P2-Detail-Thumbnail.png";
import imgPrioritization from "../assets/work/reward-storefront/Prioritization.png";
import imgProgramStructureAnalysis from "../assets/work/reward-storefront/program structure analysis.png";
import imgSolution from "../assets/work/reward-storefront/Solution.png";
import imgBackground from "../assets/work/reward-storefront/Background.png";
import imgChallenge1 from "../assets/work/reward-storefront/Challenge 1.png";
import imgChallenge2 from "../assets/work/reward-storefront/Challenge 2.png";
import imgDesignOutcome from "../assets/work/reward-storefront/Design Outcome.png";
import imgStar from "../assets/work/reward-storefront/star.png";
import imgUserBehaviourAnalysis from "../assets/work/reward-storefront/User Behaviour Analysis.png";
import videoSolution1 from "../assets/work/reward-storefront/Solution 1.mp4";
import videoSolution2 from "../assets/work/reward-storefront/Solution 2.mp4";
import NavBar from "../app/components/NavBar";
import Footer from "../app/components/Footer";
import MoreProjects from "../app/components/MoreProjects";
import { Dialog, DialogContent, DialogTrigger } from "../app/components/ui/dialog";
import ImpactSectionGRS from "./ImpactSectionGRS";

{/* function Property() — ImpactSectionGRS moved into GRSMyRoleAndImpact */}

function SectionContainer1() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[16px] items-start leading-[0] relative shrink-0 w-full" data-name="Section Container">
      <div className="flex flex-col font-inter justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.48)] tracking-[-0.5px]">
        <p className="leading-[22.5px]">My Role</p>
      </div>
      <div className="flex flex-col font-inter font-medium justify-center min-w-full relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.04em] w-[min-content]">
        <p className="leading-[46px] whitespace-pre-wrap">Problem framing and scalable discovery design</p>
      </div>
    </div>
  );
}

function MyRoleDescription() {
  return (
    <div className="flex flex-col font-inter justify-center min-w-full relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.04em] w-[min-content]">
      <p className="leading-[22.5px] whitespace-pre-wrap">
        I led the end-to-end redesign of storefront discovery, framing the problem, aligning with Product and Engineering, and delivering system-level UI patterns that scale across programs.
      </p>
    </div>
  );
}

function SectionImageLg() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-full rounded-[12px] overflow-hidden" data-name="section image lg">
      <div className="overflow-clip relative rounded-[inherit] w-full">
        <img loading="lazy" decoding="async" alt="" className="block w-full h-auto object-contain" src={imgMyRole} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DesignOutcomeBanner() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="bg-[#f0f3f5] relative shrink-0 w-full cursor-pointer group rounded-[12px] overflow-hidden"
          data-name="design outcome banner"
          aria-label="Open design outcome full view"
        >
          <div className="overflow-clip relative rounded-[inherit] w-full">
            <img loading="lazy" decoding="async" alt="" className="block w-full h-auto object-contain" src={imgDesignOutcome} />
          </div>
          <div
            className="absolute right-[12px] top-[12px] flex h-[24px] w-[24px] items-center justify-center rounded-[7px] bg-[rgba(30,36,42,0.78)] border border-[#1e242a] transition-opacity duration-200 group-hover:opacity-90"
            aria-hidden="true"
          >
            <svg aria-hidden="true" className="h-[14px] w-[14px]" fill="none" viewBox="0 0 24 24">
              <path
                d="M14 3h7v7M21 3l-7 7M10 21H3v-7M3 21l7-7"
                stroke="#f0f3f5"
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
        <img
          loading="lazy"
          decoding="async"
          alt=""
          className="w-full h-auto max-h-[90vh] object-contain rounded-[12px]"
          src={imgDesignOutcome}
        />
      </DialogContent>
    </Dialog>
  );
}

function usePlayOnView(ref: React.RefObject<HTMLVideoElement>) {
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    node.pause();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.play().catch(() => {});
          } else {
            node.pause();
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <SectionImageLg />
    </div>
  );
}

function GRSMyRoleAndImpact() {
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
    { title: "Confident Exploration", desc: "Users could browse the storefront with more confidence and less hesitation." },
    { title: "Earlier Value Recognition", desc: "Users could understand the breadth and value of the rewards program earlier." },
  ];

  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch max-w-[774px] relative row-[2] self-start shrink-0" data-name="Content Sections">
      <div className="flex flex-col gap-[10px] items-start w-full">
        <p className="font-inter text-[15px] text-[rgba(50,64,79,0.48)] tracking-[-0.5px] leading-[22.5px]">My role &amp; Impact</p>
        <ul className="list-disc pl-[24px] flex flex-col gap-0">
          <li className="font-inter text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.04em] leading-[22.5px]">Led <span className="text-[#1e242a]">end-to-end redesign</span> of storefront discovery from problem framing to UI delivery</li>
          <li className="font-inter text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.04em] leading-[22.5px]">Aligned with <span className="text-[#1e242a]">Product and Engineering</span> to scope solutions within technical constraints</li>
          <li className="font-inter text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.04em] leading-[22.5px]">Delivered <span className="text-[#1e242a]">system-level UI patterns</span> that scale across programmes</li>
        </ul>
      </div>
      <div ref={containerRef} className="flex gap-[10px] items-start w-full overflow-hidden">
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
            <div className="font-inter text-[14px] text-[rgba(50,64,79,0.58)] leading-[21px]">{card.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContentSections() {
  return <GRSMyRoleAndImpact />;
}

function DesignOutcomeSection() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch max-w-[774px] relative row-[2] self-start shrink-0" data-name="Design Outcome">
      <DesignOutcomeBanner />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[16px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-inter justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.48)] tracking-[-0.5px] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Sitemap Audit</p>
      </div>
      <div className="flex flex-col font-inter font-medium justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.04em] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Reviewing the end-to-end redeeming flow{"\n"}to see where discovery slowed down</p>
      </div>
    </div>
  );
}

function ProgramStructureAnalysisDescription() {
  return (
    <div className="flex flex-col font-inter justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.04em] w-full">
      <p className="leading-[22.5px] whitespace-pre-wrap">
        This revealed 3 friction points:
      </p>
      <ol className="list-decimal pl-[20px] mt-[8px] space-y-[4px] leading-[22.5px]">
        <li>
          What's available wasn't visible early, so <span className="text-[#1e242a]">discovery slowed</span>.
        </li>
        <li>
          Applicable points weren't clear, so <span className="text-[#1e242a]">users hesitated</span>.
        </li>
        <li>
          Site hierarchy wasn't visible upfront, so navigation <span className="text-[#1e242a]">felt uncertain</span>.
        </li>
      </ol>
    </div>
  );
}

function SectionImageLg1() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="bg-[#f0f3f5] relative shrink-0 w-full cursor-pointer group rounded-[12px] overflow-hidden"
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
    <div className="col-[1] content-stretch flex flex-col gap-[16px] items-start max-w-[774px] relative row-[6] self-start shrink-0 w-full" data-name="Property">
      <Frame5 />
      <ProgramStructureAnalysisDescription />
      <Frame14 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[16px] items-start leading-[0] relative shrink-0 w-full">
      <div className="flex flex-col font-inter justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.48)] tracking-[-0.5px] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">User Behaviour Analysis</p>
      </div>
      <div className="flex flex-col font-inter font-medium justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.04em] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Understanding why users need discovery first</p>
      </div>
      <div className="flex flex-col font-inter justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.04em] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">
          I audited 5 leading e-commerce sites to see how they onboard and guide users through full breadth. With eligibility rules and point balances in the rewards store, I applied only the patterns that fit the constraints.
        </p>
      </div>
    </div>
  );
}

function UserBehaviourAnalysisImage() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-full rounded-[12px] overflow-hidden" data-name="User Behaviour Analysis Image">
      <div className="overflow-clip relative rounded-[inherit] w-full">
        <img loading="lazy" decoding="async" alt="" className="block w-full h-auto object-contain" src={imgUserBehaviourAnalysis} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col font-inter font-normal gap-[12px] items-start relative shrink-0 text-[16px] w-full">
      <div className="flex flex-col justify-center relative shrink-0 text-[#32404f] tracking-[-0.04em] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">1. Reward users arrive without purchase intent</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#858e97] tracking-[-0.04em] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">{`Unlike traditional e-commerce, reward users typically come to browse rather than search for
a specific item.`}</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col font-inter font-normal gap-[12px] items-start relative shrink-0 text-[16px] w-full">
      <div className="flex flex-col justify-center relative shrink-0 text-[#32404f] tracking-[-0.04em] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">2. Infrequent visits weaken product awareness</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#858e97] tracking-[-0.04em] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Because points take time to accumulate, visits are occasional, and users don’t build a strong mental model of what the store offers.</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col font-inter font-normal gap-[12px] items-start relative shrink-0 text-[16px] w-full">
      <div className="flex flex-col justify-center relative shrink-0 text-[#32404f] tracking-[-0.04em] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">3. Search fails without prior discovery</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#858e97] tracking-[-0.04em] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Without early visibility into the full breadth of available rewards, users don’t know what to search for.</p>
      </div>
    </div>
  );
}

function Frame22() {
  const items = [
    { title: "Reward users arrive without purchase intent", desc: "Unlike traditional e-commerce, reward users typically come to browse rather than search for a specific item." },
    { title: "Infrequent visits weaken product awareness", desc: <>Since points take time to accumulate with occasional visits,<br />users don't build a strong mental model of what the store offers.</> },
    { title: "Search fails without prior discovery", desc: "Without early visibility into the full breadth of available rewards, users don't know what to search for." },
  ];

  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-inter justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.04em] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">This revealed 3 behaviour patterns that create discovery friction</p>
      </div>
      <div className="flex flex-col gap-[10px] w-full">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-[#f0f3f5] flex flex-col gap-[8px] items-start p-[24px] rounded-[8px] w-full"
          >
            <div className="font-inter font-medium text-[#1e242a] text-[16px] tracking-[-0.04em] leading-[22.5px]">{item.title}</div>
            <div className="font-inter text-[14px] text-[rgba(50,64,79,0.58)] tracking-[-0.04em] leading-[21px]">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[774px] relative shrink-0 w-full">
      <Frame23 />
      <UserBehaviourAnalysisImage />
      <Frame22 />
    </div>
  );
}

function Property2() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[16px] items-start max-w-[774px] relative row-[8] self-start shrink-0 w-full" data-name="Property">
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[16px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-inter justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.48)] tracking-[-0.5px] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Prioritization</p>
      </div>
      <div className="flex flex-col font-inter font-medium justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.04em] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Narrowing down to what's worth building</p>
      </div>
    </div>
  );
}

function PrioritizationDescription() {
  return (
    <div className="flex flex-col font-inter justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.04em] w-full">
      <p className="leading-[22.5px] whitespace-pre-wrap">
        Using the audit as our map, I partnered with the UX team and product lead to surface the highest-impact fixes and prioritize them by impact, effort, and release speed, avoiding over‑engineering.
      </p>
    </div>
  );
}

function SectionImageLg2() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-full rounded-[12px] overflow-hidden" data-name="section image lg">
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
    <div className="col-[1] content-stretch flex flex-col gap-[16px] items-start max-w-[774px] relative row-[7] self-start shrink-0 w-full" data-name="Property">
      <Frame7 />
      <PrioritizationDescription />
      <Frame15 />
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[16px] items-start leading-[0] relative shrink-0 w-full" data-name="Section Header">
      {/* <div className="flex flex-col font-inter justify-center relative shrink-0 text-[rgba(50,64,79,0.48)] text-[15px] tracking-[-0.5px] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">E-commerce</p>
      </div> */}
      <div className="flex flex-col font-inter font-medium justify-center relative shrink-0 text-[#1e242a] text-[42px] tracking-[-0.04em] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Global Reward Storefront</p>
      </div>
      <div className="flex flex-col font-inter justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.04em] w-full">
        <p className="leading-[22.5px]">Improving discoverability in a high-choice shopping platform</p>
      </div>
    </div>
  );
}

function Thumbnail() {
  return (
    <div className="bg-[#f0f3f5] h-[440px] shrink-0 w-full overflow-clip relative rounded-[12px]" data-name="Detail Thumbnail">
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
        <p className="leading-[24px]">Jan - Apr 2025 (4 months)</p>
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
        <p className="leading-[24px] whitespace-pre-wrap">{`Product Lead · UX Lead · 2 UX Designers · 1 Developer · CS Team · Business Analysts `}</p>
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
        <p className="leading-[24px]">{`Problem Framing · Solution Scoping ·  UI Design`}</p>
      </div>
    </div>
  );
}

function GRSMetaContainerDeliverable() {
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

function GRSMetaContainerTargetUsers() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[8px] sm:gap-[76px] items-start sm:items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-inter font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(50,64,79,0.48)] tracking-[-0.5px] w-full sm:w-[132px]">
        <p className="leading-[22.5px] whitespace-nowrap">Target Users</p>
      </div>
      <div className="flex flex-col font-inter font-normal justify-center leading-[0] min-h-px min-w-0 relative text-[#5b6a79] text-[15px] w-full">
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
      {/* <Container7 /> */}
      <GRSMetaContainerDeliverable />
      <GRSMetaContainerTargetUsers />
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

function SectionContainer2() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[16px] items-start leading-[0] relative shrink-0 w-full" data-name="Section Container">
      <div className="flex flex-col font-inter justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.48)] tracking-[-0.5px] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Context</p>
      </div>
      <div className="flex flex-col font-inter font-medium justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.04em] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Employees redeem points for rewards{"\n"}in the storefront</p>
      </div>
    </div>
  );
}

function BackgroundDescription() {
  return (
    <div className="flex flex-col font-inter justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.04em] w-full">
      <p className="leading-[22.5px] whitespace-pre-wrap">
        The Rewards Storefront is where users actively choose their reward. It's the moment their effort turns into something real, so if this experience breaks down, the program loses its core value.
      </p>
    </div>
  );
}

function SectionContainer2b() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[16px] items-start leading-[0] relative shrink-0 w-full" data-name="Section Container">
      <div className="flex flex-col font-inter justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.48)] tracking-[-0.5px] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Why it matters</p>
      </div>
      <div className="flex flex-col font-inter font-medium justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.04em] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Discovery drives engagement</p>
      </div>
    </div>
  );
}

function BackgroundDescription2() {
  return (
    <div className="flex flex-col font-inter justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.04em] w-full">
      <p className="leading-[22.5px] whitespace-pre-wrap">
        Most rewards users arrive to discover, not search.
        <br />
        <br />
        If the storefront doesn’t clearly expose what’s available, the experience feels smaller. When discovery is slow or hidden, users miss the full breadth of rewards, weakening excitement and program engagement.
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
    <div className="bg-[#f0f3f5] relative shrink-0 w-full rounded-[12px] overflow-hidden" data-name="Property">
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
      <div className="flex flex-col font-inter justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.48)] tracking-[-0.5px] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Outcome</p>
      </div>
    </div>
  );
}

function SubsectionContainer4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Subsection Container">
      <div className="flex flex-col font-inter font-normal items-start leading-[26px] relative text-[16px] w-full">
        <p className="leading-[26px] text-[#5b6a79] whitespace-pre-wrap">
          Steps to see the full catalog dropped from 4 clicks to 2, so users quickly explore rewards with confidence.
        </p>
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
      <div className="flex flex-col font-inter font-normal items-start leading-[26px] relative text-[16px] w-full">
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
      <div className="flex flex-col font-inter font-normal items-start leading-[26px] relative text-[16px] w-full">
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
    { title: "User Impact", desc: "Steps to see the full catalog dropped from 4 clicks to 2, so users quickly explore rewards with confidence" },
    { title: "Business Impact", desc: "Surfacing the reward catalogue earlier made the program's value clearer and increased the likelihood of reward redemption" },
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
    <div className="col-[1] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch max-w-[774px] relative row-[14] self-start shrink-0" data-name="Content Sections">
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
      <div className="flex flex-col font-inter font-medium justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.04em] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Users couldn’t see the full breadth of rewards,{"\n"}so the storefront felt less valuable</p>
      </div>
    </div>
  );
}

function ProblemContext() {
  return (
    <div className="flex flex-col font-inter justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.04em] w-full">
      <p className="leading-[22.5px] whitespace-pre-wrap">
        The storefront's value proposition is its catalogue: hundreds of options including major brands.
        <br />
        If users aren't introduced to it, they underestimate what the program is worth.
      </p>
    </div>
  );
}

function SectionImageLg3() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="bg-[#f0f3f5] relative shrink-0 w-full cursor-pointer group rounded-[12px] overflow-hidden"
          data-name="section image lg"
          aria-label="Open challenge image 1 full view"
        >
          <div className="overflow-clip relative rounded-[inherit] w-full">
            <img loading="lazy" decoding="async" alt="" className="block w-full h-auto object-contain" src={imgChallenge2} />
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
        <img loading="lazy" decoding="async" alt="" className="w-full h-auto max-h-[90vh] object-contain rounded-[12px]" src={imgChallenge2} />
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
    <div className="col-[1] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch max-w-[774px] relative row-[5] self-start shrink-0" data-name="Property">
      <Frame4 />
      <ProblemContext />
      <Frame12 />
      <div className="bg-[rgba(50,64,79,0.1)] h-px w-full mt-[110px] sm:mt-[170px]" />
      <div className="flex flex-col font-normal gap-[16px] items-center leading-[0] relative shrink-0 w-full mt-[170px] text-center">
        <img loading="lazy" decoding="async" alt="" className="h-[26px] w-[26px]" src={imgStar} />
        <div className="flex flex-col font-inter justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.48)] tracking-[-0.5px] w-full">
          <p className="leading-[22.5px] whitespace-pre-wrap">How Might We</p>
        </div>
        <div className="flex flex-col font-inter font-medium justify-center relative shrink-0 text-[#1e242a] text-[26px] tracking-[-0.04em] w-full">
          <p className="leading-[40px] whitespace-pre-wrap">Help users quickly see what their points can unlock{"\n"}so they can discover with confidence?</p>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[16px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-inter justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.48)] tracking-[-0.5px] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Approach</p>
      </div>
      <div className="flex flex-col font-inter font-medium justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.04em] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Orient users fast, then reveal the full breadth</p>
      </div>
    </div>
  );
}

function SolutionOverviewDescription() {
  return (
    <div className="flex flex-col font-inter justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.04em] w-full">
      <p className="leading-[22.5px] whitespace-pre-wrap">To reduce frictions, I designed discoverability as a system with 2 layers.<br />• Establishing a clear mental model to anchor users in context<br />• Early exposure to product breadth to accelerate discovery</p>
    </div>
  );
}

function SectionImageLg4() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-full rounded-[12px] overflow-hidden" data-name="section image lg">
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
    <div className="col-[1] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch max-w-[774px] relative row-[9] self-start shrink-0" data-name="Property">
      <Frame8 />
      <SolutionOverviewDescription />
      <Frame16 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[16px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-inter justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.48)] tracking-[-0.5px] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Solution 1</p>
      </div>
      <div className="flex flex-col font-inter font-medium justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.04em] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Clarify context with location and points display</p>
      </div>
    </div>
  );
}

function SolutionOneDescription() {
  return (
    <div className="flex flex-col font-inter justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.04em] w-full">
      <p className="leading-[22.5px] whitespace-pre-wrap">
        To remove this cognitive friction, I redesigned the <span className="text-[#1e242a]">master header</span> and <span className="text-[#1e242a]">points display</span>.<br />• It creates a consistent orientation layer across the rewards platform<br />• It clarifies program context, applicable points, and pathways across storefronts
      </p>
    </div>
  );
}

function SectionImageLg5() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  usePlayOnView(videoRef);

  return (
    <div className="bg-[#f0f3f5] max-[560px]:bg-transparent relative shrink-0 w-full rounded-[12px] max-[560px]:rounded-none" data-name="section image lg">
      <div className="overflow-clip max-[560px]:overflow-visible relative rounded-[inherit] max-[560px]:rounded-none w-full">
        <video
          ref={videoRef}
          className="block w-full h-auto object-contain"
          src={videoSolution1}
          loop
          muted
          playsInline
          preload="metadata"
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
    <div className="col-[1] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch max-w-[774px] relative row-[11] self-start shrink-0" data-name="Property">
      <Frame9 />
      <SolutionOneDescription />
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
      <div className="flex flex-col font-inter font-medium justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.04em] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Reveal the full catalogue early, at a glance</p>
      </div>
    </div>
  );
}

function SolutionTwoDescription() {
  return (
    <div className="flex flex-col font-inter justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.04em] w-full">
      <p className="leading-[22.5px] whitespace-pre-wrap">
        To remove navigational friction, I surfaced the full breadth early with <span className="text-[#1e242a]">upfront category tiles</span> and <span className="text-[#1e242a]">a mega-menu</span>.<br />• It gives visual and contextual cues per category at a glance<br />• Users can scan quickly, jump to what’s relevant, and see the platform’s breadth as a strength
      </p>
    </div>
  );
}

function SectionImageLg6() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  usePlayOnView(videoRef);

  return (
    <div className="bg-[#f0f3f5] max-[560px]:bg-transparent relative shrink-0 w-full rounded-[12px] max-[560px]:rounded-none" data-name="section image lg">
      <div className="overflow-clip max-[560px]:overflow-visible relative rounded-[inherit] max-[560px]:rounded-none w-full">
        <video
          ref={videoRef}
          className="block w-full h-auto object-contain"
          src={videoSolution2}
          loop
          muted
          playsInline
          preload="metadata"
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
    <div className="col-[1] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch max-w-[774px] relative row-[12] self-start shrink-0" data-name="Property">
      <Frame10 />
      <SolutionTwoDescription />
      <Frame18 />
    </div>
  );
}

function SectionContainer() {
  return (
    <div className="gap-[110px] sm:gap-[200px] grid-cols-1 grid-rows-[repeat(15,_fit-content(100%))] grid max-w-[774px] pb-[48px] relative shrink-0 w-full" data-name="Section Container">
      <ContentSections1 />
      {/* <DesignOutcomeSection /> */}
      <ContentSections />
      {/* <Property /> */}
      <div className="bg-[rgba(50,64,79,0.1)] col-[1] row-[3] h-px justify-self-stretch shrink-0" data-name="Horizontal Divider" />
      <ContentSections2 />
      <Property6 />
      <Property1 />
      <Property3 />
      <Property2 />
      <Property7 />
      <div className="bg-[rgba(50,64,79,0.1)] col-[1] h-px justify-self-stretch row-[10] shrink-0" data-name="Horizontal Divider" />
      <Property8 />
      <Property9 />
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

export default function GlobalRewardStorefront() {
  return (
    <div className="bg-[#fbfdfd] content-stretch flex flex-col items-center min-h-screen pt-[96px] sm:pt-[110px] px-[20px] relative w-full" data-name="Global Reward Storefront">
      <MainContent />
      <MoreProjects currentId="global-reward-storefront" />
      <Footer maxWidthClass="max-w-[774px]" paddingXClass="px-[20px] sm:px-0" />
      <NavBar />
    </div>
  );
}
