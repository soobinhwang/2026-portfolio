import { useEffect, useRef, useState } from "react";
import svgPaths from "./svg-m1k5znvmzs";
import { Link as RouterLink } from "react-router";
import Footer from "../app/components/Footer";
import NavBar from "../app/components/NavBar";
import imgEllipse440 from "../assets/work/engagement-platform/87bcf6cc5a6f499816d2a7d5fa8cd9b840c67f41.png";
import imgAdminInterface1 from "../assets/work/engagement-platform/e2603487797800f429d28e829f2654d0a052c61f.png";
import imgDtAdminViewVer2 from "../assets/work/engagement-platform/e0d6461f579531510d4283e58dda859846a30a11.png";
import imgDtVer1 from "../assets/work/engagement-platform/0f3d0a40412ffd775e20a91e6bc7489d4b02b508.png";
import imgTheme8 from "../assets/work/engagement-platform/142e8ad4399e3737f8836f0c021b1eed2751ab1e.png";
import imgTheme9 from "../assets/work/engagement-platform/107b4f9eba8dc7594cc97fe6f6cb6142ec0f7e56.png";
import imgAvatar from "../assets/work/engagement-platform/2f1190870d753151f58657595136f67c584b5c8c.png";
import imgAvatar1 from "../assets/work/engagement-platform/2780e16db1a4a364d3d872737f7fe9563d7abb29.png";
import imgAvatar2 from "../assets/work/engagement-platform/d688ab8bff2aebfc3cab587865468c4713ecad78.png";
import imgAvatar3 from "../assets/work/engagement-platform/c9b5ff46a30dabca6ca1e017e1047cd06f04270b.png";
import imgAvatar4 from "../assets/work/engagement-platform/504bc691102d8a6217d1fc1f8e79a810b1842a0d.png";
import imgAvatar5 from "../assets/work/engagement-platform/ca269fff9961afb9c6a84bffddcb988a6fad7166.png";
import imgAvatar6 from "../assets/work/engagement-platform/2e2cf1b6f441c6f28c3b0e1e0eb4863eb80b7401.png";
import imgAvatar7 from "../assets/work/engagement-platform/555cb3735701db8d4318f0d93edd1f4b64493b37.png";
import imgAvatar8 from "../assets/work/engagement-platform/e355a90b1eddfbc917a39138b5c2e12ac350dfe8.png";
import imgAvatar9 from "../assets/work/engagement-platform/6ec94186cc6e3e60f69ecac1443984f93e6078eb.png";
import imgMbCoins from "../assets/work/engagement-platform/a6b2f36b1850b003cedbea43e49b5c36fea4b3f5.png";
import imgAvatar10 from "../assets/work/engagement-platform/67da9fddd372b1b5b44ffef41eed6ceb810ddf8a.png";
import imgAvatar11 from "../assets/work/engagement-platform/261d783da4147da7fea569d1940840845897657f.png";
import imgAvatar12 from "../assets/work/engagement-platform/30d4a462ea7b6e1428ffcb7ed5d646ca522e5a23.png";
import imgAvatar13 from "../assets/work/engagement-platform/0728c923a00edf130deb71506d0756fc0d57a8b8.png";
import imgAvatar14 from "../assets/work/engagement-platform/d9ddce204792163ce745396135bdc5f320b012d7.png";
import imgAvatar15 from "../assets/work/engagement-platform/3bbe168eab287460eef89ff5351e750f87e0634b.png";
import imgAvatar16 from "../assets/work/engagement-platform/05be041b58b5e1fe37be4a6bb5a74f76d7c0f06d.png";
import imgAvatar17 from "../assets/work/engagement-platform/264ae50c597aef89a0c4eff3aa6d5fa1503db174.png";
import imgAvatar18 from "../assets/work/engagement-platform/1e65df21602018c71a018d78702cd0b61812ace1.png";
import imgAvatar19 from "../assets/work/engagement-platform/c14798cf5293c57333d6b58c079ca634d833acf3.png";
import imgAvatar20 from "../assets/work/engagement-platform/ec4bb3d007c9e3d3b34222814770e2f8221202ce.png";
import imgAvatar21 from "../assets/work/engagement-platform/93e92ab682b804ea308d62e6d6003a28daac1368.png";
import imgAvatar22 from "../assets/work/engagement-platform/e43c588f502755e8f59060d98927ab6e9871038c.png";
import imgAvatar23 from "../assets/work/engagement-platform/95d47e82a94aed87b9ee52688077eb596232d2f6.png";
import imgAvatar24 from "../assets/work/engagement-platform/cc20770e67dac754b967ba908e8faaf230d75581.png";
import imgAvatar25 from "../assets/work/engagement-platform/2519907048bfdaf866aedaf13d7e1cac6badd979.png";
import imgRectangle204 from "../assets/work/engagement-platform/6cf2b57b21cc5bf12829645345b3e123264e1fda.png";
import imgRectangle205 from "../assets/work/engagement-platform/fa41d77202f3061eba564b76c692ec1aa055355a.png";
import imgRectangle206 from "../assets/work/engagement-platform/6167d7216846ba5bf84d55e81718bb586703068f.png";
import imgRectangle194 from "../assets/work/engagement-platform/eae313a48883a46e7a2a60ee806e73a8052191be.png";
import imgRectangle195 from "../assets/work/engagement-platform/fc358c0328ef1d220795f00d207ad41c6830996e.png";
import imgRectangle196 from "../assets/work/engagement-platform/2a29e88ec4419bc60da3cfd58de07f8fd094c817.png";
import imgRectangle197 from "../assets/work/engagement-platform/641fb802e0cc701fedbc2cb3c06943fa5536610a.png";
import imgBackground from "../assets/work/engagement-platform/Background.png";
import imgDetailThumbnail from "../assets/work/engagement-platform/P1-Detail-Thumbnail.png";
import imgChallenge from "../assets/work/engagement-platform/Challenge.png";
import videoRefinedSolution from "../assets/work/engagement-platform/refined solution.mov";
import imgSolutionOnePrimary from "../assets/work/engagement-platform/Solution 1 - 1.png";
import imgSolutionOneSecondary from "../assets/work/engagement-platform/Solution 1 - 2.png";
import imgSolutionTwo from "../assets/work/engagement-platform/Solution 2.png";
import videoReusableComponent1 from "../assets/work/engagement-platform/reusable component 1.mp4";
import videoReusableComponent2 from "../assets/work/engagement-platform/reusable component 2.mp4";
import imgSolutionThree from "../assets/work/engagement-platform/Solution 3.png";
import imgMyRole from "../assets/work/engagement-platform/My Role.png";
import imgNeedSynthesis from "../assets/work/engagement-platform/Need Synthesis.png";
import imgKeyInsight1 from "../assets/work/engagement-platform/Key Insights 1.png";
import imgKeyInsight2 from "../assets/work/engagement-platform/Key Insights 2.png";
import imgKeyInsight3 from "../assets/work/engagement-platform/Key Insights 3.png";
import imgDesignDirection from "../assets/work/engagement-platform/Design Direction.png";
import imgRoadmap from "../assets/work/engagement-platform/Roadmap.png";
import imgDesignOutcome2 from "../assets/work/engagement-platform/Design Outcome 2.png";
import imgDesignOutcome3 from "../assets/work/engagement-platform/Design Outcome 3.png";
import imgDesignOutcome4 from "../assets/work/engagement-platform/Design Outcome 4.png";
import imgDesignOutcome1 from "../assets/work/engagement-platform/Design Outcome 1.png";

function Frame255() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase whitespace-nowrap">
        <p className="leading-[22.5px]">impact</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center min-w-full relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-[min-content]">
        <p className="leading-[46px] whitespace-pre-wrap">Helped the business grow without growing the team</p>
      </div>
    </div>
  );
}

function StaggeredNumber({ text, isVisible }: { text: string; isVisible: boolean }) {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-center text-center relative shrink-0 w-fit">
      <div className="flex flex-col font-newsreader font-semibold justify-center leading-[0] relative shrink-0 text-[#32404f] text-[62px] tracking-[-0.424px] whitespace-nowrap">
        <p className="leading-[normal] overflow-hidden">
          {Array.from(text).map((char, index) => (
            <span
              key={`${char}-${index}`}
              className={`inline-block transition-all duration-700 ease-out will-change-transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
              }`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

function Frame5({ isVisible }: { isVisible: boolean }) {
  return <StaggeredNumber text="+30%" isVisible={isVisible} />;
}

function Container1({ isVisible }: { isVisible: boolean }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative text-center w-full" data-name="Container">
      <Frame5 isVisible={isVisible} />
      <div className="flex flex-col font-geist font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[#5b6a79] w-fit">
        <p className="leading-[22.5px] whitespace-pre-wrap">Revenue growth</p>
      </div>
    </div>
  );
}

function Frame6({ isVisible }: { isVisible: boolean }) {
  return <StaggeredNumber text="+500" isVisible={isVisible} />;
}

function Container2({ isVisible }: { isVisible: boolean }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative text-center w-full" data-name="Container">
      <Frame6 isVisible={isVisible} />
      <div className="flex flex-col font-geist font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[#5b6a79] w-fit">
        <p className="leading-[22.5px] whitespace-pre-wrap">Client programs</p>
      </div>
    </div>
  );
}

function Frame7({ isVisible }: { isVisible: boolean }) {
  return <StaggeredNumber text="~50%" isVisible={isVisible} />;
}

function Container3({ isVisible }: { isVisible: boolean }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative text-center w-full" data-name="Container">
      <Frame7 isVisible={isVisible} />
      <div className="flex flex-col font-geist font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[#5b6a79] w-fit">
        <p className="leading-[22.5px] whitespace-pre-wrap">Less change tickets</p>
      </div>
    </div>
  );
}

function Container() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let revealed = false;

    const reveal = () => {
      if (revealed) return;
      revealed = true;
      setIsVisible(true);
    };

    const isInView = () => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.85 && rect.bottom > 0;
    };

    if (isInView()) {
      reveal();
      return;
    }

    let observer: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            reveal();
            observer?.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
    }

    const onScroll = () => {
      if (isInView()) {
        reveal();
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="content-stretch grid grid-cols-1 min-[481px]:grid-cols-3 gap-[24px] min-[481px]:gap-[40px] items-start relative w-full" data-name="Container">
      <Container1 isVisible={isVisible} />
      <Container2 isVisible={isVisible} />
      <Container3 isVisible={isVisible} />
    </div>
  );
}

function Frame265() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Container />
    </div>
  );
}

function Property() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[50px] items-start justify-self-stretch max-w-[774px] relative row-[2] self-start shrink-0" data-name="Property">
      <Frame255 />
      <Frame265 />
    </div>
  );
}

function SectionContainer1() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] relative shrink-0 w-full" data-name="Section Container">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase whitespace-nowrap">
        <p className="leading-[22.5px]">My Role</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center min-w-full relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-[min-content]">
        <p className="leading-[46px] whitespace-pre-wrap">Led the shift from one-off builds to a template-driven product</p>
      </div>
      <div className="flex flex-col font-geist justify-center min-w-full relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-[min-content]">
        <p className="leading-[22.5px] whitespace-pre-wrap">
          {`I led problem identification and synthesis, spotting a scalability issue through repeated one-off delivery patterns. I translated stakeholder and user input into shared system needs, `}
          <br aria-hidden="true" />
          then defined the system and CMS foundations before moving into interface design.
        </p>
      </div>
    </div>
  );
}

function SubsectionContainer1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="Subsection Container">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[98px]">
        <img loading="lazy" decoding="async" alt="" className="block max-w-none size-full" height="98" src={imgEllipse440} width="98" />
      </div>
      <div className="col-1 ml-[33.76px] mt-[33.76px] relative row-1 size-[30.489px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.4889 30.4889">
          <circle cx="15.2444" cy="15.2444" fill="var(--fill-0, #32404F)" id="Ellipse 443" r="15.2444" />
        </svg>
      </div>
    </div>
  );
}

function SubsectionContainer2() {
  return (
    <div className="h-[90px] relative shrink-0 w-[139px]" data-name="Subsection Container">
      <div className="absolute inset-[-0.56%_-0.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 91">
          <g id="Subsection Container">
            <circle cx="45.5" cy="45.5" id="Ellipse 445" r="45" stroke="var(--stroke-0, #32404F)" strokeDasharray="3 3" />
            <circle cx="94.5" cy="45.5" id="Ellipse 446" r="45" stroke="var(--stroke-0, #32404F)" strokeDasharray="3 3" />
            <path d={svgPaths.p248df700} fill="var(--fill-0, #32404F)" id="Intersect" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SubsectionContainer3() {
  return (
    <div className="relative shrink-0 size-[98px]" data-name="Subsection Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 98 98">
        <g id="Subsection Container">
          <circle cx="49" cy="49" fill="var(--fill-0, #32404F)" id="Ellipse 442" r="49" />
          <circle cx="49.2444" cy="49.2444" fill="var(--fill-0, white)" fillOpacity="0.1" id="Ellipse 444" r="15.2444" />
          <g id="Subsection Container_2">
            <path d="M29 49H69" id="Vector 1547" stroke="url(#paint0_linear_1_895569)" strokeLinecap="round" />
            <path d="M49 29L49 69" id="Vector 1548" stroke="url(#paint1_linear_1_895569)" strokeLinecap="round" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_895569" x1="49" x2="49" y1="49" y2="50">
            <stop stopColor="#BFBFBF" />
            <stop offset="0.605769" stopColor="#ACACAC" />
            <stop offset="0.9999" stopColor="#A0A0A0" />
            <stop offset="1" stopColor="#595959" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_895569" x1="49" x2="48" y1="49" y2="49">
            <stop stopColor="#BFBFBF" />
            <stop offset="0.605769" stopColor="#ACACAC" />
            <stop offset="0.9999" stopColor="#A0A0A0" />
            <stop offset="1" stopColor="#595959" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function SubsectionContainer() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[50px] items-center left-[calc(50%+0.14px)] top-[70px]" data-name="Subsection Container">
      <SubsectionContainer1 />
      <div className="flex h-[20.073px] items-center justify-center relative shrink-0 w-[34.638px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-75">
          <div className="h-[32.635px] relative w-[12.037px]" data-name="arrow-21">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0368 32.6346">
              <path d={svgPaths.p220a0800} fill="var(--fill-0, #858E97)" id="arrow-21" />
            </svg>
          </div>
        </div>
      </div>
      <SubsectionContainer2 />
      <div className="flex h-[20.073px] items-center justify-center relative shrink-0 w-[34.638px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-75">
          <div className="h-[32.635px] relative w-[12.037px]" data-name="arrow-21">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0368 32.6346">
              <path d={svgPaths.p220a0800} fill="var(--fill-0, #858E97)" id="arrow-21" />
            </svg>
          </div>
        </div>
      </div>
      <SubsectionContainer3 />
    </div>
  );
}

function SectionImage() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-full" data-name="Section Image">
      <div className="overflow-clip relative rounded-[inherit] w-full">
        <img loading="lazy" decoding="async" alt="" className="block w-full h-auto object-contain" src={imgMyRole} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ContentSections() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch max-w-[774px] relative row-[3] self-start shrink-0" data-name="Content Sections">
      <SectionContainer1 />
      <SectionImage />
    </div>
  );
}

function Frame258() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Solution 1</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Layout: Prioritizing what users do</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">To support clarity and predictability, the key design decision was to split the landing page into 3 clear sections based on the user intent.</p>
      </div>
    </div>
  );
}

function SectionImageSm() {
  return (
    <div className="bg-[#f0f3f5] h-[300px] sm:h-[420px] relative shrink-0 w-full sm:w-[371px]" data-name="section image sm">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgSolutionOnePrimary} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f3f5] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col font-normal items-start leading-[0] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#32404f] text-[20px] tracking-[-0.424px] w-full">
        <p className="leading-[30px] whitespace-pre-wrap">Primary Section</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Program purpose and core actions</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative w-full sm:flex-[1_0_0] sm:min-h-px sm:min-w-px order-1" data-name="Container">
      <SectionImageSm />
      <Container5 />
    </div>
  );
}

function SectionImageSm1() {
  return (
    <div className="bg-[#f0f3f5] h-[300px] sm:h-[420px] relative shrink-0 w-full sm:w-[371px]" data-name="section image sm">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgSolutionOneSecondary} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f3f5] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col font-normal items-start leading-[0] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#32404f] text-[20px] tracking-[-0.424px] w-full">
        <p className="leading-[30px] whitespace-pre-wrap">Secondary + Tertiary Sections</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Context and rewards discovery</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative w-full sm:flex-[1_0_0] sm:min-h-px sm:min-w-px order-2" data-name="Container">
      <SectionImageSm1 />
      <Container7 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[32px] items-start relative shrink-0 w-full">
      <Container4 />
      <Container6 />
    </div>
  );
}

function Frame268() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame1 />
    </div>
  );
}

function Property1() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch max-w-[774px] relative row-[7] self-start shrink-0" data-name="Property">
      <Frame258 />
      <Frame268 />
    </div>
  );
}

function Frame256() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.38)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Solution 3</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">CMS Improvement: Strengthening self-service</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">To make the system operationally scalable, I updated the legacy CMS with clearer configuration options, improved language, and visual previews. This reduced support tickets and enabled true self-service.</p>
      </div>
    </div>
  );
}

function SectionImageLg() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-full" data-name="section image lg">
      <div className="overflow-clip relative rounded-[inherit] w-full">
        <img loading="lazy" decoding="async" alt="" className="block w-full h-auto object-contain" src={imgSolutionThree} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame266() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <SectionImageLg />
    </div>
  );
}

function Property2() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch max-w-[774px] relative row-[9] self-start shrink-0" data-name="Property">
      <Frame256 />
      <Frame266 />
    </div>
  );
}

function Frame257() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">roadmap</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Bringing structure to an ambiguous problem</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">With the team, I shaped the roadmap collaboratively based on dependency and impact, stabilizing the core programme first, extending proven patterns to secondary use cases, introducing reusable engagement widgets, and updating the CMS last to support clear configuration boundaries.</p>
      </div>
    </div>
  );
}

function Frame186() {
  return (
    <div className="bg-[#e2e8ed] content-stretch flex items-center justify-between px-[12px] py-[8.097px] relative rounded-[2.699px] shrink-0 w-[225px]">
      <p className="font-geist font-medium relative shrink-0 text-[rgba(50,64,79,0.74)]">Phase 01</p>
      <p className="font-geist font-normal relative shrink-0 text-[#858e97]">Sep 2022</p>
    </div>
  );
}

function Frame188() {
  return (
    <div className="bg-[#e2e8ed] content-stretch flex items-center justify-between px-[12px] py-[8.097px] relative rounded-[2.699px] shrink-0 w-[225px]">
      <p className="font-geist font-medium relative shrink-0 text-[rgba(50,64,79,0.74)]">Phase 02</p>
      <p className="font-geist font-normal relative shrink-0 text-[#858e97]">Nov 2022</p>
    </div>
  );
}

function Frame189() {
  return (
    <div className="bg-[#e2e8ed] content-stretch flex items-center justify-between px-[12px] py-[8.097px] relative rounded-[2.699px] shrink-0 w-[225px]">
      <p className="font-geist font-medium relative shrink-0 text-[rgba(50,64,79,0.74)]">Phase 03</p>
      <p className="font-geist font-normal relative shrink-0 text-[#858e97]">Jan 2023</p>
    </div>
  );
}

function Frame187() {
  return (
    <div className="content-stretch flex gap-[4.049px] items-start leading-[1.5] relative shrink-0 text-[8.772px] w-full">
      <Frame186 />
      <Frame188 />
      <Frame189 />
    </div>
  );
}

function Frame201() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4.049px] items-center leading-[0] not-italic relative shrink-0 text-[#858e97] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[5.398px]">
        <p className="leading-[normal]">►</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[9.447px]">
        <p className="leading-[1.5]">{`Direction `}</p>
      </div>
    </div>
  );
}

function Frame190() {
  return (
    <div className="bg-[#32404f] flex-[1_0_0] min-h-px min-w-px relative rounded-[5.398px]">
      <div aria-hidden="true" className="absolute border-[#32404f] border-[0.675px] border-solid inset-0 pointer-events-none rounded-[5.398px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[14.845px] py-[21.592px] relative w-full">
          <p className="flex-[1_0_0] font-geist font-normal leading-[1.5] min-h-px min-w-px relative text-[#dfdfdf] text-[10.796px] text-center whitespace-pre-wrap">Layout and Reusable Components while leveraged existing designs</p>
        </div>
      </div>
    </div>
  );
}

function Frame194() {
  return (
    <div className="bg-[#32404f] flex-[1_0_0] min-h-px min-w-px relative rounded-[5.398px]">
      <div aria-hidden="true" className="absolute border-[#32404f] border-[0.675px] border-solid inset-0 pointer-events-none rounded-[5.398px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[14.845px] py-[21.592px] relative w-full">
          <p className="flex-[1_0_0] font-geist font-normal leading-[1.5] min-h-px min-w-px relative text-[#dfdfdf] text-[10.796px] text-center whitespace-pre-wrap">Reusable Components with Individual Engagement Widgets</p>
        </div>
      </div>
    </div>
  );
}

function Frame195() {
  return (
    <div className="bg-[#32404f] flex-[1_0_0] min-h-px min-w-px relative rounded-[5.398px] self-stretch">
      <div aria-hidden="true" className="absolute border-[#32404f] border-[0.675px] border-solid inset-0 pointer-events-none rounded-[5.398px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[14.845px] py-[21.592px] relative size-full">
          <p className="flex-[1_0_0] font-geist font-normal leading-[1.5] min-h-px min-w-px relative text-[#dfdfdf] text-[10.796px] text-center whitespace-pre-wrap">CMS Improvement</p>
        </div>
      </div>
    </div>
  );
}

function Frame196() {
  return (
    <div className="content-stretch flex gap-[4.049px] items-start relative shrink-0 w-full">
      <Frame190 />
      <Frame194 />
      <Frame195 />
    </div>
  );
}

function Frame198() {
  return (
    <div className="content-stretch flex flex-col gap-[8.097px] items-start relative shrink-0 w-full">
      <Frame201 />
      <Frame196 />
    </div>
  );
}

function Frame202() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4.049px] items-center leading-[0] not-italic relative shrink-0 text-[#858e97] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[5.398px]">
        <p className="leading-[normal]">►</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[9.447px]">
        <p className="leading-[1.5]">What We Designed</p>
      </div>
    </div>
  );
}

function Frame191() {
  return (
    <div className="bg-[#32404f] flex-[1_0_0] h-[64.776px] min-h-px min-w-px relative rounded-[5.398px]">
      <div aria-hidden="true" className="absolute border-[#32404f] border-[0.675px] border-solid inset-0 pointer-events-none rounded-[5.398px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16.194px] py-[21.592px] relative size-full">
          <p className="flex-[1_0_0] font-geist font-normal leading-[1.5] min-h-px min-w-px relative text-[#dfdfdf] text-[10.796px] text-center whitespace-pre-wrap">{`Reward Program & Storefront`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame192() {
  return (
    <div className="bg-[#32404f] flex-[1_0_0] h-[64.776px] min-h-px min-w-px relative rounded-[5.398px]">
      <div aria-hidden="true" className="absolute border-[#32404f] border-[0.675px] border-solid inset-0 pointer-events-none rounded-[5.398px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16.194px] py-[21.592px] relative size-full">
          <p className="flex-[1_0_0] font-geist font-normal leading-[1.5] min-h-px min-w-px relative text-[#dfdfdf] text-[10.796px] text-center whitespace-pre-wrap">
            {`Sales Incentives & Years of Service & `}
            <br aria-hidden="true" />
            Gifting Programs
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame193() {
  return (
    <div className="bg-[#32404f] flex-[1_0_0] h-[64.776px] min-h-px min-w-px relative rounded-[5.398px]">
      <div aria-hidden="true" className="absolute border-[#32404f] border-[0.675px] border-solid inset-0 pointer-events-none rounded-[5.398px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16.194px] py-[21.592px] relative size-full">
          <p className="flex-[1_0_0] font-geist font-normal leading-[1.5] min-h-px min-w-px relative text-[#dfdfdf] text-[10.796px] text-center whitespace-pre-wrap">CMS UX for Non-Designers</p>
        </div>
      </div>
    </div>
  );
}

function Frame197() {
  return (
    <div className="content-stretch flex gap-[4.049px] items-start relative shrink-0 w-full">
      <Frame191 />
      <Frame192 />
      <Frame193 />
    </div>
  );
}

function Frame199() {
  return (
    <div className="content-stretch flex flex-col gap-[8.097px] items-start relative shrink-0 w-full">
      <Frame202 />
      <Frame197 />
    </div>
  );
}

function Frame200() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[45px] top-[38px] w-[683px]">
      <Frame187 />
      <Frame198 />
      <Frame199 />
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents left-[45px] top-[38px]">
      <Frame200 />
      <div className="absolute h-[232px] left-[272px] top-[39px] w-0">
        <div className="absolute inset-[0_-0.34px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.674752 232">
            <path d="M0.337376 232V0" id="Vector 1498" stroke="url(#paint0_linear_1_830724)" strokeDasharray="3.37 3.37" strokeOpacity="0.25" strokeWidth="0.674752" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_830724" x1="0.837376" x2="0.837376" y1="0" y2="232">
                <stop stopColor="#181919" />
                <stop offset="1" stopColor="#464646" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[233px] left-[501px] top-[38px] w-0">
        <div className="absolute inset-[0_-0.34px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.674752 233">
            <path d="M0.337376 233V0" id="Vector 1497" stroke="url(#paint0_linear_1_884762)" strokeDasharray="3.37 3.37" strokeOpacity="0.25" strokeWidth="0.674752" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_884762" x1="0.837376" x2="0.837376" y1="0" y2="233">
                <stop stopColor="#181919" />
                <stop offset="1" stopColor="#464646" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function SectionImageLg1() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-full" data-name="section image lg">
      <div className="overflow-clip relative rounded-[inherit] w-full">
        <img loading="lazy" decoding="async" alt="" className="block w-full h-auto object-contain" src={imgRoadmap} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame267() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <SectionImageLg1 />
    </div>
  );
}

function Property3() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch max-w-[774px] relative row-[15] self-start shrink-0" data-name="Property">
      <Frame257 />
      <Frame267 />
    </div>
  );
}

function Frame259() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Need Synthesis</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Listening to stakeholders for common needs</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">
          {`My goal was to identify shared needs that could inform a scalable design direction. `}
          <br aria-hidden="true" />I gathered perspectives from everyone involved in using, delivering, and maintaining the programmes, and analyses their pain points to find common patterns.
        </p>
      </div>
    </div>
  );
}

function Frame182() {
  return (
    <div className="bg-[#32404f] content-stretch flex flex-col gap-[2.322px] items-center justify-center leading-[1.5] mr-[-10px] opacity-94 relative rounded-[773.864px] shrink-0 size-[147.034px]">
      <p className="font-geist font-normal relative shrink-0 text-[8.512px] text-[rgba(255,255,255,0.7)]">01</p>
      <p className="font-geist font-medium relative shrink-0 text-[9px] text-white">End Users</p>
    </div>
  );
}

function Frame183() {
  return (
    <div className="bg-[#32404f] content-stretch flex flex-col gap-[2.322px] items-center justify-center leading-[1.5] mr-[-10px] opacity-94 relative rounded-[773.864px] shrink-0 size-[147.034px]">
      <p className="font-geist font-normal relative shrink-0 text-[8.512px] text-[rgba(255,255,255,0.7)]">02</p>
      <p className="font-geist font-medium relative shrink-0 text-[9px] text-white">{`CS Team & Business Analysts`}</p>
    </div>
  );
}

function Frame184() {
  return (
    <div className="bg-[#32404f] content-stretch flex flex-col gap-[2.322px] items-center justify-center leading-[1.5] mr-[-10px] opacity-94 relative rounded-[773.864px] shrink-0 size-[147.034px]">
      <p className="font-geist font-normal relative shrink-0 text-[8.512px] text-[rgba(255,255,255,0.7)]">03</p>
      <p className="font-geist font-medium relative shrink-0 text-[9px] text-white">{`UX Team & Devs`}</p>
    </div>
  );
}

function Frame185() {
  return (
    <div className="bg-[#32404f] content-stretch flex flex-col gap-[2.322px] items-center justify-center leading-[1.5] mr-[-10px] opacity-94 relative rounded-[773.864px] shrink-0 size-[147.034px]">
      <p className="font-geist font-normal relative shrink-0 text-[8.512px] text-[rgba(255,255,255,0.7)]">04</p>
      <p className="font-geist font-medium relative shrink-0 text-[9px] text-white">Clients</p>
    </div>
  );
}

function Frame181() {
  return (
    <div className="absolute content-stretch flex h-[184.18px] items-center left-[92px] pl-[18.573px] pr-[28.573px] py-[18.573px] rounded-[773.864px] top-[41.1px]">
      <div aria-hidden="true" className="absolute border-[0.774px] border-[rgba(50,64,79,0.8)] border-dashed inset-0 pointer-events-none rounded-[773.864px]" />
      <Frame182 />
      <Frame183 />
      <Frame184 />
      <Frame185 />
    </div>
  );
}

function Group33() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+0.6px)] top-[calc(50%+0.19px)]">
      <Frame181 />
      <div className="-translate-x-1/2 absolute flex items-center justify-center left-[calc(50%-12.1px)] size-[6.191px] top-[222.18px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="relative size-[6.191px]">
            <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.36148 4.64318">
                <path d={svgPaths.p2acaa100} fill="var(--fill-0, #32404F)" id="Polygon 3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex items-center justify-center left-[calc(50%-11.9px)] size-[6.191px] top-[38px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="relative size-[6.191px]">
            <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.36148 4.64318">
                <path d={svgPaths.p2acaa100} fill="var(--fill-0, #32404F)" id="Polygon 4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+296.1px)] size-[6.191px] top-[calc(50%+0.1px)]">
        <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.36148 4.64318">
            <path d={svgPaths.p2acaa100} fill="var(--fill-0, #32404F)" id="Polygon 5" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-294.9px)] size-[6.191px] top-[calc(50%+0.1px)]">
        <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.36148 4.64318">
            <path d={svgPaths.p2acaa100} fill="var(--fill-0, #32404F)" id="Polygon 5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SectionImageLg2() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-full" data-name="section image lg">
      <div className="overflow-clip relative rounded-[inherit] w-full">
        <img loading="lazy" decoding="async" alt="" className="block w-full h-auto object-contain" src={imgNeedSynthesis} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame269() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <SectionImageLg2 />
    </div>
  );
}

function Property4() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start max-w-[774px] relative row-[12] shrink-0 w-full" data-name="Property">
      <Frame259 />
      <Frame269 />
    </div>
  );
}

function Frame260() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">design outcome</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">One system, four scalable programs</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">The same approach was applied across four program types, supporting different business goals while maintaining a consistent, scalable structure.</p>
      </div>
    </div>
  );
}

function SectionImageSm2() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-full sm:w-[371px]" data-name="section image sm">
      <div className="overflow-clip relative rounded-[inherit] w-full">
        <img loading="lazy" decoding="async" alt="" className="block w-full h-auto object-contain" src={imgDesignOutcome1} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f3f5] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col font-normal items-start leading-[0] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#32404f] text-[20px] tracking-[-0.424px] w-full">
        <p className="leading-[30px] whitespace-pre-wrap">Employee Recognition</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Ongoing peer and manager recognition with social activity and milestones.</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative w-full sm:flex-[1_0_0] sm:min-h-px sm:min-w-px order-1" data-name="Container">
      <SectionImageSm2 />
      <Container9 />
    </div>
  );
}

