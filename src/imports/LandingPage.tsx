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
    <div className="content-center flex flex-wrap max-[392px]:flex-nowrap gap-[10px] max-[392px]:gap-[4px] items-center relative shrink-0 w-full" data-name="Profile Info Container">
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
      <ProfileInfoContainer />
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
    <div className="content-stretch flex flex-col gap-[24px] sm:gap-[34px] items-center self-center max-w-[619px] mt-[120px] sm:mt-[160px] w-full px-[20px] sm:px-0" data-name="Profile Container">
      <ProfileImageContainer />
      <div className="flex flex-col font-newsreader font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#32404f] text-[0px] text-center tracking-[-1.04px] w-[min-content]">
        <p className="text-[32px] sm:text-[50px] whitespace-pre-wrap">
          <span className="leading-[36px] sm:leading-[50px] text-[#32404f]">{`I'm Sue, a product designer `}</span>
          <span className="leading-[36px] sm:leading-[50px]">
            <br aria-hidden="true" />
          </span>
          <span className="leading-[36px] sm:leading-[50px] text-[#858e97]">{`who `}</span>
          <span className="font-newsreader font-normal leading-[36px] sm:leading-[50px] text-[#858e97]">{`turns `}</span>
          <span className="font-newsreader font-normal leading-[36px] sm:leading-[50px] text-[#858e97]">
            ambiguity
            <br aria-hidden="true" />
          </span>
          <span className="font-newsreader font-normal leading-[36px] sm:leading-[50px] text-[#858e97]">into </span><span className="font-newsreader font-normal italic leading-[36px] sm:leading-[50px] text-[#858e97]">scalable</span><span className="font-newsreader font-normal leading-[36px] sm:leading-[50px] text-[#858e97]"> solutions</span>
        </p>
      </div>
      {/* <ProfileCTAs /> */}
    </div>
  );
}

function Thumbnail() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-full transition-opacity duration-300 ease-in-out group-hover:opacity-60" data-name="Thumbnail" data-cursor="project">
      <img loading="lazy" decoding="async" alt="" className="block w-full h-auto object-contain" src={imgP1Thumbnail} />
    </div>
  );
}

function InfoContainer() {
  return (
    <div
      className="content-stretch flex flex-col min-[1120px]:flex-row font-normal items-start min-[1120px]:items-center justify-start min-[1120px]:justify-between gap-[6px] min-[1120px]:gap-0 leading-[0] relative shrink-0 w-full"
      data-name="Info Container"
    >
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#32404f] text-[18px] sm:text-[20px] tracking-[-0.64px]">
        <p className="leading-[28px] sm:leading-[38px]">{`Rewards & Recognition Platform`}</p>
      </div>
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[13px] sm:text-[15px] text-[rgba(50,64,79,0.58)] uppercase">
        <p className="leading-[20px] sm:leading-[22.5px]">Employee Experience</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <RouterLink
      to="/engagement-platform"
      className="content-stretch flex flex-col gap-[12px] items-start relative group w-full"
      data-name="Container"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div aria-hidden="true" className="absolute border-[#ebeced] border-solid border-t inset-0 pointer-events-none" />
      <Thumbnail />
      <InfoContainer />
    </RouterLink>
  );
}

function Thumbnail1() {
  return (
    <div className="bg-[#1e242a] shrink-0 w-full relative transition-opacity duration-300 ease-in-out group-hover:opacity-60" data-name="Thumbnail" data-cursor="project">
      <img loading="lazy" decoding="async" alt="" className="block w-full h-auto object-contain" src={imgP2Thumbnail} />
    </div>
  );
}

function InfoContainer1() {
  return (
    <div
      className="content-stretch flex flex-col min-[1120px]:flex-row font-normal items-start min-[1120px]:items-center justify-start min-[1120px]:justify-between gap-[6px] min-[1120px]:gap-0 leading-[0] relative shrink-0 w-full"
      data-name="Info Container"
    >
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#32404f] text-[18px] sm:text-[20px] tracking-[-0.64px]">
        <p className="leading-[28px] sm:leading-[38px]">Global Reward Storefront</p>
      </div>
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[13px] sm:text-[15px] text-[rgba(50,64,79,0.58)] uppercase">
        <p className="leading-[20px] sm:leading-[22.5px]">E-commerce</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <RouterLink
      to="/global-reward-storefront"
      className="content-stretch flex flex-col gap-[12px] items-start relative group w-full"
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
    <div className="bg-[#1e242a] shrink-0 w-full relative transition-opacity duration-300 ease-in-out group-hover:opacity-60" data-name="Thumbnail">
      <img loading="lazy" decoding="async" alt="" className="block w-full h-auto object-contain" src={imgP3Thumbnail} />
    </div>
  );
}

