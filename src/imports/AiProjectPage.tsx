import { useEffect, useRef, useState } from "react";
import { Link as RouterLink } from "react-router";
import project1ThumbnailVideo from "../assets/ai/project-1/thumbnail.mp4";
import project2ThumbnailImage from "../assets/ai/project-2/ai-p2-thumbnail.png";
import project3ThumbnailImage from "../assets/ai/project-3/ai-p3-thumbnail.png";
import project4ThumbnailImage from "../assets/ai/project-4/ai-p4-thumbnail.png";
import project5ThumbnailImage from "../assets/ai/project-5/ai-p5-thumbnail.png";
import Footer from "../app/components/Footer";
import NavBar from "../app/components/NavBar";

const project1ThumbnailJsonUrl = new URL("../assets/ai/project-1/Frame-32.json", import.meta.url).href;

function HeaderContainer() {
  return (
    <div className="content-stretch flex flex-col items-start mt-[120px] sm:mt-[160px] mx-auto max-w-[1200px] w-full px-[20px] sm:px-[32px] lg:px-0" data-name="Header Container">
      <div className="flex flex-col font-inter font-medium justify-center leading-[0] relative shrink-0 text-[#1e242a] text-[0px] tracking-[-0.04em] w-full text-left">
        <p className="text-[32px] sm:text-[44px] whitespace-pre-wrap">
          <span className="leading-[36px] sm:leading-[44px] text-[#1e242a]">AI</span>
          <span className="leading-[36px] sm:leading-[44px] text-[#1e242a]">{` builds that turn ambiguity into direction`}</span>
        </p>
      </div>
      <div className="mt-[10px] max-w-[980px] font-geist font-normal text-[#5b6a79] text-[17px] sm:text-[18px] leading-[27px] sm:leading-[29px] tracking-[-0.2px]">
        <p>
          AI-assisted builds that turn vague thoughts into tangible, testable solutions, making direction visible early.
        </p>
      </div>
    </div>
  );
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
        className="block w-full aspect-[4/3] object-cover scale-[1.1] origin-center"
        src={fallbackVideoSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />
    ) : (
      <div className="w-full aspect-[4/3]" />
    );
  }

  return (
    <div ref={containerRef} className="w-full aspect-[4/3] overflow-hidden">
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

function AiThumbnail({ src, videoSrc, animationSrcUrl, comingSoon }: { src?: string; videoSrc?: string; animationSrcUrl?: string; comingSoon?: boolean }) {
  return (
    <div className="bg-[#fbfdfd] outline-none shrink-0 w-full relative rounded-[18px] overflow-hidden transition-opacity duration-300 ease-in-out group-hover:opacity-60" data-name="AI Thumbnail">
      {animationSrcUrl ? (
        <LottieThumbnail srcUrl={animationSrcUrl} fallbackVideoSrc={videoSrc} />
      ) : videoSrc ? (
        <video
          className="block w-full aspect-[4/3] object-cover"
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
      ) : src ? (
        <img loading="lazy" decoding="async" alt="" className="block w-full aspect-[4/3] object-contain" src={src} />
      ) : (
        <div className="w-full aspect-[4/3] flex items-center justify-center">
          {comingSoon && (
            <span className="font-inter text-[11px] text-[rgba(255,255,255,0.2)] uppercase tracking-[0.14em]">
              Coming soon
            </span>
          )}
        </div>
      )}
    </div>
  );
}

function ProjectInfo({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Info Container">
      {subtitle ? (
        <div className="flex flex-row gap-[6px] flex-wrap">
          <span className="border border-[#e4e7ea] rounded-full px-[12px] py-[4px] text-[12px] font-inter font-normal text-[#9ba3af]">{subtitle}</span>
        </div>
      ) : null}
      <div className="flex flex-col font-inter font-medium justify-center relative shrink-0 text-[#1e242a] text-[20px] tracking-[-0.4px]">
        <p className="leading-[26px] sm:leading-[28px]">{title}</p>
      </div>
    </div>
  );
}

function ProjectCard({ to, href, title, subtitle, thumbnailSrc, thumbnailVideoSrc, thumbnailAnimationSrcUrl, showTopBorder = true, comingSoon }: { to?: string; href?: string; title: string; subtitle?: string; thumbnailSrc?: string; thumbnailVideoSrc?: string; thumbnailAnimationSrcUrl?: string; showTopBorder?: boolean; comingSoon?: boolean }) {
  const inner = (
    <>
      <AiThumbnail src={thumbnailSrc} videoSrc={thumbnailVideoSrc} animationSrcUrl={thumbnailAnimationSrcUrl} comingSoon={comingSoon} />
      <ProjectInfo title={title} subtitle={subtitle} />
    </>
  );

  if (to) {
    return (
      <RouterLink
        to={to}
        className="content-stretch flex flex-col gap-[16px] items-start relative group w-full"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {inner}
      </RouterLink>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="content-stretch flex flex-col gap-[16px] items-start relative group w-full"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {inner}
      </a>
    );
  }

  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative group w-full"
      data-cursor="coming-soon"
    >
      {inner}
    </div>
  );
}

function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px] sm:gap-[80px] items-start relative shrink-0 w-full" data-name="Projects Grid">
      <ProjectCard to="/ai/project-2" title="Design Decision Note" subtitle="Figma Plugin" thumbnailSrc={project2ThumbnailImage} />
      <ProjectCard
        href="https://www.linkedin.com/feed/update/urn:li:activity:7445938090139095042/"
        title="Never Forget to Commit Again"
        subtitle="Claude Code Skill"
        thumbnailSrc={project4ThumbnailImage}
      />
      <ProjectCard
        href="https://www.linkedin.com/posts/sue-product-dsgn_ai-aidesign-aitools-activity-7431900399055413249-lo7t?utm_source=share&utm_medium=member_desktop&rcm=ACoAACul4igBoaqG7fZIRGkVmlNdfVyEmfYkpAI"
        title="Building a Portfolio with Vibe Coding"
        subtitle="Personal Build"
        thumbnailSrc={project3ThumbnailImage}
      />
      <ProjectCard
        title="App-in-app for a Korean Fintech"
        subtitle="Mobile App"
        thumbnailSrc={project5ThumbnailImage}
        comingSoon
      />
      <ProjectCard
        to="/ai/project-1"
        title="Chat GPT Feature Concepts"
        subtitle="Proof of Concept"
        thumbnailAnimationSrcUrl={project1ThumbnailJsonUrl}
        thumbnailVideoSrc={project1ThumbnailVideo}
      />
    </div>
  );
}

function MainFrame() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] sm:gap-[120px] items-start max-w-[1200px] mt-[40px] sm:mt-[60px] mx-auto w-full px-[20px] sm:px-[32px] lg:px-0" data-name="Main Frame">
      <ProjectsGrid />
    </div>
  );
}

export default function AiProjectPage() {
  return (
    <div className="bg-[#fbfdfd] min-h-screen flex flex-col relative w-full" data-name="AI Project Page">
      <HeaderContainer />
      <MainFrame />
      <Footer />
      <NavBar />
    </div>
  );
}