function SectionImageSm3() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-full sm:w-[371px]" data-name="section image sm">
      <div className="overflow-clip relative rounded-[inherit] w-full">
        <img loading="lazy" decoding="async" alt="" className="block w-full h-auto object-contain" src={imgDesignOutcome2} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f3f5] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col font-normal items-start leading-[0] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#32404f] text-[20px] tracking-[-0.424px] w-full">
        <p className="leading-[30px] whitespace-pre-wrap">Incentives</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Time-bound, goal-driven programmes focused on performance and completion.</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative w-full sm:flex-[1_0_0] sm:min-h-px sm:min-w-px order-2" data-name="Container">
      <SectionImageSm3 />
      <Container11 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[32px] items-start relative shrink-0 w-full">
      <Container8 />
      <Container10 />
    </div>
  );
}

function SectionImageSm4() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-full sm:w-[371px]" data-name="section image sm">
      <div className="overflow-clip relative rounded-[inherit] w-full">
        <img loading="lazy" decoding="async" alt="" className="block w-full h-auto object-contain" src={imgDesignOutcome3} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f3f5] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col font-normal items-start leading-[0] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#32404f] text-[20px] tracking-[-0.424px] w-full">
        <p className="leading-[30px] whitespace-pre-wrap">Customer Loyalty</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Customer-facing rewards programmes with earn-and-redeem mechanics.</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative w-full sm:flex-[1_0_0] sm:min-h-px sm:min-w-px order-1" data-name="Container">
      <SectionImageSm4 />
      <Container13 />
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents left-[33px] top-[24px]">
      <div className="absolute h-[862.333px] left-[33px] top-[24px] w-[144.67px]" data-name="Theme 8">
        <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTheme8} />
      </div>
      <div className="absolute h-[834.963px] left-[192px] top-[24px] w-[144.67px]" data-name="Theme 9">
        <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTheme9} />
      </div>
    </div>
  );
}

function SectionImageSm5() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-full sm:w-[371px]" data-name="section image sm">
      <div className="overflow-clip relative rounded-[inherit] w-full">
        <img loading="lazy" decoding="async" alt="" className="block w-full h-auto object-contain" src={imgDesignOutcome4} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f3f5] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col font-normal items-start leading-[0] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#32404f] text-[20px] tracking-[-0.424px] w-full">
        <p className="leading-[30px] whitespace-pre-wrap">Rewards</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Catalogue-driven redemption experiences with flexible merchandising.</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative w-full sm:flex-[1_0_0] sm:min-h-px sm:min-w-px order-2" data-name="Container">
      <SectionImageSm5 />
      <Container15 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[32px] items-start relative shrink-0 w-full">
      <Container12 />
      <Container14 />
    </div>
  );
}

function Frame254() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Property5() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch max-w-[774px] relative row-[10] self-start shrink-0" data-name="Property">
      <Frame260 />
      <Frame254 />
    </div>
  );
}

function SectionContainer2() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] relative shrink-0 w-full" data-name="Section Container">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Solution 2</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Reusable Components: Standardizing what matters</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">{`To scale across brands and content, supporting client-preferred layouts without new one-off design work. Reusable components kept a consistent structure while flexing through CSS and imagery. `}</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#eff4ff] content-stretch flex items-center mix-blend-multiply px-[1.969px] py-[0.492px] relative rounded-[3.937px] shrink-0" data-name="Badge">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[4.429px] not-italic relative shrink-0 text-[#004eeb] text-[2.953px] text-center">86 Members</p>
    </div>
  );
}

function TextAndBadge() {
  return (
    <div className="content-stretch flex gap-[1.969px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[6.89px] not-italic relative shrink-0 text-[#101828] text-[4.429px]">Leaderboard</p>
      <Badge />
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.984px] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Text and supporting text">
      <TextAndBadge />
    </div>
  );
}

function DotsVertical() {
  return (
    <div className="relative shrink-0 size-[4.922px]" data-name="dots-vertical">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.92164 4.92164">
        <g clipPath="url(#clip0_1_711829)" id="dots-vertical">
          <g id="Icon">
            <path d={svgPaths.pd0cb680} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.410137" />
            <path d={svgPaths.p76085f0} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.410137" />
            <path d={svgPaths.p518a200} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.410137" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_711829">
            <rect fill="white" height="4.92164" width="4.92164" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-0 relative shrink-0" data-name="Dropdown">
      <DotsVertical />
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex gap-[3.937px] items-start pt-[4.922px] px-[5.906px] relative w-full">
        <TextAndSupportingText />
        <Dropdown />
      </div>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[4.922px] items-start relative shrink-0 w-[222.458px]" data-name="Card header">
      <Content />
      <div className="h-[0.246px] relative shrink-0 w-full" data-name="Divider">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 222.458 0.246082">
          <path clipRule="evenodd" d={svgPaths.p16587680} fill="var(--fill-0, #EAECF0)" fillRule="evenodd" id="Divider" />
        </svg>
      </div>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table header">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[4.429px] not-italic relative shrink-0 text-[#475467] text-[2.953px]">Rank</p>
    </div>
  );
}

function TableHeaderCell() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex h-[10.828px] items-center justify-center px-[5.906px] py-[2.953px] relative shrink-0 w-[15.749px]" data-name="Table header cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <TableHeader />
    </div>
  );
}

function TableCell() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center justify-center px-[5.906px] py-[3.937px] relative shrink-0 w-[15.749px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">1</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center justify-center px-[5.906px] py-[3.937px] relative shrink-0 w-[15.749px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">2</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center justify-center px-[5.906px] py-[3.937px] relative shrink-0 w-[15.749px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">3</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center justify-center px-[5.906px] py-[3.937px] relative shrink-0 w-[15.749px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">4</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center justify-center px-[5.906px] py-[3.937px] relative shrink-0 w-[15.749px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">5</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center justify-center px-[5.906px] py-[3.937px] relative shrink-0 w-[15.749px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">6</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center justify-center px-[5.906px] py-[3.937px] relative shrink-0 w-[15.749px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">7</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center justify-center px-[5.906px] py-[3.937px] relative shrink-0 w-[15.749px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">8</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center justify-center px-[5.906px] py-[3.937px] relative shrink-0 w-[15.749px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">9</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center justify-center px-[5.906px] py-[3.937px] relative shrink-0 w-[15.749px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">10</p>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[15.749px]" data-name="Column">
      <TableHeaderCell />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table header">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[4.429px] not-italic relative shrink-0 text-[#475467] text-[2.953px]">Name</p>
    </div>
  );
}

function TableHeaderCell1() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex gap-[2.953px] h-[10.828px] items-center px-[5.906px] py-[2.953px] relative shrink-0 w-[68.657px]" data-name="Table header cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <TableHeader1 />
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative rounded-[49.216px] shrink-0 size-[9.843px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[49.216px]">
        <div className="absolute bg-[#c7b9da] inset-0 rounded-[49.216px]" />
        <img loading="lazy" decoding="async" alt="" className="absolute max-w-none object-cover rounded-[49.216px] size-full" src={imgAvatar} />
      </div>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="content-stretch flex gap-[2.953px] h-[17.718px] items-center px-[5.906px] py-[3.937px] relative shrink-0 w-[68.657px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <Avatar />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[4.922px] not-italic relative shrink-0 text-[#101828] text-[3.445px]">Olivia Rhye</p>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="relative rounded-[49.216px] shrink-0 size-[9.843px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[49.216px]">
        <div className="absolute bg-[#aa9c75] inset-0 rounded-[49.216px]" />
        <img loading="lazy" decoding="async" alt="" className="absolute max-w-none object-cover rounded-[49.216px] size-full" src={imgAvatar1} />
      </div>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="content-stretch flex gap-[2.953px] h-[17.718px] items-center px-[5.906px] py-[3.937px] relative shrink-0 w-[68.657px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <Avatar1 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[4.922px] not-italic relative shrink-0 text-[#101828] text-[3.445px]">Phoenix Baker</p>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="relative rounded-[49.216px] shrink-0 size-[9.843px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[49.216px]">
        <div className="absolute bg-[#d4b5ad] inset-0 rounded-[49.216px]" />
        <img loading="lazy" decoding="async" alt="" className="absolute max-w-none object-cover rounded-[49.216px] size-full" src={imgAvatar2} />
      </div>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="content-stretch flex gap-[2.953px] h-[17.718px] items-center px-[5.906px] py-[3.937px] relative shrink-0 w-[68.657px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <Avatar2 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[4.922px] not-italic relative shrink-0 text-[#101828] text-[3.445px]">Lana Steiner</p>
    </div>
  );
}

function Avatar3() {
  return (
    <div className="relative rounded-[49.216px] shrink-0 size-[9.843px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[49.216px]">
        <div className="absolute bg-[#bea887] inset-0 rounded-[49.216px]" />
        <img loading="lazy" decoding="async" alt="" className="absolute max-w-none object-cover rounded-[49.216px] size-full" src={imgAvatar3} />
      </div>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="content-stretch flex gap-[2.953px] h-[17.718px] items-center px-[5.906px] py-[3.937px] relative shrink-0 w-[68.657px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <Avatar3 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[4.922px] not-italic relative shrink-0 text-[#101828] text-[3.445px]">Demi Wilkinson</p>
    </div>
  );
}

function Avatar4() {
  return (
    <div className="relative rounded-[49.216px] shrink-0 size-[9.843px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[49.216px]">
        <div className="absolute bg-[#a2a8cd] inset-0 rounded-[49.216px]" />
        <img loading="lazy" decoding="async" alt="" className="absolute max-w-none object-cover rounded-[49.216px] size-full" src={imgAvatar4} />
      </div>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="content-stretch flex gap-[2.953px] h-[17.718px] items-center px-[5.906px] py-[3.937px] relative shrink-0 w-[68.657px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <Avatar4 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[4.922px] not-italic relative shrink-0 text-[#101828] text-[3.445px]">Candice Wu</p>
    </div>
  );
}

function Avatar5() {
  return (
    <div className="relative rounded-[49.216px] shrink-0 size-[9.843px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[49.216px]">
        <div className="absolute bg-[#d1baa9] inset-0 rounded-[49.216px]" />
        <img loading="lazy" decoding="async" alt="" className="absolute max-w-none object-cover rounded-[49.216px] size-full" src={imgAvatar5} />
      </div>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="content-stretch flex gap-[2.953px] h-[17.718px] items-center px-[5.906px] py-[3.937px] relative shrink-0 w-[68.657px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <Avatar5 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[4.922px] not-italic relative shrink-0 text-[#101828] text-[3.445px]">Natali Craig</p>
    </div>
  );
}

function Avatar6() {
  return (
    <div className="relative rounded-[49.216px] shrink-0 size-[9.843px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[49.216px]">
        <div className="absolute bg-[#d1dfc3] inset-0 rounded-[49.216px]" />
        <img loading="lazy" decoding="async" alt="" className="absolute max-w-none object-cover rounded-[49.216px] size-full" src={imgAvatar6} />
      </div>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="content-stretch flex gap-[2.953px] h-[17.718px] items-center px-[5.906px] py-[3.937px] relative shrink-0 w-[68.657px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <Avatar6 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[4.922px] not-italic relative shrink-0 text-[#101828] text-[3.445px]">Drew Cano</p>
    </div>
  );
}

function Avatar7() {
  return (
    <div className="relative rounded-[49.216px] shrink-0 size-[9.843px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[49.216px]">
        <div className="absolute bg-[#cfc3a7] inset-0 rounded-[49.216px]" />
        <img loading="lazy" decoding="async" alt="" className="absolute max-w-none object-cover rounded-[49.216px] size-full" src={imgAvatar7} />
      </div>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="content-stretch flex gap-[2.953px] h-[17.718px] items-center px-[5.906px] py-[3.937px] relative shrink-0 w-[68.657px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <Avatar7 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[4.922px] not-italic relative shrink-0 text-[#101828] text-[3.445px]">Orlando Diggs</p>
    </div>
  );
}

function Avatar8() {
  return (
    <div className="relative rounded-[49.216px] shrink-0 size-[9.843px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[49.216px]">
        <div className="absolute bg-[#d2c7ac] inset-0 rounded-[49.216px]" />
        <img loading="lazy" decoding="async" alt="" className="absolute max-w-none object-cover rounded-[49.216px] size-full" src={imgAvatar8} />
      </div>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="content-stretch flex gap-[2.953px] h-[17.718px] items-center px-[5.906px] py-[3.937px] relative shrink-0 w-[68.657px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <Avatar8 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[4.922px] not-italic relative shrink-0 text-[#101828] text-[3.445px]">Andi Lane</p>
    </div>
  );
}

function Avatar9() {
  return (
    <div className="relative rounded-[49.216px] shrink-0 size-[9.843px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[49.216px]">
        <div className="absolute bg-[#dbc0dd] inset-0 rounded-[49.216px]" />
        <img loading="lazy" decoding="async" alt="" className="absolute max-w-none object-cover rounded-[49.216px] size-full" src={imgAvatar9} />
      </div>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="content-stretch flex gap-[2.953px] h-[17.718px] items-center px-[5.906px] py-[3.937px] relative shrink-0 w-[68.657px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <Avatar9 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[4.922px] not-italic relative shrink-0 text-[#101828] text-[3.445px]">Kate Morrison</p>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Column">
      <TableHeaderCell1 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
    </div>
  );
}

function TableHeader2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table header">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[4.429px] not-italic relative shrink-0 text-[#475467] text-[2.953px]">Location</p>
    </div>
  );
}

function TableHeaderCell2() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex h-[10.828px] items-center px-[5.906px] py-[2.953px] relative shrink-0 w-[47.248px]" data-name="Table header cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <TableHeader2 />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center px-[5.906px] py-[3.937px] relative shrink-0 w-[47.248px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">Springfield, OH</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center px-[5.906px] py-[3.937px] relative shrink-0 w-[47.248px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">Tuscon, AZ</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center px-[5.906px] py-[3.937px] relative shrink-0 w-[47.248px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">Springfield, OH</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center px-[5.906px] py-[3.937px] relative shrink-0 w-[47.248px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">Tuscon, AZ</p>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center px-[5.906px] py-[3.937px] relative shrink-0 w-[47.248px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">Buffalo, NY</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center px-[5.906px] py-[3.937px] relative shrink-0 w-[47.248px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">Springfield, OH</p>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center px-[5.906px] py-[3.937px] relative shrink-0 w-[47.248px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">Springfield, OH</p>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center px-[5.906px] py-[3.937px] relative shrink-0 w-[47.248px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">Springfield, OH</p>
    </div>
  );
}

function TableCell28() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center px-[5.906px] py-[3.937px] relative shrink-0 w-[47.248px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">Buffalo, NY</p>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center px-[5.906px] py-[3.937px] relative shrink-0 w-[47.248px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">Tuscon, AZ</p>
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[47.248px]" data-name="Column">
      <TableHeaderCell2 />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
    </div>
  );
}

function TableHeader3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table header">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[4.429px] not-italic relative shrink-0 text-[#475467] text-[2.953px]">Sales ($)</p>
    </div>
  );
}

function TableHeaderCell3() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex h-[10.828px] items-center justify-center px-[5.906px] py-[2.953px] relative shrink-0 w-[30.514px]" data-name="Table header cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <TableHeader3 />
    </div>
  );
}

function TableCell30() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center justify-center px-[5.906px] py-[3.937px] relative shrink-0 w-[30.514px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">$1510.23</p>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center justify-center px-[5.906px] py-[3.937px] relative shrink-0 w-[30.514px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">$1456.21</p>
    </div>
  );
}

function TableCell32() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center justify-center px-[5.906px] py-[3.937px] relative shrink-0 w-[30.514px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">$1020.14</p>
    </div>
  );
}

function TableCell33() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center justify-center px-[5.906px] py-[3.937px] relative shrink-0 w-[30.514px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">$1014.20</p>
    </div>
  );
}

function TableCell34() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center justify-center px-[5.906px] py-[3.937px] relative shrink-0 w-[30.514px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">$954.87</p>
    </div>
  );
}

function TableCell35() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center justify-center px-[5.906px] py-[3.937px] relative shrink-0 w-[30.514px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">$921.00</p>
    </div>
  );
}

function TableCell36() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center justify-center px-[5.906px] py-[3.937px] relative shrink-0 w-[30.514px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">$845.01</p>
    </div>
  );
}

function TableCell37() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center justify-center px-[5.906px] py-[3.937px] relative shrink-0 w-[30.514px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">$820.25</p>
    </div>
  );
}

function TableCell38() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center justify-center px-[5.906px] py-[3.937px] relative shrink-0 w-[30.514px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">$818.28</p>
    </div>
  );
}

function TableCell39() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center justify-center px-[5.906px] py-[3.937px] relative shrink-0 w-[30.514px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">$804.12</p>
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[30.514px]" data-name="Column">
      <TableHeaderCell3 />
      <TableCell30 />
      <TableCell31 />
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
      <TableCell35 />
      <TableCell36 />
      <TableCell37 />
      <TableCell38 />
      <TableCell39 />
    </div>
  );
}

function TableHeader4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table header">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[4.429px] not-italic relative shrink-0 text-[#475467] text-[2.953px]">Points Earned</p>
    </div>
  );
}

function TableHeaderCell4() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex h-[10.828px] items-center justify-center px-[5.906px] py-[2.953px] relative shrink-0 w-[30.514px]" data-name="Table header cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <TableHeader4 />
    </div>
  );
}

function TableCell40() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center justify-center px-[5.906px] py-[3.937px] relative shrink-0 w-[30.514px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">15,100</p>
    </div>
  );
}

function TableCell41() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center justify-center px-[5.906px] py-[3.937px] relative shrink-0 w-[30.514px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">14,500</p>
    </div>
  );
}

function TableCell42() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center justify-center px-[5.906px] py-[3.937px] relative shrink-0 w-[30.514px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">10,200</p>
    </div>
  );
}

function TableCell43() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center justify-center px-[5.906px] py-[3.937px] relative shrink-0 w-[30.514px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">10,100</p>
    </div>
  );
}

function TableCell44() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center justify-center px-[5.906px] py-[3.937px] relative shrink-0 w-[30.514px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">9500</p>
    </div>
  );
}

function TableCell45() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center justify-center px-[5.906px] py-[3.937px] relative shrink-0 w-[30.514px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">9200</p>
    </div>
  );
}

function TableCell46() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center justify-center px-[5.906px] py-[3.937px] relative shrink-0 w-[30.514px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">8400</p>
    </div>
  );
}

function TableCell47() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center justify-center px-[5.906px] py-[3.937px] relative shrink-0 w-[30.514px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">8200</p>
    </div>
  );
}

function TableCell48() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center justify-center px-[5.906px] py-[3.937px] relative shrink-0 w-[30.514px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">8100</p>
    </div>
  );
}

function TableCell49() {
  return (
    <div className="content-stretch flex h-[17.718px] items-center justify-center px-[5.906px] py-[3.937px] relative shrink-0 w-[30.514px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px]">8000</p>
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[30.514px]" data-name="Column">
      <TableHeaderCell4 />
      <TableCell40 />
      <TableCell41 />
      <TableCell42 />
      <TableCell43 />
      <TableCell44 />
      <TableCell45 />
      <TableCell46 />
      <TableCell47 />
      <TableCell48 />
      <TableCell49 />
    </div>
  );
}

function TableHeader5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table header">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[4.429px] not-italic relative shrink-0 text-[#475467] text-[2.953px]">Level</p>
    </div>
  );
}

function TableHeaderCell5() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex h-[10.828px] items-center justify-center px-[5.906px] py-[2.953px] relative shrink-0 w-[29.776px]" data-name="Table header cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <TableHeader5 />
    </div>
  );
}

function NewGroupe() {
  return (
    <div className="absolute contents inset-0" data-name="NewGroupe0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.80788 6.88341">
        <g id="NewGroup45-0">
          <path d={svgPaths.p34f36700} fill="var(--fill-0, #FEF5C3)" id="Vector 1447" />
          <path d={svgPaths.p13f8c980} fill="var(--fill-0, #EAAA08)" id="Vector" />
          <path d={svgPaths.p305bdb80} fill="var(--fill-0, #EAAA08)" id="Vector_2" />
          <path d={svgPaths.pafe3e80} fill="var(--fill-0, #EAAA08)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Stars9() {
  return (
    <div className="absolute inset-[25.42%_22%_33.9%_30%]" data-name="stars-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.78778 2.80003">
        <g clipPath="url(#clip0_1_549713)" id="stars-02">
          <path d={svgPaths.p28229380} id="Icon" stroke="var(--stroke-0, #EAAA08)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.232315" />
        </g>
        <defs>
          <clipPath id="clip0_1_549713">
            <rect fill="white" height="2.80003" width="2.78778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ShieldGraphic1() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Shield Graphic">
      <NewGroupe />
      <Stars9 />
    </div>
  );
}

function ShieldGraphic() {
  return (
    <div className="h-[6.883px] relative shrink-0 w-[5.808px]" data-name="Shield Graphic">
      <ShieldGraphic1 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[1.476px] items-center relative shrink-0">
      <ShieldGraphic />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px] text-center">Gold</p>
    </div>
  );
}

function TableCell50() {
  return (
    <div className="h-[17.718px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[5.906px] py-[3.937px] relative size-full">
          <Frame32 />
        </div>
      </div>
    </div>
  );
}

function NewGroupe1() {
  return (
    <div className="absolute contents inset-0" data-name="NewGroupe0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.80788 6.88341">
        <g id="NewGroup45-0">
          <path d={svgPaths.p34f36700} fill="var(--fill-0, #FEF5C3)" id="Vector 1447" />
          <path d={svgPaths.p13f8c980} fill="var(--fill-0, #EAAA08)" id="Vector" />
          <path d={svgPaths.p305bdb80} fill="var(--fill-0, #EAAA08)" id="Vector_2" />
          <path d={svgPaths.pafe3e80} fill="var(--fill-0, #EAAA08)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Stars1() {
  return (
    <div className="absolute inset-[25.42%_22%_33.9%_30%]" data-name="stars-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.78778 2.80003">
        <g clipPath="url(#clip0_1_549713)" id="stars-02">
          <path d={svgPaths.p28229380} id="Icon" stroke="var(--stroke-0, #EAAA08)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.232315" />
        </g>
        <defs>
          <clipPath id="clip0_1_549713">
            <rect fill="white" height="2.80003" width="2.78778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ShieldGraphic3() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Shield Graphic">
      <NewGroupe1 />
      <Stars1 />
    </div>
  );
}

function ShieldGraphic2() {
  return (
    <div className="h-[6.883px] relative shrink-0 w-[5.808px]" data-name="Shield Graphic">
      <ShieldGraphic3 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[1.476px] items-center relative shrink-0">
      <ShieldGraphic2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px] text-center">Gold</p>
    </div>
  );
}

function TableCell51() {
  return (
    <div className="h-[17.718px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[5.906px] py-[3.937px] relative size-full">
          <Frame33 />
        </div>
      </div>
    </div>
  );
}

function NewGroupe2() {
  return (
    <div className="absolute contents inset-0" data-name="NewGroupe0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.80788 6.88341">
        <g id="NewGroup45-0">
          <path d={svgPaths.p34f36700} fill="var(--fill-0, #FEF5C3)" id="Vector 1447" />
          <path d={svgPaths.p13f8c980} fill="var(--fill-0, #EAAA08)" id="Vector" />
          <path d={svgPaths.p305bdb80} fill="var(--fill-0, #EAAA08)" id="Vector_2" />
          <path d={svgPaths.pafe3e80} fill="var(--fill-0, #EAAA08)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Stars2() {
  return (
    <div className="absolute inset-[25.42%_22%_33.9%_30%]" data-name="stars-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.78778 2.80003">
        <g clipPath="url(#clip0_1_549713)" id="stars-02">
          <path d={svgPaths.p28229380} id="Icon" stroke="var(--stroke-0, #EAAA08)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.232315" />
        </g>
        <defs>
          <clipPath id="clip0_1_549713">
            <rect fill="white" height="2.80003" width="2.78778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ShieldGraphic5() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Shield Graphic">
      <NewGroupe2 />
      <Stars2 />
    </div>
  );
}

function ShieldGraphic4() {
  return (
    <div className="h-[6.883px] relative shrink-0 w-[5.808px]" data-name="Shield Graphic">
      <ShieldGraphic5 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[1.476px] items-center relative shrink-0">
      <ShieldGraphic4 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px] text-center">Gold</p>
    </div>
  );
}

function TableCell52() {
  return (
    <div className="h-[17.718px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[5.906px] py-[3.937px] relative size-full">
          <Frame34 />
        </div>
      </div>
    </div>
  );
}

function NewGroupe3() {
  return (
    <div className="absolute contents inset-0" data-name="NewGroupe0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.80788 6.88341">
        <g id="NewGroup45-0">
          <path d={svgPaths.p34f36700} fill="var(--fill-0, #FEF5C3)" id="Vector 1447" />
          <path d={svgPaths.p13f8c980} fill="var(--fill-0, #EAAA08)" id="Vector" />
          <path d={svgPaths.p305bdb80} fill="var(--fill-0, #EAAA08)" id="Vector_2" />
          <path d={svgPaths.pafe3e80} fill="var(--fill-0, #EAAA08)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Stars3() {
  return (
    <div className="absolute inset-[25.42%_22%_33.9%_30%]" data-name="stars-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.78778 2.80003">
        <g clipPath="url(#clip0_1_549713)" id="stars-02">
          <path d={svgPaths.p28229380} id="Icon" stroke="var(--stroke-0, #EAAA08)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.232315" />
        </g>
        <defs>
          <clipPath id="clip0_1_549713">
            <rect fill="white" height="2.80003" width="2.78778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ShieldGraphic7() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Shield Graphic">
      <NewGroupe3 />
      <Stars3 />
    </div>
  );
}

function ShieldGraphic6() {
  return (
    <div className="h-[6.883px] relative shrink-0 w-[5.808px]" data-name="Shield Graphic">
      <ShieldGraphic7 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[1.476px] items-center relative shrink-0">
      <ShieldGraphic6 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px] text-center">Gold</p>
    </div>
  );
}

function TableCell53() {
  return (
    <div className="h-[17.718px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[5.906px] py-[3.937px] relative size-full">
          <Frame35 />
        </div>
      </div>
    </div>
  );
}

function NewGroupe4() {
  return (
    <div className="absolute contents inset-0" data-name="NewGroupe0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.80788 6.88341">
        <g id="NewGroup45-0">
          <path d={svgPaths.p34f36700} fill="var(--fill-0, #EFF8FF)" id="Vector 1447" />
          <path d={svgPaths.p13f8c980} fill="var(--fill-0, #5196CE)" id="Vector" />
          <path d={svgPaths.p305bdb80} fill="var(--fill-0, #5196CE)" id="Vector_2" />
          <path d={svgPaths.pafe3e80} fill="var(--fill-0, #5196CE)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Stars8() {
  return (
    <div className="absolute inset-[25.42%_24%_33.9%_28%]" data-name="stars-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.78778 2.80003">
        <g clipPath="url(#clip0_1_538905)" id="stars-01">
          <g id="Icon">
            <path d={svgPaths.p3eb58780} stroke="var(--stroke-0, #5196CE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.232315" />
            <path d={svgPaths.p14990130} stroke="var(--stroke-0, #5196CE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.232315" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_538905">
            <rect fill="white" height="2.80003" width="2.78778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ShieldGraphic9() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Shield Graphic">
      <NewGroupe4 />
      <Stars8 />
    </div>
  );
}

function ShieldGraphic8() {
  return (
    <div className="h-[6.883px] relative shrink-0 w-[5.808px]" data-name="Shield Graphic">
      <ShieldGraphic9 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[1.476px] items-center relative shrink-0">
      <ShieldGraphic8 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px] text-center">Silver</p>
    </div>
  );
}

function TableCell54() {
  return (
    <div className="h-[17.718px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[5.906px] py-[3.937px] relative size-full">
          <Frame36 />
        </div>
      </div>
    </div>
  );
}

function NewGroupe5() {
  return (
    <div className="absolute contents inset-0" data-name="NewGroupe0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.80788 6.88341">
        <g id="NewGroup45-0">
          <path d={svgPaths.p34f36700} fill="var(--fill-0, #EFF8FF)" id="Vector 1447" />
          <path d={svgPaths.p13f8c980} fill="var(--fill-0, #5196CE)" id="Vector" />
          <path d={svgPaths.p305bdb80} fill="var(--fill-0, #5196CE)" id="Vector_2" />
          <path d={svgPaths.pafe3e80} fill="var(--fill-0, #5196CE)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Stars() {
  return (
    <div className="absolute inset-[25.42%_24%_33.9%_28%]" data-name="stars-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.78778 2.80003">
        <g clipPath="url(#clip0_1_538905)" id="stars-01">
          <g id="Icon">
            <path d={svgPaths.p3eb58780} stroke="var(--stroke-0, #5196CE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.232315" />
            <path d={svgPaths.p14990130} stroke="var(--stroke-0, #5196CE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.232315" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_538905">
            <rect fill="white" height="2.80003" width="2.78778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ShieldGraphic11() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Shield Graphic">
      <NewGroupe5 />
      <Stars />
    </div>
  );
}

function ShieldGraphic10() {
  return (
    <div className="h-[6.883px] relative shrink-0 w-[5.808px]" data-name="Shield Graphic">
      <ShieldGraphic11 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[1.476px] items-center relative shrink-0">
      <ShieldGraphic10 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px] text-center">Silver</p>
    </div>
  );
}

function TableCell55() {
  return (
    <div className="h-[17.718px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[5.906px] py-[3.937px] relative size-full">
          <Frame37 />
        </div>
      </div>
    </div>
  );
}

function NewGroupe6() {
  return (
    <div className="absolute contents inset-0" data-name="NewGroupe0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.80788 6.88341">
        <g id="NewGroup45-0">
          <path d={svgPaths.p34f36700} fill="var(--fill-0, #EFF8FF)" id="Vector 1447" />
          <path d={svgPaths.p13f8c980} fill="var(--fill-0, #5196CE)" id="Vector" />
          <path d={svgPaths.p305bdb80} fill="var(--fill-0, #5196CE)" id="Vector_2" />
          <path d={svgPaths.pafe3e80} fill="var(--fill-0, #5196CE)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Stars4() {
  return (
    <div className="absolute inset-[25.42%_24%_33.9%_28%]" data-name="stars-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.78778 2.80003">
        <g clipPath="url(#clip0_1_538905)" id="stars-01">
          <g id="Icon">
            <path d={svgPaths.p3eb58780} stroke="var(--stroke-0, #5196CE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.232315" />
            <path d={svgPaths.p14990130} stroke="var(--stroke-0, #5196CE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.232315" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_538905">
            <rect fill="white" height="2.80003" width="2.78778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ShieldGraphic13() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Shield Graphic">
      <NewGroupe6 />
      <Stars4 />
    </div>
  );
}

function ShieldGraphic12() {
  return (
    <div className="h-[6.883px] relative shrink-0 w-[5.808px]" data-name="Shield Graphic">
      <ShieldGraphic13 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[1.476px] items-center relative shrink-0">
      <ShieldGraphic12 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px] text-center">Silver</p>
    </div>
  );
}

function TableCell56() {
  return (
    <div className="h-[17.718px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[5.906px] py-[3.937px] relative size-full">
          <Frame38 />
        </div>
      </div>
    </div>
  );
}

function NewGroupe7() {
  return (
    <div className="absolute contents inset-0" data-name="NewGroupe0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.80788 6.88341">
        <g id="NewGroup45-0">
          <path d={svgPaths.p34f36700} fill="var(--fill-0, #EFF8FF)" id="Vector 1447" />
          <path d={svgPaths.p13f8c980} fill="var(--fill-0, #5196CE)" id="Vector" />
          <path d={svgPaths.p305bdb80} fill="var(--fill-0, #5196CE)" id="Vector_2" />
          <path d={svgPaths.pafe3e80} fill="var(--fill-0, #5196CE)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Stars5() {
  return (
    <div className="absolute inset-[25.42%_24%_33.9%_28%]" data-name="stars-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.78778 2.80003">
        <g clipPath="url(#clip0_1_538905)" id="stars-01">
          <g id="Icon">
            <path d={svgPaths.p3eb58780} stroke="var(--stroke-0, #5196CE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.232315" />
            <path d={svgPaths.p14990130} stroke="var(--stroke-0, #5196CE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.232315" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_538905">
            <rect fill="white" height="2.80003" width="2.78778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ShieldGraphic15() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Shield Graphic">
      <NewGroupe7 />
      <Stars5 />
    </div>
  );
}

function ShieldGraphic14() {
  return (
    <div className="h-[6.883px] relative shrink-0 w-[5.808px]" data-name="Shield Graphic">
      <ShieldGraphic15 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[1.476px] items-center relative shrink-0">
      <ShieldGraphic14 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px] text-center">Silver</p>
    </div>
  );
}