function InfoContainer2() {
  return (
    <div
      className="content-stretch flex flex-col min-[1120px]:flex-row font-normal items-start min-[1120px]:items-center justify-start min-[1120px]:justify-between gap-[6px] min-[1120px]:gap-0 leading-[0] relative shrink-0 w-full"
      data-name="Info Container"
    >
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#32404f] text-[18px] sm:text-[20px] tracking-[-0.64px]">
        <p className="leading-[28px] sm:leading-[38px]">C1 Wallet</p>
      </div>
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[13px] sm:text-[15px] text-[rgba(50,64,79,0.58)] uppercase">
        <p className="leading-[20px] sm:leading-[22.5px]">Rewards Wallet</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div
      className="content-stretch flex flex-col gap-[12px] items-start relative group w-full"
      data-name="Container"
      data-cursor="coming-soon"
    >
      <div aria-hidden="true" className="absolute border-[#ebeced] border-solid border-t inset-0 pointer-events-none" />
      <Thumbnail2 />
      <InfoContainer2 />
    </div>
  );
}

function Thumbnail3() {
  return (
    <div className="bg-[#1e242a] shrink-0 w-full relative transition-opacity duration-300 ease-in-out group-hover:opacity-60" data-name="Thumbnail" data-cursor="project">
      <img loading="lazy" decoding="async" alt="" className="block w-full h-auto object-contain" src={imgP4Thumbnail} />
    </div>
  );
}

function InfoContainer3() {
  return (
    <div
      className="content-stretch flex flex-col min-[1120px]:flex-row font-normal items-start min-[1120px]:items-center justify-start min-[1120px]:justify-between gap-[6px] min-[1120px]:gap-0 leading-[0] relative shrink-0 w-full"
      data-name="Info Container"
    >
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#32404f] text-[18px] sm:text-[20px] tracking-[-0.64px]">
        <p className="leading-[28px] sm:leading-[38px]">Budget & Incentive Manager</p>
      </div>
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[13px] sm:text-[15px] text-[rgba(50,64,79,0.58)] uppercase">
        <p className="leading-[20px] sm:leading-[22.5px]">Data Visualization</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <RouterLink
      to="/design-library"
      className="content-stretch flex flex-col gap-[12px] items-start relative group w-full"
      data-name="Container"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div aria-hidden="true" className="absolute border-[#ebeced] border-solid border-t inset-0 pointer-events-none" />
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
    <div className="relative shrink-0 w-full transition-opacity duration-300 ease-in-out group-hover:opacity-60" data-name="Thumbnail" data-cursor="project">
      <img loading="lazy" decoding="async" alt="" className="block w-full h-auto object-contain" src={imgP5Thumbnail} />
    </div>
  );
}

function InfoContainerWeFair() {
  return (
    <div className="content-stretch flex flex-col min-[1120px]:flex-row font-normal items-start min-[1120px]:items-center justify-start min-[1120px]:justify-between gap-[6px] min-[1120px]:gap-0 leading-[0] relative shrink-0 w-full" data-name="Info Container">
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#32404f] text-[18px] sm:text-[20px] tracking-[-0.64px]">
        <p className="leading-[28px] sm:leading-[38px]">Ethical Shopping App WeFair</p>
      </div>
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[13px] sm:text-[15px] text-[rgba(50,64,79,0.58)] uppercase">
        <p className="leading-[20px] sm:leading-[22.5px]">Hackathon · 2nd Place</p>
      </div>
    </div>
  );
}

function ContainerWeFair() {
  return (
    <RouterLink
      to="/wefair"
      className="content-stretch flex flex-col gap-[12px] items-start relative group w-full"
      data-name="Container"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div aria-hidden="true" className="absolute border-[#ebeced] border-solid border-t inset-0 pointer-events-none" />
      <ThumbnailWeFair />
      <InfoContainerWeFair />
    </RouterLink>
  );
}

function ThumbnailConnecteer() {
  return (
    <div className="relative shrink-0 w-full transition-opacity duration-300 ease-in-out group-hover:opacity-60" data-name="Thumbnail" data-cursor="project">
      <img loading="lazy" decoding="async" alt="" className="block w-full h-auto object-contain" src={imgP6Thumbnail} />
    </div>
  );
}

function InfoContainerConnecteer() {
  return (
    <div className="content-stretch flex flex-col min-[1120px]:flex-row font-normal items-start min-[1120px]:items-center justify-start min-[1120px]:justify-between gap-[6px] min-[1120px]:gap-0 leading-[0] relative shrink-0 w-full" data-name="Info Container">
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#32404f] text-[18px] sm:text-[20px] tracking-[-0.64px]">
        <p className="leading-[28px] sm:leading-[38px]">Volunteer Matching App Connecteer</p>
      </div>
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[13px] sm:text-[15px] text-[rgba(50,64,79,0.58)] uppercase">
        <p className="leading-[20px] sm:leading-[22.5px]">Hackathon · 2nd Place</p>
      </div>
    </div>
  );
}

function ContainerConnecteer() {
  return (
    <RouterLink
      to="/connecteer"
      className="content-stretch flex flex-col gap-[12px] items-start relative group w-full"
      data-name="Container"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div aria-hidden="true" className="absolute border-[#ebeced] border-solid border-t inset-0 pointer-events-none" />
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
    <div className="content-stretch flex flex-col gap-[24px] sm:gap-[40px] items-start relative shrink-0 w-full" data-name="Main Frame">
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
    <div className="bg-dot-grid min-h-screen flex flex-col relative w-full" data-name="Landing Page">
      <ProfileContainer />
      <MainFrame />
      <Footer />
      <NavBar />
    </div>
  );
}
