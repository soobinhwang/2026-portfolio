import { useEffect, useRef, useState } from "react";
import svgPaths from "./svg-5dqo6cmf5g";
import imgBrandingImage1 from "@/assets/a633b689052891e4fbfcb3fe3c31f66d6e65599f.png";
import imgAiThumbnail from "@/assets/1bf73234501ca8343e01e4bf4a0305fb61a429d8.png";
import imgAiThumbnail1 from "@/assets/fab05ffb29a01423aae9026ee46ccb24848aa5fe.png";
import imgAboutMe from "@/assets/about-me.png";
import imgWritingThumbnail from "@/assets/57bf94777d60d0c33d7d650f5ba64792da9c8031.png";
import imgLandingPage from "@/assets/1bf73234501ca8343e01e4bf4a0305fb61a429d8.png";
import imgSue from "@/assets/Landing Page Profile/sue.png";
import imgElement1 from "@/assets/Landing Page Profile/element1.png";
import imgElement2 from "@/assets/Landing Page Profile/element2.png";
import imgElement3 from "@/assets/Landing Page Profile/element3.png";
import imgElement4 from "@/assets/Landing Page Profile/element4.png";
import imgElement5 from "@/assets/Landing Page Profile/element5.png";
import videoTest from "@/assets/test.mp4";
import aiChatLottie from "@/assets/ai-chatgpt.json?url";
import { useNavigate } from "react-router-dom";

