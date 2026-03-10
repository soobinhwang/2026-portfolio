import { useEffect, useRef, useState } from "react";
import imgSue1 from "../assets/landing/sue-final.png";
import imgSueClick from "../assets/landing/sue-final-click.png";
import imgFigmaLogo from "../assets/landing/1Figma Logo.png";
import imgShipIt from "../assets/landing/2Ship It.png";
import imgStar25 from "../assets/ai/2-5-Star.png";
import imgStar from "../assets/landing/3Star.png";
import imgSmile from "../assets/landing/4Smile.png";
import imgScale from "../assets/landing/5Scale.png";
import imgP1Thumbnail from "../assets/landing/P1 Thumbnail.png";
import imgP2Thumbnail from "../assets/landing/P2 Thumbnail.png";
import imgP3Thumbnail from "../assets/landing/P3 Thumbnail.png";
import imgP4Thumbnail from "../assets/landing/P4 Thumbnail.png";
import { Link as RouterLink } from "react-router";
import Footer from "../app/components/Footer";

type ProjectCardProps = {
  category: string;
  description: string;
  thumbnailAlt: string;
  thumbnailBgClassName: string;
  thumbnailSrc: string;
  title: string;
  to?: string;
  comingSoon?: boolean;
};

const PROJECTS: ProjectCardProps[] = [
  {
    title: "Rewards & Recognition Platform",
    category: "HR Tech",
    description: "Led the shift from one-off client builds to a scalable template-driven product and self-serve CMS.",
    thumbnailSrc: imgP1Thumbnail,
    thumbnailAlt: "Rewards and Recognition platform preview",
    thumbnailBgClassName: "bg-[#f0f3f5]",
    to: "/engagement-platform",
  },
  {
    title: "Global Reward Storefront",
    category: "E-commerce",
    description: "Led the storefront discovery redesign, aligning product and engineering on scalable browsing patterns.",
    thumbnailSrc: imgP2Thumbnail,
    thumbnailAlt: "Global reward storefront preview",
    thumbnailBgClassName: "bg-[#1e242a]",
    to: "/global-reward-storefront",
  },
  {
    title: "Budget & Incentive Manager",
    category: "Design System",
    description: "Led the redesign of fragmented budgeting workflows into centralized, scalable system flows.",
    thumbnailSrc: imgP4Thumbnail,
    thumbnailAlt: "Budget and Incentive Manager preview",
    thumbnailBgClassName: "bg-[#1e242a]",
    to: "/design-library",
  },
  {
    title: "C1 Wallet",
    category: "Rewards Wallet",
    description: "Designing a rewards wallet concept that makes balances, incentives, and value easier to understand.",
    thumbnailSrc: imgP3Thumbnail,
    thumbnailAlt: "C1 Wallet preview",
    thumbnailBgClassName: "bg-[#1e242a]",
    comingSoon: true,
  },
];

function ProfileInfoItem() {
  return (
    <div className="bg-[rgba(23,0,207,0.05)] content-stretch flex items-center justify-center px-[6px] py-[2px] max-[392px]:px-[4px] max-[392px]:py-[1px] relative rounded-[4px] shrink-0" data-name="Profile Info Item">
      <div className="flex flex-col font-geist-mono font-normal justify-center leading-[0] relative shrink-0 text-[#1700cf] text-[12px] max-[392px]:text-[8px] uppercase whitespace-nowrap">
        <p className="leading-[22.5px] max-[392px]:leading-[14px]">AI Pioneer</p>
      </div>
    </div>
  );
}

function ProfileInfoItem1() {
  return (
    <div className="bg-[rgba(23,0,207,0.05)] content-stretch flex items-center justify-center px-[6px] py-[2px] max-[392px]:px-[4px] max-[392px]:py-[1px] relative rounded-[4px] shrink-0" data-name="Profile Info Item">
      <div className="flex flex-col font-geist-mono font-normal justify-center leading-[0] relative shrink-0 text-[#1700cf] text-[12px] max-[392px]:text-[8px] uppercase whitespace-nowrap">
        <p className="leading-[22.5px] max-[392px]:leading-[14px]">B2B SaaS</p>
      </div>
    </div>
  );
}

function ProfileInfoItem2() {
  return (
    <div className="bg-[rgba(23,0,207,0.05)] content-stretch flex items-center justify-center px-[6px] py-[2px] max-[392px]:px-[4px] max-[392px]:py-[1px] relative rounded-[4px] shrink-0" data-name="Profile Info Item">
      <div className="flex flex-col font-geist-mono font-normal justify-center leading-[0] relative shrink-0 text-[#1700cf] text-[12px] max-[392px]:text-[8px] uppercase whitespace-nowrap">
        <p className="leading-[22.5px] max-[392px]:leading-[14px]">Platform & Systems</p>
      </div>
    </div>
  );
}

