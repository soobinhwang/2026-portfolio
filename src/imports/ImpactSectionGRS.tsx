import React from "react";

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

function ImpactCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col font-geist font-normal gap-[16px] items-center justify-center leading-[0] p-[24px] relative text-[16px] w-full">
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
        className="content-stretch grid grid-cols-1 sm:grid-cols-2 gap-[16px] items-start relative shrink-0 w-full"
        data-name="Container"
      >
        <ImpactCard
          title="Confident Exploration"
          description="Users could browse the storefront with more confidence and less hesitation."
        />
        <ImpactCard
          title="Earlier Value Recognition"
          description="Users could understand the breadth and value of the rewards program earlier."
        />
      </div>
    </div>
  );
}