function TableCell57() {
  return (
    <div className="h-[17.718px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[5.906px] py-[3.937px] relative size-full">
          <Frame39 />
        </div>
      </div>
    </div>
  );
}

function NewGroupe8() {
  return (
    <div className="absolute contents inset-0" data-name="NewGroupe0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.80788 6.88341">
        <g id="NewGroup45-0">
          <path d={svgPaths.p34f36700} fill="var(--fill-0, #EFF8FF)" id="Vector 1447" />
          <path d={svgPaths.p13f8c980} fill="var(--fill-0, #5196CE)" id="Vector" />
          <path d={svgPaths.p305bdb80} fill="var(--fill-0, #5196CE)" id="Vector_2" />
          <path d={svgPaths.pafe3e80} fill="var(--fill-0, #5196CE)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Stars6() {
  return (
    <div className="absolute inset-[25.42%_24%_33.9%_28%]" data-name="stars-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.78778 2.80003">
        <g clipPath="url(#clip0_1_538905)" id="stars-01">
          <g id="Icon">
            <path d={svgPaths.p3eb58780} stroke="var(--stroke-0, #5196CE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.232315" />
            <path d={svgPaths.p14990130} stroke="var(--stroke-0, #5196CE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.232315" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_538905">
            <rect fill="white" height="2.80003" width="2.78778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ShieldGraphic17() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Shield Graphic">
      <NewGroupe8 />
      <Stars6 />
    </div>
  );
}

function ShieldGraphic16() {
  return (
    <div className="h-[6.883px] relative shrink-0 w-[5.808px]" data-name="Shield Graphic">
      <ShieldGraphic17 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[1.476px] items-center relative shrink-0">
      <ShieldGraphic16 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px] text-center">Silver</p>
    </div>
  );
}

function TableCell58() {
  return (
    <div className="h-[17.718px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[5.906px] py-[3.937px] relative size-full">
          <Frame40 />
        </div>
      </div>
    </div>
  );
}

function NewGroupe9() {
  return (
    <div className="absolute contents inset-0" data-name="NewGroupe0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.80788 6.88341">
        <g id="NewGroup45-0">
          <path d={svgPaths.p34f36700} fill="var(--fill-0, #EFF8FF)" id="Vector 1447" />
          <path d={svgPaths.p13f8c980} fill="var(--fill-0, #5196CE)" id="Vector" />
          <path d={svgPaths.p305bdb80} fill="var(--fill-0, #5196CE)" id="Vector_2" />
          <path d={svgPaths.pafe3e80} fill="var(--fill-0, #5196CE)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Stars7() {
  return (
    <div className="absolute inset-[25.42%_24%_33.9%_28%]" data-name="stars-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.78778 2.80003">
        <g clipPath="url(#clip0_1_538905)" id="stars-01">
          <g id="Icon">
            <path d={svgPaths.p3eb58780} stroke="var(--stroke-0, #5196CE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.232315" />
            <path d={svgPaths.p14990130} stroke="var(--stroke-0, #5196CE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.232315" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_538905">
            <rect fill="white" height="2.80003" width="2.78778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ShieldGraphic19() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Shield Graphic">
      <NewGroupe9 />
      <Stars7 />
    </div>
  );
}

function ShieldGraphic18() {
  return (
    <div className="h-[6.883px] relative shrink-0 w-[5.808px]" data-name="Shield Graphic">
      <ShieldGraphic19 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[1.476px] items-center relative shrink-0">
      <ShieldGraphic18 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px] text-center">Silver</p>
    </div>
  );
}

function TableCell59() {
  return (
    <div className="h-[17.718px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.246px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[5.906px] py-[3.937px] relative size-full">
          <Frame41 />
        </div>
      </div>
    </div>
  );
}

function Column5() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[29.776px]" data-name="Column">
      <TableHeaderCell5 />
      <TableCell50 />
      <TableCell51 />
      <TableCell52 />
      <TableCell53 />
      <TableCell54 />
      <TableCell55 />
      <TableCell56 />
      <TableCell57 />
      <TableCell58 />
      <TableCell59 />
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Content">
      <Column />
      <Column1 />
      <Column2 />
      <Column3 />
      <Column4 />
      <Column5 />
    </div>
  );
}

function Placeholder() {
  return (
    <div className="relative shrink-0 size-[4.922px]" data-name="placeholder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.92164 4.92164">
        <g clipPath="url(#clip0_1_701021)" id="placeholder">
          <path d={svgPaths.p223e5b00} id="Icon" stroke="var(--stroke-0, #344054)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.410137" />
        </g>
        <defs>
          <clipPath id="clip0_1_701021">
            <rect fill="white" height="4.92164" width="4.92164" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white relative rounded-[1.969px] shrink-0" data-name="Button">
      <div className="content-stretch flex gap-[1.969px] items-center justify-center overflow-clip px-[3.445px] py-[1.969px] relative rounded-[inherit]">
        <Placeholder />
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[4.922px] not-italic relative shrink-0 text-[#344054] text-[3.445px]">Previous</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#d0d5dd] border-[0.246px] border-solid inset-0 pointer-events-none rounded-[1.969px] shadow-[0px_0.246px_0.492px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Content2() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 p-[2.953px] rounded-[1.969px] size-[9.843px] top-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[4.922px] not-italic relative shrink-0 text-[#1d2939] text-[3.445px] text-center">1</p>
    </div>
  );
}

function PaginationNumberBase() {
  return (
    <div className="bg-[#f2f4f7] overflow-clip relative rounded-[1.969px] shrink-0 size-[9.843px]" data-name="_Pagination number base">
      <Content2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 p-[2.953px] rounded-[1.969px] size-[9.843px] top-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px] text-center">2</p>
    </div>
  );
}

function PaginationNumberBase1() {
  return (
    <div className="overflow-clip relative rounded-[1.969px] shrink-0 size-[9.843px]" data-name="_Pagination number base">
      <Content3 />
    </div>
  );
}

function Content4() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 p-[2.953px] rounded-[1.969px] size-[9.843px] top-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px] text-center">3</p>
    </div>
  );
}

function PaginationNumberBase2() {
  return (
    <div className="overflow-clip relative rounded-[1.969px] shrink-0 size-[9.843px]" data-name="_Pagination number base">
      <Content4 />
    </div>
  );
}

function Content5() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 p-[2.953px] rounded-[1.969px] size-[9.843px] top-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px] text-center">...</p>
    </div>
  );
}

function PaginationNumberBase3() {
  return (
    <div className="overflow-clip relative rounded-[1.969px] shrink-0 size-[9.843px]" data-name="_Pagination number base">
      <Content5 />
    </div>
  );
}

function Content6() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 p-[2.953px] rounded-[1.969px] size-[9.843px] top-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px] text-center">6</p>
    </div>
  );
}

function PaginationNumberBase4() {
  return (
    <div className="overflow-clip relative rounded-[1.969px] shrink-0 size-[9.843px]" data-name="_Pagination number base">
      <Content6 />
    </div>
  );
}

function Content7() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 p-[2.953px] rounded-[1.969px] size-[9.843px] top-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[4.922px] not-italic relative shrink-0 text-[#475467] text-[3.445px] text-center">7</p>
    </div>
  );
}

function PaginationNumberBase5() {
  return (
    <div className="overflow-clip relative rounded-[1.969px] shrink-0 size-[9.843px]" data-name="_Pagination number base">
      <Content7 />
    </div>
  );
}

function Content8() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 p-[2.953px] rounded-[1.969px] size-[9.843px] top-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[4.922px] not-italic opacity-90 relative shrink-0 text-[#475467] text-[3.445px] text-center">8</p>
    </div>
  );
}

function PaginationNumberBase6() {
  return (
    <div className="overflow-clip relative rounded-[1.969px] shrink-0 size-[9.843px]" data-name="_Pagination number base">
      <Content8 />
    </div>
  );
}

function PaginationNumbers() {
  return (
    <div className="content-stretch flex gap-[0.492px] items-start relative shrink-0" data-name="Pagination numbers">
      <PaginationNumberBase />
      <PaginationNumberBase1 />
      <PaginationNumberBase2 />
      <PaginationNumberBase3 />
      <PaginationNumberBase4 />
      <PaginationNumberBase5 />
      <PaginationNumberBase6 />
    </div>
  );
}

function Placeholder1() {
  return (
    <div className="relative shrink-0 size-[4.922px]" data-name="placeholder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.92164 4.92164">
        <g clipPath="url(#clip0_1_701021)" id="placeholder">
          <path d={svgPaths.p223e5b00} id="Icon" stroke="var(--stroke-0, #344054)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.410137" />
        </g>
        <defs>
          <clipPath id="clip0_1_701021">
            <rect fill="white" height="4.92164" width="4.92164" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white relative rounded-[1.969px] shrink-0" data-name="Button">
      <div className="content-stretch flex gap-[1.969px] items-center justify-center overflow-clip px-[3.445px] py-[1.969px] relative rounded-[inherit]">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[4.922px] not-italic relative shrink-0 text-[#344054] text-[3.445px]">Next</p>
        <Placeholder1 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d0d5dd] border-[0.246px] border-solid inset-0 pointer-events-none rounded-[1.969px] shadow-[0px_0.246px_0.492px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Pagination() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[3.937px] pt-[2.953px] px-[5.906px] relative shrink-0 w-[222.458px]" data-name="Pagination">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-solid border-t-[0.246px] inset-[-0.246px_0_0_0] pointer-events-none" />
      <Button />
      <PaginationNumbers />
      <Button1 />
    </div>
  );
}

function Table() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white h-[221.732px] left-[calc(50%+0.23px)] rounded-[1.969px] top-[calc(50%-0.13px)] w-[222.458px]" data-name="Table">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <CardHeader />
        <Content1 />
        <Pagination />
      </div>
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0.246px] border-solid inset-0 pointer-events-none rounded-[1.969px] shadow-[0px_0.246px_0.738px_0px_rgba(16,24,40,0.1),0px_0.246px_0.492px_0px_rgba(16,24,40,0.06)]" />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[1.723px] items-start not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#101828] text-[4.922px] text-center whitespace-nowrap">
        <p className="leading-[7.382px]">Capsule quarterly sales reward</p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] min-w-full relative shrink-0 text-[#344054] text-[3.445px] w-[min-content] whitespace-pre-wrap">Sell $5000 of any capsule products and earn $500 Capsule award points!</p>
    </div>
  );
}

function Ring() {
  return (
    <div className="absolute inset-[2.46px_2.68px_-19.62px_2.46px]" data-name="Ring">
      <div className="absolute inset-[-5.56%_-5.58%_0_-5.58%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 46.6866">
          <g id="Ring">
            <path d={svgPaths.p334b9440} id="Background" stroke="var(--stroke-0, #F2F4F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.92164" />
            <path d={svgPaths.p32228400} id="Line" stroke="var(--stroke-0, #155EEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.92164" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-0.48px)] top-[calc(50%+6.68px)]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%-0.48px)] not-italic text-[#101828] text-[7.382px] text-center top-[calc(50%+6.68px)] whitespace-nowrap">
        <p className="leading-[9.351px]">42%</p>
      </div>
    </div>
  );
}

function ProgressCircle() {
  return (
    <div className="h-[27.069px] relative shrink-0 w-[49.216px]" data-name="Progress circle">
      <Ring />
      <Group3 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[0.984px] items-start leading-[4.922px] not-italic relative shrink-0 text-[#101828] text-[3.445px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0">$2650</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0">out of $5000</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[4.429px] h-[33.702px] items-center relative shrink-0">
      <ProgressCircle />
      <Frame50 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[24.6px] not-italic text-[#475467] text-[3.445px] text-center top-[13.21px] whitespace-nowrap">
        <p className="leading-[4.922px]">Progress</p>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-between min-h-px min-w-px relative w-[100.155px]">
      <Frame55 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[5.906px] h-[80.862px] items-start left-[32px] p-[3.937px] rounded-[1.969px] top-[23.8px] w-[108.03px]">
      <Frame44 />
      <Frame47 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[1.723px] items-start not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#101828] text-[4.922px] text-center whitespace-nowrap">
        <p className="leading-[7.382px]">Capsule monthly sales punch card</p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] min-w-full relative shrink-0 text-[#344054] text-[3.445px] w-[min-content] whitespace-pre-wrap">Make 15 sales over 100$ or more to earn $250 Capsule points.</p>
    </div>
  );
}

function CoinsStacked2() {
  return (
    <div className="relative shrink-0 size-[4.922px]" data-name="coins-stacked-03">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.92164 4.92164">
        <g clipPath="url(#clip0_1_474054)" id="coins-stacked-03">
          <path d={svgPaths.p3593af00} id="Icon" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.410137" />
        </g>
        <defs>
          <clipPath id="clip0_1_474054">
            <rect fill="white" height="4.92164" width="4.92164" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[0.492px] items-center leading-[4.922px] not-italic relative shrink-0 text-[#101828] text-[3.445px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0">0</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0">points earned</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#f5f8ff] content-stretch flex gap-[1.969px] items-center justify-center px-[2.461px] py-[1.969px] relative rounded-[0.984px] shrink-0 w-[48.847px]">
      <CoinsStacked2 />
      <Frame19 />
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-[4.922px]" data-name="calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.92164 4.92164">
        <g clipPath="url(#clip0_1_582136)" id="calendar">
          <path d={svgPaths.p7c90ff0} id="Icon" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.410137" />
        </g>
        <defs>
          <clipPath id="clip0_1_582136">
            <rect fill="white" height="4.92164" width="4.92164" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[0.492px] items-center leading-[4.922px] not-italic relative shrink-0 text-[#101828] text-[3.445px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0">12</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0">days to qualify</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#f5f8ff] content-stretch flex gap-[1.969px] items-center justify-center px-[2.461px] py-[1.969px] relative rounded-[0.984px] shrink-0 w-[48.847px]">
      <Calendar />
      <Frame18 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[2.461px] items-start relative shrink-0">
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[-0.06%_0.02%_-0.07%_0]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.38071 7.38025">
        <g id="Group">
          <path d={svgPaths.p19285dc0} fill="var(--fill-0, #FFD234)" id="Vector" />
          <path d={svgPaths.p1d556300} fill="var(--fill-0, #F0961E)" id="Vector_2" />
          <path d={svgPaths.p2fc4f200} fill="var(--fill-0, #FFB001)" id="Vector_3" />
          <g id="Group_2">
            <path d={svgPaths.p29d4dcf0} fill="var(--fill-0, #F0961E)" id="Vector_4" />
            <path d={svgPaths.p1ecd1400} fill="var(--fill-0, #FFE27C)" id="Vector_5" />
          </g>
          <g id="Group_3" opacity="0.2">
            <path d={svgPaths.p3f083a00} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p396d4f00} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.p7a10900} fill="var(--fill-0, white)" id="Vector_8" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Ioe() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="_ÎÓÈ_1">
      <Group1 />
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="Layer_2">
      <Ioe />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="Group">
      <Layer />
    </div>
  );
}

function MbCoins() {
  return (
    <div className="h-[7.371px] relative shrink-0 w-[7.382px]" data-name="MB Coins">
      <Group />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[-0.06%_0.02%_-0.07%_0]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.38071 7.38025">
        <g id="Group">
          <path d={svgPaths.p19285dc0} fill="var(--fill-0, #FFD234)" id="Vector" />
          <path d={svgPaths.p1d556300} fill="var(--fill-0, #F0961E)" id="Vector_2" />
          <path d={svgPaths.p2fc4f200} fill="var(--fill-0, #FFB001)" id="Vector_3" />
          <g id="Group_2">
            <path d={svgPaths.p29d4dcf0} fill="var(--fill-0, #F0961E)" id="Vector_4" />
            <path d={svgPaths.p1ecd1400} fill="var(--fill-0, #FFE27C)" id="Vector_5" />
          </g>
          <g id="Group_3" opacity="0.2">
            <path d={svgPaths.p3f083a00} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p396d4f00} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.p7a10900} fill="var(--fill-0, white)" id="Vector_8" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Ioe1() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="_ÎÓÈ_1">
      <Group4 />
    </div>
  );
}

function Layer1() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="Layer_2">
      <Ioe1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="Group">
      <Layer1 />
    </div>
  );
}

function MbCoins1() {
  return (
    <div className="h-[7.371px] relative shrink-0 w-[7.382px]" data-name="MB Coins">
      <Group2 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[-0.06%_0.02%_-0.07%_0]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.38071 7.38025">
        <g id="Group">
          <path d={svgPaths.p19285dc0} fill="var(--fill-0, #FFD234)" id="Vector" />
          <path d={svgPaths.p1d556300} fill="var(--fill-0, #F0961E)" id="Vector_2" />
          <path d={svgPaths.p2fc4f200} fill="var(--fill-0, #FFB001)" id="Vector_3" />
          <g id="Group_2">
            <path d={svgPaths.p29d4dcf0} fill="var(--fill-0, #F0961E)" id="Vector_4" />
            <path d={svgPaths.p1ecd1400} fill="var(--fill-0, #FFE27C)" id="Vector_5" />
          </g>
          <g id="Group_3" opacity="0.2">
            <path d={svgPaths.p3f083a00} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p396d4f00} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.p7a10900} fill="var(--fill-0, white)" id="Vector_8" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Ioe2() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="_ÎÓÈ_1">
      <Group6 />
    </div>
  );
}

function Layer2() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="Layer_2">
      <Ioe2 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="Group">
      <Layer2 />
    </div>
  );
}

function MbCoins2() {
  return (
    <div className="h-[7.371px] relative shrink-0 w-[7.382px]" data-name="MB Coins">
      <Group5 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[-0.06%_0.02%_-0.07%_0]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.38071 7.38025">
        <g id="Group">
          <path d={svgPaths.p19285dc0} fill="var(--fill-0, #FFD234)" id="Vector" />
          <path d={svgPaths.p1d556300} fill="var(--fill-0, #F0961E)" id="Vector_2" />
          <path d={svgPaths.p2fc4f200} fill="var(--fill-0, #FFB001)" id="Vector_3" />
          <g id="Group_2">
            <path d={svgPaths.p29d4dcf0} fill="var(--fill-0, #F0961E)" id="Vector_4" />
            <path d={svgPaths.p1ecd1400} fill="var(--fill-0, #FFE27C)" id="Vector_5" />
          </g>
          <g id="Group_3" opacity="0.2">
            <path d={svgPaths.p3f083a00} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p396d4f00} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.p7a10900} fill="var(--fill-0, white)" id="Vector_8" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Ioe3() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="_ÎÓÈ_1">
      <Group8 />
    </div>
  );
}

function Layer3() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="Layer_2">
      <Ioe3 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="Group">
      <Layer3 />
    </div>
  );
}

function MbCoins3() {
  return (
    <div className="h-[7.371px] relative shrink-0 w-[7.382px]" data-name="MB Coins">
      <Group7 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[-0.06%_0.02%_-0.07%_0]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.38071 7.38025">
        <g id="Group">
          <path d={svgPaths.p19285dc0} fill="var(--fill-0, #FFD234)" id="Vector" />
          <path d={svgPaths.p1d556300} fill="var(--fill-0, #F0961E)" id="Vector_2" />
          <path d={svgPaths.p2fc4f200} fill="var(--fill-0, #FFB001)" id="Vector_3" />
          <g id="Group_2">
            <path d={svgPaths.p29d4dcf0} fill="var(--fill-0, #F0961E)" id="Vector_4" />
            <path d={svgPaths.p1ecd1400} fill="var(--fill-0, #FFE27C)" id="Vector_5" />
          </g>
          <g id="Group_3" opacity="0.2">
            <path d={svgPaths.p3f083a00} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p396d4f00} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.p7a10900} fill="var(--fill-0, white)" id="Vector_8" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Ioe4() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="_ÎÓÈ_1">
      <Group10 />
    </div>
  );
}

function Layer4() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="Layer_2">
      <Ioe4 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="Group">
      <Layer4 />
    </div>
  );
}

function MbCoins4() {
  return (
    <div className="h-[7.371px] relative shrink-0 w-[7.382px]" data-name="MB Coins">
      <Group9 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <MbCoins />
      <MbCoins1 />
      <MbCoins2 />
      <MbCoins3 />
      <MbCoins4 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[-0.06%_0.02%_-0.07%_0]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.38071 7.38025">
        <g id="Group">
          <path d={svgPaths.p19285dc0} fill="var(--fill-0, #FFD234)" id="Vector" />
          <path d={svgPaths.p1d556300} fill="var(--fill-0, #F0961E)" id="Vector_2" />
          <path d={svgPaths.p2fc4f200} fill="var(--fill-0, #FFB001)" id="Vector_3" />
          <g id="Group_2">
            <path d={svgPaths.p29d4dcf0} fill="var(--fill-0, #F0961E)" id="Vector_4" />
            <path d={svgPaths.p1ecd1400} fill="var(--fill-0, #FFE27C)" id="Vector_5" />
          </g>
          <g id="Group_3" opacity="0.2">
            <path d={svgPaths.p3f083a00} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p396d4f00} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.p7a10900} fill="var(--fill-0, white)" id="Vector_8" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Ioe5() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="_ÎÓÈ_1">
      <Group12 />
    </div>
  );
}

function Layer5() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="Layer_2">
      <Ioe5 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="Group">
      <Layer5 />
    </div>
  );
}

function MbCoins5() {
  return (
    <div className="h-[7.371px] relative shrink-0 w-[7.382px]" data-name="MB Coins">
      <Group11 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[-0.06%_0.02%_-0.07%_0]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.38071 7.38025">
        <g id="Group">
          <path d={svgPaths.p19285dc0} fill="var(--fill-0, #FFD234)" id="Vector" />
          <path d={svgPaths.p1d556300} fill="var(--fill-0, #F0961E)" id="Vector_2" />
          <path d={svgPaths.p2fc4f200} fill="var(--fill-0, #FFB001)" id="Vector_3" />
          <g id="Group_2">
            <path d={svgPaths.p29d4dcf0} fill="var(--fill-0, #F0961E)" id="Vector_4" />
            <path d={svgPaths.p1ecd1400} fill="var(--fill-0, #FFE27C)" id="Vector_5" />
          </g>
          <g id="Group_3" opacity="0.2">
            <path d={svgPaths.p3f083a00} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p396d4f00} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.p7a10900} fill="var(--fill-0, white)" id="Vector_8" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Ioe6() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="_ÎÓÈ_1">
      <Group14 />
    </div>
  );
}

function Layer6() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="Layer_2">
      <Ioe6 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="Group">
      <Layer6 />
    </div>
  );
}

function MbCoins6() {
  return (
    <div className="h-[7.371px] relative shrink-0 w-[7.382px]" data-name="MB Coins">
      <Group13 />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute inset-[-0.06%_0.02%_-0.07%_0]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.38071 7.38025">
        <g id="Group">
          <path d={svgPaths.p19285dc0} fill="var(--fill-0, #FFD234)" id="Vector" />
          <path d={svgPaths.p1d556300} fill="var(--fill-0, #F0961E)" id="Vector_2" />
          <path d={svgPaths.p2fc4f200} fill="var(--fill-0, #FFB001)" id="Vector_3" />
          <g id="Group_2">
            <path d={svgPaths.p29d4dcf0} fill="var(--fill-0, #F0961E)" id="Vector_4" />
            <path d={svgPaths.p1ecd1400} fill="var(--fill-0, #FFE27C)" id="Vector_5" />
          </g>
          <g id="Group_3" opacity="0.2">
            <path d={svgPaths.p3f083a00} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p396d4f00} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.p7a10900} fill="var(--fill-0, white)" id="Vector_8" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Ioe7() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="_ÎÓÈ_1">
      <Group16 />
    </div>
  );
}

function Layer7() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="Layer_2">
      <Ioe7 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="Group">
      <Layer7 />
    </div>
  );
}

function MbCoins7() {
  return (
    <div className="h-[7.371px] relative shrink-0 w-[7.382px]" data-name="MB Coins">
      <Group15 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute inset-[-0.06%_0.02%_-0.07%_0]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.38071 7.38025">
        <g id="Group">
          <path d={svgPaths.p19285dc0} fill="var(--fill-0, #FFD234)" id="Vector" />
          <path d={svgPaths.p1d556300} fill="var(--fill-0, #F0961E)" id="Vector_2" />
          <path d={svgPaths.p2fc4f200} fill="var(--fill-0, #FFB001)" id="Vector_3" />
          <g id="Group_2">
            <path d={svgPaths.p29d4dcf0} fill="var(--fill-0, #F0961E)" id="Vector_4" />
            <path d={svgPaths.p1ecd1400} fill="var(--fill-0, #FFE27C)" id="Vector_5" />
          </g>
          <g id="Group_3" opacity="0.2">
            <path d={svgPaths.p3f083a00} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p396d4f00} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.p7a10900} fill="var(--fill-0, white)" id="Vector_8" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Ioe8() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="_ÎÓÈ_1">
      <Group18 />
    </div>
  );
}

function Layer8() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="Layer_2">
      <Ioe8 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="Group">
      <Layer8 />
    </div>
  );
}

function MbCoins8() {
  return (
    <div className="h-[7.371px] relative shrink-0 w-[7.382px]" data-name="MB Coins">
      <Group17 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute inset-[-0.06%_0.02%_-0.07%_0]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.38071 7.38025">
        <g id="Group">
          <path d={svgPaths.p19285dc0} fill="var(--fill-0, #FFD234)" id="Vector" />
          <path d={svgPaths.p1d556300} fill="var(--fill-0, #F0961E)" id="Vector_2" />
          <path d={svgPaths.p2fc4f200} fill="var(--fill-0, #FFB001)" id="Vector_3" />
          <g id="Group_2">
            <path d={svgPaths.p29d4dcf0} fill="var(--fill-0, #F0961E)" id="Vector_4" />
            <path d={svgPaths.p1ecd1400} fill="var(--fill-0, #FFE27C)" id="Vector_5" />
          </g>
          <g id="Group_3" opacity="0.2">
            <path d={svgPaths.p3f083a00} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p396d4f00} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.p7a10900} fill="var(--fill-0, white)" id="Vector_8" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Ioe9() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="_ÎÓÈ_1">
      <Group20 />
    </div>
  );
}

function Layer9() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="Layer_2">
      <Ioe9 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="Group">
      <Layer9 />
    </div>
  );
}

function MbCoins9() {
  return (
    <div className="h-[7.371px] relative shrink-0 w-[7.382px]" data-name="MB Coins">
      <Group19 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <MbCoins5 />
      <MbCoins6 />
      <MbCoins7 />
      <MbCoins8 />
      <MbCoins9 />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute inset-[-0.06%_0.02%_-0.07%_0]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.38071 7.38025">
        <g id="Group">
          <path d={svgPaths.p19285dc0} fill="var(--fill-0, #FFD234)" id="Vector" />
          <path d={svgPaths.p1d556300} fill="var(--fill-0, #F0961E)" id="Vector_2" />
          <path d={svgPaths.p2fc4f200} fill="var(--fill-0, #FFB001)" id="Vector_3" />
          <g id="Group_2">
            <path d={svgPaths.p29d4dcf0} fill="var(--fill-0, #F0961E)" id="Vector_4" />
            <path d={svgPaths.p1ecd1400} fill="var(--fill-0, #FFE27C)" id="Vector_5" />
          </g>
          <g id="Group_3" opacity="0.2">
            <path d={svgPaths.p3f083a00} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p396d4f00} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.p7a10900} fill="var(--fill-0, white)" id="Vector_8" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Ioe10() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="_ÎÓÈ_1">
      <Group22 />
    </div>
  );
}

function Layer10() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="Layer_2">
      <Ioe10 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="Group">
      <Layer10 />
    </div>
  );
}

function MbCoins10() {
  return (
    <div className="h-[7.371px] relative shrink-0 w-[7.382px]" data-name="MB Coins">
      <Group21 />
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute inset-[-0.06%_0.02%_-0.07%_0]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.38071 7.38025">
        <g id="Group">
          <path d={svgPaths.p19285dc0} fill="var(--fill-0, #FFD234)" id="Vector" />
          <path d={svgPaths.p1d556300} fill="var(--fill-0, #F0961E)" id="Vector_2" />
          <path d={svgPaths.p2fc4f200} fill="var(--fill-0, #FFB001)" id="Vector_3" />
          <g id="Group_2">
            <path d={svgPaths.p29d4dcf0} fill="var(--fill-0, #F0961E)" id="Vector_4" />
            <path d={svgPaths.p1ecd1400} fill="var(--fill-0, #FFE27C)" id="Vector_5" />
          </g>
          <g id="Group_3" opacity="0.2">
            <path d={svgPaths.p3f083a00} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p396d4f00} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.p7a10900} fill="var(--fill-0, white)" id="Vector_8" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Ioe11() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="_ÎÓÈ_1">
      <Group24 />
    </div>
  );
}

function Layer11() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="Layer_2">
      <Ioe11 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="Group">
      <Layer11 />
    </div>
  );
}

function MbCoins11() {
  return (
    <div className="h-[7.371px] relative shrink-0 w-[7.382px]" data-name="MB Coins">
      <Group23 />
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute inset-[-0.06%_0.02%_-0.07%_0]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.38071 7.38025">
        <g id="Group">
          <path d={svgPaths.p19285dc0} fill="var(--fill-0, #FFD234)" id="Vector" />
          <path d={svgPaths.p1d556300} fill="var(--fill-0, #F0961E)" id="Vector_2" />
          <path d={svgPaths.p2fc4f200} fill="var(--fill-0, #FFB001)" id="Vector_3" />
          <g id="Group_2">
            <path d={svgPaths.p29d4dcf0} fill="var(--fill-0, #F0961E)" id="Vector_4" />
            <path d={svgPaths.p1ecd1400} fill="var(--fill-0, #FFE27C)" id="Vector_5" />
          </g>
          <g id="Group_3" opacity="0.2">
            <path d={svgPaths.p3f083a00} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p396d4f00} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.p7a10900} fill="var(--fill-0, white)" id="Vector_8" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Ioe12() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="_ÎÓÈ_1">
      <Group26 />
    </div>
  );
}

function Layer12() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="Layer_2">
      <Ioe12 />
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="Group">
      <Layer12 />
    </div>
  );
}

function MbCoins12() {
  return (
    <div className="h-[7.371px] relative shrink-0 w-[7.382px]" data-name="MB Coins">
      <Group25 />
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute inset-[-0.06%_0.02%_-0.07%_0]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.38071 7.38025">
        <g id="Group">
          <path d={svgPaths.p19285dc0} fill="var(--fill-0, #FFD234)" id="Vector" />
          <path d={svgPaths.p1d556300} fill="var(--fill-0, #F0961E)" id="Vector_2" />
          <path d={svgPaths.p2fc4f200} fill="var(--fill-0, #FFB001)" id="Vector_3" />
          <g id="Group_2">
            <path d={svgPaths.p29d4dcf0} fill="var(--fill-0, #F0961E)" id="Vector_4" />
            <path d={svgPaths.p1ecd1400} fill="var(--fill-0, #FFE27C)" id="Vector_5" />
          </g>
          <g id="Group_3" opacity="0.2">
            <path d={svgPaths.p3f083a00} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p396d4f00} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.p7a10900} fill="var(--fill-0, white)" id="Vector_8" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Ioe13() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="_ÎÓÈ_1">
      <Group28 />
    </div>
  );
}

function Layer13() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="Layer_2">
      <Ioe13 />
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents inset-[-0.06%_0.02%_-0.07%_0]" data-name="Group">
      <Layer13 />
    </div>
  );
}

function MbCoins13() {
  return (
    <div className="h-[7.371px] relative shrink-0 w-[7.382px]" data-name="MB Coins">
      <Group27 />
    </div>
  );
}