function Frame9() {
  return (
    <div className="bg-[rgba(23,0,207,0.05)] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0">
      <div
        className="css-g0mm18 flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[#1700cf] text-[12px] uppercase"
        style={{ fontFamily: "'Geist Mono', 'Geist_Mono', monospace" }}
      >
        <p className="css-ew64yg leading-[22.5px]">+3 years</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[rgba(23,0,207,0.05)] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0">
      <div
        className="css-g0mm18 flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[#1700cf] text-[12px] uppercase"
        style={{ fontFamily: "'Geist Mono', 'Geist_Mono', monospace" }}
      >
        <p className="css-ew64yg leading-[22.5px]">b2b B2B2C saas</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[rgba(23,0,207,0.05)] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0">
      <div
        className="css-g0mm18 flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[#1700cf] text-[12px] uppercase"
        style={{ fontFamily: "'Geist Mono', 'Geist_Mono', monospace" }}
      >
        <p className="css-ew64yg leading-[22.5px]">enterprise designer</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full -mt-8 mb-8">
      <Frame9 />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-0 items-center relative shrink-0">
      <div className="relative shrink-0 w-[320px] h-[360px]" data-name="hero-visual">
        <img
          alt="Sue"
          src={imgSue}
          className="absolute inset-0 object-contain pointer-events-none size-full z-10"
          style={{ transform: "scale(0.72)", transformOrigin: "center" }}
        />

        <img
          alt=""
          src={imgElement1}
          className="absolute float-a pointer-events-none z-20"
          style={{ top: "65%", left: "3%", width: "56px", transform: "rotate(-6deg)" }}
        />
        <img
          alt=""
          src={imgElement2}
          className="absolute float-b pointer-events-none z-20"
          style={{ top: "24%", right: "-4%", width: "84.48px" }}
        />
        <img
          alt=""
          src={imgElement3}
          className="absolute float-c pointer-events-none z-20"
          style={{ top: "23%", left: "8%", width: "61px", transform: "rotate(-2deg)" }}
        />
        <img
          alt=""
          src={imgElement4}
          className="absolute float-d pointer-events-none z-20"
          style={{ bottom: "10%", right: "15%", width: "45.92px", transform: "rotate(2deg)" }}
        />
        <img
          alt=""
          src={imgElement5}
          className="absolute float-e pointer-events-none z-20"
          style={{ bottom: "95%", right: "12%", width: "56px", transform: "rotate(4deg)" }}
        />
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-0 items-center left-[calc(50%+0.5px)] max-w-[619px] top-[152px] translate-x-[-50%] w-[619px] h-[560px]">
      <Frame19 />
      <Frame12 />
      <div className="flex flex-col font-['Newsreader',serif] font-normal justify-center min-w-full relative shrink-0 text-[#32404f] text-[0px] text-center tracking-[-1.04px] w-[min-content]">
        <p className="css-4hzbpn text-[50px] leading-[50px]">
          <span className="font-['Newsreader',serif] text-[#1e242a]">{`I'm Sue, a product designer `}</span>
          <span>
            <br aria-hidden="true" />
          </span>
          <span className="font-['Newsreader',serif] text-[#858e97]">{`who `}</span>
          <span className="font-['Newsreader',serif] font-normal text-[#858e97]">{`turns `}</span>
          <span className="font-['Newsreader',serif] italic text-[#858e97]">ambiguity</span>
          <span className="font-['Newsreader',serif] font-normal text-[#858e97]">{` into scalable solutions.`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <video
      className="h-[625px] w-full shrink-0 rounded-[16px] object-cover"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
    >
      <source src={videoTest} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

function ProjectMeta({ title }: { title: string }) {
  return (
    <div className="content-stretch flex font-normal items-center justify-between leading-[0] relative shrink-0 w-full">
      <div
        className="css-g0mm18 flex flex-col justify-center relative shrink-0 text-[#1e242a] text-[22px] tracking-[-0.64px]"
        style={{ fontFamily: "'Newsreader', serif" }}
      >
        <p className="css-ew64yg leading-[38px]">{title}</p>
      </div>
      <div
        className="css-g0mm18 flex flex-col justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase"
        style={{ fontFamily: "'Geist Mono', 'Geist_Mono', monospace" }}
      >
        <p className="css-ew64yg leading-[22.5px]">B2B SaaS • web app</p>
      </div>
    </div>
  );
}

function Frame6({ title }: { title: string }) {
  const navigate = useNavigate();
  
  return (
    <div 
      className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity"
      onClick={() => navigate('/project/1')}
    >
      <Frame2 />
      <ProjectMeta title={title} />
    </div>
  );
}

function Frame3() {
  return <div className="bg-[#bfbfbf] h-[625px] shrink-0 w-full" />;
}

function Frame4({ title }: { title: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame3 />
      <ProjectMeta title={title} />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[68px] items-start relative shrink-0 w-full">
      <Frame6 title="Engagement Platform" />
      <Frame4 title="Global Reward Storefront" />
      <Frame6 title="Wallet" />
    </div>
  );
}

function Frame8() {
  return (
    <div id="work-section" className="content-stretch flex flex-col gap-[24px] items-start max-w-[1000px] relative shrink-0 w-full">
      <div
        className="css-g0mm18 flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[#32404f] text-[20px] text-center tracking-[-1.04px] uppercase"
        style={{ fontFamily: "'Geist Mono', 'Geist_Mono', monospace" }}
      >
        <p className="css-ew64yg leading-[normal]">work</p>
      </div>
      <Frame13 />
    </div>
  );
}

function Frame21() {
  return (
    <div id="ai-section" className="content-stretch flex flex-col font-normal gap-[32px] items-start leading-[0] relative shrink-0 text-[#32404f] tracking-[-1.04px] w-[755px]">
      <div
        className="flex flex-col justify-center relative shrink-0 text-[20px] uppercase w-full"
        style={{ fontFamily: "'Geist Mono', 'Geist_Mono', monospace" }}
      >
        <p className="css-4hzbpn leading-[normal]">AI</p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 text-[39px] w-full"
        style={{ fontFamily: "'Tiempos Text', 'Newsreader', serif", lineHeight: "1.15" }}
      >
        <p className="css-4hzbpn" style={{ fontFamily: "'Tiempos Text', 'Newsreader', serif" }}>
          <span className="leading-[1.15] text-[#1e242a]">{`I use `}</span>
          <span
            className="font-normal italic text-[#1e242a]"
            style={{ fontFamily: "'Tiempos Text', 'Newsreader', serif" }}
          >{`AI `}</span>
          <span className="text-[#1e242a]">as a thinking partner and productivity booster</span>
          <span className="text-[#808890]">{` to move faster from ambiguity to clarity.`}</span>
        </p>
      </div>
    </div>
  );
}

function AiThumbnail() {
  return (
    <div className="aspect-[488/420] w-full relative shrink-0" data-name="AI Thumbnail">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#bfbfbf] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgAiThumbnail} />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgAiThumbnail1} />
      </div>
    </div>
  );
}

function LottieThumbnail() {
  return (
    <div className="aspect-[488/420] w-full relative shrink-0" data-name="AI Thumbnail Lottie">
      <lottie-player
        src={aiChatLottie}
        autoplay
        loop
        mode="normal"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

function Frame5() {
  return (
    <div
      className="css-g0mm18 flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative flex-1 min-w-0 text-[#1e242a] text-[22px] tracking-[-0.64px]"
      style={{ fontFamily: "'Newsreader', 'Newsreader:Regular', serif" }}
    >
      <p className="css-ew64yg leading-[normal]">Lorem Ipsum</p>
    </div>
  );
}

function ProjectDesc() {
  return (
    <div className="content-stretch flex flex-wrap items-center justify-between gap-[12px] relative shrink-0 w-full box-border px-[8px]" data-name="Project Desc">
      <Frame5 />
      <div
        className="css-g0mm18 flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#858e97] text-[15px] uppercase"
        style={{ fontFamily: "'Geist Mono', 'Geist_Mono', monospace" }}
      >
        <p className="css-ew64yg leading-[22.5px]">B2B SAAS • WEB APP</p>
      </div>
    </div>
  );
}

function AiProject() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative w-full" data-name="AI Project">
      <LottieThumbnail />
      <ProjectDesc />
    </div>
  );
}

function PlaceholderProject() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative w-full" data-name="Placeholder Project">
      <div className="aspect-[488/420] w-full relative shrink-0 bg-[#f4f6f8] rounded" />
      <ProjectDesc />
    </div>
  );
}

function Frame14({ pair }: { pair: boolean[] }) {
  return (
    <div className="content-stretch grid grid-cols-2 gap-[24px] items-start relative w-full">
      {pair.map((isReal, idx) =>
        isReal ? <AiProject key={`proj-${idx}-real`} /> : <PlaceholderProject key={`proj-${idx}-placeholder`} />
      )}
    </div>
  );
}

function AiThumbnail1() {
  return (
    <div className="aspect-[488/420] w-full relative shrink-0" data-name="AI Thumbnail">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#bfbfbf] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgAiThumbnail} />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgAiThumbnail1} />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div
        className="css-g0mm18 flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative flex-1 min-w-0 text-[#1e242a] text-[22px] tracking-[-0.64px]"
        style={{ fontFamily: "'Newsreader', 'Newsreader:Regular', serif" }}
      >
        <p className="css-ew64yg leading-[normal]">Lorem Ipsum</p>
      </div>
    </div>
  );
}

function ProjectDesc1() {
  return (
    <div className="content-stretch flex flex-wrap items-center justify-between gap-[12px] relative shrink-0 w-full box-border px-[8px]" data-name="Project Desc">
      <Frame7 />
      <div
        className="css-g0mm18 flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#858e97] text-[15px] uppercase"
        style={{ fontFamily: "'Geist Mono', 'Geist_Mono', monospace" }}
      >
        <p className="css-ew64yg leading-[22.5px]">B2B SAAS • WEB APP</p>
      </div>
    </div>
  );
}

function AiProject1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative w-full" data-name="AI Project">
      <AiThumbnail1 />
      <ProjectDesc1 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative w-full">
      <AiProject1 />
    </div>
  );
}

