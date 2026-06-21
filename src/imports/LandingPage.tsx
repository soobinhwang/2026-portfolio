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
import imgP5Thumbnail from "../assets/landing/P5 Thumbnail.png";
import imgP6Thumbnail from "../assets/landing/P6 Thumbnail.png";
import { Link as RouterLink } from "react-router";
import Footer from "../app/components/Footer";
import NavBar from "../app/components/NavBar";

function ProfileInfoContainer() {
  return (
    <p className="font-inter font-normal text-[13px] sm:text-[16px] text-[#5b6a79] leading-[20px] sm:leading-[24px] tracking-[-0.2px] text-center">
      AI Builder · Enterprise Product · Scalable Solutions
    </p>
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
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Profile Image Container">
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
        <span className="font-inter font-medium text-white text-[13px] tracking-[-0.3px] uppercase leading-[20px] whitespace-nowrap">Let's Chat</span>
      </a>
      <a
        href="https://www.linkedin.com/in/sue-product-dsgn/"
        target="_blank"
        rel="noreferrer"
        className="group bg-[#f0f3f5] hover:bg-[#e8ecf0] transition-colors duration-200 overflow-clip flex gap-[8px] items-center justify-center px-[16px] py-[8px] rounded-[24px]"
      >
        <span className="font-inter font-medium text-[#1e242a] text-[13px] tracking-[-0.3px] uppercase leading-[20px] whitespace-nowrap">LinkedIn</span>
      </a>
    </div>
  );
}

function ProfileContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] sm:gap-[34px] items-center self-center max-w-[619px] mt-[120px] sm:mt-[160px] w-full px-[20px] sm:px-0" data-name="Profile Container">
      <ProfileImageContainer />
      <div className="flex flex-col gap-[14px] sm:gap-[20px] items-center min-w-full">
        <div className="flex flex-col font-bricolage font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#1e242a] text-[0px] text-center tracking-[-2.5px] w-[min-content]">
          <p className="text-[32px] sm:text-[58px]">
            <span className="leading-[38px] sm:leading-[56px]">Sue Hwang</span>
            <br aria-hidden="true" />
            <span className="leading-[38px] sm:leading-[56px] whitespace-nowrap">Strategic Product Designer</span>
          </p>
        </div>
        <ProfileInfoContainer />
      </div>
      {/* <ProfileCTAs /> */}
    </div>
  );
}

function Thumbnail() {
  return (
    <div className="bg-[#fbfdfd] relative shrink-0 w-full rounded-[18px] overflow-hidden transition-opacity duration-300 ease-in-out group-hover:opacity-60 [-webkit-mask-image:radial-gradient(white,black)] [transform:translateZ(0)] [outline:2px_solid_#fbfdfd]" data-name="Thumbnail" data-cursor="project">
      <img loading="lazy" decoding="async" alt="" className="block w-full h-auto object-contain" src={imgP1Thumbnail} />
    </div>
  );
}

function InfoContainer() {
  return (
    <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Info Container">
      <div className="flex flex-row gap-[6px] flex-wrap">
        <span className="border border-[#e4e7ea] rounded-full px-[12px] py-[4px] text-[12px] font-inter font-normal text-[#9ba3af]">B2B SaaS</span>
        <span className="border border-[#e4e7ea] rounded-full px-[12px] py-[4px] text-[12px] font-inter font-normal text-[#9ba3af]">Employee Experience</span>
      </div>
      <div className="flex flex-col gap-[6px]">
        <div className="flex flex-col font-inter font-medium justify-center relative shrink-0 text-[#1e242a] text-[20px] tracking-[-0.4px]">
          <p className="leading-[26px] sm:leading-[28px]">Employee Recognition Landing Page</p>
        </div>
        <p className="font-inter font-normal text-[16px] text-[#8c9199] leading-[24px] tracking-[-0.3px]">Shifting one-off client builds into a scalable, template-driven product</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <RouterLink
      to="/engagement-platform"
      className="content-stretch flex flex-col gap-[16px] items-start relative group w-full"
      data-name="Container"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Thumbnail />
      <InfoContainer />
    </RouterLink>
  );
}

function Thumbnail1() {
  return (
    <div className="bg-[#1e242a] shrink-0 w-full relative rounded-[18px] overflow-hidden transition-opacity duration-300 ease-in-out group-hover:opacity-60 [-webkit-mask-image:radial-gradient(white,black)] [transform:translateZ(0)] [outline:2px_solid_#fbfdfd]" data-name="Thumbnail" data-cursor="project">
      <img loading="lazy" decoding="async" alt="" className="block w-full h-auto object-contain" src={imgP2Thumbnail} />
    </div>
  );
}