function MbCoins14() {
  return (
    <div className="opacity-80 relative shrink-0 size-[7.382px]" data-name="MB Coins">
      <img loading="lazy" decoding="async" alt="" className="block max-w-none size-full" height="7.382" src={imgMbCoins} width="7.382" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <MbCoins10 />
      <MbCoins11 />
      <MbCoins12 />
      <MbCoins13 />
      <MbCoins14 />
    </div>
  );
}

function Punch() {
  return (
    <div className="bg-[#fffcf5] relative rounded-[0.984px] shrink-0 w-full" data-name="punch">
      <div className="content-stretch flex flex-col gap-[2.953px] items-start p-[3.937px] relative w-full">
        <Frame />
        <Frame4 />
        <Frame8 />
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[2.953px] items-start relative shrink-0">
      <Frame43 />
      <Punch />
    </div>
  );
}

function Frame45() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[81px] items-start justify-between left-[149.02px] p-[3.937px] rounded-[1.969px] top-[24px] w-[108px]">
      <Frame48 />
      <Frame49 />
    </div>
  );
}

function Gift() {
  return (
    <div className="relative shrink-0 size-[4.378px]" data-name="gift-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.37838 4.37838">
        <g clipPath="url(#clip0_1_463246)" id="gift-01">
          <path d={svgPaths.p1fe26b00} id="Icon" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.364865" />
        </g>
        <defs>
          <clipPath id="clip0_1_463246">
            <rect fill="white" height="4.37838" width="4.37838" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[1.459px] items-center relative shrink-0">
      <Gift />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[5.838px] not-italic relative shrink-0 text-[#101828] text-[4.378px]">Nomination Summary</p>
    </div>
  );
}

function Frame148() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame56 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[0.73px] items-start relative shrink-0 w-full" data-name="Title">
      <Frame148 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.649px] not-italic relative shrink-0 text-[#475467] text-[2.554px] w-full whitespace-pre-wrap">Here are the metrics on your teams nominations last month.</p>
    </div>
  );
}

function Globe2() {
  return (
    <div className="absolute left-[1.82px] size-[3.649px] top-[1.82px]" data-name="globe-04">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.64865 3.64865">
        <g clipPath="url(#clip0_1_430823)" id="globe-04">
          <path d={svgPaths.p1c7fa8c0} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.304054" />
        </g>
        <defs>
          <clipPath id="clip0_1_430823">
            <rect fill="white" height="3.64865" width="3.64865" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FeaturedIcon() {
  return (
    <div className="bg-[#003ca5] relative rounded-[3.649px] shrink-0 size-[7.297px]" data-name="Featured icon">
      <Globe2 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[1.459px] items-center relative shrink-0">
      <FeaturedIcon />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.649px] not-italic relative shrink-0 text-[2.554px] text-black">Recognize a Team Member</p>
    </div>
  );
}

function NumberAndBadge() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="Number and badge">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[5.108px] not-italic relative shrink-0 text-[#101828] text-[3.284px]">15</p>
    </div>
  );
}

function ArrowUp() {
  return (
    <div className="relative shrink-0 size-[2.189px]" data-name="arrow-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.18919 2.18919">
        <g id="arrow-up">
          <path d={svgPaths.p196c5de0} id="Icon" stroke="var(--stroke-0, #12B76A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.273649" />
        </g>
      </svg>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#ecfdf3] content-stretch flex gap-[0.73px] items-center mix-blend-multiply pl-[1.095px] pr-[1.459px] py-[0.365px] relative rounded-[2.919px] shrink-0" data-name="Badge">
      <ArrowUp />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.284px] not-italic relative shrink-0 text-[#027a48] text-[2.189px] text-center">3%</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[1.459px] items-center justify-end relative shrink-0">
      <NumberAndBadge />
      <Badge1 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-between min-h-px min-w-px relative">
      <Frame61 />
      <Frame62 />
    </div>
  );
}

function LineITem() {
  return (
    <div className="bg-[#fafafa] relative rounded-[1.459px] shrink-0 w-full" data-name="Line iTem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[2.189px] py-[1.459px] relative w-full">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame64 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Users2() {
  return (
    <div className="absolute left-[1.82px] size-[3.649px] top-[1.82px]" data-name="users-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.64865 3.64865">
        <g clipPath="url(#clip0_1_409207)" id="users-01">
          <path d={svgPaths.p2f5d5e00} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.304054" />
        </g>
        <defs>
          <clipPath id="clip0_1_409207">
            <rect fill="white" height="3.64865" width="3.64865" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FeaturedIcon1() {
  return (
    <div className="bg-[#9f26b5] relative rounded-[3.649px] shrink-0 size-[7.297px]" data-name="Featured icon">
      <Users2 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex gap-[1.459px] items-center relative shrink-0">
      <FeaturedIcon1 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.649px] not-italic relative shrink-0 text-[2.554px] text-black">E-Greetings</p>
    </div>
  );
}

function NumberAndBadge1() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="Number and badge">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[5.108px] not-italic relative shrink-0 text-[#101828] text-[3.284px]">245</p>
    </div>
  );
}

function ArrowUp1() {
  return (
    <div className="relative shrink-0 size-[2.189px]" data-name="arrow-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.18919 2.18919">
        <g id="arrow-up">
          <path d={svgPaths.p196c5de0} id="Icon" stroke="var(--stroke-0, #12B76A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.273649" />
        </g>
      </svg>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#ecfdf3] content-stretch flex gap-[0.73px] items-center mix-blend-multiply pl-[1.095px] pr-[1.459px] py-[0.365px] relative rounded-[2.919px] shrink-0" data-name="Badge">
      <ArrowUp1 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.284px] not-italic relative shrink-0 text-[#027a48] text-[2.189px] text-center">8%</p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex gap-[1.459px] items-center justify-end relative shrink-0">
      <NumberAndBadge1 />
      <Badge2 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-between min-h-px min-w-px relative">
      <Frame63 />
      <Frame66 />
    </div>
  );
}

function LineITem1() {
  return (
    <div className="bg-[#fafafa] relative rounded-[1.459px] shrink-0 w-full" data-name="Line iTem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[2.189px] py-[1.459px] relative w-full">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame65 />
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarDate() {
  return (
    <div className="absolute left-[1.82px] size-[3.649px] top-[1.82px]" data-name="calendar-date">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.64865 3.64865">
        <g clipPath="url(#clip0_1_398399)" id="calendar-date">
          <path d={svgPaths.p2db86b00} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.304054" />
        </g>
        <defs>
          <clipPath id="clip0_1_398399">
            <rect fill="white" height="3.64865" width="3.64865" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FeaturedIcon2() {
  return (
    <div className="bg-[#f7a800] relative rounded-[3.649px] shrink-0 size-[7.297px]" data-name="Featured icon">
      <CalendarDate />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[1.459px] items-center relative shrink-0">
      <FeaturedIcon2 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.649px] not-italic relative shrink-0 text-[2.554px] text-black">Monthly Awards</p>
    </div>
  );
}

function NumberAndBadge2() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="Number and badge">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[5.108px] not-italic relative shrink-0 text-[#101828] text-[3.284px]">18</p>
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="relative shrink-0 size-[2.189px]" data-name="arrow-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.18919 2.18919">
        <g id="arrow-down">
          <path d={svgPaths.p1d782200} id="Icon" stroke="var(--stroke-0, #F04438)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.273649" />
        </g>
      </svg>
    </div>
  );
}

function Badge3() {
  return (
    <div className="bg-[#fef3f2] content-stretch flex gap-[0.73px] items-center mix-blend-multiply pl-[1.095px] pr-[1.459px] py-[0.365px] relative rounded-[2.919px] shrink-0" data-name="Badge">
      <ArrowDown />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.284px] not-italic relative shrink-0 text-[#b42318] text-[2.189px] text-center">2%</p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex gap-[1.459px] items-center justify-end relative shrink-0">
      <NumberAndBadge2 />
      <Badge3 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-between min-h-px min-w-px relative">
      <Frame68 />
      <Frame69 />
    </div>
  );
}

function LineITem2() {
  return (
    <div className="bg-[#fafafa] relative rounded-[1.459px] shrink-0 w-full" data-name="Line iTem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[2.189px] py-[1.459px] relative w-full">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame67 />
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarCheck1() {
  return (
    <div className="absolute left-[1.82px] size-[3.649px] top-[1.82px]" data-name="calendar-check-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.64865 3.64865">
        <g clipPath="url(#clip0_1_733445)" id="calendar-check-01">
          <path d={svgPaths.p227a7a00} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.304054" />
        </g>
        <defs>
          <clipPath id="clip0_1_733445">
            <rect fill="white" height="3.64865" width="3.64865" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FeaturedIcon3() {
  return (
    <div className="bg-[#00823d] relative rounded-[3.649px] shrink-0 size-[7.297px]" data-name="Featured icon">
      <CalendarCheck1 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex gap-[1.459px] items-center relative shrink-0">
      <FeaturedIcon3 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.649px] not-italic relative shrink-0 text-[2.554px] text-black">Annual Awards</p>
    </div>
  );
}

function NumberAndBadge3() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="Number and badge">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[5.108px] not-italic relative shrink-0 text-[#101828] text-[3.284px]">11</p>
    </div>
  );
}

function ArrowUp2() {
  return (
    <div className="relative shrink-0 size-[2.189px]" data-name="arrow-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.18919 2.18919">
        <g id="arrow-up">
          <path d={svgPaths.p196c5de0} id="Icon" stroke="var(--stroke-0, #12B76A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.273649" />
        </g>
      </svg>
    </div>
  );
}

function Badge4() {
  return (
    <div className="bg-[#ecfdf3] content-stretch flex gap-[0.73px] items-center mix-blend-multiply pl-[1.095px] pr-[1.459px] py-[0.365px] relative rounded-[2.919px] shrink-0" data-name="Badge">
      <ArrowUp2 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.284px] not-italic relative shrink-0 text-[#027a48] text-[2.189px] text-center">8%</p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-[1.459px] items-center justify-end relative shrink-0">
      <NumberAndBadge3 />
      <Badge4 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-between min-h-px min-w-px relative">
      <Frame71 />
      <Frame72 />
    </div>
  );
}

function LineITem3() {
  return (
    <div className="bg-[#fafafa] relative rounded-[1.459px] shrink-0 w-full" data-name="Line iTem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[2.189px] py-[1.459px] relative w-full">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame70 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Beaker2() {
  return (
    <div className="absolute left-[1.82px] size-[3.649px] top-[1.82px]" data-name="beaker-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.64865 3.64865">
        <g clipPath="url(#clip0_1_387591)" id="beaker-02">
          <path d={svgPaths.p39c267c0} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.304054" />
        </g>
        <defs>
          <clipPath id="clip0_1_387591">
            <rect fill="white" height="3.64865" width="3.64865" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FeaturedIcon4() {
  return (
    <div className="bg-[#e33d2e] relative rounded-[3.649px] shrink-0 size-[7.297px]" data-name="Featured icon">
      <Beaker2 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex gap-[1.459px] items-center relative shrink-0">
      <FeaturedIcon4 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.649px] not-italic relative shrink-0 text-[2.554px] text-black">Instructional Awards</p>
    </div>
  );
}

function NumberAndBadge4() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="Number and badge">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[5.108px] not-italic relative shrink-0 text-[#101828] text-[3.284px]">2</p>
    </div>
  );
}

function Dot() {
  return (
    <div className="relative shrink-0 size-[1.459px]" data-name="_Dot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.45946 1.45946">
        <g clipPath="url(#clip0_1_852339)" id="_Dot">
          <circle cx="0.729732" cy="0.729729" fill="var(--fill-0, #2970FF)" id="Dot" r="0.547297" />
        </g>
        <defs>
          <clipPath id="clip0_1_852339">
            <rect fill="white" height="1.45946" width="1.45946" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Badge5() {
  return (
    <div className="bg-[#eff4ff] content-stretch flex gap-[0.73px] items-center mix-blend-multiply pl-[1.095px] pr-[1.459px] py-[0.365px] relative rounded-[2.919px] shrink-0" data-name="Badge">
      <Dot />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.284px] not-italic relative shrink-0 text-[#004eeb] text-[2.189px] text-center">0%</p>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex gap-[1.459px] items-center justify-end relative shrink-0">
      <NumberAndBadge4 />
      <Badge5 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-between min-h-px min-w-px relative">
      <Frame74 />
      <Frame75 />
    </div>
  );
}

function LineITem4() {
  return (
    <div className="bg-[#fafafa] relative rounded-[1.459px] shrink-0 w-full" data-name="Line iTem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[2.189px] py-[1.459px] relative w-full">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame73 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[1.642px] items-start min-h-px min-w-px relative">
      <LineITem />
      <LineITem1 />
      <LineITem2 />
      <LineITem3 />
      <LineITem4 />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute content-stretch flex items-start left-0 top-0" data-name="1">
      <Frame104 />
    </div>
  );
}

function CalendarDate1() {
  return (
    <div className="absolute left-[1.82px] size-[3.649px] top-[1.82px]" data-name="calendar-date">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.64865 3.64865">
        <g clipPath="url(#clip0_1_398399)" id="calendar-date">
          <path d={svgPaths.p2db86b00} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.304054" />
        </g>
        <defs>
          <clipPath id="clip0_1_398399">
            <rect fill="white" height="3.64865" width="3.64865" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FeaturedIcon5() {
  return (
    <div className="bg-[#f7a800] relative rounded-[3.649px] shrink-0 size-[7.297px]" data-name="Featured icon">
      <CalendarDate1 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex gap-[1.459px] items-center relative shrink-0">
      <FeaturedIcon5 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.649px] not-italic relative shrink-0 text-[2.554px] text-black">Monthly Awards</p>
    </div>
  );
}

function NumberAndBadge5() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="Number and badge">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[5.108px] not-italic relative shrink-0 text-[#101828] text-[3.284px]">35</p>
    </div>
  );
}

function ArrowDown1() {
  return (
    <div className="relative shrink-0 size-[2.189px]" data-name="arrow-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.18919 2.18919">
        <g id="arrow-down">
          <path d={svgPaths.p1d782200} id="Icon" stroke="var(--stroke-0, #F04438)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.273649" />
        </g>
      </svg>
    </div>
  );
}

function Badge6() {
  return (
    <div className="bg-[#fef3f2] content-stretch flex gap-[0.73px] items-center mix-blend-multiply pl-[1.095px] pr-[1.459px] py-[0.365px] relative rounded-[2.919px] shrink-0" data-name="Badge">
      <ArrowDown1 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.284px] not-italic relative shrink-0 text-[#b42318] text-[2.189px] text-center">2%</p>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex gap-[1.459px] items-center justify-end relative shrink-0">
      <NumberAndBadge5 />
      <Badge6 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-between min-h-px min-w-px relative">
      <Frame77 />
      <Frame78 />
    </div>
  );
}

function LineITem5() {
  return (
    <div className="bg-[#fafafa] relative rounded-[1.459px] shrink-0 w-full" data-name="Line iTem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[2.189px] py-[1.459px] relative w-full">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame76 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Globe() {
  return (
    <div className="absolute left-[1.82px] size-[3.649px] top-[1.82px]" data-name="globe-04">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.64865 3.64865">
        <g clipPath="url(#clip0_1_430823)" id="globe-04">
          <path d={svgPaths.p1c7fa8c0} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.304054" />
        </g>
        <defs>
          <clipPath id="clip0_1_430823">
            <rect fill="white" height="3.64865" width="3.64865" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FeaturedIcon6() {
  return (
    <div className="bg-[#003ca5] relative rounded-[3.649px] shrink-0 size-[7.297px]" data-name="Featured icon">
      <Globe />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex gap-[1.459px] items-center relative shrink-0">
      <FeaturedIcon6 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.649px] not-italic relative shrink-0 text-[2.554px] text-black">Better Your World</p>
    </div>
  );
}

function NumberAndBadge6() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="Number and badge">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[5.108px] not-italic relative shrink-0 text-[#101828] text-[3.284px]">35</p>
    </div>
  );
}

function ArrowUp3() {
  return (
    <div className="relative shrink-0 size-[2.189px]" data-name="arrow-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.18919 2.18919">
        <g id="arrow-up">
          <path d={svgPaths.p196c5de0} id="Icon" stroke="var(--stroke-0, #12B76A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.273649" />
        </g>
      </svg>
    </div>
  );
}

function Badge7() {
  return (
    <div className="bg-[#ecfdf3] content-stretch flex gap-[0.73px] items-center mix-blend-multiply pl-[1.095px] pr-[1.459px] py-[0.365px] relative rounded-[2.919px] shrink-0" data-name="Badge">
      <ArrowUp3 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.284px] not-italic relative shrink-0 text-[#027a48] text-[2.189px] text-center">3%</p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex gap-[1.459px] items-center justify-end relative shrink-0">
      <NumberAndBadge6 />
      <Badge7 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-between min-h-px min-w-px relative">
      <Frame80 />
      <Frame81 />
    </div>
  );
}

function LineITem6() {
  return (
    <div className="bg-[#fafafa] relative rounded-[1.459px] shrink-0 w-full" data-name="Line iTem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[2.189px] py-[1.459px] relative w-full">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame79 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Beaker() {
  return (
    <div className="absolute left-[1.82px] size-[3.649px] top-[1.82px]" data-name="beaker-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.64865 3.64865">
        <g clipPath="url(#clip0_1_387591)" id="beaker-02">
          <path d={svgPaths.p39c267c0} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.304054" />
        </g>
        <defs>
          <clipPath id="clip0_1_387591">
            <rect fill="white" height="3.64865" width="3.64865" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FeaturedIcon7() {
  return (
    <div className="bg-[#e33d2e] relative rounded-[3.649px] shrink-0 size-[7.297px]" data-name="Featured icon">
      <Beaker />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex gap-[1.459px] items-center relative shrink-0">
      <FeaturedIcon7 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.649px] not-italic relative shrink-0 text-[2.554px] text-black">Instructional Awards</p>
    </div>
  );
}

function NumberAndBadge7() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="Number and badge">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[5.108px] not-italic relative shrink-0 text-[#101828] text-[3.284px]">7</p>
    </div>
  );
}

function Dot1() {
  return (
    <div className="relative shrink-0 size-[1.459px]" data-name="_Dot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.45946 1.45946">
        <g clipPath="url(#clip0_1_852339)" id="_Dot">
          <circle cx="0.729732" cy="0.729729" fill="var(--fill-0, #2970FF)" id="Dot" r="0.547297" />
        </g>
        <defs>
          <clipPath id="clip0_1_852339">
            <rect fill="white" height="1.45946" width="1.45946" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Badge8() {
  return (
    <div className="bg-[#eff4ff] content-stretch flex gap-[0.73px] items-center mix-blend-multiply pl-[1.095px] pr-[1.459px] py-[0.365px] relative rounded-[2.919px] shrink-0" data-name="Badge">
      <Dot1 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.284px] not-italic relative shrink-0 text-[#004eeb] text-[2.189px] text-center">0%</p>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex gap-[1.459px] items-center justify-end relative shrink-0">
      <NumberAndBadge7 />
      <Badge8 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-between min-h-px min-w-px relative">
      <Frame83 />
      <Frame84 />
    </div>
  );
}

function LineITem7() {
  return (
    <div className="bg-[#fafafa] relative rounded-[1.459px] shrink-0 w-full" data-name="Line iTem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[2.189px] py-[1.459px] relative w-full">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame82 />
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarCheck() {
  return (
    <div className="absolute left-[1.82px] size-[3.649px] top-[1.82px]" data-name="calendar-check-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.64865 3.64865">
        <g clipPath="url(#clip0_1_733445)" id="calendar-check-01">
          <path d={svgPaths.p227a7a00} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.304054" />
        </g>
        <defs>
          <clipPath id="clip0_1_733445">
            <rect fill="white" height="3.64865" width="3.64865" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FeaturedIcon8() {
  return (
    <div className="bg-[#00823d] relative rounded-[3.649px] shrink-0 size-[7.297px]" data-name="Featured icon">
      <CalendarCheck />
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex gap-[1.459px] items-center relative shrink-0">
      <FeaturedIcon8 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.649px] not-italic relative shrink-0 text-[2.554px] text-black">Annual Awards</p>
    </div>
  );
}

function NumberAndBadge8() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="Number and badge">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[5.108px] not-italic relative shrink-0 text-[#101828] text-[3.284px]">17</p>
    </div>
  );
}

function ArrowUp4() {
  return (
    <div className="relative shrink-0 size-[2.189px]" data-name="arrow-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.18919 2.18919">
        <g id="arrow-up">
          <path d={svgPaths.p196c5de0} id="Icon" stroke="var(--stroke-0, #12B76A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.273649" />
        </g>
      </svg>
    </div>
  );
}

function Badge9() {
  return (
    <div className="bg-[#ecfdf3] content-stretch flex gap-[0.73px] items-center mix-blend-multiply pl-[1.095px] pr-[1.459px] py-[0.365px] relative rounded-[2.919px] shrink-0" data-name="Badge">
      <ArrowUp4 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.284px] not-italic relative shrink-0 text-[#027a48] text-[2.189px] text-center">8%</p>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex gap-[1.459px] items-center justify-end relative shrink-0">
      <NumberAndBadge8 />
      <Badge9 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-between min-h-px min-w-px relative">
      <Frame86 />
      <Frame87 />
    </div>
  );
}

function LineITem8() {
  return (
    <div className="bg-[#fafafa] relative rounded-[1.459px] shrink-0 w-full" data-name="Line iTem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[2.189px] py-[1.459px] relative w-full">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame85 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Users() {
  return (
    <div className="absolute left-[1.82px] size-[3.649px] top-[1.82px]" data-name="users-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.64865 3.64865">
        <g clipPath="url(#clip0_1_409207)" id="users-01">
          <path d={svgPaths.p2f5d5e00} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.304054" />
        </g>
        <defs>
          <clipPath id="clip0_1_409207">
            <rect fill="white" height="3.64865" width="3.64865" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FeaturedIcon9() {
  return (
    <div className="bg-[#9f26b5] relative rounded-[3.649px] shrink-0 size-[7.297px]" data-name="Featured icon">
      <Users />
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex gap-[1.459px] items-center relative shrink-0">
      <FeaturedIcon9 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.649px] not-italic relative shrink-0 text-[2.554px] text-black">Peer Awards</p>
    </div>
  );
}

function NumberAndBadge9() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="Number and badge">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[5.108px] not-italic relative shrink-0 text-[#101828] text-[3.284px]">452</p>
    </div>
  );
}

function ArrowUp5() {
  return (
    <div className="relative shrink-0 size-[2.189px]" data-name="arrow-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.18919 2.18919">
        <g id="arrow-up">
          <path d={svgPaths.p196c5de0} id="Icon" stroke="var(--stroke-0, #12B76A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.273649" />
        </g>
      </svg>
    </div>
  );
}

function Badge10() {
  return (
    <div className="bg-[#ecfdf3] content-stretch flex gap-[0.73px] items-center mix-blend-multiply pl-[1.095px] pr-[1.459px] py-[0.365px] relative rounded-[2.919px] shrink-0" data-name="Badge">
      <ArrowUp5 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.284px] not-italic relative shrink-0 text-[#027a48] text-[2.189px] text-center">8%</p>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex gap-[1.459px] items-center justify-end relative shrink-0">
      <NumberAndBadge9 />
      <Badge10 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-between min-h-px min-w-px relative">
      <Frame89 />
      <Frame90 />
    </div>
  );
}

function LineITem9() {
  return (
    <div className="bg-[#fafafa] relative rounded-[1.459px] shrink-0 w-full" data-name="Line iTem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[2.189px] py-[1.459px] relative w-full">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame88 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[1.642px] items-start min-h-px min-w-px relative">
      <LineITem5 />
      <LineITem6 />
      <LineITem7 />
      <LineITem8 />
      <LineITem9 />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute content-stretch flex items-start left-[106.54px] top-0" data-name="2">
      <Frame105 />
    </div>
  );
}

function Beaker1() {
  return (
    <div className="absolute left-[1.82px] size-[3.649px] top-[1.82px]" data-name="beaker-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.64865 3.64865">
        <g clipPath="url(#clip0_1_387591)" id="beaker-02">
          <path d={svgPaths.p39c267c0} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.304054" />
        </g>
        <defs>
          <clipPath id="clip0_1_387591">
            <rect fill="white" height="3.64865" width="3.64865" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FeaturedIcon10() {
  return (
    <div className="bg-[#e33d2e] relative rounded-[3.649px] shrink-0 size-[7.297px]" data-name="Featured icon">
      <Beaker1 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex gap-[1.459px] items-center relative shrink-0">
      <FeaturedIcon10 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.649px] not-italic relative shrink-0 text-[2.554px] text-black">Instructional Awards</p>
    </div>
  );
}

function NumberAndBadge10() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="Number and badge">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[5.108px] not-italic relative shrink-0 text-[#101828] text-[3.284px] w-[2.369px] whitespace-pre-wrap">3</p>
    </div>
  );
}

function Dot2() {
  return (
    <div className="relative shrink-0 size-[1.459px]" data-name="_Dot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.45946 1.45946">
        <g clipPath="url(#clip0_1_852339)" id="_Dot">
          <circle cx="0.729732" cy="0.729729" fill="var(--fill-0, #2970FF)" id="Dot" r="0.547297" />
        </g>
        <defs>
          <clipPath id="clip0_1_852339">
            <rect fill="white" height="1.45946" width="1.45946" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Badge11() {
  return (
    <div className="bg-[#eff4ff] content-stretch flex gap-[0.73px] items-center mix-blend-multiply pl-[1.095px] pr-[1.459px] py-[0.365px] relative rounded-[2.919px] shrink-0" data-name="Badge">
      <Dot2 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.284px] not-italic relative shrink-0 text-[#004eeb] text-[2.189px] text-center w-[5.838px] whitespace-pre-wrap">0%</p>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex gap-[1.459px] items-center justify-end relative shrink-0">
      <NumberAndBadge10 />
      <Badge11 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-between min-h-px min-w-px relative">
      <Frame92 />
      <Frame93 />
    </div>
  );
}

function LineITem10() {
  return (
    <div className="bg-[#fafafa] relative rounded-[1.459px] shrink-0 w-full" data-name="Line iTem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[2.189px] py-[1.459px] relative w-full">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame91 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Users1() {
  return (
    <div className="absolute left-[1.82px] size-[3.649px] top-[1.82px]" data-name="users-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.64865 3.64865">
        <g clipPath="url(#clip0_1_409207)" id="users-01">
          <path d={svgPaths.p2f5d5e00} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.304054" />
        </g>
        <defs>
          <clipPath id="clip0_1_409207">
            <rect fill="white" height="3.64865" width="3.64865" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FeaturedIcon11() {
  return (
    <div className="bg-[#9f26b5] relative rounded-[3.649px] shrink-0 size-[7.297px]" data-name="Featured icon">
      <Users1 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex gap-[1.459px] items-center relative shrink-0">
      <FeaturedIcon11 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.649px] not-italic relative shrink-0 text-[2.554px] text-black">Peer Awards</p>
    </div>
  );
}

function NumberAndBadge11() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="Number and badge">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[5.108px] not-italic relative shrink-0 text-[#101828] text-[3.284px] w-[5.923px] whitespace-pre-wrap">351</p>
    </div>
  );
}

function ArrowUp6() {
  return (
    <div className="relative shrink-0 size-[2.189px]" data-name="arrow-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.18919 2.18919">
        <g id="arrow-up">
          <path d={svgPaths.p196c5de0} id="Icon" stroke="var(--stroke-0, #12B76A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.273649" />
        </g>
      </svg>
    </div>
  );
}

function Badge12() {
  return (
    <div className="bg-[#ecfdf3] content-stretch flex gap-[0.73px] items-center mix-blend-multiply pl-[1.095px] pr-[1.459px] py-[0.365px] relative rounded-[2.919px] shrink-0" data-name="Badge">
      <ArrowUp6 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.284px] not-italic relative shrink-0 text-[#027a48] text-[2.189px] text-center w-[5.838px] whitespace-pre-wrap">8%</p>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex gap-[1.459px] items-center justify-end relative shrink-0">
      <NumberAndBadge11 />
      <Badge12 />
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-between min-h-px min-w-px relative">
      <Frame95 />
      <Frame96 />
    </div>
  );
}

function LineITem11() {
  return (
    <div className="bg-[#fafafa] relative rounded-[1.459px] shrink-0 w-full" data-name="Line iTem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[2.189px] py-[1.459px] relative w-full">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame94 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Globe1() {
  return (
    <div className="absolute left-[1.82px] size-[3.649px] top-[1.82px]" data-name="globe-04">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.64865 3.64865">
        <g clipPath="url(#clip0_1_430823)" id="globe-04">
          <path d={svgPaths.p1c7fa8c0} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.304054" />
        </g>
        <defs>
          <clipPath id="clip0_1_430823">
            <rect fill="white" height="3.64865" width="3.64865" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FeaturedIcon12() {
  return (
    <div className="bg-[#003ca5] relative rounded-[3.649px] shrink-0 size-[7.297px]" data-name="Featured icon">
      <Globe1 />
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex gap-[1.459px] items-center relative shrink-0">
      <FeaturedIcon12 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.649px] not-italic relative shrink-0 text-[2.554px] text-black">Better Your World</p>
    </div>
  );
}

function NumberAndBadge12() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="Number and badge">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[5.108px] not-italic relative shrink-0 text-[#101828] text-[3.284px] w-[4.344px] whitespace-pre-wrap">54</p>
    </div>
  );
}

function ArrowUp7() {
  return (
    <div className="relative shrink-0 size-[2.189px]" data-name="arrow-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.18919 2.18919">
        <g id="arrow-up">
          <path d={svgPaths.p196c5de0} id="Icon" stroke="var(--stroke-0, #12B76A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.273649" />
        </g>
      </svg>
    </div>
  );
}

function Badge13() {
  return (
    <div className="bg-[#ecfdf3] content-stretch flex gap-[0.73px] items-center mix-blend-multiply pl-[1.095px] pr-[1.459px] py-[0.365px] relative rounded-[2.919px] shrink-0" data-name="Badge">
      <ArrowUp7 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.284px] not-italic relative shrink-0 text-[#027a48] text-[2.189px] text-center w-[5.838px] whitespace-pre-wrap">3%</p>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex gap-[1.459px] items-center justify-end relative shrink-0">
      <NumberAndBadge12 />
      <Badge13 />
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-between min-h-px min-w-px relative">
      <Frame98 />
      <Frame99 />
    </div>
  );
}

function LineITem12() {
  return (
    <div className="bg-[#fafafa] relative rounded-[1.459px] shrink-0 w-full" data-name="Line iTem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[2.189px] py-[1.459px] relative w-full">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame97 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[1.642px] items-start min-h-px min-w-px relative">
      <LineITem10 />
      <LineITem11 />
      <LineITem12 />
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute content-stretch flex items-start left-[213.08px] top-0" data-name="3">
      <Frame106 />
    </div>
  );
}

function Carousel() {
  return (
    <div className="h-[57.649px] relative shrink-0 w-[102.162px]" data-name="Carousel">
      <Component />
      <Component1 />
      <Component2 />
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[4.378px]" data-name="chevron-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.37838 4.37838">
        <g id="chevron-left">
          <path d={svgPaths.p13d34700} id="Icon" stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.364865" />
        </g>
      </svg>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[4.378px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.37838 4.37838">
        <g id="chevron-right">
          <path d={svgPaths.p64f7080} id="Icon" stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.364865" />
        </g>
      </svg>
    </div>
  );
}

function WidgetIndicator() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="widget indicator">
      <ChevronLeft />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.649px] not-italic relative shrink-0 text-[2.554px] text-black">1 of 3</p>
      <ChevronRight />
    </div>
  );
}

function WidgetSmBlock() {
  return (
    <div className="absolute bg-white h-[89.027px] left-[32px] rounded-[1.459px] top-[114.67px] w-[108px]" data-name="widget sm block">
      <div className="content-stretch flex flex-col gap-[3.649px] items-center justify-center overflow-clip px-[2.919px] py-[4.378px] relative rounded-[inherit] size-full">
        <Title />
        <Carousel />
        <WidgetIndicator />
      </div>
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0.182px] border-solid inset-0 pointer-events-none rounded-[1.459px] shadow-[0px_0.182px_0.547px_0px_rgba(16,24,40,0.1),0px_0.182px_0.365px_0px_rgba(16,24,40,0.06)]" />
    </div>
  );
}

function CalendarHeart() {
  return (
    <div className="relative shrink-0 size-[4.318px]" data-name="calendar-heart-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.31824 4.31824">
        <g clipPath="url(#clip0_1_517286)" id="calendar-heart-01">
          <path d={svgPaths.p2f19fb00} id="Icon" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.359853" />
        </g>
        <defs>
          <clipPath id="clip0_1_517286">
            <rect fill="white" height="4.31824" width="4.31824" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[1.439px] items-center relative shrink-0">
      <CalendarHeart />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[5.758px] not-italic relative shrink-0 text-[#101828] text-[4.318px]">Service Anniversaries</p>
    </div>
  );
}

function Frame149() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame57 />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col gap-[0.72px] items-start relative shrink-0 w-full" data-name="Title">
      <Frame149 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-full whitespace-pre-wrap">Anniversaries coming up in the next 60 days.</p>
    </div>
  );
}

function Avatar10() {
  return (
    <div className="relative rounded-[35.985px] shrink-0 size-[7.197px]" data-name="Avatar">
      <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[35.985px] size-full" src={imgAvatar10} />
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[3.599px] not-italic relative shrink-0 text-[2.519px]" data-name="Text and supporting text">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#101828]">Olivia Rhyes</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#475467]">UX Designer</p>
    </div>
  );
}

function TableCell60() {
  return (
    <div className="content-stretch flex gap-[2.159px] items-center px-[2.879px] py-[2.159px] relative shrink-0 w-[49.66px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <Avatar10 />
      <TextAndSupportingText1 />
    </div>
  );
}

function TableCell61() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center justify-center px-[4.318px] py-[2.159px] relative shrink-0 w-[22.311px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px]">5 Years</p>
    </div>
  );
}

function TableCell62() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center px-[4.318px] py-[2.159px] relative shrink-0 w-[25.909px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px]">April 15, 2024</p>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <TableCell60 />
      <TableCell61 />
      <TableCell62 />
    </div>
  );
}

function Member() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[97.88px]" data-name="Member 1">
      <Frame100 />
    </div>
  );
}

function Avatar11() {
  return (
    <div className="relative rounded-[35.985px] shrink-0 size-[7.197px]" data-name="Avatar">
      <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[35.985px] size-full" src={imgAvatar11} />
    </div>
  );
}

function TextAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[3.599px] not-italic relative shrink-0 text-[2.519px]" data-name="Text and supporting text">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#101828]">John Rogers</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#475467]">Sales Associate</p>
    </div>
  );
}

function TableCell63() {
  return (
    <div className="content-stretch flex gap-[2.159px] items-center px-[2.879px] py-[2.159px] relative shrink-0 w-[49.66px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <Avatar11 />
      <TextAndSupportingText2 />
    </div>
  );
}

function TableCell64() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center justify-center px-[4.318px] py-[2.159px] relative shrink-0 w-[22.311px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px]">2 Years</p>
    </div>
  );
}

function TableCell65() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center px-[4.318px] py-[2.159px] relative shrink-0 w-[25.909px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px]">April 30, 2024</p>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <TableCell63 />
      <TableCell64 />
      <TableCell65 />
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[97.88px]">
      <Frame102 />
    </div>
  );
}

function Member1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[97.88px]" data-name="Member 2">
      <Frame101 />
    </div>
  );
}

function Avatar12() {
  return (
    <div className="relative rounded-[35.985px] shrink-0 size-[7.197px]" data-name="Avatar">
      <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[35.985px] size-full" src={imgAvatar12} />
    </div>
  );
}

function TextAndSupportingText3() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[3.599px] not-italic relative shrink-0 text-[2.519px]" data-name="Text and supporting text">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#101828]">Lana Steiner</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#475467]">Sales</p>
    </div>
  );
}

function TableCell66() {
  return (
    <div className="content-stretch flex gap-[2.159px] items-center px-[2.879px] py-[2.159px] relative shrink-0 w-[49.66px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <Avatar12 />
      <TextAndSupportingText3 />
    </div>
  );
}

function TableCell67() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center justify-center px-[4.318px] py-[2.159px] relative shrink-0 w-[22.311px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px]">10 Years</p>
    </div>
  );
}

function TableCell68() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center px-[4.318px] py-[2.159px] relative shrink-0 w-[25.909px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px]">May 13, 2024</p>
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <TableCell66 />
      <TableCell67 />
      <TableCell68 />
    </div>
  );
}

function Member2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[97.88px]" data-name="Member 3">
      <Frame103 />
    </div>
  );
}