function Frame17() {
  const cards = [true, false, false, false, false, false];
  const rows: boolean[][] = [];
  for (let i = 0; i < cards.length; i += 2) {
    rows.push(cards.slice(i, i + 2));
  }

  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative w-full">
      {rows.map((pair, idx) => (
        <Frame14 key={`projects-row-${idx}`} pair={pair} />
      ))}
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div
        className="flex flex-col font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#858e97] text-[20px] tracking-[-1.04px] uppercase w-[min-content]"
        style={{ fontFamily: "'Geist Mono', 'Geist_Mono', monospace" }}
      >
        <p className="css-4hzbpn leading-[normal]">Projects</p>
      </div>
      <Frame17 />
    </div>
  );
}

function WritingThumbnail() {
  return (
    <div className="aspect-[488/420] flex-[1_0_0] min-h-px min-w-px relative" data-name="Writing Thumbnail">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#bfbfbf] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgAiThumbnail1} />
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      {[...Array(3).keys()].map((_, i) => (
        <WritingThumbnail key={i} />
      ))}
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame16 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div
        className="flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[#858e97] text-[20px] tracking-[-1.04px] uppercase w-full"
        style={{ fontFamily: "'Geist Mono', 'Geist_Mono', monospace" }}
      >
        <p className="css-4hzbpn leading-[normal]">Failed ideas</p>
      </div>
      {[...Array(2).keys()].map((_, i) => (
        <Frame26 key={i} />
      ))}
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[68px] items-start px-0 py-[120px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebeced] border-b border-solid border-t inset-0 pointer-events-none" />
      <Frame21 />
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[120px] items-start relative shrink-0 w-[1000px]">
      <Frame8 />
      <Frame27 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#4d4d4d] text-[16px] tracking-[-0.15px] w-full">
        <p className="css-4hzbpn mb-0">{`I'm Alex, residing in NYC, where I craft the future as a `}</p>
        <p className="css-4hzbpn mb-0">{`multifaceted designer. I'm fervent about utilizing design `}</p>
        <p className="css-4hzbpn mb-0">{`thinking for addressing intricate issues and producing `}</p>
        <p className="css-4hzbpn mb-0">{`visually enticing and practical designs across diverse `}</p>
        <p className="css-4hzbpn">{`platforms. `}</p>
      </div>
    </div>
  );
}