function InfoContainer1() {
  return (
    <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Info Container">
      <div className="flex flex-row gap-[6px] flex-wrap">
        <span className="border border-[#e4e7ea] rounded-full px-[12px] py-[4px] text-[12px] font-inter font-normal text-[#9ba3af]">B2B SaaS</span>
        <span className="border border-[#e4e7ea] rounded-full px-[12px] py-[4px] text-[12px] font-inter font-normal text-[#9ba3af]">E-commerce</span>
      </div>
      <div className="flex flex-col gap-[6px]">
        <div className="flex flex-col font-inter font-medium justify-center relative shrink-0 text-[#1e242a] text-[20px] tracking-[-0.4px]">
          <p className="leading-[26px] sm:leading-[28px]">Global Reward Storefront</p>
        </div>
        <p className="font-inter font-normal text-[16px] text-[#8c9199] leading-[24px] tracking-[-0.3px]">Improving reward discoverability in a high-choice storefront</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <RouterLink
      to="/global-reward-storefront"
      className="content-stretch flex flex-col gap-[16px] items-start relative group w-full"
      data-name="Container"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Thumbnail1 />
      <InfoContainer1 />
    </RouterLink>
  );
}

function Container() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] sm:gap-[32px] items-start relative w-full" data-name="Container">
      <Container1 />
      <Container4 />
    </div>
  );
}

function Thumbnail2() {
  return (
    <div className="bg-[#1e242a] shrink-0 w-full relative rounded-[18px] overflow-hidden transition-opacity duration-300 ease-in-out group-hover:opacity-60 [-webkit-mask-image:radial-gradient(white,black)] [transform:translateZ(0)] [outline:2px_solid_#fbfdfd]" data-name="Thumbnail">
      <img loading="lazy" decoding="async" alt="" className="block w-full h-auto object-contain" src={imgP3Thumbnail} />
    </div>
  );
}

function InfoContainer2() {
  return (
    <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Info Container">
      <div className="flex flex-row gap-[6px] flex-wrap">
        <span className="border border-[#e4e7ea] rounded-full px-[12px] py-[4px] text-[12px] font-inter font-normal text-[#9ba3af]">B2B2C</span>
        <span className="border border-[#e4e7ea] rounded-full px-[12px] py-[4px] text-[12px] font-inter font-normal text-[#9ba3af]">Rewards Wallet</span>
      </div>
      <div className="flex flex-col gap-[6px]">
        <div className="flex flex-col font-inter font-medium justify-center relative shrink-0 text-[#1e242a] text-[20px] tracking-[-0.4px]">
          <p className="leading-[26px] sm:leading-[28px]">C1 Wallet</p>
        </div>
        <p className="font-inter font-normal text-[16px] text-[#8c9199] leading-[24px] tracking-[-0.3px]">A net-new product balancing monetization with user trust</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative group w-full"
      data-name="Container"
      data-cursor="coming-soon"
    >
      <Thumbnail2 />
      <InfoContainer2 />
    </div>
  );
}

function Thumbnail3() {
  return (
    <div className="bg-[#1e242a] shrink-0 w-full relative rounded-[18px] overflow-hidden transition-opacity duration-300 ease-in-out group-hover:opacity-60 [-webkit-mask-image:radial-gradient(white,black)] [transform:translateZ(0)] [outline:2px_solid_#fbfdfd]" data-name="Thumbnail" data-cursor="project">
      <img loading="lazy" decoding="async" alt="" className="block w-full h-auto object-contain" src={imgP4Thumbnail} />
    </div>
  );
}

function InfoContainer3() {
  return (
    <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Info Container">
      <div className="flex flex-row gap-[6px] flex-wrap">
        <span className="border border-[#e4e7ea] rounded-full px-[12px] py-[4px] text-[12px] font-inter font-normal text-[#9ba3af]">B2C</span>
        <span className="border border-[#e4e7ea] rounded-full px-[12px] py-[4px] text-[12px] font-inter font-normal text-[#9ba3af]">Data Visualization</span>
        <span className="border border-[#e4e7ea] rounded-full px-[12px] py-[4px] text-[12px] font-inter font-normal text-[#9ba3af]">Design System</span>
      </div>
      <div className="flex flex-col gap-[6px]">
        <div className="flex flex-col font-inter font-medium justify-center relative shrink-0 text-[#1e242a] text-[20px] tracking-[-0.4px]">
          <p className="leading-[26px] sm:leading-[28px]">Budget & Incentive Manager</p>
        </div>
        <p className="font-inter font-normal text-[16px] text-[#8c9199] leading-[24px] tracking-[-0.3px]">A UI revamp that cut clicks, errors, and frustration for incentive managers</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <RouterLink
      to="/design-library"
      className="content-stretch flex flex-col gap-[16px] items-start relative group w-full"
      data-name="Container"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Thumbnail3 />
      <InfoContainer3 />
    </RouterLink>
  );
}

function Container5() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] sm:gap-[32px] items-start relative w-full" data-name="Container">
      <Container7 />
      <Container6 />
    </div>
  );
}

