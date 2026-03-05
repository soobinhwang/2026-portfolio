import React from "react";
import svgPaths from "./svg-89wxt01gka";

function ImpactHeader({ title = "From overwhelming choice to guided discovery" }: { title?: string }) {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase whitespace-nowrap">
        <p className="leading-[22.5px]">User Impact</p>
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

function ImpactCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col font-geist font-normal gap-[10px] items-center justify-center leading-[0] p-[24px] relative text-[16px] w-full">
          <div className="flex flex-col justify-center relative shrink-0 text-[#32404f] w-full">
            <p className="leading-[22.5px] whitespace-pre-wrap">{title}</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-[#858e97] w-full">
            <p className="leading-[22.5px] whitespace-pre-wrap">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ImpactSectionGRS({
  impactTitle = "From overwhelming choice to guided discovery",
}: {
  impactTitle?: string;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative size-full" data-name="Property">
      <ImpactHeader title={impactTitle} />
      <div
        className="content-stretch grid grid-cols-1 min-[481px]:grid-cols-3 gap-[16px] items-start relative shrink-0 w-full"
        data-name="Container"
      >
        <ImpactCard
          title="Orientation"
          description="Users could understand where they were and which points applied at a glance."
        />
        <ImpactCard
          title="Earlier Exploration"
          description="Users could see the breadth of redeemable categories earlier, prompting exploration."
        />
        <ImpactCard
          title="Less Friction"
          description="Users could move through the storefront with less uncertainty and fewer dead-ends."
        />
      </div>
    </div>
  );
}