function Container1() {
  return <div className="h-[24px] shrink-0 w-full" data-name="Container" />;
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#4d4d4d] text-[16px] tracking-[-0.15px] w-full">
        <p className="css-4hzbpn mb-0">{`As an individual, I'm inquisitive, compassionate, and `}</p>
        <p className="css-4hzbpn mb-0">{`constantly ready to grasp new knowledge. Cooperation is `}</p>
        <p className="css-4hzbpn mb-0">{`vital to me, and I excel at partnering with varied teams to `}</p>
        <p className="css-4hzbpn mb-0">{`develop efficient design solutions. I trust in the significance `}</p>
        <p className="css-4hzbpn mb-0">{`of transparent communication and proactive listening for `}</p>
        <p className="css-4hzbpn">{`establishing solid connections with clients and coworkers. `}</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <Container />
      <Container1 />
      <Container2 />
      <Container1 />
    </div>
  );
}

function Column() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Column">
      <div className="content-stretch flex flex-col gap-[32px] items-start pl-0 pr-[40px] py-0 relative w-full">
        <Paragraph />
        <Frame34 />
      </div>
    </div>
  );
}

function AvatarImageForAboutMePage() {
  return (
    <div className="w-full h-full" data-name="Avatar image for about me page">
      <img
        alt="Sue Hwang smiling outdoors"
        className="block w-full h-auto object-contain rounded-[8px]"
        src={imgAboutMe}
      />
    </div>
  );
}

function Image() {
  return (
    <AvatarImageForAboutMePage />
  );
}

