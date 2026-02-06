import { useState } from "react";
import imgSue1 from "../assets/sue-final.png";
import imgFigmaLogo from "../assets/1Figma Logo.png";
import imgShipIt from "../assets/2Ship It.png";
import imgStar from "../assets/3Star.png";
import imgSmile from "../assets/4Smile.png";
import imgScale from "../assets/5Scale.png";
import imgImage from "../assets/65cb38abb69a5f063af2be9ea0a5e5ab405bb5eb.png";
import imgImage1 from "../assets/e665e2a761e07a38d4849d612f31276b1a754fc0.png";
import { Link as RouterLink } from "react-router";
import Footer from "../app/components/Footer";
import NavBar from "../app/components/NavBar";

function ProfileInfoItem() {
  return (
    <div className="bg-[rgba(23,0,207,0.05)] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Profile Info Item">
      <div className="flex flex-col font-geist-mono font-normal justify-center leading-[0] relative shrink-0 text-[#1700cf] text-[12px] uppercase whitespace-nowrap">
        <p className="leading-[22.5px]">+3 years</p>
      </div>
    </div>
  );
}

function ProfileInfoItem1() {
  return (
    <div className="bg-[rgba(23,0,207,0.05)] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Profile Info Item">
      <div className="flex flex-col font-geist-mono font-normal justify-center leading-[0] relative shrink-0 text-[#1700cf] text-[12px] uppercase whitespace-nowrap">
        <p className="leading-[22.5px]">b2b B2B2C saas</p>
      </div>
    </div>
  );
}

function ProfileInfoItem2() {
  return (
    <div className="bg-[rgba(23,0,207,0.05)] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Profile Info Item">
      <div className="flex flex-col font-geist-mono font-normal justify-center leading-[0] relative shrink-0 text-[#1700cf] text-[12px] uppercase whitespace-nowrap">
        <p className="leading-[22.5px]">enterprise designer</p>
      </div>
    </div>
  );
}

function ProfileInfoContainer() {
  return (
    <div className="content-center flex flex-wrap gap-[10px] items-center relative shrink-0 w-full" data-name="Profile Info Container">
      <ProfileInfoItem />
      <ProfileInfoItem1 />
      <ProfileInfoItem2 />
    </div>
  );
}

function ProfileImageContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Profile Image Container">
      <div className="h-[221px] relative shrink-0 w-[214px] perspective-800" data-name="sue 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSue1} />
        <FloatingVisual className="absolute left-[-4px] bottom-[38px] w-[48px] h-auto float-soft" src={imgFigmaLogo} axis="z" />
        <FloatingVisual className="absolute left-[-11px] top-[35px] w-[62px] h-auto float-soft float-soft-delayed-1" src={imgShipIt} />
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
    <img
      alt=""
      className={`${className} cursor-pointer hover-pop ${spinning ? (axis === "x" ? "spin-x" : axis === "z" ? "spin-z" : "spin-y") : ""}`}
      src={src}
      data-cursor="visual"
      onClick={() => setSpinning(true)}
      onAnimationEnd={() => setSpinning(false)}
    />
  );
}

function ProfileContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[34px] h-[478px] items-center self-center max-w-[619px] mt-[160px] w-[619px]" data-name="Profile Container">
      <ProfileImageContainer />
      <div className="flex flex-col font-newsreader font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#32404f] text-[0px] text-center tracking-[-1.04px] w-[min-content]">
        <p className="text-[50px] whitespace-pre-wrap">
          <span className="leading-[50px] text-[#32404f]">{`I'm Sue, a product designer `}</span>
          <span className="leading-[50px]">
            <br aria-hidden="true" />
          </span>
          <span className="leading-[50px] text-[#858e97]">{`who `}</span>
          <span className="font-newsreader font-normal leading-[50px] text-[#858e97]">{`turns `}</span>
          <span className="font-newsreader font-normal italic leading-[50px] text-[#858e97]">
            ambiguity
            <br aria-hidden="true" />
          </span>
          <span className="font-newsreader font-normal leading-[50px] text-[#858e97]">into scalable solutions.</span>
        </p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[389px] left-[51px] overflow-clip rounded-[3.62px] shadow-[0px_2.679px_22.769px_0px_rgba(192,192,192,0.25)] top-[46px] w-[331px]" data-name="Container">
      <div className="absolute h-[1071.31px] left-[-0.04px] top-[20.53px] w-[331.384px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[416px] left-[198px] overflow-clip rounded-[3.62px] shadow-[0px_2.679px_22.769px_0px_rgba(192,192,192,0.25)] top-[19px] w-[331px]" data-name="Container">
      <div className="absolute h-[901.376px] left-[-0.44px] top-[19.73px] w-[331.414px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Thumbnail() {
  return (
    <div className="bg-[#f0f3f5] h-[435px] overflow-clip relative shrink-0 w-[580px]" data-name="Thumbnail">
      <Container2 />
      <Container3 />
    </div>
  );
}

function InfoContainer() {
  return (
    <div className="content-stretch flex font-normal items-center justify-between leading-[0] relative shrink-0 w-full whitespace-nowrap" data-name="Info Container">
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#32404f] text-[20px] tracking-[-0.64px]">
        <p className="leading-[38px]">{`Rewards & Recognition Engagement Product`}</p>
      </div>
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase">
        <p className="leading-[22.5px]">B2B SaaS • web app</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <RouterLink
      to="/engagement-platform"
      className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative"
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
  return <div className="bg-[#1e242a] h-[435px] shrink-0 w-full" data-name="Thumbnail" />;
}

function InfoContainer1() {
  return (
    <div className="content-stretch flex font-normal items-center justify-between leading-[0] relative shrink-0 w-full whitespace-nowrap" data-name="Info Container">
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#32404f] text-[20px] tracking-[-0.64px]">
        <p className="leading-[38px]">Global Reward Storefront</p>
      </div>
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase">
        <p className="leading-[22.5px]">B2B SaaS • web app • Ecommerce</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="Container">
      <Thumbnail1 />
      <InfoContainer1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container4 />
    </div>
  );
}

function Thumbnail2() {
  return <div className="bg-[#1e242a] h-[435px] shrink-0 w-full" data-name="Thumbnail" />;
}

function InfoContainer2() {
  return (
    <div className="content-stretch flex font-normal items-center justify-between leading-[0] relative shrink-0 w-full whitespace-nowrap" data-name="Info Container">
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#32404f] text-[20px] tracking-[-0.64px]">
        <p className="leading-[38px]">C1 Wallet</p>
      </div>
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase">
        <p className="leading-[22.5px]">B2B SaaS • web app</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ebeced] border-solid border-t inset-0 pointer-events-none" />
      <Thumbnail2 />
      <InfoContainer2 />
    </div>
  );
}

function Thumbnail3() {
  return <div className="bg-[#1e242a] h-[435px] shrink-0 w-full" data-name="Thumbnail" />;
}

function InfoContainer3() {
  return (
    <div className="content-stretch flex font-normal items-center justify-between leading-[0] relative shrink-0 w-full whitespace-nowrap" data-name="Info Container">
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#32404f] text-[20px] tracking-[-0.64px]">
        <p className="leading-[38px]">Design Library</p>
      </div>
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase">
        <p className="leading-[22.5px]">B2B SaaS • web app</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ebeced] border-solid border-t inset-0 pointer-events-none" />
      <Thumbnail3 />
      <InfoContainer3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function MainFrame1() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Main Frame">
      <Container />
      <Container5 />
    </div>
  );
}

function MainFrame() {
  return (
    <div className="content-stretch flex flex-col gap-[120px] items-start ml-[120px] max-w-[1200px] mt-[60px] w-[1200px]" data-name="Main Frame">
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
