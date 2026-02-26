import React from "react";
import svgPaths from "./svg-89wxt01gka";

function ImpactHeader({ title = "Turning complexity into confident discovery" }: { title?: string }) {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase whitespace-nowrap">
        <p className="leading-[22.5px]">impact</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center min-w-full relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-[min-content]">
        <p className="leading-[46px] whitespace-pre-wrap">{title}</p>
      </div>
    </div>
  );
}

function FlexibilityIcon() {
  return (
    <div className="relative shrink-0 size-[65px]">
      <svg className="block size-full" fill="none" viewBox="0 0 65 65">
        <path
          d="M27.5 0 L37.5 0 L37.5 27.5 L65 27.5 L65 37.5 L37.5 37.5 L37.5 65 L27.5 65 L27.5 37.5 L0 37.5 L0 27.5 L27.5 27.5 Z"
          fill="#1E242A"
        />
      </svg>
    </div>
  );
}

function EfficiencyIcon() {
  return (
    <div className="relative shrink-0 size-[55px]">
      <svg className="block size-full" fill="none" viewBox="0 0 65 65">
        <path
          d="M0 0 L65 0 L37.5 32.5 L65 65 L0 65 L27.5 32.5 Z"
          fill="#1E242A"
        />
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
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative w-full sm:min-h-px sm:min-w-px">
      <div className="h-[65px] flex items-end">{icon}</div>
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

export default function ImpactSectionGRS({
  hideThird = false,
  firstTitle = "Faster path",
  firstSubtitle = "to relevant items",
  secondTitle = "Consistency",
  secondSubtitle = "in discovery experience",
  impactTitle = "Turning complexity into confident discovery",
}: {
  hideThird?: boolean;
  firstTitle?: string;
  firstSubtitle?: string;
  secondTitle?: string;
  secondSubtitle?: string;
  impactTitle?: string;
}) {
  const gridColumns = hideThird ? "min-[481px]:grid-cols-2" : "min-[481px]:grid-cols-3";

  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative size-full" data-name="Property">
      <ImpactHeader title={impactTitle} />
      <div
        className={`content-stretch grid grid-cols-1 ${gridColumns} gap-[24px] min-[481px]:gap-[40px] items-start relative shrink-0 w-full`}
        data-name="Container"
      >
        <ImpactItem title={firstTitle} subtitle={firstSubtitle} icon={<FlexibilityIcon />} />
        <ImpactItem title={secondTitle} subtitle={secondSubtitle} icon={<EfficiencyIcon />} />
        {!hideThird && <ImpactItem title="Scalability" subtitle="across diverse programs" icon={<BrutalismCircleIcon />} />}
      </div>
    </div>
  );
}