function Avatar13() {
  return (
    <div className="relative rounded-[35.985px] shrink-0 size-[7.197px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[35.985px]">
        <div className="absolute bg-[#bea887] inset-0 rounded-[35.985px]" />
        <img loading="lazy" decoding="async" alt="" className="absolute max-w-none object-cover rounded-[35.985px] size-full" src={imgAvatar3} />
      </div>
    </div>
  );
}

function TextAndSupportingText4() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[3.599px] not-italic relative shrink-0 text-[2.519px]" data-name="Text and supporting text">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#101828]">Samila Johnson</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#475467]">Accountant</p>
    </div>
  );
}

function TableCell69() {
  return (
    <div className="content-stretch flex gap-[2.159px] items-center px-[2.879px] py-[2.159px] relative shrink-0 w-[49.66px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <Avatar13 />
      <TextAndSupportingText4 />
    </div>
  );
}

function TableCell70() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center justify-center px-[4.318px] py-[2.159px] relative shrink-0 w-[22.311px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px]">7 Years</p>
    </div>
  );
}

function TableCell71() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center px-[4.318px] py-[2.159px] relative shrink-0 w-[25.909px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px]">May 20, 2024</p>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <TableCell69 />
      <TableCell70 />
      <TableCell71 />
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[97.88px]">
      <Frame108 />
    </div>
  );
}

function Member3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[97.88px]" data-name="Member 4">
      <Frame107 />
    </div>
  );
}

function Avatar14() {
  return (
    <div className="relative rounded-[35.985px] shrink-0 size-[7.197px]" data-name="Avatar">
      <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[35.985px] size-full" src={imgAvatar13} />
    </div>
  );
}

function TextAndSupportingText5() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[3.599px] not-italic relative shrink-0 text-[2.519px]" data-name="Text and supporting text">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#101828]">Dani Summer</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#475467]">UX Designer</p>
    </div>
  );
}

function TableCell72() {
  return (
    <div className="content-stretch flex gap-[2.159px] items-center p-[2.159px] relative shrink-0 w-[49.66px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <Avatar14 />
      <TextAndSupportingText5 />
    </div>
  );
}

function TableCell73() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center justify-center px-[4.318px] py-[2.159px] relative shrink-0 w-[22.311px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px]">5 Years</p>
    </div>
  );
}

function TableCell74() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center px-[4.318px] py-[2.159px] relative shrink-0 w-[25.909px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px]">May 22, 2024</p>
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <TableCell72 />
      <TableCell73 />
      <TableCell74 />
    </div>
  );
}

function Member4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Member 5">
      <Frame109 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto relative shrink-0 w-[97.88px]" data-name="List">
      <Member />
      <Member1 />
      <Member2 />
      <Member3 />
      <Member4 />
    </div>
  );
}

function List1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[97.88px]" data-name="List 1">
      <List />
    </div>
  );
}

function Avatar15() {
  return (
    <div className="relative rounded-[35.985px] shrink-0 size-[7.197px]" data-name="Avatar">
      <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[35.985px] size-full" src={imgAvatar14} />
    </div>
  );
}

function TextAndSupportingText6() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[3.599px] not-italic relative shrink-0 text-[2.519px]" data-name="Text and supporting text">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#101828]">Dani Summer</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#475467]">UX Designer</p>
    </div>
  );
}

function TableCell75() {
  return (
    <div className="content-stretch flex gap-[2.159px] items-center px-[2.879px] py-[2.159px] relative shrink-0 w-[49.66px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <Avatar15 />
      <TextAndSupportingText6 />
    </div>
  );
}

function TableCell76() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center justify-center px-[4.318px] py-[2.159px] relative shrink-0 w-[22.311px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[8.958px] whitespace-pre-wrap">3 Years</p>
    </div>
  );
}

function TableCell77() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center px-[4.318px] py-[2.159px] relative shrink-0 w-[25.909px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[13.135px] whitespace-pre-wrap">May 27, 2024</p>
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <TableCell75 />
      <TableCell76 />
      <TableCell77 />
    </div>
  );
}

function Member5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[97.88px]" data-name="Member 1">
      <Frame110 />
    </div>
  );
}

function Avatar16() {
  return (
    <div className="relative rounded-[35.985px] shrink-0 size-[7.197px]" data-name="Avatar">
      <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[35.985px] size-full" src={imgAvatar15} />
    </div>
  );
}

function TextAndSupportingText7() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[3.599px] not-italic relative shrink-0 text-[2.519px] whitespace-pre-wrap" data-name="Text and supporting text">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#101828] w-[13.315px]">Drew Cano (You)</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#475467] w-[25.37px]">Sales Manager</p>
    </div>
  );
}

function TableCell78() {
  return (
    <div className="content-stretch flex gap-[2.159px] items-center px-[2.879px] py-[2.159px] relative shrink-0 w-[49.66px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <Avatar16 />
      <TextAndSupportingText7 />
    </div>
  );
}

function TableCell79() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center justify-center px-[4.318px] py-[2.159px] relative shrink-0 w-[22.311px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[8.958px] whitespace-pre-wrap">9 Years</p>
    </div>
  );
}

function TableCell80() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center px-[4.318px] py-[2.159px] relative shrink-0 w-[25.909px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[13.135px] whitespace-pre-wrap">May 27, 2024</p>
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <TableCell78 />
      <TableCell79 />
      <TableCell80 />
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[97.88px]">
      <Frame112 />
    </div>
  );
}

function Member6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[97.88px]" data-name="Member 2">
      <Frame111 />
    </div>
  );
}

function Avatar17() {
  return (
    <div className="relative rounded-[35.985px] shrink-0 size-[7.197px]" data-name="Avatar">
      <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[35.985px] size-full" src={imgAvatar16} />
    </div>
  );
}

function TextAndSupportingText8() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[3.599px] not-italic relative shrink-0 text-[2.519px]" data-name="Text and supporting text">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#101828]">Derek Weiss</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#475467]">Sales</p>
    </div>
  );
}

function TableCell81() {
  return (
    <div className="content-stretch flex gap-[2.159px] items-center px-[2.879px] py-[2.159px] relative shrink-0 w-[49.66px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <Avatar17 />
      <TextAndSupportingText8 />
    </div>
  );
}

function TableCell82() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center justify-center px-[4.318px] py-[2.159px] relative shrink-0 w-[22.311px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[8.958px] whitespace-pre-wrap">5 Years</p>
    </div>
  );
}

function TableCell83() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center px-[4.318px] py-[2.159px] relative shrink-0 w-[25.909px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[13.135px] whitespace-pre-wrap">May 29, 2024</p>
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <TableCell81 />
      <TableCell82 />
      <TableCell83 />
    </div>
  );
}

function Member7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[97.88px]" data-name="Member 3">
      <Frame113 />
    </div>
  );
}

function Avatar18() {
  return (
    <div className="relative rounded-[35.985px] shrink-0 size-[7.197px]" data-name="Avatar">
      <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[35.985px] size-full" src={imgAvatar17} />
    </div>
  );
}

function TextAndSupportingText9() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[3.599px] not-italic relative shrink-0 text-[2.519px]" data-name="Text and supporting text">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#101828]">Kim Tanner</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#475467]">Accountant</p>
    </div>
  );
}

function TableCell84() {
  return (
    <div className="content-stretch flex gap-[2.159px] items-center px-[2.879px] py-[2.159px] relative shrink-0 w-[49.66px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <Avatar18 />
      <TextAndSupportingText9 />
    </div>
  );
}

function TableCell85() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center justify-center px-[4.318px] py-[2.159px] relative shrink-0 w-[22.311px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[8.958px] whitespace-pre-wrap">4 Years</p>
    </div>
  );
}

function TableCell86() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center px-[4.318px] py-[2.159px] relative shrink-0 w-[25.909px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[13.135px] whitespace-pre-wrap">June 01, 2024</p>
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <TableCell84 />
      <TableCell85 />
      <TableCell86 />
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[97.88px]">
      <Frame115 />
    </div>
  );
}

function Member8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[97.88px]" data-name="Member 4">
      <Frame114 />
    </div>
  );
}

function Avatar19() {
  return (
    <div className="relative rounded-[35.985px] shrink-0 size-[7.197px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[35.985px]">
        <div className="absolute bg-[#dbc0dd] inset-0 rounded-[35.985px]" />
        <img loading="lazy" decoding="async" alt="" className="absolute max-w-none object-cover rounded-[35.985px] size-full" src={imgAvatar9} />
      </div>
    </div>
  );
}

function TextAndSupportingText10() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[3.599px] not-italic relative shrink-0 text-[2.519px]" data-name="Text and supporting text">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#101828] w-[13.315px] whitespace-pre-wrap">Denise Farrow</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#475467]">UX Designer</p>
    </div>
  );
}

function TableCell87() {
  return (
    <div className="content-stretch flex gap-[2.159px] items-center p-[2.159px] relative shrink-0 w-[49.66px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <Avatar19 />
      <TextAndSupportingText10 />
    </div>
  );
}

function TableCell88() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center justify-center px-[4.318px] py-[2.159px] relative shrink-0 w-[22.311px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[8.958px] whitespace-pre-wrap">3 Years</p>
    </div>
  );
}

function TableCell89() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center px-[4.318px] py-[2.159px] relative shrink-0 w-[25.909px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[13.135px] whitespace-pre-wrap">June 08, 2024</p>
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <TableCell87 />
      <TableCell88 />
      <TableCell89 />
    </div>
  );
}

function Member9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Member 5">
      <Frame116 />
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto relative shrink-0 w-[97.88px]" data-name="List">
      <Member5 />
      <Member6 />
      <Member7 />
      <Member8 />
      <Member9 />
    </div>
  );
}

function List2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[102.2px] top-0 w-[97.88px]" data-name="List 2">
      <List3 />
    </div>
  );
}

function Avatar20() {
  return (
    <div className="relative rounded-[35.985px] shrink-0 size-[7.197px]" data-name="Avatar">
      <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[35.985px] size-full" src={imgAvatar18} />
    </div>
  );
}

function TextAndSupportingText11() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[3.599px] not-italic relative shrink-0 text-[2.519px] whitespace-pre-wrap" data-name="Text and supporting text">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#101828] w-[13.315px]">Sam Keary</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#475467] w-[25.37px]">UX Designer</p>
    </div>
  );
}

function TableCell90() {
  return (
    <div className="content-stretch flex gap-[2.159px] items-center px-[2.879px] py-[2.159px] relative shrink-0 w-[49.66px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <Avatar20 />
      <TextAndSupportingText11 />
    </div>
  );
}

function TableCell91() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center justify-center px-[4.318px] py-[2.159px] relative shrink-0 w-[22.311px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[8.958px] whitespace-pre-wrap">6 Years</p>
    </div>
  );
}

function TableCell92() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center px-[4.318px] py-[2.159px] relative shrink-0 w-[25.909px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[13.135px] whitespace-pre-wrap">June 10, 2024</p>
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <TableCell90 />
      <TableCell91 />
      <TableCell92 />
    </div>
  );
}

function Member10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[97.88px]" data-name="Member 1">
      <Frame117 />
    </div>
  );
}

function Avatar21() {
  return (
    <div className="relative rounded-[35.985px] shrink-0 size-[7.197px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[35.985px]">
        <div className="absolute bg-[#d4b2af] inset-0 rounded-[35.985px]" />
        <img loading="lazy" decoding="async" alt="" className="absolute max-w-none object-cover rounded-[35.985px] size-full" src={imgAvatar19} />
      </div>
    </div>
  );
}

function TextAndSupportingText12() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[3.599px] not-italic relative shrink-0 text-[2.519px] whitespace-pre-wrap" data-name="Text and supporting text">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#101828] w-[13.315px]">John Rogers</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#475467] w-[25.37px]">Sales Associate</p>
    </div>
  );
}

function TableCell93() {
  return (
    <div className="content-stretch flex gap-[2.159px] items-center px-[2.879px] py-[2.159px] relative shrink-0 w-[49.66px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <Avatar21 />
      <TextAndSupportingText12 />
    </div>
  );
}

function TableCell94() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center justify-center px-[4.318px] py-[2.159px] relative shrink-0 w-[22.311px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[10.126px] whitespace-pre-wrap">12 Years</p>
    </div>
  );
}

function TableCell95() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center px-[4.318px] py-[2.159px] relative shrink-0 w-[25.909px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[13.135px] whitespace-pre-wrap">June 14, 2024</p>
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <TableCell93 />
      <TableCell94 />
      <TableCell95 />
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[97.88px]">
      <Frame119 />
    </div>
  );
}

function Member11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[97.88px]" data-name="Member 2">
      <Frame118 />
    </div>
  );
}

function Avatar22() {
  return (
    <div className="relative rounded-[35.985px] shrink-0 size-[7.197px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[35.985px]">
        <div className="absolute bg-[#dab9bb] inset-0 rounded-[35.985px]" />
        <img loading="lazy" decoding="async" alt="" className="absolute max-w-none object-cover rounded-[35.985px] size-full" src={imgAvatar20} />
      </div>
    </div>
  );
}

function TextAndSupportingText13() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[3.599px] not-italic relative shrink-0 text-[2.519px] whitespace-pre-wrap" data-name="Text and supporting text">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#101828] w-[13.315px]">Rachel Howes</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#475467] w-[25.37px]">Sales</p>
    </div>
  );
}

function TableCell96() {
  return (
    <div className="content-stretch flex gap-[2.159px] items-center px-[2.879px] py-[2.159px] relative shrink-0 w-[49.66px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <Avatar22 />
      <TextAndSupportingText13 />
    </div>
  );
}

function TableCell97() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center justify-center px-[4.318px] py-[2.159px] relative shrink-0 w-[22.311px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[10.126px] whitespace-pre-wrap">15 Years</p>
    </div>
  );
}

function TableCell98() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center px-[4.318px] py-[2.159px] relative shrink-0 w-[25.909px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[13.135px] whitespace-pre-wrap">June 16, 2024</p>
    </div>
  );
}

function Frame120() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <TableCell96 />
      <TableCell97 />
      <TableCell98 />
    </div>
  );
}

function Member12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[97.88px]" data-name="Member 3">
      <Frame120 />
    </div>
  );
}

function Avatar23() {
  return (
    <div className="relative rounded-[35.985px] shrink-0 size-[7.197px]" data-name="Avatar">
      <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[35.985px] size-full" src={imgAvatar21} />
    </div>
  );
}

function TextAndSupportingText14() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[3.599px] not-italic relative shrink-0 text-[2.519px] whitespace-pre-wrap" data-name="Text and supporting text">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#101828] w-[13.315px]">Steve Johnson</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#475467] w-[25.37px]">Accountant</p>
    </div>
  );
}

function TableCell99() {
  return (
    <div className="content-stretch flex gap-[2.159px] items-center px-[2.879px] py-[2.159px] relative shrink-0 w-[49.66px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <Avatar23 />
      <TextAndSupportingText14 />
    </div>
  );
}

function TableCell100() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center justify-center px-[4.318px] py-[2.159px] relative shrink-0 w-[22.311px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[10.515px] whitespace-pre-wrap">20 Years</p>
    </div>
  );
}

function TableCell101() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center px-[4.318px] py-[2.159px] relative shrink-0 w-[25.909px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[13.135px] whitespace-pre-wrap">June 16, 2024</p>
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <TableCell99 />
      <TableCell100 />
      <TableCell101 />
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[97.88px]">
      <Frame122 />
    </div>
  );
}

function Member13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[97.88px]" data-name="Member 4">
      <Frame121 />
    </div>
  );
}

function Avatar24() {
  return (
    <div className="relative rounded-[35.985px] shrink-0 size-[7.197px]" data-name="Avatar">
      <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[35.985px] size-full" src={imgAvatar22} />
    </div>
  );
}

function TextAndSupportingText15() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[3.599px] not-italic relative shrink-0 text-[2.519px] whitespace-pre-wrap" data-name="Text and supporting text">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#101828] w-[13.315px]">River DesJardin</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#475467] w-[25.37px]">UX Designer</p>
    </div>
  );
}

function TableCell102() {
  return (
    <div className="content-stretch flex gap-[2.159px] items-center p-[2.159px] relative shrink-0 w-[49.66px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <Avatar24 />
      <TextAndSupportingText15 />
    </div>
  );
}

function TableCell103() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center justify-center px-[4.318px] py-[2.159px] relative shrink-0 w-[22.311px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[8.958px] whitespace-pre-wrap">3 Years</p>
    </div>
  );
}

function TableCell104() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center px-[4.318px] py-[2.159px] relative shrink-0 w-[25.909px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[13.135px] whitespace-pre-wrap">June 18, 2024</p>
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <TableCell102 />
      <TableCell103 />
      <TableCell104 />
    </div>
  );
}

function Member14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Member 5">
      <Frame123 />
    </div>
  );
}

function List5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto relative shrink-0 w-[97.88px]" data-name="List">
      <Member10 />
      <Member11 />
      <Member12 />
      <Member13 />
      <Member14 />
    </div>
  );
}

function List4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[204.4px] top-0 w-[97.88px]" data-name="List 3">
      <List5 />
    </div>
  );
}

function Avatar25() {
  return (
    <div className="relative rounded-[35.985px] shrink-0 size-[7.197px]" data-name="Avatar">
      <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[35.985px] size-full" src={imgAvatar23} />
    </div>
  );
}

function TextAndSupportingText16() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[3.599px] not-italic relative shrink-0 text-[2.519px] whitespace-pre-wrap" data-name="Text and supporting text">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#101828] w-[13.315px]">Dani Summer</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#475467] w-[25.37px]">UX Designer</p>
    </div>
  );
}

function TableCell105() {
  return (
    <div className="content-stretch flex gap-[2.159px] items-center px-[2.879px] py-[2.159px] relative shrink-0 w-[49.66px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <Avatar25 />
      <TextAndSupportingText16 />
    </div>
  );
}

function TableCell106() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center justify-center px-[4.318px] py-[2.159px] relative shrink-0 w-[22.311px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[8.958px] whitespace-pre-wrap">5 Years</p>
    </div>
  );
}

function TableCell107() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center px-[4.318px] py-[2.159px] relative shrink-0 w-[25.909px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[13.135px] whitespace-pre-wrap">April 15, 2024</p>
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <TableCell105 />
      <TableCell106 />
      <TableCell107 />
    </div>
  );
}

function Member15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[97.88px]" data-name="Member 1">
      <Frame124 />
    </div>
  );
}

function Avatar26() {
  return (
    <div className="relative rounded-[35.985px] shrink-0 size-[7.197px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[35.985px]">
        <div className="absolute bg-[#d4b2af] inset-0 rounded-[35.985px]" />
        <img loading="lazy" decoding="async" alt="" className="absolute max-w-none object-cover rounded-[35.985px] size-full" src={imgAvatar19} />
      </div>
    </div>
  );
}

function TextAndSupportingText17() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[3.599px] not-italic relative shrink-0 text-[2.519px] whitespace-pre-wrap" data-name="Text and supporting text">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#101828] w-[13.315px]">John Rogers</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#475467] w-[25.37px]">Sales Associate</p>
    </div>
  );
}

function TableCell108() {
  return (
    <div className="content-stretch flex gap-[2.159px] items-center px-[2.879px] py-[2.159px] relative shrink-0 w-[49.66px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <Avatar26 />
      <TextAndSupportingText17 />
    </div>
  );
}

function TableCell109() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center justify-center px-[4.318px] py-[2.159px] relative shrink-0 w-[22.311px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[8.958px] whitespace-pre-wrap">2 Years</p>
    </div>
  );
}

function TableCell110() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center px-[4.318px] py-[2.159px] relative shrink-0 w-[25.909px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[13.135px] whitespace-pre-wrap">April 30, 2024</p>
    </div>
  );
}

function Frame126() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <TableCell108 />
      <TableCell109 />
      <TableCell110 />
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[97.88px]">
      <Frame126 />
    </div>
  );
}

function Member16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[97.88px]" data-name="Member 2">
      <Frame125 />
    </div>
  );
}

function Avatar27() {
  return (
    <div className="relative rounded-[35.985px] shrink-0 size-[7.197px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[35.985px]">
        <div className="absolute bg-[#dbc0dd] inset-0 rounded-[35.985px]" />
        <img loading="lazy" decoding="async" alt="" className="absolute max-w-none object-cover rounded-[35.985px] size-full" src={imgAvatar24} />
      </div>
    </div>
  );
}

function TextAndSupportingText18() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[3.599px] not-italic relative shrink-0 text-[2.519px] whitespace-pre-wrap" data-name="Text and supporting text">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#101828] w-[13.315px]">Lana Steiner</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#475467] w-[25.37px]">Sales</p>
    </div>
  );
}

function TableCell111() {
  return (
    <div className="content-stretch flex gap-[2.159px] items-center px-[2.879px] py-[2.159px] relative shrink-0 w-[49.66px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <Avatar27 />
      <TextAndSupportingText18 />
    </div>
  );
}

function TableCell112() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center justify-center px-[4.318px] py-[2.159px] relative shrink-0 w-[22.311px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[10.126px] whitespace-pre-wrap">10 Years</p>
    </div>
  );
}

function TableCell113() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center px-[4.318px] py-[2.159px] relative shrink-0 w-[25.909px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[13.135px] whitespace-pre-wrap">May 13, 2024</p>
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <TableCell111 />
      <TableCell112 />
      <TableCell113 />
    </div>
  );
}

function Member17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[97.88px]" data-name="Member 3">
      <Frame127 />
    </div>
  );
}

function Avatar28() {
  return (
    <div className="relative rounded-[35.985px] shrink-0 size-[7.197px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[35.985px]">
        <div className="absolute bg-[#d8c7b6] inset-0 rounded-[35.985px]" />
        <img loading="lazy" decoding="async" alt="" className="absolute max-w-none object-cover rounded-[35.985px] size-full" src={imgAvatar25} />
      </div>
    </div>
  );
}

function TextAndSupportingText19() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[3.599px] not-italic relative shrink-0 text-[2.519px] whitespace-pre-wrap" data-name="Text and supporting text">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#101828] w-[13.315px]">Samila Johnson</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#475467] w-[25.37px]">Accountant</p>
    </div>
  );
}

function TableCell114() {
  return (
    <div className="content-stretch flex gap-[2.159px] items-center px-[2.879px] py-[2.159px] relative shrink-0 w-[49.66px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <Avatar28 />
      <TextAndSupportingText19 />
    </div>
  );
}

function TableCell115() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center justify-center px-[4.318px] py-[2.159px] relative shrink-0 w-[22.311px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[8.958px] whitespace-pre-wrap">7 Years</p>
    </div>
  );
}

function TableCell116() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center px-[4.318px] py-[2.159px] relative shrink-0 w-[25.909px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[13.135px] whitespace-pre-wrap">May 20, 2024</p>
    </div>
  );
}

function Frame129() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <TableCell114 />
      <TableCell115 />
      <TableCell116 />
    </div>
  );
}

function Frame128() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[97.88px]">
      <Frame129 />
    </div>
  );
}

function Member18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[97.88px]" data-name="Member 4">
      <Frame128 />
    </div>
  );
}

function Avatar29() {
  return (
    <div className="relative rounded-[35.985px] shrink-0 size-[7.197px]" data-name="Avatar">
      <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[35.985px] size-full" src={imgAvatar23} />
    </div>
  );
}

function TextAndSupportingText20() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[3.599px] not-italic relative shrink-0 text-[2.519px] whitespace-pre-wrap" data-name="Text and supporting text">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#101828] w-[13.315px]">Dani Summer</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#475467] w-[25.37px]">UX Designer</p>
    </div>
  );
}

function TableCell117() {
  return (
    <div className="content-stretch flex gap-[2.159px] items-center p-[2.159px] relative shrink-0 w-[49.66px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <Avatar29 />
      <TextAndSupportingText20 />
    </div>
  );
}

function TableCell118() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center justify-center px-[4.318px] py-[2.159px] relative shrink-0 w-[22.311px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[8.958px] whitespace-pre-wrap">5 Years</p>
    </div>
  );
}

function TableCell119() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center px-[4.318px] py-[2.159px] relative shrink-0 w-[25.909px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[13.135px] whitespace-pre-wrap">April 15, 2024</p>
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <TableCell117 />
      <TableCell118 />
      <TableCell119 />
    </div>
  );
}

function Member19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Member 5">
      <Frame130 />
    </div>
  );
}

function List7() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto relative shrink-0 w-[97.88px]" data-name="List">
      <Member15 />
      <Member16 />
      <Member17 />
      <Member18 />
      <Member19 />
    </div>
  );
}

function List6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[306.6px] top-0 w-[97.88px]" data-name="List 4">
      <List7 />
    </div>
  );
}

function Avatar30() {
  return (
    <div className="relative rounded-[35.985px] shrink-0 size-[7.197px]" data-name="Avatar">
      <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[35.985px] size-full" src={imgAvatar23} />
    </div>
  );
}

function TextAndSupportingText21() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[3.599px] not-italic relative shrink-0 text-[2.519px] whitespace-pre-wrap" data-name="Text and supporting text">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#101828] w-[13.315px]">Dani Summer</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#475467] w-[25.37px]">UX Designer</p>
    </div>
  );
}

function TableCell120() {
  return (
    <div className="content-stretch flex gap-[2.159px] items-center px-[2.879px] py-[2.159px] relative shrink-0 w-[49.66px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <Avatar30 />
      <TextAndSupportingText21 />
    </div>
  );
}

function TableCell121() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center justify-center px-[4.318px] py-[2.159px] relative shrink-0 w-[22.311px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[8.958px] whitespace-pre-wrap">5 Years</p>
    </div>
  );
}

function TableCell122() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center px-[4.318px] py-[2.159px] relative shrink-0 w-[25.909px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[13.135px] whitespace-pre-wrap">April 15, 2024</p>
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <TableCell120 />
      <TableCell121 />
      <TableCell122 />
    </div>
  );
}

function Member20() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[97.88px]" data-name="Member 1">
      <Frame131 />
    </div>
  );
}

function Avatar31() {
  return (
    <div className="relative rounded-[35.985px] shrink-0 size-[7.197px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[35.985px]">
        <div className="absolute bg-[#d4b2af] inset-0 rounded-[35.985px]" />
        <img loading="lazy" decoding="async" alt="" className="absolute max-w-none object-cover rounded-[35.985px] size-full" src={imgAvatar19} />
      </div>
    </div>
  );
}

function TextAndSupportingText22() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[3.599px] not-italic relative shrink-0 text-[2.519px] whitespace-pre-wrap" data-name="Text and supporting text">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#101828] w-[13.315px]">John Rogers</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#475467] w-[25.37px]">Sales Associate</p>
    </div>
  );
}

function TableCell123() {
  return (
    <div className="content-stretch flex gap-[2.159px] items-center px-[2.879px] py-[2.159px] relative shrink-0 w-[49.66px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <Avatar31 />
      <TextAndSupportingText22 />
    </div>
  );
}

function TableCell124() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center justify-center px-[4.318px] py-[2.159px] relative shrink-0 w-[22.311px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[8.958px] whitespace-pre-wrap">2 Years</p>
    </div>
  );
}

