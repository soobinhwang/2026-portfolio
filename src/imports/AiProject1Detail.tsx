import { useEffect, useRef, useState } from "react";
import project1ThumbnailVideo from "../assets/ai/project-1/thumbnail.mp4";
import imgGptMoment from "../assets/ai/project-1/gpt moment.gif";
import featureBranchChatVideo from "../assets/ai/project-1/branch chat.mov";
import featurePromptQueueVideo from "../assets/ai/project-1/Prompt Queue.mov";
import featureChatHistoryManagerVideo from "../assets/ai/project-1/Chat History Manager.mov";
import imgChatGptLogo from "../assets/ai/project-1/gpt logo.jpg";
import imgClaudeLogo from "../assets/ai/project-1/claude logo.png";
import imgCursorLogo from "../assets/ai/project-1/cursor logo.png";
import Footer from "../app/components/Footer";
import NavBar from "../app/components/NavBar";

const project1ThumbnailJsonUrl = new URL("../assets/ai/project-1/Frame-32.json", import.meta.url).href;

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

function LottieThumbnail({ srcUrl, fallbackVideoSrc }: { srcUrl: string; fallbackVideoSrc?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasPlayer, setHasPlayer] = useState<boolean>(Boolean(window.customElements?.get("lottie-player")));
  const [scriptFailed, setScriptFailed] = useState(false);

  useEffect(() => {
    if (window.customElements?.get("lottie-player")) {
      setHasPlayer(true);
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>('script[data-lottie-player="true"]');
    if (existingScript) {
      const checkReady = window.setInterval(() => {
        if (window.customElements?.get("lottie-player")) {
          setHasPlayer(true);
          window.clearInterval(checkReady);
        }
      }, 120);
      return () => window.clearInterval(checkReady);
    }

    if (!containerRef.current) return;
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@lottiefiles/lottie-player@2.0.12/dist/lottie-player.js";
    script.async = true;
    script.dataset.lottiePlayer = "true";
    script.onload = () => setHasPlayer(true);
    script.onerror = () => setScriptFailed(true);
    document.head.appendChild(script);
  }, []);

  if (!hasPlayer || scriptFailed) {
    return fallbackVideoSrc ? (
      <video
        className="absolute inset-0 size-full object-cover scale-[1.1] origin-center"
        src={fallbackVideoSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />
    ) : (
      <div className="absolute inset-0 size-full" />
    );
  }

  return (
    <div ref={containerRef} className="absolute inset-0 size-full overflow-hidden">
      <lottie-player
        src={srcUrl}
        background="transparent"
        autoplay
        loop
        speed="1"
        style={{ width: "100%", height: "100%", transform: "scale(1.1)", transformOrigin: "center center" }}
      />
    </div>
  );
}

function DetailThumbnail() {
  return (
    <div className="bg-[#1e242a] h-[240px] sm:h-[440px] shrink-0 w-full overflow-clip relative" data-name="Detail Thumbnail">
      <LottieThumbnail srcUrl={project1ThumbnailJsonUrl} fallbackVideoSrc={project1ThumbnailVideo} />
    </div>
  );
}

/* ───────────────────────────────────────────────
   Section 1: Quick Overview
   ─────────────────────────────────────────────── */

function OverviewSection() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative w-full" data-name="Overview">
      <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] relative shrink-0 w-full">
        <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[#858e97] text-[13px] uppercase w-full">
          <p className="leading-[22.5px] whitespace-pre-wrap">Prototype • PoC</p>
        </div>
        <div className="flex flex-col font-newsreader font-normal justify-center relative shrink-0 text-[#1e242a] text-[34px] sm:text-[42px] tracking-[-1.04px] w-full">
          <p className="leading-[42px] sm:leading-[normal] whitespace-pre-wrap">Chat GPT Feature Concepts</p>
        </div>
        <div className="flex flex-col font-geist font-normal justify-center relative shrink-0 text-[#5b6a79] text-[16px] w-full">
          <p className="leading-[26px]">Three interaction improvements prototyped to help users navigate long chats, keep context, and act faster.</p>
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
                <img alt="ChatGPT logo" className="h-[16px] w-[16px] rounded-[4px] object-cover" src={imgChatGptLogo} />
                <span>Chat GPT</span>
              </span>
              <span className="inline-flex items-center gap-[6px]">
                <img alt="Claude logo" className="h-[16px] w-[16px] rounded-[4px] object-cover" src={imgClaudeLogo} />
                <span>Claude Code</span>
              </span>
              <span className="inline-flex items-center gap-[6px]">
                <img alt="" className="h-[16px] w-[16px] rounded-[4px] object-cover" src={imgCursorLogo} />
                <span>Cursor</span>
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
            <p className="leading-[24px] whitespace-pre-wrap">3 hours</p>
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
            <p className="leading-[24px] whitespace-pre-wrap">Problem framing • Systems thinking • Rapid prototyping</p>
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
            If you're a ChatGPT user, have you ever had that moment where you think,{" "}
            <span className="italic font-medium">I wish it did this</span>?
          </p>
        </div>
        <div className="w-[40%] bg-[#f0f3f5] rounded-[10px] overflow-hidden">
          <img alt="GPT moment" className="block w-full h-auto object-contain" src={imgGptMoment} />
        </div>
        <div className="flex flex-col font-geist font-normal gap-[12px] justify-center relative shrink-0 text-[#32404f] text-[16px] w-full">
          <p className="leading-[27px] whitespace-pre-wrap">That's what triggered this project.</p>
          <p className="leading-[27px] whitespace-pre-wrap">Instead of letting that thought loop in my head, I decided to visualize the ideas, make them feel real, and share them with others to see what resonates.</p>
        </div>
        <div className="bg-[#f5f7f8] border border-[#ebeced] rounded-[10px] px-[16px] py-[14px] sm:px-[20px] sm:py-[16px] w-full">
          <p className="font-geist text-[15px] text-[#5b6a79] leading-[25px]">
            Here are three feature ideas designed to reduce clicks and remove mental blocks
          </p>
          <ol className="mt-[8px] pl-[20px] font-geist text-[15px] text-[#5b6a79] leading-[25px] list-decimal">
            <li>Branch Chat</li>
            <li>Prompt Queue</li>
            <li>Chat History Manager</li>
          </ol>
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
          title="Feature 1: Branch Chat"
          videoSrc={featureBranchChatVideo}
          painPoint="In a single vertical chat, exploring a tangent interrupts the main thread, so users either lose momentum or carry “I’ll come back later” mental load."
          improvement="Branch Chat lets users open a focused side thread from a specific snippet, so they can dig deeper without breaking the main conversation flow."
        />
        <FeatureBlock
          title="Feature 2: Prompt Queue"
          videoSrc={featurePromptQueueVideo}
          painPoint="While ChatGPT is answering, users can’t type and submit their next questions, so they either wait doing nothing or hold follow-ups in their head and risk forgetting them."
          improvement="Prompt Queue lets users keep drafting and lining up questions while an answer is generating, so the next prompt is ready to run without interrupting the current response."
        />
        <FeatureBlock
          title="Feature 3: Chat History Manager"
          videoSrc={featureChatHistoryManagerVideo}
          painPoint="As chat lists grow, infinite scrolling and weak recall-based search make it hard to find past conversations, so users give up and create new chats—making history even more unmanageable."
          improvement="Chat History Manager provides a full-page, searchable, sortable view with bulk archive/delete, so users can quickly locate and manage past chats with a clearer sense of control."
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
            href="https://chatgpt-ux-improvements.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[8px] px-[20px] py-[11px] font-geist text-[15px] font-medium rounded-[8px] transition-opacity duration-200 hover:opacity-70 whitespace-nowrap bg-[#1e242a] text-white"
          >
            Try the prototype
            <span aria-hidden="true">↗</span>
          </a>
          <p className="font-geist font-normal text-[14px] text-[rgba(50,64,79,0.58)] leading-[22px]">
            Best viewed on desktop
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
      className="content-stretch flex flex-col gap-[110px] sm:gap-[170px] items-start max-w-[774px] pt-[48px] pb-[48px] relative shrink-0 w-full"
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

export default function AiProject1Detail() {
  return (
    <div
      className="bg-[#fbfdfd] min-h-screen content-stretch flex flex-col items-center pt-[96px] sm:pt-[110px] px-[20px] sm:px-0 relative w-full"
      data-name="AI Project 1 Detail"
    >
      <SectionContainer />
      <Footer maxWidthClass="max-w-[774px]" emailVariant="text" paddingXClass="px-[20px] sm:px-0" />
      <NavBar />
    </div>
  );
}
