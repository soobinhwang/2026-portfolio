import { useRef, useState } from "react";
import Footer from "../app/components/Footer";
import NavBar from "../app/components/NavBar";

/* ───────────────────────────────────────────────
   Shared primitives
   ─────────────────────────────────────────────── */

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase">
      <p className="leading-[22.5px]">{label}</p>
    </div>
  );
}

function Divider() {
  return <div className="bg-[rgba(50,64,79,0.1)] h-px w-full shrink-0" />;
}

/* ───────────────────────────────────────────────
   Section 1: Quick Overview
   ─────────────────────────────────────────────── */

function DetailThumbnail() {
  return (
    <div className="bg-[#1e242a] h-[240px] sm:h-[440px] shrink-0 w-full overflow-clip relative" data-name="Detail Thumbnail" />
  );
}

function OverviewSection() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative w-full" data-name="Overview">
      <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] relative shrink-0 w-full">
        <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[#858e97] text-[13px] uppercase w-full">
          <p className="leading-[22.5px] whitespace-pre-wrap">Figma Plugin • PoC</p>
        </div>
        <div className="flex flex-col font-newsreader font-normal justify-center relative shrink-0 text-[#1e242a] text-[34px] sm:text-[42px] tracking-[-1.04px] w-full">
          <p className="leading-[42px] sm:leading-[normal] whitespace-pre-wrap">Design Decision Note</p>
        </div>
        <div className="flex flex-col font-geist font-normal justify-center relative shrink-0 text-[#5b6a79] text-[16px] w-full">
          <p className="leading-[26px]">[1-line summary: what this plugin does and the problem it solves]</p>
        </div>
      </div>
      <DetailThumbnail />
      <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Property">
        <div className="content-stretch flex flex-col sm:flex-row gap-[8px] sm:gap-[76px] items-start sm:items-center pb-[12px] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[#ebeced] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-col font-geist-mono font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full sm:w-[72px]">
            <p className="leading-[22.5px] whitespace-pre-wrap">Tool</p>
          </div>
          <div className="flex flex-col font-geist font-normal justify-center leading-[0] min-h-px min-w-0 relative text-[#5b6a79] text-[15px] w-full">
            <p className="leading-[24px] whitespace-pre-wrap">Figma, Claude Code, Cursor</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col sm:flex-row gap-[8px] sm:gap-[76px] items-start sm:items-center pb-[12px] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[#ebeced] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-col font-geist-mono font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full sm:w-[72px]">
            <p className="leading-[22.5px] whitespace-pre-wrap">Timeline</p>
          </div>
          <div className="flex flex-col font-geist font-normal justify-center leading-[0] min-h-px min-w-0 relative text-[#5b6a79] text-[15px] w-full">
            <p className="leading-[24px] whitespace-pre-wrap">X hours over X days</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col sm:flex-row gap-[8px] sm:gap-[76px] items-start sm:items-center pb-[12px] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[#ebeced] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-col font-geist-mono font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full sm:w-[72px]">
            <p className="leading-[22.5px] whitespace-pre-wrap">Team</p>
          </div>
          <div className="flex flex-col font-geist font-normal justify-center leading-[0] min-h-px min-w-0 relative text-[#5b6a79] text-[15px] w-full">
            <p className="leading-[24px] whitespace-pre-wrap">Solo project</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col sm:flex-row font-normal gap-[8px] sm:gap-[76px] items-start sm:items-center leading-[0] relative shrink-0 text-[15px] w-full">
          <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[rgba(50,64,79,0.58)] uppercase w-full sm:w-[72px]">
            <p className="leading-[22.5px] whitespace-pre-wrap">Skills</p>
          </div>
          <div className="flex flex-col font-geist justify-center min-h-px min-w-0 relative text-[#5b6a79] w-full">
            <p className="leading-[24px] whitespace-pre-wrap">Problem framing • Plugin development • Interaction design</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────
   Section 2: Why I Did This
   ─────────────────────────────────────────────── */

function WhySection() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative w-full" data-name="Why">
      <SectionLabel label="How it started" />
      <div className="content-stretch flex flex-col gap-[18px] items-start relative w-full">
        <div className="flex flex-col font-geist font-normal justify-center relative shrink-0 text-[#1e242a] text-[28px] w-full">
          <p className="leading-[38px] whitespace-pre-wrap">
            [Opening hook — the moment or friction that triggered this]
          </p>
        </div>
        <div className="flex flex-col font-geist font-normal gap-[12px] justify-center relative shrink-0 text-[#32404f] text-[16px] w-full">
          <p className="leading-[27px] whitespace-pre-wrap">[Conversational paragraph 1]</p>
          <p className="leading-[27px] whitespace-pre-wrap">[Conversational paragraph 2 — why you decided to build it]</p>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────
   Section 3: What I Made
   ─────────────────────────────────────────────── */

function FeatureBlock({
  title,
  videoSrc,
  painPoint,
  improvement,
}: {
  title: string;
  videoSrc?: string;
  painPoint: string;
  improvement: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex flex-col gap-[20px] w-full" data-name="Feature">
      <div className="flex flex-col font-newsreader font-normal justify-center relative shrink-0 text-[#1e242a] text-[22px] tracking-[-0.4px]">
        <p className="leading-[32px]">{title}</p>
      </div>
      <div className="bg-[#1e242a] w-full relative shrink-0">
        {videoSrc ? (
          <button
            type="button"
            className="group relative block w-full cursor-pointer border-0 bg-transparent p-0"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video preview" : "Play video preview"}
          >
            <video
              ref={videoRef}
              className="block w-full h-auto object-contain"
              src={videoSrc}
              muted
              playsInline
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            />
            {!isPlaying ? (
              <span className="absolute inset-0 grid place-items-center pointer-events-none">
                <span className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-full bg-black/55 text-white text-[16px]">
                  ▶
                </span>
              </span>
            ) : null}
          </button>
        ) : (
          <div className="w-full aspect-[16/9]" />
        )}
      </div>
      <div className="flex flex-col gap-[14px]">
        <div className="flex flex-col gap-[6px] rounded-[10px] border border-[#f1d8d8] bg-[#fcf4f4] px-[14px] py-[12px]">
          <div className="font-geist-mono text-[12px] text-[#b05555] uppercase leading-[22.5px]">Problem</div>
          <div className="font-geist font-normal text-[15px] text-[#6b5050] leading-[24px]">{painPoint}</div>
        </div>
        <div className="flex flex-col gap-[6px] rounded-[10px] border border-[#d7e9db] bg-[#f3f9f4] px-[14px] py-[12px]">
          <div className="font-geist-mono text-[12px] text-[#3f8654] uppercase leading-[22.5px]">Solution</div>
          <div className="font-geist font-normal text-[15px] text-[#45604e] leading-[24px]">{improvement}</div>
        </div>
      </div>
    </div>
  );
}

function WhatIMadeSection() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative w-full" data-name="What I Made">
      <SectionLabel label="what i built" />
      <div className="flex flex-col gap-[80px] sm:gap-[110px] w-full">
        <FeatureBlock
          title="Feature 1: [Name]"
          painPoint="[What was broken or frustrating before this existed]"
          improvement="[One sentence: what changed and why it's better]"
        />
        <FeatureBlock
          title="Feature 2: [Name]"
          painPoint="[What was broken or frustrating before]"
          improvement="[One sentence: what changed]"
        />
        <FeatureBlock
          title="Feature 3: [Name]"
          painPoint="[What was broken or frustrating before]"
          improvement="[One sentence: what changed]"
        />
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────
   Section 4: Try It On Your Own
   ─────────────────────────────────────────────── */

function TryItSection() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative w-full" data-name="Try It">
      <SectionLabel label="try it on your own" />
      <div className="grid grid-cols-1 gap-[32px] w-full">
        <div className="content-stretch flex flex-col gap-[14px] items-start relative">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[8px] px-[20px] py-[11px] font-geist text-[15px] font-medium rounded-[8px] transition-opacity duration-200 hover:opacity-70 whitespace-nowrap bg-[#1e242a] text-white"
          >
            Try the plugin
            <span aria-hidden="true">↗</span>
          </a>
          <p className="font-geist font-normal text-[14px] text-[rgba(50,64,79,0.58)] leading-[22px]">
            Install from the Figma Community
          </p>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────
   Layout + Root
   ─────────────────────────────────────────────── */

function SectionContainer() {
  return (
    <div
      className="content-stretch flex flex-col gap-[80px] sm:gap-[110px] items-start max-w-[774px] pt-[48px] pb-[48px] relative shrink-0 w-full"
      data-name="Section Container"
    >
      <OverviewSection />
      <Divider />
      <WhySection />
      <Divider />
      <WhatIMadeSection />
      <Divider />
      <TryItSection />
    </div>
  );
}

export default function AiProject2Detail() {
  return (
    <div
      className="bg-[#fbfdfd] min-h-screen content-stretch flex flex-col items-center pt-[96px] sm:pt-[110px] px-[20px] sm:px-0 relative w-full"
      data-name="AI Project 2 Detail"
    >
      <SectionContainer />
      <Footer maxWidthClass="max-w-[774px]" emailVariant="text" paddingXClass="px-[20px] sm:px-0" />
      <NavBar />
    </div>
  );
}