function ImageWrapper() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[80%] mx-auto" data-name="Image Wrapper">
      <Image />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 5">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[16px] text-center tracking-[-0.5px]">
        <p className="css-ew64yg leading-[24px]">Download CV</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <Heading />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip px-[24px] py-[12px] relative rounded-[24px] shrink-0" data-name="Container">
      <div className="absolute inset-0 rounded-[24px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[24px]" />
      </div>
      <Text />
    </div>
  );
}

function LinkSecondary() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link - Secondary">
      <Container3 />
    </div>
  );
}

function Svg() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_700)" id="svg935183567">
          <path d={svgPaths.p1756e80} fill="var(--fill-0, #1A1A1A)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_700">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function X() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[2px] size-[20px] top-[2px]" data-name="X">
      <Svg />
    </div>
  );
}

function X1() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="X">
      <X />
    </div>
  );
}

function LinkXLink() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Link - X Link">
      <X1 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_694)" id="svg1353517358">
          <path d={svgPaths.p345a5a80} fill="var(--fill-0, #1A1A1A)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_694">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Dribbble() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[2px] size-[20px] top-[2px]" data-name="Dribbble">
      <Svg1 />
    </div>
  );
}

function Dribbble1() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Dribbble">
      <Dribbble />
    </div>
  );
}

function LinkDribbbleLink() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Link - Dribbble Link">
      <Dribbble1 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_691)" id="svg1333323039">
          <path d={svgPaths.p1db92700} fill="var(--fill-0, #1A1A1A)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_691">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LinkedIn() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[2px] size-[20px] top-[2px]" data-name="LinkedIn">
      <Svg2 />
    </div>
  );
}

function LinkedIn1() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="LinkedIn">
      <LinkedIn />
    </div>
  );
}

function LinkLinkedInLink() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Link - LinkedIn Link">
      <LinkedIn1 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_697)" id="svg2500590972">
          <path d={svgPaths.p3175e00} fill="var(--fill-0, #1A1A1A)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_697">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function GitHub() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[2px] size-[20px] top-[2px]" data-name="GitHub">
      <Svg3 />
    </div>
  );
}

function GitHub1() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="GitHub">
      <GitHub />
    </div>
  );
}

function LinkGitHubLink() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Link - GitHub Link">
      <GitHub1 />
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Social Links">
      <LinkXLink />
      <LinkDribbbleLink />
      <LinkLinkedInLink />
      <LinkGitHubLink />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <SocialLinks />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <LinkSecondary />
      <Container4 />
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Column">
      <ImageWrapper />
    </div>
  );
}

function Grid() {
  return (
    <div className="content-stretch flex gap-[40px] items-start justify-center relative shrink-0 w-full" data-name="Grid">
      <Column1 />
      <Column />
    </div>
  );
}

function WritingThumbnail1() {
  return (
    <div className="h-[166px] relative shrink-0 w-[193px]" data-name="Writing Thumbnail">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWritingThumbnail} />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#faedfc] content-stretch flex items-center justify-center pb-[4px] pt-[3px] px-[10px] relative rounded-[12px] shrink-0" data-name="Background">
      <div
        className="capitalize css-g0mm18 flex flex-col font-semibold justify-center leading-[0] relative shrink-0 text-[#1e242a] text-[13px] tracking-[-0.26px]"
        style={{ fontFamily: "'Geist Mono', monospace" }}
      >
        <p className="css-ew64yg leading-[normal]">TECH</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container5 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative">
      <Background />
      <div
        className="css-g0mm18 flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[#1e242a] text-[28px] tracking-[-0.64px]"
        style={{ fontFamily: "'Newsreader', serif" }}
      >
        <p className="css-ew64yg leading-[normal]">The power of networking for entrepreneurs</p>
      </div>
      <div
        className="flex flex-col font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#858e97] text-[15px] w-[min-content]"
        style={{ fontFamily: "'Geist', sans-serif" }}
      >
        <p className="css-4hzbpn leading-[22.5px]">Lorem ipsum dolor sit amet consectetur. Tellus tempus pharetra tristique ipsum pellentesque condimentum sit. Ultrices pulvinar fringilla congue metus id sapien. Sed non tortor feugiat urna id eget potenti. Leo vitae.</p>
      </div>
      <Container6 />
    </div>
  );
}