function TableCell125() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center px-[4.318px] py-[2.159px] relative shrink-0 w-[25.909px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[13.135px] whitespace-pre-wrap">April 30, 2024</p>
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <TableCell123 />
      <TableCell124 />
      <TableCell125 />
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[97.88px]">
      <Frame133 />
    </div>
  );
}

function Member21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[97.88px]" data-name="Member 2">
      <Frame132 />
    </div>
  );
}

function Avatar32() {
  return (
    <div className="relative rounded-[35.985px] shrink-0 size-[7.197px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[35.985px]">
        <div className="absolute bg-[#dbc0dd] inset-0 rounded-[35.985px]" />
        <img loading="lazy" decoding="async" alt="" className="absolute max-w-none object-cover rounded-[35.985px] size-full" src={imgAvatar24} />
      </div>
    </div>
  );
}

function TextAndSupportingText23() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[3.599px] not-italic relative shrink-0 text-[2.519px] whitespace-pre-wrap" data-name="Text and supporting text">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#101828] w-[13.315px]">Lana Steiner</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#475467] w-[25.37px]">Sales</p>
    </div>
  );
}

function TableCell126() {
  return (
    <div className="content-stretch flex gap-[2.159px] items-center px-[2.879px] py-[2.159px] relative shrink-0 w-[49.66px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <Avatar32 />
      <TextAndSupportingText23 />
    </div>
  );
}

function TableCell127() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center justify-center px-[4.318px] py-[2.159px] relative shrink-0 w-[22.311px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[10.126px] whitespace-pre-wrap">10 Years</p>
    </div>
  );
}

function TableCell128() {
  return (
    <div className="content-stretch flex h-[11.515px] items-center px-[4.318px] py-[2.159px] relative shrink-0 w-[25.909px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b-[0.18px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[#475467] text-[2.519px] w-[13.135px] whitespace-pre-wrap">May 13, 2024</p>
    </div>
  );
}

function Frame134() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <TableCell126 />
      <TableCell127 />
      <TableCell128 />
    </div>
  );
}

function Member22() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[97.88px]" data-name="Member 3">
      <Frame134 />
    </div>
  );
}

function List9() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto relative shrink-0 w-[97.88px]" data-name="List">
      <Member20 />
      <Member21 />
      <Member22 />
    </div>
  );
}

function List8() {
  return (
    <div className="absolute content-stretch flex flex-col h-[57.577px] items-start left-[408.79px] top-0 w-[97.88px]" data-name="List 5">
      <List9 />
    </div>
  );
}

function Carousel1() {
  return (
    <div className="h-[57.577px] overflow-clip relative shrink-0 w-[97.88px]" data-name="Carousel">
      <List1 />
      <List2 />
      <List4 />
      <List6 />
      <List8 />
    </div>
  );
}

function ChevronLeft1() {
  return (
    <div className="relative shrink-0 size-[4.318px]" data-name="chevron-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.31824 4.31824">
        <g id="chevron-left">
          <path d={svgPaths.p13fac020} id="Icon" stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.359853" />
        </g>
      </svg>
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative shrink-0 size-[4.318px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.31824 4.31824">
        <g id="chevron-right">
          <path d={svgPaths.p36c0c400} id="Icon" stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.359853" />
        </g>
      </svg>
    </div>
  );
}

function WidgetIndicator1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="widget indicator">
      <ChevronLeft1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.599px] not-italic relative shrink-0 text-[2.519px] text-black">1 of 5</p>
      <ChevronRight1 />
    </div>
  );
}

function WidgetSmBlock1() {
  return (
    <div className="bg-white relative rounded-[1.439px] shrink-0 w-[107px]" data-name="widget sm block">
      <div className="content-stretch flex flex-col gap-[3.599px] items-start overflow-clip p-[4.318px] relative rounded-[inherit] w-full">
        <Title1 />
        <Carousel1 />
        <WidgetIndicator1 />
      </div>
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0.18px] border-solid inset-0 pointer-events-none rounded-[1.439px] shadow-[0px_0.18px_0.54px_0px_rgba(16,24,40,0.1),0px_0.18px_0.36px_0px_rgba(16,24,40,0.06)]" />
    </div>
  );
}

function WorkAnniversary() {
  return (
    <div className="absolute content-stretch flex h-[88px] items-start left-[149px] top-[115px] w-[107px]" data-name="Work Anniversary">
      <WidgetSmBlock1 />
    </div>
  );
}

function User() {
  return (
    <div className="relative shrink-0 size-[4.378px]" data-name="user-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.37838 4.37838">
        <g clipPath="url(#clip0_1_311934)" id="user-02">
          <g id="Icon">
            <path d={svgPaths.pfd84f2} stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.364865" />
            <path d={svgPaths.p16981100} stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.364865" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_311934">
            <rect fill="white" height="4.37838" width="4.37838" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex gap-[1.459px] items-center relative shrink-0">
      <User />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[5.838px] not-italic relative shrink-0 text-[#101828] text-[4.378px]">My Team</p>
    </div>
  );
}

function TextLinks() {
  return <div className="absolute h-[3.284px] right-[90.67px] top-[12.35px] w-[8.574px]" data-name="Text links" />;
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[1.095px] items-start relative shrink-0 w-full">
      <Frame58 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.649px] min-w-full not-italic relative shrink-0 text-[#475467] text-[2.554px] w-[min-content] whitespace-pre-wrap">The total amount of active team members</p>
      <TextLinks />
    </div>
  );
}

function ArrowUp8() {
  return (
    <div className="relative shrink-0 size-[2.189px]" data-name="arrow-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.18919 2.18919">
        <g id="arrow-up">
          <path d={svgPaths.p196c5de0} id="Icon" stroke="var(--stroke-0, #12B76A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.273649" />
        </g>
      </svg>
    </div>
  );
}

function Badge14() {
  return (
    <div className="bg-[#ecfdf3] content-stretch flex gap-[0.73px] items-center mix-blend-multiply pl-[1.459px] pr-[1.824px] py-[0.365px] relative rounded-[2.919px] shrink-0" data-name="Badge">
      <ArrowUp8 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.649px] not-italic relative shrink-0 text-[#027a48] text-[2.554px] text-center">5.2%</p>
    </div>
  );
}

function BadgeWrap() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Badge wrap">
      <Badge14 />
    </div>
  );
}

function ChangeAndText() {
  return (
    <div className="content-stretch flex h-[4.926px] items-center relative shrink-0" data-name="Change and text">
      <BadgeWrap />
    </div>
  );
}

function Frame136() {
  return (
    <div className="content-stretch flex gap-[1.459px] items-center relative shrink-0 w-[42.324px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[6.932px] not-italic relative shrink-0 text-[#101828] text-[5.473px]">20</p>
      <ChangeAndText />
    </div>
  );
}

function Frame135() {
  return (
    <div className="content-stretch flex flex-col gap-[1.459px] items-start relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.649px] not-italic relative shrink-0 text-[#475467] text-[2.554px]">Last Month</p>
      <Frame136 />
    </div>
  );
}

function WidgetSmBlock2() {
  return (
    <div className="absolute bg-white h-[39.501px] left-[32px] rounded-[1.459px] top-[213.69px] w-[108px]" data-name="widget sm block">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip p-[4.378px] relative rounded-[inherit] size-full">
        <Frame29 />
        <Frame135 />
      </div>
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0.182px] border-solid inset-0 pointer-events-none rounded-[1.459px] shadow-[0px_0.182px_0.547px_0px_rgba(16,24,40,0.1),0px_0.182px_0.365px_0px_rgba(16,24,40,0.06)]" />
    </div>
  );
}

function CoinsStacked1() {
  return (
    <div className="relative shrink-0 size-[4.378px]" data-name="coins-stacked-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.37838 4.37838">
        <g clipPath="url(#clip0_1_257895)" id="coins-stacked-02">
          <path d={svgPaths.p3e703300} id="Icon" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.364865" />
        </g>
        <defs>
          <clipPath id="clip0_1_257895">
            <rect fill="white" height="4.37838" width="4.37838" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[1.459px] items-center relative shrink-0">
      <CoinsStacked1 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[5.838px] not-italic relative shrink-0 text-[#101828] text-[4.378px]">Point Totals</p>
    </div>
  );
}

function Dropdown1() {
  return <div className="absolute h-[6.568px] left-[84.1px] top-0 w-[15.142px]" data-name="Dropdown" />;
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[0.73px] items-start relative shrink-0 w-full">
      <Frame59 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.649px] min-w-full not-italic relative shrink-0 text-[#475467] text-[2.554px] w-[min-content] whitespace-pre-wrap">The total points exchange for last month.</p>
      <Dropdown1 />
    </div>
  );
}

function ArrowUp9() {
  return (
    <div className="relative shrink-0 size-[2.189px]" data-name="arrow-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.18919 2.18919">
        <g id="arrow-up">
          <path d={svgPaths.p196c5de0} id="Icon" stroke="var(--stroke-0, #12B76A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.273649" />
        </g>
      </svg>
    </div>
  );
}

function Badge15() {
  return (
    <div className="bg-[#ecfdf3] content-stretch flex gap-[0.73px] items-center mix-blend-multiply pl-[1.459px] pr-[1.824px] py-[0.365px] relative rounded-[2.919px] shrink-0" data-name="Badge">
      <ArrowUp9 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.649px] not-italic relative shrink-0 text-[#027a48] text-[2.554px] text-center">9.2%</p>
    </div>
  );
}

function BadgeWrap1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Badge wrap">
      <Badge15 />
    </div>
  );
}

function NumberAndBadge13() {
  return (
    <div className="content-stretch flex gap-[0.73px] items-center relative shrink-0" data-name="Number and badge">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[6.932px] not-italic relative shrink-0 text-[#101828] text-[5.473px]">145,500</p>
      <BadgeWrap1 />
    </div>
  );
}

function HeadingAndNumber() {
  return (
    <div className="content-stretch flex flex-col gap-[1.459px] items-start relative self-stretch shrink-0" data-name="Heading and number">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.649px] min-w-full not-italic relative shrink-0 text-[#475467] text-[2.554px] w-[min-content] whitespace-pre-wrap">Issued in March</p>
      <NumberAndBadge13 />
    </div>
  );
}

function ArrowDown2() {
  return (
    <div className="relative shrink-0 size-[2.189px]" data-name="arrow-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.18919 2.18919">
        <g id="arrow-down">
          <path d={svgPaths.p1d782200} id="Icon" stroke="var(--stroke-0, #F04438)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.273649" />
        </g>
      </svg>
    </div>
  );
}

function Badge16() {
  return (
    <div className="bg-[#fef3f2] content-stretch flex gap-[0.73px] items-center mix-blend-multiply pl-[1.459px] pr-[1.824px] py-[0.365px] relative rounded-[2.919px] shrink-0" data-name="Badge">
      <ArrowDown2 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.649px] not-italic relative shrink-0 text-[#b42318] text-[2.554px] text-center">6.6%</p>
    </div>
  );
}

function BadgeWrap3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Badge wrap">
      <Badge16 />
    </div>
  );
}

function BadgeWrap2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Badge wrap">
      <BadgeWrap3 />
    </div>
  );
}

function NumberAndBadge14() {
  return (
    <div className="content-stretch flex gap-[0.73px] items-center relative shrink-0" data-name="Number and badge">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[6.932px] not-italic relative shrink-0 text-[#101828] text-[5.473px]">122,500</p>
      <BadgeWrap2 />
    </div>
  );
}

function HeadingAndNumber1() {
  return (
    <div className="content-stretch flex flex-col gap-[1.459px] items-start relative self-stretch shrink-0" data-name="Heading and number">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.649px] min-w-full not-italic relative shrink-0 text-[#475467] text-[2.554px] w-[min-content] whitespace-pre-wrap">Redeemed in March</p>
      <NumberAndBadge14 />
    </div>
  );
}

function Frame137() {
  return (
    <div className="content-stretch flex gap-[18.243px] items-start relative shrink-0 w-full">
      <HeadingAndNumber />
      <HeadingAndNumber1 />
    </div>
  );
}

function WidgetSmBlock3() {
  return (
    <div className="absolute bg-white h-[40.135px] left-[32px] rounded-[1.459px] top-[263.19px] w-[108px]" data-name="widget sm block">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip p-[4.378px] relative rounded-[inherit] size-full">
        <Frame30 />
        <Frame137 />
      </div>
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0.182px] border-solid inset-0 pointer-events-none rounded-[1.459px] shadow-[0px_0.182px_0.547px_0px_rgba(16,24,40,0.1),0px_0.182px_0.365px_0px_rgba(16,24,40,0.06)]" />
    </div>
  );
}

function UserPlus() {
  return (
    <div className="relative shrink-0 size-[4.473px]" data-name="user-plus-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.47273 4.47273">
        <g clipPath="url(#clip0_1_301126)" id="user-plus-01">
          <path d={svgPaths.p21fb780} id="Icon" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.372727" />
        </g>
        <defs>
          <clipPath id="clip0_1_301126">
            <rect fill="white" height="4.47273" width="4.47273" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[1.491px] items-center relative shrink-0">
      <UserPlus />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[5.964px] not-italic relative shrink-0 text-[#101828] text-[4.473px]">My Team Logins</p>
    </div>
  );
}

function TextLinks1() {
  return <div className="absolute h-[3.355px] right-[92.3px] top-[12.61px] w-[8.759px]" data-name="Text links" />;
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[1.118px] items-start relative shrink-0 w-full">
      <Frame60 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.727px] min-w-full not-italic relative shrink-0 text-[#475467] text-[2.609px] w-[min-content] whitespace-pre-wrap">Number of team members that signed in the last month</p>
      <TextLinks1 />
    </div>
  );
}

function ArrowDown3() {
  return (
    <div className="relative shrink-0 size-[2.236px]" data-name="arrow-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.23636 2.23636">
        <g id="arrow-down">
          <path d={svgPaths.p1904d000} id="Icon" stroke="var(--stroke-0, #F04438)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.279545" />
        </g>
      </svg>
    </div>
  );
}

function Badge17() {
  return (
    <div className="bg-[#fef3f2] content-stretch flex gap-[0.745px] items-center mix-blend-multiply pl-[1.491px] pr-[1.864px] py-[0.373px] relative rounded-[2.982px] shrink-0" data-name="Badge">
      <ArrowDown3 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.727px] not-italic relative shrink-0 text-[#b42318] text-[2.609px] text-center">9.6%</p>
    </div>
  );
}

function BadgeWrap4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Badge wrap">
      <Badge17 />
    </div>
  );
}

function Frame139() {
  return (
    <div className="content-stretch flex gap-[1.491px] items-center relative shrink-0 w-[43.236px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[7.082px] not-italic relative shrink-0 text-[#101828] text-[5.591px]">6,512</p>
      <BadgeWrap4 />
    </div>
  );
}

function Frame138() {
  return (
    <div className="content-stretch flex flex-col gap-[1.491px] items-start relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.727px] not-italic relative shrink-0 text-[#475467] text-[2.609px]">Last Month</p>
      <Frame139 />
    </div>
  );
}

function WidgetSmBlock4() {
  return (
    <div className="absolute bg-white h-[40px] left-[149px] rounded-[1.491px] top-[263px] w-[107px]" data-name="widget sm block">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip p-[4.473px] relative rounded-[inherit] size-full">
        <Frame31 />
        <Frame138 />
      </div>
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0.186px] border-solid inset-0 pointer-events-none rounded-[1.491px] shadow-[0px_0.186px_0.559px_0px_rgba(16,24,40,0.1),0px_0.186px_0.373px_0px_rgba(16,24,40,0.06)]" />
    </div>
  );
}

function MessageSmileCircle() {
  return (
    <div className="relative shrink-0 size-[4.338px]" data-name="message-smile-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.33784 4.33784">
        <g id="message-smile-circle">
          <path d={svgPaths.p2ae92900} id="Icon" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.361486" />
        </g>
      </svg>
    </div>
  );
}

function Frame140() {
  return (
    <div className="content-stretch flex gap-[1.446px] items-center relative shrink-0">
      <MessageSmileCircle />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[5.784px] not-italic relative shrink-0 text-[#101828] text-[4.338px]">Social Activity</p>
    </div>
  );
}

function Dropdown2() {
  return <div className="absolute h-[6.507px] left-[83.32px] top-0 w-[15.002px]" data-name="Dropdown" />;
}

function Frame152() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame140 />
      <Dropdown2 />
    </div>
  );
}

function Frame153() {
  return (
    <div className="content-stretch flex flex-col gap-[0.723px] items-start relative shrink-0 w-full">
      <Frame152 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.615px] not-italic relative shrink-0 text-[#475467] text-[2.53px] w-full whitespace-pre-wrap">Last month’s social activity metrics</p>
    </div>
  );
}

function Pencil() {
  return (
    <div className="relative shrink-0 size-[3.615px]" data-name="pencil-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.61486 3.61486">
        <g clipPath="url(#clip0_1_225471)" id="pencil-01">
          <path d={svgPaths.p2b30cb00} id="Icon" stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.361486" />
        </g>
        <defs>
          <clipPath id="clip0_1_225471">
            <rect fill="white" height="3.61486" width="3.61486" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame143() {
  return (
    <div className="content-stretch flex gap-[1.446px] items-center justify-center relative shrink-0">
      <Pencil />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.615px] not-italic relative shrink-0 text-[#475467] text-[2.53px] text-center">Posts</p>
    </div>
  );
}

function ArrowUp10() {
  return (
    <div className="relative shrink-0 size-[2.169px]" data-name="arrow-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.16892 2.16892">
        <g id="arrow-up">
          <path d={svgPaths.p2885d300} id="Icon" stroke="var(--stroke-0, #12B76A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.271115" />
        </g>
      </svg>
    </div>
  );
}

function Badge18() {
  return (
    <div className="bg-[#ecfdf3] content-stretch flex gap-[0.723px] items-center mix-blend-multiply pl-[1.446px] pr-[1.807px] py-[0.361px] relative rounded-[2.892px] shrink-0" data-name="Badge">
      <ArrowUp10 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.615px] not-italic relative shrink-0 text-[#027a48] text-[2.53px] text-center">4%</p>
    </div>
  );
}

function BadgeWrap5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Badge wrap">
      <Badge18 />
    </div>
  );
}

function NumberAndBadge15() {
  return (
    <div className="content-stretch flex gap-[0.723px] items-center justify-center relative shrink-0" data-name="Number and badge">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[6.868px] not-italic relative shrink-0 text-[#101828] text-[5.422px]">25</p>
      <BadgeWrap5 />
    </div>
  );
}

function Frame142() {
  return (
    <div className="content-stretch flex flex-col gap-[1.446px] items-start relative shrink-0">
      <Frame143 />
      <NumberAndBadge15 />
    </div>
  );
}

function Heart() {
  return (
    <div className="relative shrink-0 size-[3.615px]" data-name="heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.61486 3.61486">
        <g clipPath="url(#clip0_1_214663)" id="heart">
          <path clipRule="evenodd" d={svgPaths.pbfa9b80} fillRule="evenodd" id="Icon" stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.361486" />
        </g>
        <defs>
          <clipPath id="clip0_1_214663">
            <rect fill="white" height="3.61486" width="3.61486" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame145() {
  return (
    <div className="content-stretch flex gap-[1.446px] items-center justify-center relative shrink-0">
      <Heart />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.615px] not-italic relative shrink-0 text-[#475467] text-[2.53px] text-center">Likes</p>
    </div>
  );
}

function ArrowUp11() {
  return (
    <div className="relative shrink-0 size-[2.169px]" data-name="arrow-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.16892 2.16892">
        <g id="arrow-up">
          <path d={svgPaths.p2885d300} id="Icon" stroke="var(--stroke-0, #12B76A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.271115" />
        </g>
      </svg>
    </div>
  );
}

function Badge19() {
  return (
    <div className="bg-[#ecfdf3] content-stretch flex gap-[0.723px] items-center mix-blend-multiply pl-[1.446px] pr-[1.807px] py-[0.361px] relative rounded-[2.892px] shrink-0" data-name="Badge">
      <ArrowUp11 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.615px] not-italic relative shrink-0 text-[#027a48] text-[2.53px] text-center">12%</p>
    </div>
  );
}

function BadgeWrap6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Badge wrap">
      <Badge19 />
    </div>
  );
}

function NumberAndBadge16() {
  return (
    <div className="content-stretch flex gap-[0.723px] items-center justify-center relative shrink-0" data-name="Number and badge">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[6.868px] not-italic relative shrink-0 text-[#101828] text-[5.422px]">451</p>
      <BadgeWrap6 />
    </div>
  );
}

function Frame144() {
  return (
    <div className="content-stretch flex flex-col gap-[1.446px] items-start relative shrink-0">
      <Frame145 />
      <NumberAndBadge16 />
    </div>
  );
}

function MessageTextSquare() {
  return (
    <div className="relative shrink-0 size-[3.615px]" data-name="message-text-square-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.61486 3.61486">
        <g clipPath="url(#clip0_1_203855)" id="message-text-square-02">
          <path d={svgPaths.p29ec6500} id="Icon" stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.361486" />
        </g>
        <defs>
          <clipPath id="clip0_1_203855">
            <rect fill="white" height="3.61486" width="3.61486" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame147() {
  return (
    <div className="content-stretch flex gap-[1.446px] items-center relative shrink-0">
      <MessageTextSquare />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.615px] not-italic relative shrink-0 text-[#475467] text-[2.53px] text-center">Comments</p>
    </div>
  );
}

function ArrowDown4() {
  return (
    <div className="relative shrink-0 size-[2.169px]" data-name="arrow-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.16892 2.16892">
        <g id="arrow-down">
          <path d={svgPaths.p44a1520} id="Icon" stroke="var(--stroke-0, #F04438)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.271115" />
        </g>
      </svg>
    </div>
  );
}

function Badge20() {
  return (
    <div className="bg-[#fef3f2] content-stretch flex gap-[0.723px] items-center mix-blend-multiply pl-[1.446px] pr-[1.807px] py-[0.361px] relative rounded-[2.892px] shrink-0" data-name="Badge">
      <ArrowDown4 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.615px] not-italic relative shrink-0 text-[#b42318] text-[2.53px] text-center">4%</p>
    </div>
  );
}

function BadgeWrap7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Badge wrap">
      <Badge20 />
    </div>
  );
}

function NumberAndBadge17() {
  return (
    <div className="content-stretch flex gap-[0.723px] items-center justify-center relative shrink-0" data-name="Number and badge">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[6.868px] not-italic relative shrink-0 text-[#101828] text-[5.422px]">84</p>
      <BadgeWrap7 />
    </div>
  );
}

function Frame146() {
  return (
    <div className="content-stretch flex flex-col gap-[1.446px] items-start relative shrink-0">
      <Frame147 />
      <NumberAndBadge17 />
    </div>
  );
}

function Frame141() {
  return (
    <div className="content-stretch flex gap-[13.014px] items-end relative shrink-0 w-full">
      <Frame142 />
      <Frame144 />
      <Frame146 />
    </div>
  );
}

function WidgetSmBlock5() {
  return (
    <div className="absolute bg-white h-[39.764px] left-[149px] rounded-[1.446px] top-[214px] w-[107px]" data-name="widget sm block">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip p-[4.338px] relative rounded-[inherit] size-full">
        <Frame153 />
        <Frame141 />
      </div>
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0.181px] border-solid inset-0 pointer-events-none rounded-[1.446px] shadow-[0px_0.181px_0.542px_0px_rgba(16,24,40,0.1),0px_0.181px_0.361px_0px_rgba(16,24,40,0.06)]" />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[2.953px] items-start not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1d2939] text-[4.429px] whitespace-nowrap">
        <p className="leading-[6.89px]">
          Sell $1000 in Cuisinart Product to
          <br aria-hidden="true" />
          earn 20,000 points
        </p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] min-w-full relative shrink-0 text-[#1d2939] text-[3.445px] w-[min-content] whitespace-pre-wrap">{`Lorem ipsum dolor sit amet consectetur. Nam integer arcu venenatis in. Convallis faucibus id duis id `}</p>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#667085] text-[2.953px] text-center whitespace-nowrap">
        <p className="leading-[3.199px]">Jan 03, 2024 - May 31, 2024</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#155eef] content-stretch flex items-center justify-center px-[4.922px] py-[2.461px] relative rounded-[24.608px] shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[4.922px] not-italic relative shrink-0 text-[3.445px] text-white">Learn More</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[4.922px] items-start relative shrink-0 w-[93.511px]">
      <Frame20 />
      <Frame23 />
    </div>
  );
}

function Ring1() {
  return (
    <div className="absolute inset-[2.24px_2.03px_-18.28px_2.24px]" data-name="Ring">
      <div className="absolute inset-[-5.51%_-5.53%_0_-5.53%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 42.9148">
          <g id="Ring">
            <path d={svgPaths.p3462e680} id="Background" stroke="var(--stroke-0, #F2F4F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.47869" />
            <path d={svgPaths.p2aedc060} id="Line" stroke="var(--stroke-0, #155EEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.47869" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ProgressIndicator() {
  return (
    <div className="h-[24.633px] relative shrink-0 w-[44.787px]" data-name="Progress indicator">
      <Ring1 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%-1.67px)] not-italic text-[#475467] text-[2.239px] text-center top-[calc(50%-0.12px)] whitespace-nowrap">
        <p className="leading-[3.199px]">Progress</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%-0.69px)] not-italic text-[#101828] text-[4.799px] text-center top-[calc(50%+6.9px)] whitespace-nowrap">
        <p className="leading-[6.078px]">42%</p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[0.984px] items-start leading-[4.922px] not-italic relative shrink-0 text-[#101828] text-[3.445px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0">$2650</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0">out of $5000</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[2.953px] items-center justify-center relative shrink-0">
      <ProgressIndicator />
      <Frame52 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-white content-stretch flex gap-[9.843px] items-center relative rounded-bl-[1.476px] rounded-tl-[1.476px] shrink-0">
      <Frame22 />
      <Frame51 />
    </div>
  );
}

function PromoBanner() {
  return (
    <div className="content-stretch flex gap-[5.906px] items-center justify-center relative rounded-[1.476px] shrink-0 w-full" data-name="Promo banner">
      <div className="aspect-[213.20989990234375/178.9109344482422] flex-[1_0_0] min-h-px min-w-px relative rounded-[1.969px]">
        <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[1.969px] size-full" src={imgRectangle204} />
      </div>
      <Frame26 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-white h-[59.947px] relative rounded-[1.969px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#f2f4f7] border-[0.246px] border-solid inset-0 pointer-events-none rounded-[1.969px]" />
      <div className="content-stretch flex flex-col gap-[2.953px] items-start p-[5.906px] relative size-full">
        <PromoBanner />
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[2.953px] items-start not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1d2939] text-[4.429px] text-center whitespace-nowrap">
        <p className="leading-[6.89px]">Sell 5 iPhones to earn 50,000 points!</p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[4.922px] min-w-full relative shrink-0 text-[#1d2939] text-[3.445px] w-[min-content] whitespace-pre-wrap">{`Lorem ipsum dolor sit amet consectetur. Nam integer arcu venenatis in. Convallis faucibus id duis id ullamcorper lacus eget massa. `}</p>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#667085] text-[2.953px] text-center whitespace-nowrap">
        <p className="leading-[3.199px]">Jan 03, 2024 - May 31, 2024</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[#155eef] content-stretch flex items-center justify-center px-[4.922px] py-[2.461px] relative rounded-[24.608px] shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[4.922px] not-italic relative shrink-0 text-[3.445px] text-white">Learn More</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[4.922px] items-start relative shrink-0 w-[93.511px]">
      <Frame21 />
      <Frame25 />
    </div>
  );
}

function Ring2() {
  return (
    <div className="absolute inset-[2.24px_2.03px_-18.28px_2.24px]" data-name="Ring">
      <div className="absolute inset-[-5.51%_-5.53%_0_-5.53%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 42.9148">
          <g id="Ring">
            <path d={svgPaths.p3f281ec0} id="Background" stroke="var(--stroke-0, #F2F4F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.47869" />
            <path d={svgPaths.p34df0280} id="Line" stroke="var(--stroke-0, #155EEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.47869" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ProgressIndicator1() {
  return (
    <div className="h-[24.633px] relative shrink-0 w-[44.787px]" data-name="Progress indicator">
      <Ring2 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%-1.67px)] not-italic text-[#475467] text-[2.239px] text-center top-[calc(50%-0.12px)] whitespace-nowrap">
        <p className="leading-[3.199px]">Progress</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%-0.69px)] not-italic text-[#101828] text-[4.799px] text-center top-[calc(50%+6.9px)] whitespace-nowrap">
        <p className="leading-[6.078px]">60%</p>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[0.984px] items-start leading-[4.922px] not-italic relative shrink-0 text-[#101828] text-[3.445px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0">3</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0">out of 5</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[2.953px] items-center justify-center relative shrink-0">
      <ProgressIndicator1 />
      <Frame54 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-white content-stretch flex gap-[9.843px] items-center justify-center relative rounded-bl-[1.476px] rounded-tl-[1.476px] shrink-0">
      <Frame24 />
      <Frame53 />
    </div>
  );
}

function PromoBanner1() {
  return (
    <div className="content-stretch flex gap-[5.906px] items-center justify-center relative rounded-[1.476px] shrink-0 w-full" data-name="Promo banner">
      <div className="aspect-[213.20989990234375/178.9109344482422] flex-[1_0_0] min-h-px min-w-px relative rounded-[1.969px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[1.969px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[1.969px]" />
          <img loading="lazy" decoding="async" alt="" className="absolute max-w-none object-cover rounded-[1.969px] size-full" src={imgRectangle205} />
          <div className="absolute inset-0 overflow-hidden rounded-[1.969px]">
            <img loading="lazy" decoding="async" alt="" className="absolute h-[153.3%] left-[-67.25%] max-w-none top-[-20.07%] w-[215.44%]" src={imgRectangle206} />
          </div>
        </div>
      </div>
      <Frame27 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-white h-[59.306px] relative rounded-[1.969px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#f2f4f7] border-[0.246px] border-solid inset-0 pointer-events-none rounded-[1.969px]" />
      <div className="content-stretch flex flex-col gap-[2.953px] items-start p-[5.906px] relative size-full">
        <PromoBanner1 />
      </div>
    </div>
  );
}

function HeartOctagon() {
  return (
    <div className="relative shrink-0 size-[4.355px]" data-name="heart-octagon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.3551 4.3551">
        <g clipPath="url(#clip0_1_268703)" id="heart-octagon">
          <g id="Icon">
            <path d={svgPaths.pbf1b400} stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.362925" />
            <path clipRule="evenodd" d={svgPaths.p17c15c00} fillRule="evenodd" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.362925" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_268703">
            <rect fill="white" height="4.3551" width="4.3551" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame171() {
  return (
    <div className="content-stretch flex gap-[0.726px] items-center leading-[5.444px] not-italic relative shrink-0 text-[3.629px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-black">Dream Tracker</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#667085]">(9)</p>
    </div>
  );
}

function Frame170() {
  return (
    <div className="content-stretch flex gap-[1.452px] items-center relative shrink-0">
      <HeartOctagon />
      <Frame171 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white relative rounded-[1.452px] shrink-0" data-name="Button">
      <div className="content-stretch flex gap-[1.452px] items-center justify-center overflow-clip px-[2.54px] py-[1.452px] relative rounded-[inherit]">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[3.629px] not-italic relative shrink-0 text-[#344054] text-[2.54px]">View All</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#d0d5dd] border-[0.181px] border-solid inset-0 pointer-events-none rounded-[1.452px] shadow-[0px_0.181px_0.363px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame173() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame170 />
      <Button2 />
    </div>
  );
}

function ButtonImage() {
  return (
    <div className="bg-white content-stretch flex items-start p-[0.726px] relative shrink-0 size-[16.332px]" data-name="Button/Image">
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img loading="lazy" decoding="async" alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle194} />
          <img loading="lazy" decoding="async" alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle195} />
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[1.452px] items-center justify-center overflow-clip relative shrink-0" data-name="Button">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[3.629px] not-italic relative shrink-0 text-[#155eef] text-[2.54px]">View Now</p>
    </div>
  );
}

function Frame175() {
  return (
    <div className="content-stretch flex flex-col gap-[1.089px] items-center relative shrink-0">
      <ButtonImage />
      <Button3 />
    </div>
  );
}

function Frame155() {
  return (
    <div className="content-stretch flex gap-[0.726px] items-center leading-[3.266px] relative shrink-0 text-[#667085] text-[2.178px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0">Added</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0">Apr 10, 2024</p>
    </div>
  );
}

function Frame156() {
  return (
    <div className="content-stretch flex flex-col gap-[0.726px] h-[11.251px] items-start not-italic relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.629px] min-w-full relative shrink-0 text-[#101828] text-[2.54px] w-[min-content] whitespace-pre-wrap">Sony Alpha 7C Full-Frame Mirrorless Camera (Body O...</p>
      <Frame155 />
    </div>
  );
}

function Frame150() {
  return (
    <div className="content-stretch flex gap-[0.726px] items-center not-italic relative shrink-0 text-[#101828]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[5.444px] relative shrink-0 text-[3.629px]">386,700</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.266px] relative shrink-0 text-[2.178px]">pts</p>
    </div>
  );
}

function ProgressBar1() {
  return (
    <div className="flex-[1_0_0] h-[1.452px] min-h-px min-w-px relative rounded-[1.452px]" data-name="Progress bar">
      <div className="absolute bg-[#eaecf0] h-[1.452px] left-0 right-[0.32px] rounded-[0.726px] top-0" data-name="Background" />
      <div className="absolute bg-[#155eef] h-[1.452px] left-0 right-[50.71%] rounded-[0.726px] top-0" data-name="Progress" />
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="content-stretch flex gap-[1.452px] items-center relative shrink-0 w-full" data-name="Progress bar">
      <ProgressBar1 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#344054] text-[2.54px] whitespace-nowrap">
        <p className="leading-[3.629px]">48%</p>
      </div>
    </div>
  );
}

function Frame159() {
  return (
    <div className="content-stretch flex flex-col gap-[1.089px] items-start relative shrink-0 w-full">
      <Frame150 />
      <ProgressBar />
    </div>
  );
}

function Frame164() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2.178px] items-start min-h-px min-w-px relative">
      <Frame156 />
      <Frame159 />
    </div>
  );
}

function Frame178() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2.178px] h-full items-start justify-end min-h-px min-w-px relative">
      <Frame164 />
    </div>
  );
}

function Frame165() {
  return (
    <div className="content-stretch flex gap-[5.807px] items-center justify-center relative shrink-0 w-full">
      <Frame175 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame178 />
      </div>
    </div>
  );
}

function WishlistWidgetSingleItem() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center p-[3.629px] relative rounded-[1.452px] shrink-0 w-[70.165px]" data-name="Wishlist widget single item">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0.181px] border-solid inset-0 pointer-events-none rounded-[1.452px]" />
      <Frame165 />
    </div>
  );
}