function ProfileInfoContainer() {
  return (
    <div className="flex flex-wrap max-[392px]:flex-nowrap gap-[10px] max-[392px]:gap-[4px] items-center justify-start relative shrink-0 w-fit max-w-[260px]" data-name="Profile Info Container">
      <ProfileInfoItem />
      <ProfileInfoItem1 />
      <ProfileInfoItem2 />
    </div>
  );
}

function ProfileImageContainer() {
  const [profileClicked, setProfileClicked] = useState(false);
  const [profileSpinning, setProfileSpinning] = useState(false);
  const [profileSpinDir, setProfileSpinDir] = useState<"normal" | "reverse">("normal");
  const [profilePhase, setProfilePhase] = useState<"idle" | "toSecond" | "waiting" | "toOriginal">("idle");
  const resetTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) window.clearTimeout(resetTimerRef.current);
    };
  }, []);

  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-fit" data-name="Profile Image Container">
      <div className="h-[200px] sm:h-[221px] relative shrink-0 w-[194px] sm:w-[214px] perspective-800" data-name="sue 1">
        <img loading="lazy" decoding="async"
          alt=""
          className={`absolute inset-0 max-w-none object-cover size-full cursor-pointer transition-opacity duration-400 ease-in-out ${profileSpinning && profilePhase === "toSecond" ? (profileSpinDir === "reverse" ? "spin-y-reverse" : "spin-y") : ""} ${profileClicked ? "opacity-0" : "opacity-100"}`}
          src={imgSue1}
          data-cursor="visual"
          onClick={() => {
            if (resetTimerRef.current) window.clearTimeout(resetTimerRef.current);
            setProfileClicked(false);
            setProfilePhase("toSecond");
            setProfileSpinDir("reverse");
            setProfileSpinning(true);
          }}
          onAnimationEnd={() => {
            setProfileSpinning(false);
            if (profilePhase === "toSecond") {
              setProfileClicked(true);
              setProfilePhase("waiting");
              if (resetTimerRef.current) window.clearTimeout(resetTimerRef.current);
              resetTimerRef.current = window.setTimeout(() => {
                setProfileClicked(false);
                setProfilePhase("toOriginal");
                setProfileSpinDir("normal");
                setProfileSpinning(true);
              }, 1000);
            } else if (profilePhase === "toOriginal") {
              setProfilePhase("idle");
            }
          }}
        />
        <img loading="lazy" decoding="async"
          alt=""
          className={`absolute inset-0 max-w-none object-cover size-full pointer-events-none transition-opacity duration-400 ease-in-out ${profileSpinning && profilePhase === "toOriginal" ? (profileSpinDir === "reverse" ? "spin-y-reverse" : "spin-y") : ""} ${profileClicked ? "opacity-100" : "opacity-0"}`}
          src={imgSueClick}
        />
        <FloatingVisual className="absolute left-[-4px] bottom-[38px] w-[48px] h-auto float-soft" src={imgFigmaLogo} axis="z" />
        <FloatingVisual className="absolute left-[-11px] top-[35px] w-[62px] h-auto float-soft float-soft-delayed-1" src={imgShipIt} />
        <FloatingVisual className="absolute left-[65px] top-[-3px] w-[13.5px] h-auto float-soft float-soft-delayed-2 hidden" src={imgStar25} />
        <FloatingVisual className="absolute right-[13px] top-[-24px] w-[42px] h-auto float-soft float-soft-delayed-2" src={imgStar} />
        <FloatingVisual className="absolute right-[-20px] top-[74px] w-[50px] h-auto float-soft float-soft-delayed-3" src={imgSmile} axis="z" />
        <FloatingVisual className="absolute right-[27px] bottom-[7px] w-[42px] h-auto float-soft float-soft-delayed-4" src={imgScale} />
      </div>
    </div>
  );
}

function FloatingVisual({ className, src, axis = "y" }: { className: string; src: string; axis?: "x" | "y" | "z" }) {
  const [spinning, setSpinning] = useState(false);

  return (
    <img loading="lazy" decoding="async"
      alt=""
      className={`${className} cursor-pointer hover-pop ${spinning ? (axis === "x" ? "spin-x" : axis === "z" ? "spin-z" : "spin-y") : ""}`}
      src={src}
      data-cursor="visual"
      onClick={() => setSpinning(true)}
      onAnimationEnd={() => setSpinning(false)}
    />
  );
}

function ProfileCTAs() {
  return (
    <div className="flex flex-row gap-[12px] items-center justify-center">
      <a
        href="https://cal.com/sue-hwang-dwcdjs"
        target="_blank"
        rel="noreferrer"
        className="group bg-[#1e242a] hover:bg-[#2a3138] transition-colors duration-200 overflow-clip flex gap-[8px] items-center justify-center px-[16px] py-[8px] rounded-[24px]"
      >
        <span className="font-geist-mono font-medium text-white text-[13px] tracking-[-0.3px] uppercase leading-[20px] whitespace-nowrap">Let's Chat</span>
      </a>
      <a
        href="https://www.linkedin.com/in/sue-product-dsgn/"
        target="_blank"
        rel="noreferrer"
        className="group bg-[#f0f3f5] hover:bg-[#e8ecf0] transition-colors duration-200 overflow-clip flex gap-[8px] items-center justify-center px-[16px] py-[8px] rounded-[24px]"
      >
        <span className="font-geist-mono font-medium text-[#1e242a] text-[13px] tracking-[-0.3px] uppercase leading-[20px] whitespace-nowrap">LinkedIn</span>
      </a>
    </div>
  );
}

