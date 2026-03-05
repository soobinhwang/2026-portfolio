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
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-newsreader font-normal justify-center leading-[0] relative shrink-0 text-[#1e242a] text-[24px] tracking-[-0.3px] w-full">
        <p className="leading-[30px] whitespace-pre-wrap">{title}</p>
      </div>
      <div className="flex font-geist font-normal items-start leading-[26px] relative text-[#5b6a79] text-[16px] w-full">
        <span className="leading-[26px] whitespace-pre-wrap">{description}</span>
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
        className="content-stretch grid grid-cols-1 sm:grid-cols-3 gap-[36px] items-start relative shrink-0 w-full"
        data-name="Container"
      >
        <ImpactCard
          title="Orientation"
          description="Users could understand where they were and which points applied at a glance."
        />
        <ImpactCard
          title="Earlier Discovery"
          description="Users could see the breadth of redeemable categories earlier, prompting discovery."
        />
        <ImpactCard
          title="Less Friction"
          description="Users could move through the storefront with less uncertainty and fewer dead-ends."
        />
      </div>
    </div>
  );
}
