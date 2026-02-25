import { useRef, useState } from "react";
import imgDetailThumbnail from "../assets/ai/project-2/ai-p2-detail-thumbnail.png";
import imgFigmaLogo from "../assets/ai/project-2/figma logo.png";
import imgChatGptLogo from "../assets/ai/project-1/gpt logo.jpg";
import imgClaudeLogo from "../assets/ai/project-1/claude logo.png";
import imgVsCodeLogo from "../assets/ai/project-2/visual studio code logo.png";
import imgBusyMoment from "../assets/ai/project-2/busy.gif";
import imgWhatIBuilt from "../assets/ai/project-2/What I built - image.png";
import imgWhatIBuilt2 from "../assets/ai/project-2/What I built - image 2.png";
import imgAnalyzingWorklog from "../assets/ai/project-2/Analyzing worklog.png";
import imgScopingMvp from "../assets/ai/project-2/scoping the mvp.png";
import imgImplementation from "../assets/ai/project-2/Implementation.png";
import videoMvp from "../assets/ai/project-2/MVP.mov";
import videoPostMvp from "../assets/ai/project-2/Post MVP.mov";
import Footer from "../app/components/Footer";
import NavBar from "../app/components/NavBar";
import { Dialog, DialogContent, DialogTrigger } from "../app/components/ui/dialog";

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
      <img loading="eager" fetchPriority="high" decoding="async" alt="" className="absolute inset-0 size-full object-cover" src={imgDetailThumbnail} />
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
                <img loading="lazy" decoding="async" alt="Figma logo" className="h-[16px] w-[16px] rounded-[4px] object-cover" src={imgFigmaLogo} />
                <span>Figma</span>
              </span>
              <span className="inline-flex items-center gap-[6px]">
                <img loading="lazy" decoding="async" alt="ChatGPT logo" className="h-[16px] w-[16px] rounded-[4px] object-cover" src={imgChatGptLogo} />
                <span>Chat GPT</span>
              </span>
              <span className="inline-flex items-center gap-[6px]">
                <img loading="lazy" decoding="async" alt="Claude logo" className="h-[16px] w-[16px] rounded-[4px] object-cover" src={imgClaudeLogo} />
                <span>Claude Code</span>
              </span>
              <span className="inline-flex items-center gap-[6px]">
                <img loading="lazy" decoding="async" alt="Visual Studio Code logo" className="h-[16px] w-[16px] rounded-[4px] bg-[#1e242a] p-[2px] object-contain" src={imgVsCodeLogo} />
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
          <p className="leading-[38px] whitespace-pre-wrap">I’m a heavy note-taker, but in fast-paced design reviews, my notes kept getting messy and scattered.</p>
        </div>
        <div className="w-[40%] bg-[#f0f3f5] rounded-[10px] overflow-hidden">
          <img loading="lazy" decoding="async" alt="Busy moment" className="block w-full h-auto object-contain" src={imgBusyMoment} />
        </div>
        <div className="flex flex-col font-geist font-normal gap-[12px] justify-center relative shrink-0 text-[#32404f] text-[16px] w-full">
          <p className="leading-[27px] whitespace-pre-wrap">
            With multiple stakeholders giving different feedback, decisions shifted often,
            <br />
            and I lost track of what was final versus what was still a question.
          </p>
          <p className="leading-[27px] whitespace-pre-wrap">
            I wanted a fast, structured way to write labelled notes directly next to the design frame
            <br />
            and share them without extra cleanup.
          </p>
          <p className="leading-[27px] whitespace-pre-wrap">That’s what pushed me to build this Figma plugin.</p>
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
  imageSrc,
  imageClassName,
  mediaClassName,
  enableFullView,
  fullViewAriaLabel,
  fullViewOnDark,
}: {
  title?: string;
  videoSrc?: string;
  imageSrc?: string;
  imageClassName?: string;
  mediaClassName?: string;
  enableFullView?: boolean;
  fullViewAriaLabel?: string;
  fullViewOnDark?: boolean;
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
      {title ? (
        <div className="flex flex-col font-newsreader font-normal justify-center relative shrink-0 text-[#1e242a] text-[22px] tracking-[-0.4px]">
          <p className="leading-[32px]">{title}</p>
        </div>
      ) : null}
      {imageSrc && enableFullView ? (
        <Dialog>
          <DialogTrigger asChild>
            <button
              type="button"
              className={mediaClassName ?? "bg-[#1e242a] w-full relative shrink-0 cursor-pointer group"}
              aria-label={fullViewAriaLabel ?? "Open image full view"}
            >
              <img loading="lazy" decoding="async" alt="" className={imageClassName ?? "block w-full h-auto object-contain"} src={imageSrc} />
              <div
                className={`absolute right-[12px] top-[12px] flex h-[24px] w-[24px] items-center justify-center rounded-[7px] transition-opacity duration-200 group-hover:opacity-80 ${
                  fullViewOnDark ? "bg-black/45 border border-white/45" : "bg-white/60 border border-[#eceff2]"
                }`}
                aria-hidden="true"
              >
                <svg aria-hidden="true" className="h-[14px] w-[14px]" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M14 3h7v7M21 3l-7 7M10 21H3v-7M3 21l7-7"
                    stroke={fullViewOnDark ? "#f3f6f9" : "#6b7785"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.4"
                  />
                </svg>
              </div>
              <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
            </button>
          </DialogTrigger>
          <DialogContent
            className={
              fullViewOnDark
                ? "w-[1362px] max-w-[96vw] sm:w-[1362px] sm:max-w-[96vw] p-0 border-0 bg-transparent shadow-none [&>button]:bg-black/55 [&>button]:border [&>button]:border-white/40 [&>button]:text-white [&>button]:opacity-100 [&>button]:rounded-[7px]"
                : "w-[1362px] max-w-[96vw] sm:w-[1362px] sm:max-w-[96vw] p-0 border-0 bg-transparent shadow-none"
            }
          >
            <img loading="lazy" decoding="async" alt="" className="w-full h-auto max-h-[90vh] object-contain rounded-[12px]" src={imageSrc} />
          </DialogContent>
        </Dialog>
      ) : (
        <div className={mediaClassName ?? "bg-[#1e242a] w-full relative shrink-0"}>
          {imageSrc ? (
            <img loading="lazy" decoding="async" alt="" className={imageClassName ?? "block w-full h-auto object-contain"} src={imageSrc} />
          ) : videoSrc ? (
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
      )}
    </div>
  );
}

function WhatIMadeSection() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative w-full" data-name="What I Made">
      <SectionLabel label="what i built" />
      <div className="flex flex-col gap-[20px] w-full">
        <FeatureBlock imageSrc={imgWhatIBuilt} />
        <FeatureBlock videoSrc={videoPostMvp} />
        <div className="bg-[#f5f7f8] border border-[#ebeced] rounded-[10px] px-[16px] py-[14px] sm:px-[20px] sm:py-[16px] w-full">
          <p className="font-geist text-[15px] text-[#5b6a79] leading-[25px]">How it works</p>
          <ol className="mt-[8px] pl-[20px] font-geist text-[15px] text-[#5b6a79] leading-[25px] list-decimal">
            <li>Launch the plugin.</li>
            <li>Add your note.</li>
            <li>
              Select a frame to attach it <span className="text-[rgba(91,106,121,0.7)]">(optional)</span>.
            </li>
            <li>
              Re-run to update{" "}
              <span className="text-[rgba(91,106,121,0.7)]">
                (It edits the existing note from saved content)
              </span>
              .
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────
   Section 4: Building Process
   ─────────────────────────────────────────────── */

function BuildingProcessSection() {
  const steps = [
    {
      title: "Problem framing",
      description:
        "I diagnosed decision-context loss as a recurring collaboration cost, then used GPT to accelerate the definition, clarifying the value proposition, decision data model, UX flow, and the minimum Figma API needed to anchor decisions to frames.",
      imageSrc: imgAnalyzingWorklog,
    },
    {
      title: "Scoping the MVP",
      imageSrc: imgScopingMvp,
      enableFullView: true,
      fullViewOnDark: true,
      fullViewAriaLabel: "Open scoping the MVP image full view",
      scopingPoints: [
        "Reviewed my work logs and retrospectives to identify repetitive friction and decision-context loss.",
        "Defined an automation approach to anchor decisions to frames.",
        "Scoped the MVP feature set, UX flow, decision data model, and required Figma API.",
      ],
    },
    {
      title: "Implementation",
      description: (
        <>
          I built the plugin in <span className="italic">Visual Studio Code</span> with AI agents to accelerate
          scaffolding, troubleshooting, and iteration (Claude for UI/planning; Codex for complex problem-solving and
          debugging).
        </>
      ),
      imageSrc: imgImplementation,
      keyPoints: [
        <>
          Ask an AI agent to generate the essential plugin files (<span className="italic">manifest.json</span>{" "}
          and <span className="italic">code.js</span>).
        </>,
        <>
          Use <span className="italic">VS Code</span> to reliably edit, refactor, and debug the code during
          repeated runs in Figma.
        </>,
      ],
    },
    {
      title: "MVP release",
      description:
        "Shipped the first usable version to validate the workflow and gather feedback for the next iteration.",
      videoSrc: videoMvp,
    },
    {
      title: "Official launch",
      description: "Launched on February 25, 2026, and now available on the Figma Community! 🎉",
      imageSrc: imgWhatIBuilt2,
    },
  ];

  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative w-full" data-name="Building Process">
      <SectionLabel label="Building Process" />
      <div className="flex flex-col gap-[110px] sm:gap-[170px] w-full">
        {steps.map((step) => (
          <div key={step.title} className="flex flex-col gap-[20px] w-full">
            {step.hideMedia ? (
              <div className="flex flex-col font-newsreader font-normal justify-center relative shrink-0 text-[#1e242a] text-[22px] tracking-[-0.4px]">
                <p className="leading-[32px]">{step.title}</p>
              </div>
            ) : (
              <FeatureBlock
                title={step.title}
                imageSrc={step.imageSrc}
                videoSrc={step.videoSrc}
                imageClassName={step.imageClassName}
                mediaClassName={step.mediaClassName}
                enableFullView={step.enableFullView}
                fullViewAriaLabel={step.fullViewAriaLabel}
                fullViewOnDark={step.fullViewOnDark}
              />
            )}
            {step.scopingPoints ? (
              <ol className="pl-[20px] font-geist font-normal text-[15px] text-[#5b6a79] leading-[25px] list-decimal">
                {step.scopingPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ol>
            ) : (
              <p className="font-geist font-normal text-[15px] text-[#5b6a79] leading-[25px]">{step.description}</p>
            )}
            {step.keyPoints ? (
              <div className="flex flex-col gap-[6px] rounded-[10px] border border-[#f2dfcf] bg-[#fff7ef] px-[14px] py-[12px]">
                <div className="font-geist-mono text-[12px] text-[#b26f32] uppercase leading-[22.5px]">Key points</div>
                <ol className="pl-[20px] font-geist font-normal text-[15px] text-[#8d6439] leading-[24px] list-decimal">
                  {step.keyPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ol>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────
   Section 5: Try It On Your Own
   ─────────────────────────────────────────────── */

function TryItSection() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative w-full" data-name="Try It">
      <SectionLabel label="try it on your own" />
      <div className="grid grid-cols-1 gap-[32px] w-full">
        <div className="content-stretch flex flex-col gap-[14px] items-start relative">
          <a
            href="https://www.figma.com/community/plugin/1607992754736451698/decision-note"
            target="_blank"
            rel="noreferrer"
            data-cursor="case-study"
            className="inline-flex items-center gap-[8px] px-[24px] py-[12px] font-geist-mono text-[15px] font-medium rounded-[24px] whitespace-nowrap bg-[#1e242a] text-white hover:bg-[#2a3138] transition-colors uppercase"
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
      className="content-stretch flex flex-col gap-[110px] sm:gap-[170px] items-start max-w-[774px] pt-[48px] pb-[48px] relative shrink-0 w-full"
      data-name="Section Container"
    >
      <OverviewSection />
      <Divider />
      <WhySection />
      <Divider />
      <WhatIMadeSection />
      <Divider />
      <BuildingProcessSection />
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