function WritingDesc() {
  return (
    <div className="content-stretch flex gap-[43px] items-center max-w-[1000px] relative shrink-0 w-[1000px]" data-name="Writing Desc">
      <WritingThumbnail1 />
      <Frame25 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[34px] items-start relative shrink-0">
      {[...Array(5).keys()].map((_, i) => (
        <WritingDesc key={i} />
      ))}
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[1000px] relative shrink-0 w-[1000px]">
      <div
        className="flex flex-col font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#858e97] text-[20px] tracking-[-1.04px] uppercase w-[min-content]"
        style={{ fontFamily: "'Geist Mono', 'Geist_Mono', monospace" }}
      >
        <p className="css-4hzbpn leading-[normal]">Writings</p>
      </div>
      <Frame28 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="Paragraph">
      <div className="css-g0mm18 flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[16px] tracking-[-0.15px]">
        <p className="css-ew64yg leading-[24px]">{`LECTURES & MENTORSHIP`}</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:Medium',sans-serif] font-medium gap-[4px] items-start leading-[0] relative shrink-0 text-[16px] tracking-[-0.25px] w-full" data-name="Text">
      <div className="css-g0mm18 flex flex-col justify-center relative shrink-0 text-[#1a1a1a]">
        <p className="css-ew64yg leading-[24px]">Moonz</p>
      </div>
      <div className="css-g0mm18 flex flex-col justify-center relative shrink-0 text-[#4d4d4d]">
        <p className="css-ew64yg leading-[24px]">Co-Founder</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Content">
      <Text1 />
    </div>
  );
}

function Line() {
  return (
    <div className="content-stretch flex gap-[40px] items-start pb-[32px] pt-0 px-0 relative shrink-0 w-full" data-name="Line">
      <Paragraph1 />
      {[...Array(3).keys()].map((_, i) => (
        <Content key={i} />
      ))}
      <div aria-hidden="true" className="absolute border-[#ebeced] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="Paragraph">
      <div className="css-g0mm18 flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[16px] tracking-[-0.15px]">
        <p className="css-ew64yg leading-[24px]">AWARDS</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:Medium',sans-serif] font-medium gap-[4px] items-start leading-[0] relative shrink-0 text-[16px] tracking-[-0.25px] w-full" data-name="Text">
      <div className="css-g0mm18 flex flex-col justify-center relative shrink-0 text-[#1a1a1a]">
        <p className="css-ew64yg leading-[24px]">Moonz</p>
      </div>
      <div className="css-g0mm18 flex flex-col justify-center relative shrink-0 text-[#4d4d4d]">
        <p className="css-ew64yg leading-[24px]">Co-Founder</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Content">
      <Text2 />
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex gap-[40px] items-start pb-[32px] pt-0 px-0 relative shrink-0 w-full" data-name="Card">
      <Paragraph2 />
      {[...Array(3).keys()].map((_, i) => (
        <Content1 key={i} />
      ))}
      <div aria-hidden="true" className="absolute border-[#ebeced] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="Paragraph">
      <div className="css-g0mm18 flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[16px] tracking-[-0.15px]">
        <p className="css-ew64yg leading-[24px]">PUBLIC SPEAKING</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:Medium',sans-serif] font-medium gap-[4px] items-start leading-[0] relative shrink-0 text-[16px] tracking-[-0.25px] w-full" data-name="Text">
      <div className="css-g0mm18 flex flex-col justify-center relative shrink-0 text-[#1a1a1a]">
        <p className="css-ew64yg leading-[24px]">Moonz</p>
      </div>
      <div className="css-g0mm18 flex flex-col justify-center relative shrink-0 text-[#4d4d4d]">
        <p className="css-ew64yg leading-[24px]">Co-Founder</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Content">
      <Text3 />
    </div>
  );
}