function ButtonImage1() {
  return (
    <div className="bg-white content-stretch flex items-start p-[0.726px] relative shrink-0 size-[16.332px]" data-name="Button/Image">
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
        <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle196} />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex gap-[1.452px] items-center justify-center overflow-clip relative shrink-0" data-name="Button">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[3.629px] not-italic relative shrink-0 text-[#155eef] text-[2.54px]">View Now</p>
    </div>
  );
}

function Frame176() {
  return (
    <div className="content-stretch flex flex-col gap-[1.089px] items-center relative shrink-0">
      <ButtonImage1 />
      <Button4 />
    </div>
  );
}

function Frame158() {
  return (
    <div className="content-stretch flex gap-[0.726px] items-center leading-[3.266px] relative shrink-0 text-[#667085] text-[2.178px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0">Added</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0">Apr 10, 2024</p>
    </div>
  );
}

function Frame157() {
  return (
    <div className="content-stretch flex flex-col gap-[0.726px] h-[11.251px] items-start not-italic relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.629px] min-w-full relative shrink-0 text-[#101828] text-[2.54px] w-[min-content] whitespace-pre-wrap">Magic Keyboard Folio for iPad (10th generation)</p>
      <Frame158 />
    </div>
  );
}

function Frame151() {
  return (
    <div className="content-stretch flex gap-[0.726px] items-center not-italic relative shrink-0 text-[#101828]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[5.444px] relative shrink-0 text-[3.629px]">53,400</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.266px] relative shrink-0 text-[2.178px]">pts</p>
    </div>
  );
}

function ProgressBar3() {
  return (
    <div className="flex-[1_0_0] h-[1.452px] min-h-px min-w-px relative rounded-[1.452px]" data-name="Progress bar">
      <div className="absolute bg-[#eaecf0] h-[1.452px] left-0 right-[0.32px] rounded-[0.726px] top-0" data-name="Background" />
      <div className="absolute bg-[#155eef] h-[1.452px] left-0 right-[50.71%] rounded-[0.726px] top-0" data-name="Progress" />
    </div>
  );
}

function ProgressBar2() {
  return (
    <div className="content-stretch flex gap-[1.452px] items-center relative shrink-0 w-full" data-name="Progress bar">
      <ProgressBar3 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#344054] text-[2.54px] whitespace-nowrap">
        <p className="leading-[3.629px]">48%</p>
      </div>
    </div>
  );
}

function Frame160() {
  return (
    <div className="content-stretch flex flex-col gap-[1.089px] items-start relative shrink-0 w-full">
      <Frame151 />
      <ProgressBar2 />
    </div>
  );
}

function Frame167() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2.178px] items-start min-h-px min-w-px relative">
      <Frame157 />
      <Frame160 />
    </div>
  );
}

function Frame179() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2.178px] h-full items-start justify-end min-h-px min-w-px relative">
      <Frame167 />
    </div>
  );
}

function Frame166() {
  return (
    <div className="content-stretch flex gap-[5.807px] items-center justify-center relative shrink-0 w-full">
      <Frame176 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame179 />
      </div>
    </div>
  );
}

function WishlistWidgetSingleItem1() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[30.849px] items-start justify-center p-[3.629px] relative rounded-[1.452px] shrink-0 w-[70.165px]" data-name="Wishlist widget single item">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0.181px] border-solid inset-0 pointer-events-none rounded-[1.452px]" />
      <Frame166 />
    </div>
  );
}

function ButtonImage2() {
  return (
    <div className="bg-white content-stretch flex items-start p-[0.726px] relative shrink-0 size-[16.332px]" data-name="Button/Image">
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
        <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle197} />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex gap-[1.452px] items-center justify-center overflow-clip relative shrink-0" data-name="Button">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[3.629px] not-italic relative shrink-0 text-[#155eef] text-[2.54px]">Redeem Now</p>
    </div>
  );
}

function Frame177() {
  return (
    <div className="content-stretch flex flex-col gap-[1.089px] items-center relative shrink-0">
      <ButtonImage2 />
      <Button5 />
    </div>
  );
}

function Frame162() {
  return (
    <div className="content-stretch flex gap-[0.726px] items-center leading-[3.266px] relative shrink-0 text-[#667085] text-[2.178px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0">Added</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0">Apr 10, 2024</p>
    </div>
  );
}

function Frame161() {
  return (
    <div className="content-stretch flex flex-col gap-[0.726px] h-[11.251px] items-start not-italic relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.629px] min-w-full relative shrink-0 text-[#101828] text-[2.54px] w-[min-content] whitespace-pre-wrap">von Holzhausen The Watch Band Portfolio</p>
      <Frame162 />
    </div>
  );
}

function Frame154() {
  return (
    <div className="content-stretch flex gap-[0.726px] items-center not-italic relative shrink-0 text-[#101828]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[5.444px] relative shrink-0 text-[3.629px]">21,100</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[3.266px] relative shrink-0 text-[2.178px]">pts</p>
    </div>
  );
}

function ProgressBar5() {
  return (
    <div className="flex-[1_0_0] h-[1.452px] min-h-px min-w-px relative rounded-[1.452px]" data-name="Progress bar">
      <div className="absolute bg-[#eaecf0] h-[1.452px] left-0 right-[-0.35px] rounded-[0.726px] top-0" data-name="Background" />
      <div className="absolute bg-[#155eef] h-[1.452px] left-0 right-0 rounded-[0.726px] top-0" data-name="Progress" />
    </div>
  );
}

function ProgressBar4() {
  return (
    <div className="content-stretch flex gap-[1.452px] items-center relative shrink-0 w-full" data-name="Progress bar">
      <ProgressBar5 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#344054] text-[2.54px] whitespace-nowrap">
        <p className="leading-[3.629px]">100%</p>
      </div>
    </div>
  );
}

function Frame163() {
  return (
    <div className="content-stretch flex flex-col gap-[1.089px] items-start relative shrink-0 w-full">
      <Frame154 />
      <ProgressBar4 />
    </div>
  );
}

function Frame172() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2.178px] items-start min-h-px min-w-px relative">
      <Frame161 />
      <Frame163 />
    </div>
  );
}

function Frame180() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2.178px] h-full items-start justify-end min-h-px min-w-px relative">
      <Frame172 />
    </div>
  );
}

function Frame168() {
  return (
    <div className="content-stretch flex gap-[5.807px] items-center justify-center relative shrink-0 w-full">
      <Frame177 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame180 />
      </div>
    </div>
  );
}

function WishlistWidgetSingleItem2() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[30.849px] items-center justify-center p-[3.629px] relative rounded-[1.452px] shrink-0 w-[70.165px]" data-name="Wishlist widget single item">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0.181px] border-solid inset-0 pointer-events-none rounded-[1.452px]" />
      <Frame168 />
    </div>
  );
}

function Frame174() {
  return (
    <div className="content-stretch flex gap-[2.178px] items-start relative shrink-0 w-full">
      <WishlistWidgetSingleItem />
      <WishlistWidgetSingleItem1 />
      <WishlistWidgetSingleItem2 />
    </div>
  );
}

function ChevronLeft2() {
  return (
    <div className="relative shrink-0 size-[4.355px]" data-name="chevron-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.3551 4.3551">
        <g id="chevron-left">
          <path d={svgPaths.p1a71e240} id="Icon" stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.362925" />
        </g>
      </svg>
    </div>
  );
}

function ChevronRight2() {
  return (
    <div className="relative shrink-0 size-[4.355px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.3551 4.3551">
        <g id="chevron-right">
          <path d={svgPaths.p18a16a40} id="Icon" stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.362925" />
        </g>
      </svg>
    </div>
  );
}

function WidgetIndicator2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="widget indicator">
      <ChevronLeft2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[3.629px] not-italic relative shrink-0 text-[2.54px] text-black">1 of 3</p>
      <ChevronRight2 />
    </div>
  );
}

function Frame169() {
  return (
    <div className="content-stretch flex flex-col gap-[3.629px] items-center justify-center relative shrink-0 w-full">
      <Frame173 />
      <Frame174 />
      <WidgetIndicator2 />
    </div>
  );
}

function Component12ColWidget() {
  return (
    <div className="bg-white h-[60.213px] relative rounded-[1.452px] shrink-0 w-full" data-name="12col widget">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[2.903px] py-[4.355px] relative size-full">
          <Frame169 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0.181px] border-solid inset-0 pointer-events-none rounded-[1.452px] shadow-[0px_0.181px_0.544px_0px_rgba(16,24,40,0.1),0px_0.181px_0.363px_0px_rgba(16,24,40,0.06)]" />
    </div>
  );
}

function Frame264() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[10px] items-start left-[518px] top-[calc(50%-0.27px)] w-[223px]">
      <Frame28 />
      <Frame42 />
      <Component12ColWidget />
    </div>
  );
}

function Property6() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-full" data-name="Property">
      <div className="overflow-clip relative rounded-[inherit] w-full">
        <img loading="lazy" decoding="async" alt="" className="block w-full h-auto object-contain" src={imgSolutionTwo} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col font-normal items-start leading-[0] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#32404f] text-[20px] tracking-[-0.424px] w-full">
        <p className="leading-[30px] whitespace-pre-wrap">ex. Individual Engagement Widgets</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">To reduce custom content decisions, I translated recurring user needs in different roles into a set of standardized engagement widgets (Promotions, nominations, milestones, leaderboards, and activity summaries).</p>
      </div>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Section Header">
      <Property6 />
      <Container16 />
    </div>
  );
}

function ContentSections2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Content Sections">
      <SectionHeader />
    </div>
  );
}

function ContentSections1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Content Sections">
      <SectionContainer2 />
      <ContentSections2 />
    </div>
  );
}

function Property7() {
  return (
    <div className="bg-[#f0f3f5] h-[300px] sm:h-[420px] relative shrink-0 w-full sm:w-[371px]" data-name="Property">
      <div className="overflow-clip rounded-[inherit] size-full flex items-center justify-center">
        <video autoPlay className="max-h-full max-w-full object-contain" controlsList="nodownload" loop muted playsInline>
          <source src={videoReusableComponent1} />
        </video>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f3f5] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col font-normal items-start leading-[0] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#32404f] text-[20px] tracking-[-0.424px] w-full">
        <p className="leading-[30px] whitespace-pre-wrap">ex. Navigation</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Core actions and status, reused across programmes</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative w-full sm:flex-[1_0_0] sm:min-h-px sm:min-w-px order-1" data-name="Container">
      <Property7 />
      <Container18 />
    </div>
  );
}

function Property8() {
  return (
    <div className="bg-[#f0f3f5] h-[300px] sm:h-[420px] relative shrink-0 w-full sm:w-[371px]" data-name="Property">
      <div className="overflow-clip rounded-[inherit] size-full flex items-center justify-center">
        <video autoPlay className="max-h-full max-w-full object-contain" controlsList="nodownload" loop muted playsInline>
          <source src={videoReusableComponent2} />
        </video>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f3f5] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col font-normal items-start leading-[0] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#32404f] text-[20px] tracking-[-0.424px] w-full">
        <p className="leading-[30px] whitespace-pre-wrap">ex. Cards</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Brand-flexible content blocks, reusable across layouts</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative w-full sm:flex-[1_0_0] sm:min-h-px sm:min-w-px order-2" data-name="Container">
      <Property8 />
      <Container20 />
    </div>
  );
}

function SectionContainer4() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[32px] items-start relative shrink-0 w-full" data-name="Section Container">
      <Container17 />
      <Container19 />
    </div>
  );
}

function SectionContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section Container">
      <SectionContainer4 />
    </div>
  );
}

function ContentContainer1() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[40px] items-start max-w-[774px] relative row-[8] self-start shrink-0 w-full" data-name="Content Container">
      <ContentSections1 />
      <SectionContainer3 />
    </div>
  );
}

function SectionHeader1() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] relative shrink-0 w-full" data-name="Section Header">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[#858e97] text-[13px] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Enterprise</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[42px] tracking-[-1.04px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">{`Rewards & Recognition Engagement Product`}</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[#5b6a79] text-[16px] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Initiated and led the shift from one-off client builds to a template-driven engagement product</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[405px] left-[68px] overflow-clip rounded-[4.83px] shadow-[0px_3.575px_30.385px_0px_rgba(192,192,192,0.25)] top-[62px] w-[442px]" data-name="Container">
      <div className="absolute h-[1429.645px] left-0 top-[0.09px] w-[442.227px]" data-name="Image">
        <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDtVer1} />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute left-[264px] overflow-clip rounded-[4.83px] shadow-[0px_3.575px_30.385px_0px_rgba(192,192,192,0.25)] size-[442px] top-[25px]" data-name="Container">
      <div className="absolute h-[1202.871px] left-[-0.36px] top-0 w-[442.267px]" data-name="Image">
        <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAdminInterface1} />
      </div>
    </div>
  );
}

function Thumbnail() {
  return (
    <div className="bg-[#f0f3f5] overflow-clip relative shrink-0 w-full" data-name="Static Thumbnail">
      <img loading="eager" fetchPriority="high" decoding="async" alt="" className="block w-full h-auto object-cover" src={imgDetailThumbnail} />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[8px] sm:gap-[76px] items-start sm:items-center pb-[12px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ebeced] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-geist-mono font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full sm:w-[132px]">
        <p className="leading-[22.5px] whitespace-nowrap">Timeline</p>
      </div>
      <div className="flex flex-col font-geist font-normal justify-center leading-[0] min-h-px min-w-0 relative text-[#5b6a79] text-[15px] w-full">
        <p className="leading-[24px]">Sep 2022 - Feb 2023 (6 months)</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[8px] sm:gap-[76px] items-start sm:items-center pb-[12px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ebeced] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-geist-mono font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full sm:w-[132px]">
        <p className="leading-[22.5px] whitespace-nowrap">Team</p>
      </div>
      <div className="flex flex-col font-geist font-normal justify-center leading-[0] min-h-px min-w-0 relative text-[#5b6a79] text-[15px] w-full">
        <p>
          <span className="leading-[24px] text-[#5b6a79]">{`2 Designers `}</span>
          <span className="leading-[24px]">·</span>
          <span className="leading-[24px] text-[#5b6a79]">{` 2 Developers `}</span>
          <span className="leading-[24px]">·</span>
          <span className="leading-[24px] text-[#5b6a79]">{` UX Lead `}</span>
          <span className="leading-[24px]">·</span>
          <span className="leading-[24px] text-[#5b6a79]">{` CS Team `}</span>
          <span className="leading-[24px]">·</span>
          <span className="leading-[24px] text-[#5b6a79]">{` Business Analysts`}</span>
        </p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row font-normal gap-[8px] sm:gap-[76px] items-start sm:items-center leading-[0] pb-[12px] relative shrink-0 text-[15px] w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ebeced] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full sm:w-[132px]">
        <p className="leading-[22.5px] whitespace-nowrap">Contribution</p>
      </div>
      <div className="flex flex-col font-geist justify-center min-h-px min-w-0 relative text-[#5b6a79] w-full">
        <p>
          <span className="leading-[24px] text-[#5b6a79]">{`Systems Thinking `}</span>
          <span className="leading-[24px]">·</span>
          <span className="leading-[24px] text-[#5b6a79]">{`  Product Strategy `}</span>
          <span className="leading-[24px]">{`· `}</span>
          <span className="leading-[24px] text-[#5b6a79]">Cross-functional Collaboration</span>
        </p>
      </div>
    </div>
  );
}

function MetaContainerDeliverable() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[8px] sm:gap-[76px] items-start sm:items-center pb-[12px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ebeced] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-geist-mono font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full sm:w-[132px]">
        <p className="leading-[22.5px] whitespace-nowrap">Deliverable</p>
      </div>
      <div className="flex flex-col font-geist font-normal justify-center leading-[0] min-h-px min-w-0 relative text-[#5b6a79] text-[15px] w-full">
        <p className="leading-[24px]">Web App</p>
      </div>
    </div>
  );
}

function MetaContainerTargetUsers() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[8px] sm:gap-[76px] items-start sm:items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-geist-mono font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full sm:w-[132px]">
        <p className="leading-[22.5px] whitespace-nowrap">Target Users</p>
      </div>
      <div className="flex flex-col font-geist font-normal justify-center leading-[0] min-h-px min-w-0 relative text-[#5b6a79] text-[15px] w-full">
        <p className="leading-[24px]">Program Admins · Employees</p>
      </div>
    </div>
  );
}

function Property9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Property">
      <Container24 />
      <Container25 />
      <Container26 />
      <MetaContainerDeliverable />
      <MetaContainerTargetUsers />
    </div>
  );
}

function ContentSections3() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start max-w-[774px] pt-[48px] relative row-[1] self-start shrink-0 w-full" data-name="Content Sections">
      <SectionHeader1 />
      <Thumbnail />
      <Property9 />
    </div>
  );
}

function SectionContainer5() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] relative shrink-0 w-full" data-name="Section Container">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Background</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">{`A B2B platform for employee Rewards & Recognition`}</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">
          {`CarltonOne is a B2B SaaS rewards and recognition platform used by enterprise companies. `}
          <br aria-hidden="true" />
          It allows them to create branded reward programs where employees earn points and redeem them through an online storefront.
        </p>
      </div>
    </div>
  );
}

function CoinsStacked() {
  return (
    <div className="relative shrink-0 size-[12.468px]" data-name="coins-stacked-03">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4683 12.4683">
        <g id="coins-stacked-03">
          <path d={svgPaths.pdcd3298} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.03902" />
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute bg-[#1d2939] content-stretch flex gap-[4px] items-center left-[548px] px-[7.503px] py-[4.69px] rounded-[90.992px] top-[142px]">
      <CoinsStacked />
      <p className="font-geist font-medium leading-[16.378px] relative shrink-0 text-[10.919px] text-white">500 points</p>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents left-[548px] top-[142px]">
      <Frame17 />
    </div>
  );
}

function Group29() {
  return (
    <div className="relative size-[22.619px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.6191 22.6191">
        <g id="Group 277900">
          <circle cx="11.3094" cy="11.3094" fill="var(--fill-0, white)" id="Ellipse 7" r="11.3094" />
        </g>
      </svg>
    </div>
  );
}

function Heart1() {
  return (
    <div className="relative size-[10.976px]" data-name="heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9761 10.9761">
        <g clipPath="url(#clip0_1_84957)" id="heart">
          <path clipRule="evenodd" d={svgPaths.p1b5e4400} fill="var(--fill-0, #101828)" fillRule="evenodd" id="Icon" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67547" />
        </g>
        <defs>
          <clipPath id="clip0_1_84957">
            <rect fill="white" height="10.9761" width="10.9761" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents left-[555px] size-[30.554px] top-[99px]">
      <div className="absolute flex items-center justify-center left-[555px] size-[30.554px] top-[99px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[27.78deg]">
          <Group29 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[562.75px] size-[14.827px] top-[107.36px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[27.78deg]">
          <Heart1 />
        </div>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="overflow-clip relative size-[100px]" data-name="15">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[54.074px] items-center justify-center left-1/2 top-1/2 w-[86.852px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[54.074px] relative w-[86.852px]" data-name="Vector">
            <div className="absolute inset-[-1.71%_-1.07%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88.7036 55.926">
                <path clipRule="evenodd" d={svgPaths.p4499070} fillRule="evenodd" id="Vector" stroke="var(--stroke-0, #1D2939)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2" strokeWidth="1.85185" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Send() {
  return (
    <div className="relative size-[14.497px]" data-name="send-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4975 14.4975">
        <g id="send-01">
          <path d={svgPaths.p33c75a00} id="Icon" stroke="var(--stroke-0, #1E242A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.910575" />
        </g>
      </svg>
    </div>
  );
}

function TestiomonialCarouselArrow() {
  return (
    <div className="bg-[#fbfdfd] content-stretch flex items-center justify-center p-[8.334px] relative rounded-[38.891px] shadow-[0px_4.594px_10.336px_0px_rgba(0,0,0,0.1)] size-[31.086px]" data-name="_Testiomonial carousel arrow">
      <div className="flex items-center justify-center relative shrink-0 size-[19.13px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[-23.92deg]">
          <Send />
        </div>
      </div>
    </div>
  );
}

function Group38() {
  return (
    <div className="relative size-full">
      <div className="absolute inset-[-3.1%_-2.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8836 14.8694">
          <g id="Group 481891">
            <path d="M0.434681 7.77725H15.449" id="Vector" stroke="var(--stroke-0, #1D2939)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2" strokeWidth="0.869362" />
            <path d="M7.77869 0.434681V14.4347" id="Vector_2" stroke="var(--stroke-0, #1D2939)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2" strokeWidth="0.869362" />
            <path d={svgPaths.p13aa4440} id="Vector_3" stroke="var(--stroke-0, #1D2939)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2" strokeWidth="0.869362" />
            <path d={svgPaths.p2c742800} id="Vector_4" stroke="var(--stroke-0, #1D2939)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2" strokeWidth="0.869362" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Property10() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-full" data-name="Property">
      <div className="overflow-clip relative rounded-[inherit] w-full">
        <img loading="lazy" decoding="async" alt="" className="block w-full h-auto object-contain" src={imgBackground} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ContentSections4() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch max-w-[774px] relative row-[4] self-start shrink-0" data-name="Content Sections">
      <SectionContainer5 />
      <Property10 />
    </div>
  );
}

function Frame261() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase whitespace-nowrap">
        <p className="leading-[22.5px]">Key insights</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center min-w-full relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-[min-content]">
        <p className="leading-[46px] whitespace-pre-wrap">Common needs behind repeated asks</p>
      </div>
    </div>
  );
}

function ImpactImage() {
  return (
    <div className="bg-[#f0f3f5] h-[240px] relative shrink-0 w-full sm:w-[242px]" data-name="Impact image">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <img loading="lazy" decoding="async" alt="" className="block w-full h-full object-contain" src={imgKeyInsight1} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-newsreader font-normal justify-center leading-[0] relative shrink-0 text-[#32404f] text-[20px] text-center tracking-[-0.424px] w-full">
        <p className="leading-[31.8px] whitespace-pre-wrap">Clear navigation</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full sm:flex-[1_0_0] sm:min-h-px sm:min-w-px sm:self-stretch order-1" data-name="Container">
      <ImpactImage />
      <Frame9 />
    </div>
  );
}

function ImpactImage1() {
  return (
    <div className="bg-[#f0f3f5] h-[240px] relative shrink-0 w-full sm:w-[242px]" data-name="Impact image">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <img loading="lazy" decoding="async" alt="" className="block w-full h-full object-contain" src={imgKeyInsight2} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-newsreader font-normal justify-center leading-[0] relative shrink-0 text-[#32404f] text-[20px] text-center tracking-[-0.424px] w-full">
        <p className="leading-[31.8px] whitespace-pre-wrap">Program value clarity</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full sm:flex-[1_0_0] sm:min-h-px sm:min-w-px sm:self-stretch order-2" data-name="Container">
      <ImpactImage1 />
      <Frame10 />
    </div>
  );
}

function ImpactImage2() {
  return (
    <div className="bg-[#f0f3f5] h-[240px] relative shrink-0 w-full sm:w-[242px]" data-name="Impact image">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <img loading="lazy" decoding="async" alt="" className="block w-full h-full object-contain" src={imgKeyInsight3} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-newsreader font-normal justify-center leading-[0] relative shrink-0 text-[#32404f] text-[20px] text-center tracking-[-0.424px] w-full">
        <p className="leading-[31.8px] whitespace-pre-wrap">Consistency with flexibility</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full sm:flex-[1_0_0] sm:min-h-px sm:min-w-px sm:self-stretch order-3" data-name="Container">
      <ImpactImage2 />
      <Frame11 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Container29 />
      <Container30 />
    </div>
  );
}

function Frame270() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Container27 />
    </div>
  );
}

function Property11() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch max-w-[774px] relative row-[13] self-start shrink-0" data-name="Property">
      <Frame261 />
      <Frame270 />
    </div>
  );
}

function SectionContainer7() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Section Container">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">outcome</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[42px] tracking-[-0.9px] w-full">
        <p className="leading-[50px] whitespace-pre-wrap">Impact at product, team, and business scale</p>
      </div>
    </div>
  );
}

function SubsectionContainer4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Subsection Container">
      <ul className="content-stretch flex flex-col font-geist font-normal gap-[10px] items-start leading-[0] relative text-[#5b6a79] text-[16px] w-full">
        <li className="flex gap-[10px] items-start">
          <span className="mt-[11px] size-[4px] rounded-full bg-[#9aa6b2] shrink-0" />
          <span className="leading-[26px] whitespace-pre-wrap">Established consistent, on-brand experiences across programmes</span>
        </li>
        <li className="flex gap-[10px] items-start">
          <span className="mt-[11px] size-[4px] rounded-full bg-[#9aa6b2] shrink-0" />
          <span className="leading-[26px] whitespace-pre-wrap">Enabled clearer self-service CMS configuration with less developer involvement.</span>
        </li>
      </ul>
    </div>
  );
}

function SectionContainer8() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section Container">
      <div className="flex flex-col font-newsreader font-normal justify-center leading-[0] relative shrink-0 text-[#1e242a] text-[24px] tracking-[-0.3px] w-full">
        <p className="leading-[30px] whitespace-pre-wrap">{`Product & UX`}</p>
      </div>
      <div aria-hidden="true" className="bg-[#d6dce1] h-px w-[56px]" />
      <SubsectionContainer4 />
    </div>
  );
}

function SubsectionContainer6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Subsection Container">
      <ul className="content-stretch flex flex-col font-geist font-normal gap-[10px] items-start leading-[0] relative text-[#5b6a79] text-[16px] w-full">
        <li className="flex gap-[10px] items-start">
          <span className="mt-[11px] size-[4px] rounded-full bg-[#9aa6b2] shrink-0" />
          <span className="leading-[26px] whitespace-pre-wrap">Reduced minor change requests and eliminated repeated one-off design and development work</span>
        </li>
        <li className="flex gap-[10px] items-start">
          <span className="mt-[11px] size-[4px] rounded-full bg-[#9aa6b2] shrink-0" />
          <span className="leading-[26px] whitespace-pre-wrap">Freed up capacity for longer-term roadmap initiatives.</span>
        </li>
      </ul>
    </div>
  );
}

function SubsectionContainer5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Subsection Container">
      <div className="flex flex-col font-newsreader font-normal justify-center leading-[0] relative shrink-0 text-[#1e242a] text-[24px] tracking-[-0.3px] w-full">
        <p className="leading-[30px] whitespace-pre-wrap">{`Team & Ops`}</p>
      </div>
      <div aria-hidden="true" className="bg-[#d6dce1] h-px w-[56px]" />
      <SubsectionContainer6 />
    </div>
  );
}

function SubsectionContainer8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Subsection Container">
      <ul className="content-stretch flex flex-col font-geist font-normal gap-[10px] items-start leading-[0] relative text-[#5b6a79] text-[16px] w-full">
        <li className="flex gap-[10px] items-start">
          <span className="mt-[11px] size-[4px] rounded-full bg-[#9aa6b2] shrink-0" />
          <span className="leading-[26px] whitespace-pre-wrap">Supported more client programmes without increasing headcount</span>
        </li>
        <li className="flex gap-[10px] items-start">
          <span className="mt-[11px] size-[4px] rounded-full bg-[#9aa6b2] shrink-0" />
          <span className="leading-[26px] whitespace-pre-wrap">Contributed to a 30% revenue increase in the first year after rollout</span>
        </li>
      </ul>
    </div>
  );
}

function SubsectionContainer7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Subsection Container">
      <div className="flex flex-col font-newsreader font-normal justify-center leading-[0] relative shrink-0 text-[#1e242a] text-[24px] tracking-[-0.3px] w-full">
        <p className="leading-[30px] whitespace-pre-wrap">Business</p>
      </div>
      <div aria-hidden="true" className="bg-[#d6dce1] h-px w-[56px]" />
      <SubsectionContainer8 />
    </div>
  );
}

function SectionContainer6() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Section Container">
      <SectionContainer7 />
      <div className="content-stretch grid grid-cols-1 sm:grid-cols-3 gap-[36px] items-start w-full">
        <SectionContainer8 />
        <SubsectionContainer5 />
        <SubsectionContainer7 />
      </div>
    </div>
  );
}

function ContentSections5() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch max-w-[774px] relative row-[17] self-start shrink-0" data-name="Content Sections">
      <SectionContainer6 />
    </div>
  );
}

function Frame262() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Challenge</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Effort scaled with new clients, but the system didn’t.</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">
          {`As the company grew, more client programs were still being built from scratch. `}
          <br aria-hidden="true" />
          It wasn’t just a design problem anymore, but a system that couldn’t scale, leading to slow launches and inconsistent user experiences.
        </p>
      </div>
    </div>
  );
}

function Frame251() {
  return <div className="-translate-x-1/2 -translate-y-1/2 absolute border border-[#32404f] border-dashed left-1/2 rounded-[1000px] size-[140px] top-1/2" />;
}

function Frame250() {
  return (
    <div className="absolute bg-[#32404f] left-[77px] overflow-clip rounded-[1000px] size-[140px] top-[85px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-geist font-normal justify-center leading-[0] left-[46px] text-[15px] text-white top-[69.5px] whitespace-nowrap">
        <p className="leading-[22.5px]">Clients</p>
      </div>
    </div>
  );
}

