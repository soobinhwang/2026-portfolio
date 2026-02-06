import imgSue1 from "../assets/sue-final.png";
import imgImage from "../assets/65cb38abb69a5f063af2be9ea0a5e5ab405bb5eb.png";
import imgImage1 from "../assets/e665e2a761e07a38d4849d612f31276b1a754fc0.png";
import { Link as RouterLink } from "react-router";

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
      <div className="h-[221px] relative shrink-0 w-[214px]" data-name="sue 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSue1} />
      </div>
      <ProfileInfoContainer />
    </div>
  );
}

function ProfileContainer() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[34px] h-[478px] items-center left-[calc(50%+0.5px)] max-w-[619px] top-[129px] w-[619px]" data-name="Profile Container">
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
        <p className="leading-[38px]">{`Rewards & Recognition Engagement Product`}</p>
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
    <div className="absolute content-stretch flex flex-col gap-[120px] items-start left-[120px] max-w-[1200px] top-[667px] w-[1200px]" data-name="Main Frame">
      <MainFrame1 />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <div className="flex flex-col font-geist-mono font-medium justify-center leading-[0] relative shrink-0 text-[#32404f] text-[16px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[24px]">Work</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Link1 />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <Container9 />
    </div>
  );
}

function LinkContainer() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link Container">
      <div className="flex flex-col font-geist-mono font-medium justify-center leading-[0] relative shrink-0 text-[#32404f] text-[16px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[24px]">AI</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <LinkContainer />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Link3 />
    </div>
  );
}

function Link2() {
  return (
    <RouterLink to="/ai" className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Container10 />
    </RouterLink>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <div className="flex flex-col font-geist-mono font-medium justify-center leading-[0] relative shrink-0 text-[#32404f] text-[16px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[24px]">About</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Link5 />
    </div>
  );
}

function Link4() {
  return (
    <RouterLink to="/about" className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Container11 />
    </RouterLink>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <div className="flex flex-col font-geist-mono font-medium justify-center leading-[0] relative shrink-0 text-[#32404f] text-[16px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[24px]">Resume</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Link7 />
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <Container12 />
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0" data-name="Links">
      <Link />
      <Link2 />
      <Link4 />
      <Link6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip px-[24px] py-[12px] relative rounded-[24px] shrink-0" data-name="Container">
      <Links />
      <div className="absolute inset-0 rounded-[24px] pointer-events-none" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[24px]" />
      </div>
    </div>
  );
}

function NavDesktop() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-name="Nav - Desktop">
      <Container8 />
    </div>
  );
}

function MainNavigation() {
  return (
    <div className="-translate-x-1/2 fixed content-stretch flex flex-col items-start left-1/2 top-[40px] z-50" data-name="Main Navigation">
      <NavDesktop />
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="bg-dot-grid min-h-screen relative w-full" data-name="Landing Page">
      <ProfileContainer />
      <MainFrame />
      <MainNavigation />
    </div>
  );
}