function Card1() {
  return (
    <div className="content-stretch flex gap-[40px] items-start pb-[32px] pt-0 px-0 relative shrink-0 w-full" data-name="Card">
      <Paragraph3 />
      <Content2 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0 w-full" data-name="Row">
      <Line />
      <Card />
      <Card1 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[1000px] relative shrink-0 w-[1000px]">
      <div
        className="flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[#858e97] text-[20px] tracking-[-1.04px] uppercase w-full"
        style={{ fontFamily: "'Geist Mono', 'Geist_Mono', monospace" }}
      >
        <p className="css-4hzbpn leading-[normal]">experience</p>
      </div>
      <Row />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[138px] items-start relative shrink-0 w-full">
      <Grid />
      <Frame29 />
      <Frame30 />
    </div>
  );
}

function Frame32() {
  return (
    <div id="about-section" className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div
        className="flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[#32404f] text-[20px] tracking-[-1.04px] uppercase w-full"
        style={{ fontFamily: "'Geist Mono', 'Geist_Mono', monospace" }}
      >
        <p className="css-4hzbpn leading-[normal]">about</p>
      </div>
      <Frame31 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[120px] items-start left-1/2 max-w-[1000px] top-[754px] translate-x-[-50%] w-[1000px]">
      <Frame24 />
      <Frame32 />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <div
        className="css-g0mm18 flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[#32404f] text-[16px] text-center tracking-[-0.5px] font-medium"
        style={{ fontFamily: "'Geist Mono', 'Geist_Mono', monospace" }}
      >
        <p className="css-ew64yg leading-[24px]">Work</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Link />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <Container7 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div
        className="css-g0mm18 flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[#32404f] text-[16px] text-center tracking-[-0.5px] font-medium"
        style={{ fontFamily: "'Geist Mono', 'Geist_Mono', monospace" }}
      >
        <p className="css-ew64yg leading-[24px]">AI</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <Frame18 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Link2 />
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <Container8 />
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <div
        className="css-g0mm18 flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[#32404f] text-[16px] text-center tracking-[-0.5px] font-medium"
        style={{ fontFamily: "'Geist Mono', 'Geist_Mono', monospace" }}
      >
        <p className="css-ew64yg leading-[24px]">About</p>
      </div>
  </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Link4 />
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <Container9 />
    </div>
  );
}

function Link6() {
  return (
    <a
      href="https://docs.google.com/document/d/1UC5EYCsM1c1HvalgWwdF4lWrzuidw9iy41GV7tdeHYo/edit?usp=sharing"
      target="_blank"
      rel="noreferrer noopener"
      className="content-stretch flex items-start justify-center relative shrink-0 cursor-pointer z-10"
      data-name="Link"
      style={{ pointerEvents: "auto" }}
    >
      <div
        className="css-g0mm18 flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[#32404f] text-[16px] text-center tracking-[-0.5px] font-medium"
        style={{ fontFamily: "'Geist Mono', 'Geist_Mono', monospace" }}
      >
        <p className="css-ew64yg leading-[24px]">Resume</p>
      </div>
    </a>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Link6 />
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <Container10 />
    </div>
  );
}