function Frame253() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#e5e9ec] font-geist font-normal leading-[0] left-[calc(50%+240px)] overflow-clip rounded-[1000px] size-[140px] text-[13px] text-[rgba(50,64,79,0.9)] top-1/2 whitespace-nowrap">
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[30px] top-[58.5px]">
        <p className="leading-[22.5px]">Slow Delivery</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[23px] top-[81.5px]">
        <p className="leading-[22.5px]">Inconsistent UX</p>
      </div>
    </div>
  );
}

function Frame252() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#32404f] border border-[#32404f] border-dashed font-geist font-normal leading-[0] left-1/2 overflow-clip rounded-[1000px] size-[66px] text-white top-1/2 whitespace-nowrap">
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[45px] text-[15px] top-[68.5px]">
        <p className="leading-[22.5px]">Clients</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[16px] text-[13px] top-[31.5px]">
        <p className="leading-[22.5px]">Team</p>
      </div>
    </div>
  );
}

function SectionImageLg3() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-full" data-name="section image lg">
      <div className="overflow-clip relative rounded-[inherit] w-full">
        <img loading="lazy" decoding="async" alt="" className="block w-full h-auto object-contain" src={imgChallenge} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame271() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <SectionImageLg3 />
    </div>
  );
}

function Property12() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch max-w-[774px] relative row-[5] self-start shrink-0" data-name="Property">
      <Frame262 />
      <Frame271 />
    </div>
  );
}

function SectionContainer9() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] relative shrink-0 w-full" data-name="Section Container">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Solution</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Turning common needs into reusable templates</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">
          {`I designed a three-layer system that turned repeatable design asks into reusable templates. `}
          <br aria-hidden="true" />
          This enabled more consistent member experiences and faster, on-brand launches across clients.
        </p>
      </div>
    </div>
  );
}

function Property13() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-full" data-name="Property">
      <div className="overflow-clip rounded-[inherit] w-full">
        <video autoPlay className="block w-full h-auto" controlsList="nodownload" loop muted playsInline>
          <source src={videoRefinedSolution} />
        </video>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ContentSections6() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch max-w-[774px] relative row-[6] self-start shrink-0" data-name="Content Sections">
      <SectionContainer9 />
      <Property13 />
    </div>
  );
}

function SectionContainer10() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] relative shrink-0 w-full" data-name="Section Container">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Design direction</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Translating common needs into a direction</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">
          {`The key insights shaped the direction for addressing different user needs at scale. `}
          <br aria-hidden="true" />
          Rather than treating the insights as isolated problems, I mapped each one to the layer where it could be most effectively addressed.
        </p>
      </div>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute h-[4.551px] left-[115.53px] top-[9.1px] w-[22.755px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.755 4.55113">
        <g id="Group 481888">
          <circle cx="2.27544" cy="2.27556" fill="var(--fill-0, #EBECED)" id="Ellipse 2" r="2.27544" />
          <circle cx="11.377" cy="2.27544" fill="var(--fill-0, #EBECED)" id="Ellipse 3" r="2.27544" />
          <circle cx="20.4795" cy="2.27544" fill="var(--fill-0, #EBECED)" id="Ellipse 4" r="2.27544" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 size-[6px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g id="Frame 14">
          <rect fill="var(--fill-0, white)" fillOpacity="0.95" height="6" rx="3" width="6" />
          <circle cx="3" cy="3" fill="var(--fill-0, #004DE9)" id="Ellipse 2" r="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame243() {
  return (
    <div className="content-stretch flex items-center pt-[2px] relative shrink-0">
      <Frame12 />
    </div>
  );
}

function Frame208() {
  return <div className="absolute bg-[#5b6a79] h-[23.217px] left-[3.94px] rounded-[0.876px] top-[3.14px] w-[28.035px]" />;
}

function Frame221() {
  return <div className="absolute bg-[#738292] h-[2.628px] left-[5.26px] rounded-[0.438px] top-[17.6px] w-[25.407px]" />;
}

function Frame220() {
  return <div className="absolute bg-[#738292] h-[2.628px] left-[5.26px] rounded-[0.438px] top-[21.54px] w-[25.407px]" />;
}

function Frame216() {
  return <div className="absolute bg-[#738292] left-[6.13px] rounded-[57.823px] size-[5.695px] top-[5.77px]" />;
}

function Frame222() {
  return <div className="absolute bg-[#738292] h-[2.628px] left-[1.31px] rounded-[0.438px] top-[14.46px] w-[25.407px]" />;
}

function Frame224() {
  return <div className="absolute bg-[#738292] h-[2.628px] left-[1.31px] rounded-[0.438px] top-[18.4px] w-[25.407px]" />;
}

function Frame217() {
  return <div className="absolute bg-[#738292] left-[2.19px] rounded-[57.823px] size-[5.695px] top-[2.63px]" />;
}

function Frame223() {
  return (
    <div className="absolute bg-[#5b6a79] h-[23.217px] left-[33.73px] overflow-clip rounded-[0.876px] top-[3.14px] w-[28.035px]">
      <Frame222 />
      <Frame224 />
      <Frame217 />
    </div>
  );
}

function Frame225() {
  return <div className="absolute bg-[#738292] h-[2.628px] left-[1.31px] rounded-[0.438px] top-[14.46px] w-[25.407px]" />;
}

function Frame226() {
  return <div className="absolute bg-[#738292] h-[2.628px] left-[1.31px] rounded-[0.438px] top-[18.4px] w-[25.407px]" />;
}

function Frame218() {
  return <div className="absolute bg-[#738292] left-[2.19px] rounded-[57.823px] size-[5.695px] top-[2.63px]" />;
}

function Frame212() {
  return (
    <div className="absolute bg-[#5b6a79] h-[23.217px] left-[63.52px] overflow-clip rounded-[0.876px] top-[3.14px] w-[28.035px]">
      <Frame225 />
      <Frame226 />
      <Frame218 />
    </div>
  );
}

function Frame227() {
  return <div className="absolute bg-[#738292] h-[2.628px] left-[1.31px] rounded-[0.438px] top-[14.46px] w-[25.407px]" />;
}

function Frame228() {
  return <div className="absolute bg-[#738292] h-[2.628px] left-[1.31px] rounded-[0.438px] top-[18.4px] w-[25.407px]" />;
}

function Frame219() {
  return <div className="absolute bg-[#738292] left-[2.19px] rounded-[57.823px] size-[5.695px] top-[2.63px]" />;
}

function Frame214() {
  return (
    <div className="absolute bg-[#5b6a79] h-[23.217px] left-[93.3px] overflow-clip rounded-[0.876px] top-[3.14px] w-[28.035px]">
      <Frame227 />
      <Frame228 />
      <Frame219 />
    </div>
  );
}

function Frame229() {
  return <div className="absolute bg-[#738292] h-[2.628px] left-[1.31px] rounded-[0.438px] top-[14.46px] w-[25.407px]" />;
}

function Frame230() {
  return <div className="absolute bg-[#738292] h-[2.628px] left-[1.31px] rounded-[0.438px] top-[18.4px] w-[25.407px]" />;
}

function Frame231() {
  return <div className="absolute bg-[#738292] left-[2.19px] rounded-[57.823px] size-[5.695px] top-[2.63px]" />;
}

function Frame209() {
  return (
    <div className="absolute bg-[#5b6a79] h-[23.217px] left-[3.94px] overflow-clip rounded-[0.876px] top-[29.43px] w-[28.035px]">
      <Frame229 />
      <Frame230 />
      <Frame231 />
    </div>
  );
}

function Frame232() {
  return <div className="absolute bg-[#738292] h-[2.628px] left-[1.31px] rounded-[0.438px] top-[14.46px] w-[25.407px]" />;
}

function Frame233() {
  return <div className="absolute bg-[#738292] h-[2.628px] left-[1.31px] rounded-[0.438px] top-[18.4px] w-[25.407px]" />;
}

function Frame234() {
  return <div className="absolute bg-[#738292] left-[2.19px] rounded-[57.823px] size-[5.695px] top-[2.63px]" />;
}

function Frame211() {
  return (
    <div className="absolute bg-[#5b6a79] h-[23.217px] left-[33.73px] overflow-clip rounded-[0.876px] top-[29.43px] w-[28.035px]">
      <Frame232 />
      <Frame233 />
      <Frame234 />
    </div>
  );
}

function Frame235() {
  return <div className="absolute bg-[#738292] h-[2.628px] left-[1.31px] rounded-[0.438px] top-[14.46px] w-[25.407px]" />;
}

function Frame236() {
  return <div className="absolute bg-[#738292] h-[2.628px] left-[1.31px] rounded-[0.438px] top-[18.4px] w-[25.407px]" />;
}

function Frame237() {
  return <div className="absolute bg-[#738292] left-[2.19px] rounded-[57.823px] size-[5.695px] top-[2.63px]" />;
}

function Frame213() {
  return (
    <div className="absolute bg-[#5b6a79] h-[23.217px] left-[63.52px] overflow-clip rounded-[0.876px] top-[29.43px] w-[28.035px]">
      <Frame235 />
      <Frame236 />
      <Frame237 />
    </div>
  );
}

function Frame238() {
  return <div className="absolute bg-[#738292] h-[2.628px] left-[1.31px] rounded-[0.438px] top-[14.46px] w-[25.407px]" />;
}

function Frame240() {
  return <div className="absolute bg-[#738292] h-[2.628px] left-[1.31px] rounded-[0.438px] top-[18.4px] w-[25.407px]" />;
}

function Frame241() {
  return <div className="absolute bg-[#738292] left-[2.19px] rounded-[57.823px] size-[5.695px] top-[2.63px]" />;
}

function Frame215() {
  return (
    <div className="absolute bg-[#5b6a79] h-[23.217px] left-[93.3px] overflow-clip rounded-[0.876px] top-[29.43px] w-[28.035px]">
      <Frame238 />
      <Frame240 />
      <Frame241 />
    </div>
  );
}

function Frame207() {
  return (
    <div className="bg-[#404d5a] h-[55.912px] relative rounded-[2.137px] shrink-0 w-[125px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame208 />
        <Frame221 />
        <Frame220 />
        <Frame216 />
        <Frame223 />
        <Frame212 />
        <Frame214 />
        <Frame209 />
        <Frame211 />
        <Frame213 />
        <Frame215 />
      </div>
      <div aria-hidden="true" className="absolute border-[#ebeced] border-[0.4px] border-solid inset-0 pointer-events-none rounded-[2.137px]" />
    </div>
  );
}

function Frame239() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <Frame243 />
      <Frame207 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 size-[6px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g id="Frame 14">
          <rect fill="var(--fill-0, white)" fillOpacity="0.95" height="6" rx="3" width="6" />
          <circle cx="3" cy="3" fill="var(--fill-0, #32404F)" id="Ellipse 2" r="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame245() {
  return (
    <div className="content-stretch flex items-center pt-[2px] relative shrink-0">
      <Frame13 />
    </div>
  );
}

function Frame247() {
  return <div className="absolute bg-[#738292] h-[12.513px] left-[-1.05px] rounded-[0.438px] top-[-0.25px] w-[29.84px]" />;
}

function Frame248() {
  return <div className="absolute bg-[#738292] h-[2.628px] left-[1.26px] rounded-[0.438px] top-[18.4px] w-[25.407px]" />;
}

function Frame246() {
  return (
    <div className="absolute bg-[#5b6a79] h-[23.217px] left-[3.94px] overflow-clip rounded-[0.876px] top-[3.14px] w-[28.035px]">
      <Frame247 />
      <Frame248 />
    </div>
  );
}

function Frame263() {
  return <div className="absolute bg-[#738292] h-[12.513px] left-[-1.05px] rounded-[0.438px] top-[-0.25px] w-[29.84px]" />;
}

function Frame272() {
  return <div className="absolute bg-[#738292] h-[2.628px] left-[1.26px] rounded-[0.438px] top-[18.4px] w-[25.407px]" />;
}

function Frame249() {
  return (
    <div className="absolute bg-[#5b6a79] h-[23.217px] left-[33.73px] overflow-clip rounded-[0.876px] top-[3.14px] w-[28.035px]">
      <Frame263 />
      <Frame272 />
    </div>
  );
}

function Frame274() {
  return <div className="absolute bg-[#738292] h-[12.513px] left-[-1.05px] rounded-[0.438px] top-[-0.25px] w-[29.84px]" />;
}

function Frame275() {
  return <div className="absolute bg-[#738292] h-[2.628px] left-[1.26px] rounded-[0.438px] top-[18.4px] w-[25.407px]" />;
}

function Frame273() {
  return (
    <div className="absolute bg-[#5b6a79] h-[23.217px] left-[63.52px] overflow-clip rounded-[0.876px] top-[3.14px] w-[28.035px]">
      <Frame274 />
      <Frame275 />
    </div>
  );
}

function Frame277() {
  return <div className="absolute bg-[#738292] h-[12.513px] left-[-1.05px] rounded-[0.438px] top-[-0.25px] w-[29.84px]" />;
}

function Frame278() {
  return <div className="absolute bg-[#738292] h-[2.628px] left-[1.26px] rounded-[0.438px] top-[18.4px] w-[25.407px]" />;
}

function Frame276() {
  return (
    <div className="absolute bg-[#5b6a79] h-[23.217px] left-[93.3px] overflow-clip rounded-[0.876px] top-[3.14px] w-[28.035px]">
      <Frame277 />
      <Frame278 />
    </div>
  );
}

function Frame280() {
  return <div className="absolute bg-[#738292] h-[12.513px] left-[-1.05px] rounded-[0.438px] top-[-0.25px] w-[29.84px]" />;
}

function Frame281() {
  return <div className="absolute bg-[#738292] h-[2.628px] left-[1.26px] rounded-[0.438px] top-[18.4px] w-[25.407px]" />;
}

function Frame279() {
  return (
    <div className="absolute bg-[#5b6a79] h-[23.217px] left-[3.94px] overflow-clip rounded-[0.876px] top-[29.43px] w-[28.035px]">
      <Frame280 />
      <Frame281 />
    </div>
  );
}

function Frame283() {
  return <div className="absolute bg-[#738292] h-[12.513px] left-[-1.05px] rounded-[0.438px] top-[-0.25px] w-[29.84px]" />;
}

function Frame284() {
  return <div className="absolute bg-[#738292] h-[2.628px] left-[1.26px] rounded-[0.438px] top-[18.4px] w-[25.407px]" />;
}

function Frame282() {
  return (
    <div className="absolute bg-[#5b6a79] h-[23.217px] left-[33.73px] overflow-clip rounded-[0.876px] top-[29.43px] w-[28.035px]">
      <Frame283 />
      <Frame284 />
    </div>
  );
}

function Frame286() {
  return <div className="absolute bg-[#738292] h-[12.513px] left-[-1.05px] rounded-[0.438px] top-[-0.25px] w-[29.84px]" />;
}

function Frame287() {
  return <div className="absolute bg-[#738292] h-[2.628px] left-[1.26px] rounded-[0.438px] top-[18.4px] w-[25.407px]" />;
}

function Frame285() {
  return (
    <div className="absolute bg-[#5b6a79] h-[23.217px] left-[63.52px] overflow-clip rounded-[0.876px] top-[29.43px] w-[28.035px]">
      <Frame286 />
      <Frame287 />
    </div>
  );
}

function Frame289() {
  return <div className="absolute bg-[#738292] h-[12.513px] left-[-1.05px] rounded-[0.438px] top-[-0.25px] w-[29.84px]" />;
}

function Frame290() {
  return <div className="absolute bg-[#738292] h-[2.628px] left-[1.26px] rounded-[0.438px] top-[18.4px] w-[25.407px]" />;
}

function Frame288() {
  return (
    <div className="absolute bg-[#5b6a79] h-[23.217px] left-[93.3px] overflow-clip rounded-[0.876px] top-[29.43px] w-[28.035px]">
      <Frame289 />
      <Frame290 />
    </div>
  );
}

function Frame210() {
  return (
    <div className="bg-[#404d5a] h-[55.912px] overflow-clip relative rounded-[2.137px] shrink-0 w-[125px]">
      <Frame246 />
      <Frame249 />
      <Frame273 />
      <Frame276 />
      <Frame279 />
      <Frame282 />
      <Frame285 />
      <Frame288 />
    </div>
  );
}

function Frame244() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <Frame245 />
      <Frame210 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 size-[6px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g id="Frame 14">
          <rect fill="var(--fill-0, white)" fillOpacity="0.95" height="6" rx="3" width="6" />
          <circle cx="3" cy="3" fill="var(--fill-0, #32404F)" id="Ellipse 2" r="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame292() {
  return (
    <div className="content-stretch flex items-center pt-[2px] relative shrink-0">
      <Frame14 />
    </div>
  );
}

function Frame295() {
  return <div className="absolute bg-[#738292] h-[2.888px] left-[1.83px] rounded-[0.438px] top-[2.63px] w-[8.663px]" />;
}

function Frame296() {
  return <div className="absolute bg-[#738292] h-[2.888px] left-[1.83px] rounded-[0.438px] top-[6.48px] w-[24.064px]" />;
}

function Frame294() {
  return (
    <div className="absolute bg-[#5b6a79] h-[23.217px] left-[3.94px] overflow-clip rounded-[0.876px] top-[3.14px] w-[28.035px]">
      <Frame295 />
      <Frame296 />
    </div>
  );
}

function Frame298() {
  return <div className="absolute bg-[#738292] h-[2.888px] left-[1.83px] rounded-[0.438px] top-[2.63px] w-[8.663px]" />;
}

function Frame299() {
  return <div className="absolute bg-[#738292] h-[2.888px] left-[1.83px] rounded-[0.438px] top-[6.48px] w-[24.064px]" />;
}

function Frame297() {
  return (
    <div className="absolute bg-[#5b6a79] h-[23.217px] left-[33.73px] overflow-clip rounded-[0.876px] top-[3.14px] w-[28.035px]">
      <Frame298 />
      <Frame299 />
    </div>
  );
}

function Frame301() {
  return <div className="absolute bg-[#738292] h-[2.888px] left-[1.83px] rounded-[0.438px] top-[2.63px] w-[8.663px]" />;
}

function Frame302() {
  return <div className="absolute bg-[#738292] h-[2.888px] left-[1.83px] rounded-[0.438px] top-[6.48px] w-[24.064px]" />;
}

function Frame300() {
  return (
    <div className="absolute bg-[#5b6a79] h-[23.217px] left-[63.52px] overflow-clip rounded-[0.876px] top-[3.14px] w-[28.035px]">
      <Frame301 />
      <Frame302 />
    </div>
  );
}

function Frame304() {
  return <div className="absolute bg-[#738292] h-[2.888px] left-[1.83px] rounded-[0.438px] top-[2.63px] w-[8.663px]" />;
}

function Frame305() {
  return <div className="absolute bg-[#738292] h-[2.888px] left-[1.83px] rounded-[0.438px] top-[6.48px] w-[24.064px]" />;
}

function Frame303() {
  return (
    <div className="absolute bg-[#5b6a79] h-[23.217px] left-[93.3px] overflow-clip rounded-[0.876px] top-[3.14px] w-[28.035px]">
      <Frame304 />
      <Frame305 />
    </div>
  );
}

function Frame307() {
  return <div className="absolute bg-[#738292] h-[2.888px] left-[1.83px] rounded-[0.438px] top-[2.63px] w-[8.663px]" />;
}

function Frame308() {
  return <div className="absolute bg-[#738292] h-[2.888px] left-[1.83px] rounded-[0.438px] top-[6.48px] w-[24.064px]" />;
}

function Frame306() {
  return (
    <div className="absolute bg-[#5b6a79] h-[23.217px] left-[3.94px] overflow-clip rounded-[0.876px] top-[29.43px] w-[28.035px]">
      <Frame307 />
      <Frame308 />
    </div>
  );
}

function Frame310() {
  return <div className="absolute bg-[#738292] h-[2.888px] left-[1.83px] rounded-[0.438px] top-[2.63px] w-[8.663px]" />;
}

function Frame311() {
  return <div className="absolute bg-[#738292] h-[2.888px] left-[1.83px] rounded-[0.438px] top-[6.48px] w-[24.064px]" />;
}

function Frame309() {
  return (
    <div className="absolute bg-[#5b6a79] h-[23.217px] left-[33.73px] overflow-clip rounded-[0.876px] top-[29.43px] w-[28.035px]">
      <Frame310 />
      <Frame311 />
    </div>
  );
}

function Frame313() {
  return <div className="absolute bg-[#738292] h-[2.888px] left-[1.83px] rounded-[0.438px] top-[2.63px] w-[8.663px]" />;
}

function Frame314() {
  return <div className="absolute bg-[#738292] h-[2.888px] left-[1.83px] rounded-[0.438px] top-[6.48px] w-[24.064px]" />;
}

function Frame312() {
  return (
    <div className="absolute bg-[#5b6a79] h-[23.217px] left-[63.52px] overflow-clip rounded-[0.876px] top-[29.43px] w-[28.035px]">
      <Frame313 />
      <Frame314 />
    </div>
  );
}

function Frame316() {
  return <div className="absolute bg-[#738292] h-[2.888px] left-[1.83px] rounded-[0.438px] top-[2.63px] w-[8.663px]" />;
}

function Frame317() {
  return <div className="absolute bg-[#738292] h-[2.888px] left-[1.83px] rounded-[0.438px] top-[6.48px] w-[24.064px]" />;
}

function Frame315() {
  return (
    <div className="absolute bg-[#5b6a79] h-[23.217px] left-[93.3px] overflow-clip rounded-[0.876px] top-[29.43px] w-[28.035px]">
      <Frame316 />
      <Frame317 />
    </div>
  );
}

function Frame293() {
  return (
    <div className="bg-[#404d5a] h-[55.912px] overflow-clip relative rounded-[2.137px] shrink-0 w-[125px]">
      <Frame294 />
      <Frame297 />
      <Frame300 />
      <Frame303 />
      <Frame306 />
      <Frame309 />
      <Frame312 />
      <Frame315 />
    </div>
  );
}

function Frame291() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <Frame292 />
      <Frame293 />
    </div>
  );
}

function Frame242() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[5px] items-start left-1/2 top-[23px]">
      <Frame239 />
      <Frame244 />
      <Frame291 />
    </div>
  );
}

function Frame206() {
  return (
    <div className="absolute bg-[#32404f] h-[184.766px] left-[570px] overflow-clip rounded-tl-[2.96px] rounded-tr-[2.96px] top-[68px] w-[146.994px]">
      <Group35 />
      <Frame242 />
    </div>
  );
}

function Frame204() {
  return <div className="absolute bg-[#404d5a] h-[51.426px] left-[8.65px] rounded-[2.22px] top-[19.75px] w-[129.861px]" />;
}

function Frame205() {
  return <div className="absolute bg-[#404d5a] h-[34.778px] left-[8.65px] rounded-[2.22px] top-[77.09px] w-[129.861px]" />;
}

function Frame318() {
  return <div className="absolute bg-[#404d5a] h-[58.086px] left-[8.65px] rounded-[2.22px] top-[117.79px] w-[129.861px]" />;
}

function Group36() {
  return (
    <div className="absolute h-[4.551px] left-[115.53px] top-[9.1px] w-[22.755px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.755 4.55113">
        <g id="Group 481888">
          <circle cx="2.27544" cy="2.27556" fill="var(--fill-0, #EBECED)" id="Ellipse 2" r="2.27544" />
          <circle cx="11.377" cy="2.27544" fill="var(--fill-0, #EBECED)" id="Ellipse 3" r="2.27544" />
          <circle cx="20.4795" cy="2.27544" fill="var(--fill-0, #EBECED)" id="Ellipse 4" r="2.27544" />
        </g>
      </svg>
    </div>
  );
}

function Frame203() {
  return (
    <div className="absolute bg-[#32404f] h-[184.766px] left-[56.39px] overflow-clip rounded-tl-[2.96px] rounded-tr-[2.96px] top-[68px] w-[146.994px]">
      <Frame204 />
      <Frame205 />
      <Frame318 />
      <Group36 />
    </div>
  );
}

function Frame320() {
  return <div className="absolute bg-[#404d5a] h-[51.426px] left-[8.65px] rounded-[2.22px] top-[19.75px] w-[129.861px]" />;
}

function Frame321() {
  return <div className="absolute bg-[#5b6a79] h-[12.742px] left-[11.83px] rounded-[0.91px] top-[54.16px] w-[123.329px]" />;
}

function Frame323() {
  return <div className="absolute bg-[#5b6a79] h-[25.94px] left-[3.19px] rounded-[0.91px] top-[4.82px] w-[26.395px]" />;
}

function Frame324() {
  return <div className="absolute bg-[#5b6a79] h-[25.94px] left-[89.65px] rounded-[0.91px] top-[4.82px] w-[35.952px]" />;
}

function Frame325() {
  return <div className="absolute bg-[#5b6a79] h-[12.742px] left-[31.4px] rounded-[0.91px] top-[4.82px] w-[26.395px]" />;
}

function Frame326() {
  return <div className="absolute bg-[#5b6a79] h-[25.94px] left-[59.62px] rounded-[0.91px] top-[4.82px] w-[13.198px]" />;
}

function Frame327() {
  return <div className="absolute bg-[#5b6a79] h-[25.94px] left-[74.63px] rounded-[0.91px] top-[4.82px] w-[13.198px]" />;
}

function Frame328() {
  return <div className="absolute bg-[#5b6a79] h-[11.377px] left-[31.4px] rounded-[0.91px] top-[19.39px] w-[26.395px]" />;
}

function Frame322() {
  return (
    <div className="absolute bg-[#404d5a] h-[34.778px] left-[8.65px] overflow-clip rounded-[2.22px] top-[77.09px] w-[129.861px]">
      <Frame323 />
      <Frame324 />
      <Frame325 />
      <Frame326 />
      <Frame327 />
      <Frame328 />
    </div>
  );
}

function Frame330() {
  return <div className="absolute bg-[#5b6a79] h-[24.12px] left-[4.1px] rounded-[0.91px] top-[3.26px] w-[29.126px]" />;
}

function Frame331() {
  return <div className="absolute bg-[#5b6a79] h-[24.12px] left-[35.04px] rounded-[0.91px] top-[3.26px] w-[29.126px]" />;
}

function Frame332() {
  return <div className="absolute bg-[#5b6a79] h-[24.12px] left-[65.99px] rounded-[0.91px] top-[3.26px] w-[29.126px]" />;
}

function Frame333() {
  return <div className="absolute bg-[#5b6a79] h-[24.12px] left-[96.93px] rounded-[0.91px] top-[3.26px] w-[29.126px]" />;
}

function Frame334() {
  return <div className="absolute bg-[#5b6a79] h-[24.12px] left-[4.1px] rounded-[0.91px] top-[30.57px] w-[29.126px]" />;
}

function Frame335() {
  return <div className="absolute bg-[#5b6a79] h-[24.12px] left-[35.04px] rounded-[0.91px] top-[30.57px] w-[29.126px]" />;
}

function Frame336() {
  return <div className="absolute bg-[#5b6a79] h-[24.12px] left-[65.99px] rounded-[0.91px] top-[30.57px] w-[29.126px]" />;
}

function Frame337() {
  return <div className="absolute bg-[#5b6a79] h-[24.12px] left-[96.93px] rounded-[0.91px] top-[30.57px] w-[29.126px]" />;
}

function Frame329() {
  return (
    <div className="absolute bg-[#404d5a] h-[58.086px] left-[8.65px] overflow-clip rounded-[2.22px] top-[117.79px] w-[129.861px]">
      <Frame330 />
      <Frame331 />
      <Frame332 />
      <Frame333 />
      <Frame334 />
      <Frame335 />
      <Frame336 />
      <Frame337 />
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute h-[4.551px] left-[115.53px] top-[9.1px] w-[22.754px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.754 4.551">
        <g id="Group 481888">
          <circle cx="2.27544" cy="2.2755" fill="var(--fill-0, #EBECED)" id="Ellipse 2" r="2.27544" />
          <circle cx="11.3771" cy="2.27544" fill="var(--fill-0, #EBECED)" id="Ellipse 3" r="2.27544" />
          <circle cx="20.4786" cy="2.2755" fill="var(--fill-0, #EBECED)" id="Ellipse 4" r="2.27544" />
        </g>
      </svg>
    </div>
  );
}

function Frame319() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#32404f] h-[184.766px] left-[calc(50%+0.5px)] overflow-clip rounded-tl-[2.96px] rounded-tr-[2.96px] top-[calc(50%-12.62px)] w-[146.994px]">
      <Frame320 />
      <Frame321 />
      <Frame322 />
      <Frame329 />
      <Group37 />
    </div>
  );
}

function SectionImage1() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-full" data-name="Section Image">
      <div className="overflow-clip relative rounded-[inherit] w-full">
        <img loading="lazy" decoding="async" alt="" className="block w-full h-auto object-contain" src={imgDesignDirection} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ContentSections7() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[16px] items-start max-w-[774px] relative row-[14] self-start shrink-0 w-full" data-name="Content Sections">
      <SectionContainer10 />
      <SectionImage1 />
    </div>
  );
}

function SectionContainer() {
  return (
    <div className="gap-[110px] sm:gap-[170px] grid-cols-1 grid-rows-[repeat(17,_fit-content(100%))] grid max-w-[774px] pb-[48px] relative shrink-0 w-full" data-name="Section Container">
      <Property />
      <ContentSections />
      <Property1 />
      <Property2 />
      <Property3 />
      <div className="bg-[rgba(50,64,79,0.1)] col-[1] h-px justify-self-stretch row-[11] shrink-0" data-name="Horizontal Divider" />
      <div className="bg-[rgba(50,64,79,0.1)] col-[1] h-px justify-self-stretch row-[16] shrink-0" data-name="Horizontal Divider" />
      <Property4 />
      <Property5 />
      <ContentContainer1 />
      <ContentSections3 />
      <ContentSections4 />
      <Property11 />
      <ContentSections5 />
      <Property12 />
      <ContentSections6 />
      <ContentSections7 />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Content Container">
      <SectionContainer />
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex gap-[32px] items-start max-w-[774px] relative shrink-0 w-full" data-name="Main Content">
      <ContentContainer />
    </div>
  );
}


function NextProjectNudge() {
  const [visible, setVisible] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Sentinel — placed at the end of main content to trigger the nudge */}
      <div ref={sentinelRef} className="w-full h-px shrink-0" aria-hidden="true" />

      {/* Floating nudge bar */}
      <RouterLink
        to="/global-reward-storefront"
        className={`fixed bottom-[32px] left-1/2 -translate-x-1/2 z-[100] flex items-center gap-[20px] bg-white rounded-full shadow-[0_2px_24px_rgba(0,0,0,0.10)] px-[8px] py-[8px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? "translate-y-0 opacity-100" : "translate-y-[24px] opacity-0 pointer-events-none"}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="flex items-center gap-[14px] pl-[16px]">
          <div className="size-[40px] rounded-full bg-[#1e242a] shrink-0" />
          <div className="flex flex-col">
            <span className="font-geist-mono text-[11px] text-[rgba(50,64,79,0.4)] uppercase tracking-[1.5px] leading-[16px]">
              Next case
            </span>
            <span className="font-newsreader text-[16px] text-[#1e242a] tracking-[-0.3px] leading-[22px] whitespace-nowrap">
              Global Reward Storefront
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center bg-[#1e242a] text-white font-geist-mono text-[12px] uppercase tracking-[0.5px] rounded-full px-[20px] py-[10px] whitespace-nowrap hover:bg-[#32404f] transition-colors duration-200">
          Read the case
        </div>
      </RouterLink>
    </>
  );
}

export default function EngagementPlatform() {
  return (
    <div className="bg-[#fbfdfd] min-h-screen content-stretch flex flex-col items-center pt-[96px] sm:pt-[110px] px-[20px] relative w-full" data-name="Engagement Platform">
      <MainContent />
      {/* <NextProjectNudge /> */}
      <Footer maxWidthClass="max-w-[774px]" emailVariant="text" paddingXClass="px-[20px] sm:px-0" />
      <NavBar />
    </div>
  );
}