function ProfileContainer() {
  return (
    <div className="content-stretch mx-auto flex w-full max-w-[1200px] flex-col items-center gap-[28px] px-[20px] sm:gap-[32px] sm:px-[32px] lg:px-0" data-name="Profile Container">
      <ProfileImageContainer />
      <div className="flex flex-col items-center gap-[10px] sm:gap-[12px] max-w-[780px] relative shrink-0 text-center w-full">
        <div className="flex flex-col items-center font-newsreader font-normal justify-center leading-[0] relative shrink-0 text-[#32404f] text-[0px] tracking-[-1.04px] w-full">
          <p className="text-[32px] sm:text-[42px] lg:text-[46px] xl:text-[50px]">
            <span className="block leading-[36px] sm:leading-[46px] lg:leading-[50px] text-[#32404f] lg:whitespace-nowrap">
              I&apos;m Sue, a Product Designer
            </span>
            <span className="block leading-[36px] sm:leading-[46px] lg:leading-[50px] text-[#858e97] lg:whitespace-nowrap">
              who turns <span className="italic">ambiguity</span>
            </span>
            <span className="block leading-[36px] sm:leading-[46px] lg:leading-[50px] text-[#858e97] lg:whitespace-nowrap">
              into scalable solutions.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function ProjectCardContent({
  category,
  comingSoon,
  description,
  thumbnailAlt,
  thumbnailBgClassName,
  thumbnailSrc,
  title,
}: ProjectCardProps) {
  return (
    <div className="flex w-full flex-col gap-[20px] border-t border-[#ebeced] pt-[20px] sm:gap-[24px] sm:pt-[24px] lg:flex-row lg:items-start lg:gap-[48px]">
      <div className="flex w-full max-w-[360px] flex-col gap-[12px] sm:gap-[16px] lg:max-w-[520px] lg:shrink-0">
        <div className="font-geist-mono text-[13px] sm:text-[14px] leading-[20px] tracking-[-0.3px] text-[rgba(50,64,79,0.58)] uppercase">
          {category}
        </div>
        <div className="font-newsreader text-[#32404f] text-[24px] sm:text-[28px] lg:text-[32px] tracking-[-0.8px]">
          <p className="leading-[30px] sm:leading-[34px] lg:leading-[38px] lg:whitespace-nowrap">{title}</p>
        </div>
        <div className="font-geist text-[#5b6a79] text-[15px] sm:text-[16px] leading-[25px] sm:leading-[27px] tracking-[-0.18px] lg:max-w-[520px]">
          <p>{description}</p>
        </div>
        <div className="font-geist-mono text-[13px] sm:text-[14px] leading-[20px] tracking-[-0.3px] text-[#1700cf] uppercase">
          {comingSoon ? "Coming Soon" : "Read Case Study"}
        </div>
      </div>
      <div
        className={`${thumbnailBgClassName} relative w-full overflow-hidden transition-opacity duration-300 ease-in-out group-hover:opacity-60 lg:ml-auto lg:flex-1 lg:max-w-[560px]`}
        data-cursor={comingSoon ? "coming-soon" : "project"}
      >
        <img
          loading="lazy"
          decoding="async"
          alt={thumbnailAlt}
          className="block h-auto w-full object-contain"
          src={thumbnailSrc}
        />
      </div>
    </div>
  );
}

function ProjectCard(props: ProjectCardProps) {
  if (props.to && !props.comingSoon) {
    return (
      <RouterLink
        to={props.to}
        className="group block w-full"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <ProjectCardContent {...props} />
      </RouterLink>
    );
  }

  return (
    <div className="group w-full" data-cursor="coming-soon">
      <ProjectCardContent {...props} />
    </div>
  );
}

function MainFrame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] sm:gap-[28px] items-start relative shrink-0 w-full" data-name="Main Frame">
      {PROJECTS.map((project) => (
        <ProjectCard
          key={project.title}
          {...project}
        />
      ))}
    </div>
  );
}

function MainFrame() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] sm:gap-[120px] items-start max-w-[1200px] mx-auto w-full px-[20px] sm:px-[32px] lg:px-0" data-name="Main Frame">
      <MainFrame1 />
    </div>
  );
}


export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col relative w-full bg-[#fbfdfd]" data-name="Landing Page">
      <section className="relative w-full overflow-hidden py-[60px] sm:py-[80px]">
        <div aria-hidden="true" className="bg-dot-grid-hero pointer-events-none absolute inset-0" />
        <div className="relative z-10">
          <ProfileContainer />
        </div>
      </section>
      <MainFrame />
      <Footer />
    </div>
  );
}