function Links({
  onWork,
  onAi,
  onAbout,
}: {
  onWork: () => void;
  onAi: () => void;
  onAbout: () => void;
}) {
  const baseBtn =
    "content-stretch flex items-start justify-center relative shrink-0 cursor-pointer bg-transparent border-none p-0 m-0";
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0" data-name="Links">
      <button type="button" onClick={onWork} className={baseBtn} aria-label="Go to Work section">
        <div
          className="css-g0mm18 flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[#32404f] text-[16px] text-center tracking-[-0.5px] font-medium"
          style={{ fontFamily: "'Geist Mono', 'Geist_Mono', monospace" }}
        >
          <p className="css-ew64yg leading-[24px]">Work</p>
        </div>
      </button>
      <button type="button" onClick={onAi} className={baseBtn} aria-label="Go to AI section">
        <div
          className="css-g0mm18 flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[#32404f] text-[16px] text-center tracking-[-0.5px] font-medium"
          style={{ fontFamily: "'Geist Mono', 'Geist_Mono', monospace" }}
        >
          <p className="css-ew64yg leading-[24px]">AI</p>
        </div>
      </button>
      <button type="button" onClick={onAbout} className={baseBtn} aria-label="Go to About section">
        <div
          className="css-g0mm18 flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[#32404f] text-[16px] text-center tracking-[-0.5px] font-medium"
          style={{ fontFamily: "'Geist Mono', 'Geist_Mono', monospace" }}
        >
          <p className="css-ew64yg leading-[24px]">About</p>
        </div>
      </button>
      <Link7 />
    </div>
  );
}

function Container11({ onWork, onAi, onAbout }: { onWork: () => void; onAi: () => void; onAbout: () => void }) {
  return (
    <div
      className="bg-white content-stretch flex items-center justify-center overflow-clip px-[24px] py-[12px] relative rounded-[24px] shrink-0"
      data-name="Container"
      style={{ fontFamily: "'Geist Mono', 'Geist_Mono', monospace" }}
    >
      <Links onWork={onWork} onAi={onAi} onAbout={onAbout} />
      <div className="absolute inset-0 rounded-[24px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[24px]" />
      </div>
    </div>
  );
}

function NavDesktop({ onWork, onAi, onAbout }: { onWork: () => void; onAi: () => void; onAbout: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-name="Nav - Desktop">
      <Container11 onWork={onWork} onAi={onAi} onAbout={onAbout} />
    </div>
  );
}

function Component({ scale, onWork, onAi, onAbout }: { scale: number; onWork: () => void; onAi: () => void; onAbout: () => void }) {
  return (
    <div className="content-stretch fixed flex flex-col items-start left-1/2 top-[24px] translate-x-[-50%] z-50" data-name="Component 1">
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top center",
          transition: "transform 200ms ease",
        }}
      >
        <NavDesktop onWork={onWork} onAi={onAi} onAbout={onAbout} />
      </div>
    </div>
  );
}

export default function LandingPage() {
  const [navScale, setNavScale] = useState(1);
  const lastScrollY = useRef(0);
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const prev = lastScrollY.current;

      // Subtle deadzone to avoid jitter on tiny scrolls
      if (current <= 4) {
        setNavScale(1);
      } else if (current > prev + 4) {
        setNavScale(0.7);
      } else if (current < prev - 4) {
        setNavScale(1);
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dotPatternStyle = {
    backgroundImage: `radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px)`,
    backgroundSize: "24px 24px",
    backgroundPosition: "0 0",
    backgroundRepeat: "repeat",
    backgroundColor: "#fbfdfd",
  } satisfies React.CSSProperties;

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden style={dotPatternStyle} />
      <div
        className="bg-top-left relative z-10 w-full h-full"
        data-name="Landing Page"
        style={{
          backgroundColor: "#fbfdfd",
          backgroundImage: `
            url('${imgLandingPage}'),
            linear-gradient(90deg, rgb(251, 253, 253) 0%, rgb(251, 253, 253) 100%)
          `,
          backgroundSize: "179px 574px, auto auto",
          backgroundPosition: "left top, left top",
          backgroundRepeat: "no-repeat, no-repeat",
        }}
      >
        <Frame20 />
        <Frame33 />
        <Component
          scale={navScale}
          onWork={() => scrollToSection("work-section")}
          onAi={() => scrollToSection("ai-section")}
          onAbout={() => scrollToSection("about-section")}
        />
      </div>
    </>
  );
}