function ThumbnailWeFair() {
  return (
    <div className="bg-[#fbfdfd] relative shrink-0 w-full rounded-[18px] overflow-hidden transition-opacity duration-300 ease-in-out group-hover:opacity-60 [-webkit-mask-image:radial-gradient(white,black)] [transform:translateZ(0)] [outline:2px_solid_#fbfdfd]" data-name="Thumbnail" data-cursor="project">
      <img loading="lazy" decoding="async" alt="" className="block w-full h-auto object-contain" src={imgP5Thumbnail} />
    </div>
  );
}

function InfoContainerWeFair() {
  return (
    <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Info Container">
      <div className="flex flex-row gap-[6px] flex-wrap">
        <span className="border border-[#e4e7ea] rounded-full px-[12px] py-[4px] text-[12px] font-inter font-normal text-[#9ba3af]">Mobile App</span>
        <span className="border border-[#e4e7ea] rounded-full px-[12px] py-[4px] text-[12px] font-inter font-normal text-[#9ba3af]">Hackathon</span>
        <span className="border border-[#e4e7ea] rounded-full px-[12px] py-[4px] text-[12px] font-inter font-normal text-[#9ba3af]">2nd Place</span>
      </div>
      <div className="flex flex-col gap-[6px]">
        <div className="flex flex-col font-inter font-medium justify-center relative shrink-0 text-[#1e242a] text-[20px] tracking-[-0.4px]">
          <p className="leading-[26px] sm:leading-[28px]">Ethical Shopping App WeFair</p>
        </div>
        <p className="font-inter font-normal text-[16px] text-[#8c9199] leading-[24px] tracking-[-0.3px]">Helping consumers discover and support brands that pay living wages</p>
      </div>
    </div>
  );
}

function ContainerWeFair() {
  return (
    <RouterLink
      to="/wefair"
      className="content-stretch flex flex-col gap-[16px] items-start relative group w-full"
      data-name="Container"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <ThumbnailWeFair />
      <InfoContainerWeFair />
    </RouterLink>
  );
}

function ThumbnailConnecteer() {
  return (
    <div className="bg-[#fbfdfd] relative shrink-0 w-full rounded-[18px] overflow-hidden transition-opacity duration-300 ease-in-out group-hover:opacity-60 [-webkit-mask-image:radial-gradient(white,black)] [transform:translateZ(0)] [outline:2px_solid_#fbfdfd]" data-name="Thumbnail" data-cursor="project">
      <img loading="lazy" decoding="async" alt="" className="block w-full h-auto object-contain" src={imgP6Thumbnail} />
    </div>
  );
}

function InfoContainerConnecteer() {
  return (
    <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Info Container">
      <div className="flex flex-row gap-[6px] flex-wrap">
        <span className="border border-[#e4e7ea] rounded-full px-[12px] py-[4px] text-[12px] font-inter font-normal text-[#9ba3af]">Mobile App</span>
        <span className="border border-[#e4e7ea] rounded-full px-[12px] py-[4px] text-[12px] font-inter font-normal text-[#9ba3af]">Hackathon</span>
        <span className="border border-[#e4e7ea] rounded-full px-[12px] py-[4px] text-[12px] font-inter font-normal text-[#9ba3af]">2nd Place</span>
      </div>
      <div className="flex flex-col gap-[6px]">
        <div className="flex flex-col font-inter font-medium justify-center relative shrink-0 text-[#1e242a] text-[20px] tracking-[-0.4px]">
          <p className="leading-[26px] sm:leading-[28px]">Volunteer Matching App Connecteer</p>
        </div>
        <p className="font-inter font-normal text-[16px] text-[#8c9199] leading-[24px] tracking-[-0.3px]">Inclusive volunteer matching for high school students of all backgrounds</p>
      </div>
    </div>
  );
}

function ContainerConnecteer() {
  return (
    <RouterLink
      to="/connecteer"
      className="content-stretch flex flex-col gap-[16px] items-start relative group w-full"
      data-name="Container"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <ThumbnailConnecteer />
      <InfoContainerConnecteer />
    </RouterLink>
  );
}

function Container8() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] sm:gap-[32px] items-start relative w-full" data-name="Container">
      <ContainerWeFair />
      <ContainerConnecteer />
    </div>
  );
}

function MainFrame1() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] sm:gap-[80px] items-start relative shrink-0 w-full" data-name="Main Frame">
      <Container />
      <Container5 />
      <Container8 />
    </div>
  );
}

function MainFrame() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] sm:gap-[120px] items-start max-w-[1200px] mt-[40px] sm:mt-[60px] mx-auto w-full px-[20px] sm:px-[32px] lg:px-0" data-name="Main Frame">
      <MainFrame1 />
    </div>
  );
}


export default function LandingPage() {
  return (
    <div className="bg-dot-grid-center-strip min-h-screen flex flex-col relative w-full" data-name="Landing Page">
      <ProfileContainer />
      <MainFrame />
      <Footer />
      <NavBar />
    </div>
  );
}
