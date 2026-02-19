import { useRef, useState } from "react";
import imgDetailThumbnail from "../assets/ai/project-2/ai-p2-detail-thumbnail.png";
import imgFigmaLogo from "../assets/ai/project-2/figma logo.png";
import imgChatGptLogo from "../assets/ai/project-1/gpt logo.jpg";
import imgVsCodeLogo from "../assets/ai/project-2/visual studio code logo.png";
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
    <div className="bg-[#1e242a] h-[240px] sm:h-[440px] shrink-0 w-full overflow-clip relative" data-name="Detail Thumbnail">
      <img alt="" className="absolute inset-0 size-full object-cover" src={imgDetailThumbnail} />
    </div>
  );
}

function OverviewSection() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative w-full" data-name="Overview">
      <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] relative shrink-0 w-full">
        <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[#858e97] text-[13px] uppercase w-full">
          <p className="leading-[22.5px] whitespace-pre-wrap">Figma Plugin</p>
        </div>
        <div className="flex flex-col font-newsreader font-normal justify-center relative shrink-0 text-[#1e242a] text-[34px] sm:text-[42px] tracking-[-1.04px] w-full">
          <p className="leading-[42px] sm:leading-[normal] whitespace-pre-wrap">Design Decision Note</p>
        </div>
        <div className="flex flex-col font-geist font-normal justify-center relative shrink-0 text-[#5b6a79] text-[16px] w-full">
          <p className="leading-[26px]">Speeds up design decision tracking by turning scattered meeting notes into clear, labelled decision cards.</p>
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
            <div className="flex flex-wrap items-center gap-x-[14px] gap-y-[8px] leading-[24px]">
              <span className="inline-flex items-center gap-[6px]">
                <img alt="Figma logo" className="h-[16px] w-[16px] rounded-[4px] object-cover" src={imgFigmaLogo} />
                <span>Figma</span>
              </span>
              <span className="inline-flex items-center gap-[6px]">
                <img alt="ChatGPT logo" className="h-[16px] w-[16px] rounded-[4px] object-cover" src={imgChatGptLogo} />
                <span>Chat GPT</span>
              </span>
              <span className="inline-flex items-center gap-[6px]">
                <img alt="Visual Studio Code logo" className="h-[16px] w-[16px] rounded-[4px] bg-[#1e242a] p-[2px] object-contain" src={imgVsCodeLogo} />
                <span>Visual Studio Code</span>
              </span>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col sm:flex-row gap-[8px] sm:gap-[76px] items-start sm:items-center pb-[12px] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[#ebeced] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-col font-geist-mono font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full sm:w-[72px]">
            <p className="leading-[22.5px] whitespace-pre-wrap">Timeline</p>
          </div>
          <div className="flex flex-col font-geist font-normal justify-center leading-[0] min-h-px min-w-0 relative text-[#5b6a79] text-[15px] w-full">
            <p className="leading-[24px] whitespace-pre-wrap">4 hours</p>
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
            <p className="leading-[24px] whitespace-pre-wrap">Workflow automation</p>
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
          <p className="leading-[38px] whitespace-pre-wrap">I’m a heavy note-taker, but in fast-paced design reviews my notes kept getting messy and scattered.</p>
        </div>
        <div className="flex flex-col font-geist font-normal gap-[12px] justify-center relative shrink-0 text-[#32404f] text-[16px] w-full">
          <p className="leading-[27px] whitespace-pre-wrap">With multiple stakeholders giving different feedback, decisions shifted often, and I lost track of what was final versus what was still a question.</p>
          <p className="leading-[27px] whitespace-pre-wrap">I wanted a fast, structured way to write labelled notes directly next to the design frame — and share them without extra cleanup. That’s what pushed me to build this Figma plugin.</p>
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
}: {
  title: string;
  videoSrc?: string;
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
    </div>
  );
}

function WhatIMadeSection() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative w-full" data-name="What I Made">
      <SectionLabel label="what i built" />
      <div className="flex flex-col gap-[80px] sm:gap-[110px] w-full">
        <FeatureBlock
          title="MVP: [Name]"
        />
        <FeatureBlock
          title="Release: [Name]"
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
