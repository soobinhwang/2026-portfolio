import React from "react";
import svgPaths from "./svg-89wxt01gka";

function ImpactHeader() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase whitespace-nowrap">
        <p className="leading-[22.5px]">impact</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center min-w-full relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-[min-content]">
        <p className="leading-[46px] whitespace-pre-wrap">Turning complexity into confident discovery</p>
      </div>
    </div>
  );
}

function BrutalismIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[65px]" data-name="Brutalism 76">
      <div className="absolute inset-[14.59%]" data-name="Group">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.0351 46.0351">
          <g id="Group">
            <path d={svgPaths.p26f60000} fill="var(--fill-0, #1E242A)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function AbstractIcon() {
  return (
    <div className="relative shrink-0 size-[64.398px]" data-name="Abstract 193">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64.3981 64.3981">
        <g id="Abstract 193">
          <path d={svgPaths.pbec1200} fill="var(--fill-0, #1E242A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BrutalismCircleIcon() {
  return (
    <div className="relative shrink-0 size-[65px]" data-name="Brutalism 23">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 65">
        <g id="Brutalism 23">
          <path d={svgPaths.p3aa2a0f0} fill="var(--fill-0, #1E242A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImpactItem({ title, subtitle, icon }: { title: string; subtitle: string; icon: React.ReactNode }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-h-px min-w-px relative self-stretch">
      {icon}
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
          <div className="flex flex-col font-newsreader font-normal justify-center leading-[0] relative shrink-0 text-[#32404f] text-[22px] tracking-[-0.424px] w-full">
            <p className="leading-[31.8px] whitespace-pre-wrap">{title}</p>
          </div>
        </div>
        <div className="flex flex-col font-geist font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
          <p className="leading-[22.5px] whitespace-pre-wrap">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default function ImpactSectionGRS() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative size-full" data-name="Property">
      <ImpactHeader />
      <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Container">
        <ImpactItem title="Faster path" subtitle="to relevant items" icon={<BrutalismIcon />} />
        <ImpactItem title="Consistency" subtitle="in discovery experience" icon={<AbstractIcon />} />
        <ImpactItem title="Scalability" subtitle="across diverse programs" icon={<BrutalismCircleIcon />} />
      </div>
    </div>
  );
}
