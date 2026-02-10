import { Link as RouterLink } from "react-router";
import Footer from "../app/components/Footer";
import NavBar from "../app/components/NavBar";

/* ───────────────────────────────────────────────
   Section: Hero
   ─────────────────────────────────────────────── */

function HeroLabel() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase whitespace-nowrap">
        <p className="leading-[22.5px]">project 01</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center min-w-full relative shrink-0 text-[#1e242a] text-[36px] tracking-[-0.64px] w-[min-content]">
        <p className="leading-[46px] whitespace-pre-wrap">Project title goes here</p>
      </div>
      <div className="flex flex-col font-geist justify-center min-w-full relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-[min-content]">
        <p className="leading-[22.5px] whitespace-pre-wrap">
          Brief description of the project — what it is, what problem it solves, and what role AI played in the process. Replace this with real content.
        </p>
      </div>
    </div>
  );
}

function HeroImage() {
  return (
    <div className="bg-[#f0f3f5] h-[420px] relative shrink-0 w-full" data-name="Hero Image">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#1e242a] size-full" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch max-w-[774px] relative row-[1] self-start shrink-0" data-name="Hero">
      <HeroLabel />
      <HeroImage />
    </div>
  );
}

/* ───────────────────────────────────────────────
   Section 1: Overview
   ─────────────────────────────────────────────── */

function OverviewLabel() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">overview</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[36px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Section title placeholder</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Description text goes here. Explain the context, challenge, or background for this section of the project.</p>
      </div>
    </div>
  );
}

function OverviewImageSm() {
  return (
    <div className="bg-[#f0f3f5] h-[420px] relative shrink-0 w-[371px]" data-name="section image sm">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#1e242a] size-full" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f3f5] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function OverviewImageSmCaption1() {
  return (
    <div className="content-stretch flex flex-col font-normal items-start leading-[0] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#32404f] text-[20px] tracking-[-0.424px] w-full">
        <p className="leading-[30px] whitespace-pre-wrap">Image caption one</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Brief description of this image</p>
      </div>
    </div>
  );
}

function OverviewImageSmCaption2() {
  return (
    <div className="content-stretch flex flex-col font-normal items-start leading-[0] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#32404f] text-[20px] tracking-[-0.424px] w-full">
        <p className="leading-[30px] whitespace-pre-wrap">Image caption two</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Brief description of this image</p>
      </div>
    </div>
  );
}

function OverviewImages() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative">
        <OverviewImageSm />
        <OverviewImageSmCaption1 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative">
        <OverviewImageSm />
        <OverviewImageSmCaption2 />
      </div>
    </div>
  );
}

function OverviewSection() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch max-w-[774px] relative row-[3] self-start shrink-0" data-name="Overview">
      <OverviewLabel />
      <OverviewImages />
    </div>
  );
}

/* ───────────────────────────────────────────────
   Section 2: Process
   ─────────────────────────────────────────────── */

function ProcessLabel() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">process</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[36px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Section title placeholder</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Description text goes here. Walk through the process, tools, or approach used in this part of the project.</p>
      </div>
    </div>
  );
}

function ProcessImage() {
  return (
    <div className="bg-[#f0f3f5] h-[420px] relative shrink-0 w-full" data-name="Process Image">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#1e242a] size-full" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ProcessSection() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch max-w-[774px] relative row-[5] self-start shrink-0" data-name="Process">
      <ProcessLabel />
      <ProcessImage />
    </div>
  );
}

/* ───────────────────────────────────────────────
   Section 3: Outcome
   ─────────────────────────────────────────────── */

function OutcomeLabel() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase whitespace-nowrap">
        <p className="leading-[22.5px]">outcome</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center min-w-full relative shrink-0 text-[#1e242a] text-[36px] tracking-[-0.64px] w-[min-content]">
        <p className="leading-[46px] whitespace-pre-wrap">Section title placeholder</p>
      </div>
    </div>
  );
}

function StatBox({ value, description }: { value: string; description: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
        <div className="flex flex-col font-newsreader font-semibold justify-center leading-[0] relative shrink-0 text-[#32404f] text-[62px] tracking-[-0.424px] whitespace-nowrap">
          <p className="leading-[normal]">{value}</p>
        </div>
      </div>
      <div className="flex flex-col font-geist font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">{description}</p>
      </div>
    </div>
  );
}

function OutcomeStats() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <StatBox value="00%" description="Stat description placeholder" />
      <StatBox value="00" description="Stat description placeholder" />
      <StatBox value="00%" description="Stat description placeholder" />
    </div>
  );
}

function OutcomeSection() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[42px] items-start justify-self-stretch max-w-[774px] relative row-[7] self-start shrink-0" data-name="Outcome">
      <OutcomeLabel />
      <OutcomeStats />
    </div>
  );
}

/* ───────────────────────────────────────────────
   Layout Grid + Navigation + Root
   ─────────────────────────────────────────────── */

function SectionContainer() {
  return (
    <div className="gap-[170px] grid-cols-[repeat(1,_fit-content(100%))] grid-rows-[repeat(8,_fit-content(100%))] inline-grid max-w-[774px] pb-[48px] pt-[120px] relative shrink-0" data-name="Section Container">
      <HeroSection />
      <div className="bg-[rgba(50,64,79,0.1)] col-[1] h-px justify-self-stretch row-[2] shrink-0" data-name="Horizontal Divider" />
      <OverviewSection />
      <div className="bg-[rgba(50,64,79,0.1)] col-[1] h-px justify-self-stretch row-[4] shrink-0" data-name="Horizontal Divider" />
      <ProcessSection />
      <div className="bg-[rgba(50,64,79,0.1)] col-[1] h-px justify-self-stretch row-[6] shrink-0" data-name="Horizontal Divider" />
      <OutcomeSection />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[778px]" data-name="Content Container">
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


export default function AiProject1Detail() {
  return (
    <div className="bg-[#fbfdfd] min-h-screen content-stretch flex flex-col items-center relative w-full" data-name="AI Project 1 Detail">
      <MainContent />
      <Footer maxWidthClass="max-w-[774px]" emailVariant="text" />
      <NavBar />
    </div>
  );
}
