import svgPaths from "./svg-81bzjcs43u";
import imgProfileContainer from "../assets/About/Profile Container.png";
import { Link as RouterLink } from "react-router";
import Footer from "../app/components/Footer";
import NavBar from "../app/components/NavBar";
import resumePdf from "../assets/About/Sue Hwang - Resume.pdf";

function StatusIndicator() {
  return (
    <div className="relative size-[28.552px]" data-name="Status Indicator">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.5523 28.5525">
        <g id="Status Indicator">
          <ellipse cx="14.2762" cy="14.2762" fill="var(--fill-0, #FFFF00)" id="Ellipse 5955" rx="14.2762" ry="14.2762" />
          <g id="Union">
            <path d={svgPaths.p3b84dc00} fill="var(--fill-0, #272727)" />
            <path d={svgPaths.p541c180} fill="var(--fill-0, #272727)" />
            <path d={svgPaths.p1d409c00} fill="var(--fill-0, #272727)" />
            <path d={svgPaths.p34688580} fill="var(--fill-0, #272727)" />
            <path d={svgPaths.p3bd62140} fill="var(--fill-0, #272727)" />
            <path d={svgPaths.p3ad3b400} fill="var(--fill-0, #272727)" />
            <path d={svgPaths.p2b984540} fill="var(--fill-0, #272727)" />
            <path d={svgPaths.p3c2cf840} fill="var(--fill-0, #272727)" />
            <path d={svgPaths.p220c8980} fill="var(--fill-0, #272727)" />
            <path d={svgPaths.p1d505a00} fill="var(--fill-0, #272727)" />
            <path d={svgPaths.p1e9e2730} fill="var(--fill-0, #272727)" />
            <path d={svgPaths.p1b470980} fill="var(--fill-0, #272727)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ProfileContainer() {
  return (
    <div className="relative shrink-0" data-name="Profile Container">
      <img loading="lazy" decoding="async" alt="Sue Hwang" className="w-[300px] h-auto" src={imgProfileContainer} />
    </div>
  );
}

function ProfileDescriptionContainer() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[16px] items-start relative shrink-0 w-full" data-name="Profile Description Container">
      <div className="flex flex-col font-newsreader justify-center leading-[0] relative shrink-0 text-[#32404f] text-[28px] sm:text-[39px] tracking-[-1.04px] w-full">
        <p className="leading-[34px] sm:leading-[44px] whitespace-pre-wrap">Sue is a Product Designer</p>
      </div>
      <div className="flex flex-col font-geist justify-center leading-[26px] relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.15px] w-full">
        <p className="mb-[16px]">with 3+ years designing enterprise B2B SaaS products at scale. At CarltonOne, I owned end-to-end design across a rewards and recognition platform serving 500+ enterprise clients — from discovery and IA through system design and launch, across multiple product lines and user roles.</p>
        <p>I work best on hard, ambiguous problems: where the brief is vague, the constraints are real, and someone needs to move before next week. I bring clarity — through structured thinking, fast prototyping, and a bias toward getting something testable in front of people as early as possible.</p>
      </div>
    </div>
  );
}

function LinkedInSvgContainer() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="LinkedIn SVG Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_755)" id="LinkedIn SVG">
          <path d={svgPaths.p1db92700} fill="var(--fill-0, #1A1A1A)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2_755">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LinkedInIcon() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[2px] size-[20px] top-[2px]" data-name="LinkedIn Icon">
      <LinkedInSvgContainer />
    </div>
  );
}

function LinkedInIconContainer() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="LinkedIn Icon Container">
      <LinkedInIcon />
    </div>
  );
}

function LinkedInLink() {
  return (
    <a href="https://www.linkedin.com/in/sue-product-dsgn/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="relative shrink-0 size-[24px] block">
      <LinkedInIconContainer />
    </a>
  );
}

function GitHubSvgContainer() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="GitHub SVG Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_752)" id="GitHub SVG">
          <path d={svgPaths.p3175e00} fill="var(--fill-0, #1A1A1A)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2_752">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function GitHubIcon() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[2px] size-[20px] top-[2px]" data-name="GitHub Icon">
      <GitHubSvgContainer />
    </div>
  );
}

function GitHubIconContainer() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="GitHub Icon Container">
      <GitHubIcon />
    </div>
  );
}

function GitHubLink() {
  return (
    <a href="https://github.com/soobinhwang" target="_blank" rel="noreferrer" aria-label="GitHub" className="relative shrink-0 size-[24px] block">
      <GitHubIconContainer />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Social Links">
      <LinkedInLink />
      <GitHubLink />
    </div>
  );
}

function SocialLinksContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Social Links Container">
      <SocialLinks />
    </div>
  );
}

function ContentColumn() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Content Column">
      <ProfileDescriptionContainer />
      <div className="flex flex-row gap-[12px] items-center">
        <a
          href="https://cal.com/sue-hwang-dwcdjs"
          target="_blank"
          rel="noreferrer"
          className="bg-[#1e242a] hover:bg-[#2a3138] transition-colors duration-200 flex gap-[8px] items-center justify-center px-[16px] py-[8px] rounded-[24px]"
        >
          <span className="font-geist-mono font-medium text-white text-[13px] tracking-[-0.3px] uppercase leading-[20px] whitespace-nowrap">Let's Chat</span>
        </a>
        <a
          href="https://www.linkedin.com/in/sue-product-dsgn/"
          target="_blank"
          rel="noreferrer"
          className="bg-[#f0f3f5] hover:bg-[#e8ecf0] transition-colors duration-200 flex gap-[8px] items-center justify-center px-[16px] py-[8px] rounded-[24px]"
        >
          <span className="font-geist-mono font-medium text-[#1e242a] text-[13px] tracking-[-0.3px] uppercase leading-[20px] whitespace-nowrap">LinkedIn</span>
        </a>
      </div>
    </div>
  );
}

function MainContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-center relative shrink-0 w-full" data-name="Main Container">
      <ProfileContainer />
      <ContentColumn />
    </div>
  );
}

function DownloadResumeHeading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Download Resume Heading">
      <div className="flex flex-col font-geist-mono font-medium justify-center leading-[0] relative shrink-0 text-white text-[15px] text-center tracking-[-0.3px] whitespace-nowrap uppercase">
        <p className="leading-[24px]">Download Resume</p>
      </div>
    </div>
  );
}

function DownloadResumeTextContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Download Resume Text Container">
      <DownloadResumeHeading />
    </div>
  );
}

function ArrowDown({ className, strokeColor = "#1E242A" }: { className?: string; strokeColor?: string }) {
  return (
    <div className={className || "overflow-clip relative shrink-0 size-[20px]"} data-name="arrow-down">
      <div className="absolute inset-[20.83%]" data-name="Icon">
        <div className="absolute inset-[-8.57%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6667 13.6667">
            <path d={svgPaths.p2e1b3c60} id="Icon" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DownloadResumeContainer() {
  return (
    <div className="bg-[#1e242a] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[12px] relative rounded-[24px] shrink-0 transition-colors duration-200 group-hover:bg-[#2a3138]" data-name="Download Resume Container">
      <DownloadResumeTextContainer />
      <ArrowDown className="overflow-clip relative shrink-0 size-[18px]" strokeColor="#FFFFFF" />
    </div>
  );
}

function DownloadResumeLink() {
  return (
    <a
      className="content-stretch flex items-center justify-center relative shrink-0 group"
      data-name="Download Resume Link"
      href={resumePdf}
      download
      aria-label="Download resume"
    >
      <DownloadResumeContainer />
    </a>
  );
}

function ExperienceHeaderContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start sm:flex-row sm:items-center sm:justify-between relative shrink-0 w-full" data-name="Experience Header Container">
      <div className="flex flex-col font-geist-mono font-normal justify-center leading-[0] relative shrink-0 text-[#32404f] text-[20px] tracking-[-1.04px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">experience</p>
      </div>
      <DownloadResumeLink />
    </div>
  );
}

function MentorshipEventContainer() {
  return (
    <div className="content-stretch flex flex-col font-geist font-normal gap-[2px] sm:gap-[4px] items-start sm:items-end relative shrink-0 text-[13px] sm:text-[14px] text-[rgba(50,64,79,0.58)] w-full sm:w-auto" data-name="Mentorship Event Container">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px] sm:whitespace-nowrap">KOTRA Job Fair</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px] sm:whitespace-nowrap">Oct 2025</p>
      </div>
    </div>
  );
}

function MentorshipContent() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] items-start gap-[6px] sm:gap-[12px] relative shrink-0 w-full" data-name="Mentorship Content">
      <div className="flex flex-col font-geist font-medium justify-center relative text-[#32404f] text-[16px]">
        <p className="leading-[24px]">Career Mentor</p>
      </div>
      <MentorshipEventContainer />
    </div>
  );
}

function MentorshipEventContainer1() {
  return (
    <div className="content-stretch flex flex-col font-geist font-normal gap-[2px] sm:gap-[4px] items-start sm:items-end relative shrink-0 text-[13px] sm:text-[14px] text-[rgba(50,64,79,0.58)] w-full sm:w-auto" data-name="Mentorship Event Container">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px] sm:whitespace-nowrap">KOTRA Job Fair</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px] sm:whitespace-nowrap">Sep 2022</p>
      </div>
    </div>
  );
}

function MentorshipContent1() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] items-start gap-[6px] sm:gap-[12px] relative shrink-0 w-full" data-name="Mentorship Content">
      <div className="flex flex-col font-geist font-medium justify-center relative text-[#32404f] text-[16px]">
        <p className="leading-[24px]">Career Mentor</p>
      </div>
      <MentorshipEventContainer1 />
    </div>
  );
}

function MentorshipEventContainer2() {
  return (
    <div className="content-stretch flex flex-col font-geist font-normal gap-[2px] sm:gap-[4px] items-start sm:items-end relative shrink-0 text-[13px] sm:text-[14px] text-[rgba(50,64,79,0.58)] w-full sm:w-auto" data-name="Mentorship Event Container">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px] sm:whitespace-nowrap">Euonia UX Hackathon</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px] sm:whitespace-nowrap">May 2022</p>
      </div>
    </div>
  );
}

function MentorshipContent2() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] items-start gap-[6px] sm:gap-[12px] relative shrink-0 w-full" data-name="Mentorship Content">
      <div className="flex flex-col font-geist font-medium justify-center relative text-[#32404f] text-[16px]">
        <p className="leading-[24px]">Hackathon Mentor</p>
      </div>
      <MentorshipEventContainer2 />
    </div>
  );
}

function MentorshipContentContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center leading-[0] relative shrink-0 tracking-[-0.25px] w-full" data-name="Mentorship Content Container">
      <MentorshipContent />
      <MentorshipContent1 />
      <MentorshipContent2 />
    </div>
  );
}

function MentorshipLine() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start pb-[48px] relative shrink-0 w-full" data-name="Mentorship Line">
      <div className="flex flex-col font-geist-mono font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.15px] w-[142px]">
        <p className="leading-[24px] whitespace-pre-wrap">MENTORSHIP</p>
      </div>
      <MentorshipContentContainer />
      <div aria-hidden="true" className="absolute border-[#ebeced] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ArrowNarrowUpRight({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative shrink-0 size-[14px]"} data-name="arrow-narrow-up-right">
      <div className="absolute inset-1/4" data-name="Icon">
        <div className="absolute inset-[-8.93%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25 8.25">
            <path d={svgPaths.p242ade80} id="Icon" stroke="var(--stroke-0, #32404F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.584" strokeWidth="1.25" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AwardsProjectContainer() {
  return (
    <a
      className="content-stretch flex flex-wrap gap-[4px] items-center relative shrink-0"
      data-name="Awards Project Container"
      href="https://www.figma.com/proto/yRLaj3vpnll9xki7lNnMp2/Prototype?page-id=&node-id=28-1605&starting-point-node-id=28%3A1605"
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex flex-col font-geist font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(50,64,79,0.58)] tracking-[-0.25px]">
        <p className="leading-[24px] underline-offset-2 hover:underline">Metaverse Therapeutic Web App</p>
      </div>
      <ArrowNarrowUpRight />
    </a>
  );
}

function AwardsEventContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Awards Event Container">
      <div className="flex flex-col font-geist font-medium justify-center leading-[0] relative shrink-0 text-[#32404f] text-[16px] tracking-[-0.25px] whitespace-nowrap">
        <p className="leading-[24px]">1st Place</p>
      </div>
      <AwardsProjectContainer />
    </div>
  );
}

function AwardsEventContainer1() {
  return (
    <div className="content-stretch flex flex-col font-geist font-normal gap-[2px] sm:gap-[4px] items-start sm:items-end leading-[0] relative shrink-0 text-[13px] sm:text-[14px] text-[rgba(50,64,79,0.58)] tracking-[-0.25px] w-full sm:w-auto" data-name="Awards Event Container">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px] sm:whitespace-nowrap">Bizhacks</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px] sm:whitespace-nowrap">May 2022</p>
      </div>
    </div>
  );
}

function AwardsContent() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] items-start gap-[6px] sm:gap-[12px] relative shrink-0 w-full" data-name="Awards Content">
      <AwardsEventContainer />
      <AwardsEventContainer1 />
    </div>
  );
}

function AwardsProjectIcon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Awards Project Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Awards Project Icon">
          <path d={svgPaths.p188b5880} id="Icon" stroke="var(--stroke-0, #32404F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.584" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function AwardsProjectContainer1() {
  return (
    <a
      className="content-stretch flex flex-wrap gap-[4px] items-center relative shrink-0"
      data-name="Awards Project Container"
      href="https://xd.adobe.com/view/598ea877-14df-4db4-b859-6ade634b6b45-0cdd/"
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex flex-col font-geist font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(50,64,79,0.58)] tracking-[-0.25px]">
        <p className="leading-[24px] underline-offset-2 hover:underline">Ethical Shopping App</p>
      </div>
      <AwardsProjectIcon />
    </a>
  );
}

function AwardsEventContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Awards Event Container">
      <div className="flex flex-col font-geist font-medium justify-center leading-[0] relative shrink-0 text-[#32404f] text-[16px] tracking-[-0.25px] whitespace-nowrap">
        <p className="leading-[24px]">2nd Place</p>
      </div>
      <AwardsProjectContainer1 />
    </div>
  );
}

function AwardsEventContainer3() {
  return (
    <div className="content-stretch flex flex-col font-geist font-normal gap-[2px] sm:gap-[4px] items-start sm:items-end leading-[0] relative shrink-0 text-[rgba(50,64,79,0.58)] tracking-[-0.25px] w-full sm:w-auto" data-name="Awards Event Container">
      <div className="flex flex-col justify-center relative shrink-0 text-[0px]">
        <p className="text-[13px] sm:text-[14px]">
          <span className="leading-[24px]">{`Patagonia `}</span>
          <span className="font-geist font-extralight leading-[24px]">X</span>
          <span className="leading-[24px]">{` Adobe`}</span>
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[13px] sm:text-[14px]">
        <p className="leading-[24px] sm:whitespace-nowrap">May 2022</p>
      </div>
    </div>
  );
}

function AwardsContent1() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] items-start gap-[6px] sm:gap-[12px] relative shrink-0 w-full" data-name="Awards Content">
      <AwardsEventContainer2 />
      <AwardsEventContainer3 />
    </div>
  );
}

function AwardsProjectIcon1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Awards Project Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Awards Project Icon">
          <path d={svgPaths.p188b5880} id="Icon" stroke="var(--stroke-0, #32404F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.584" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function AwardsProjectContainer2() {
  return (
    <a
      className="content-stretch flex flex-wrap gap-[4px] items-center relative shrink-0"
      data-name="Awards Project Container"
      href="https://xd.adobe.com/view/0de6016a-1473-42c4-a20b-83e972fb0ad5-58b5/"
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex flex-col font-geist font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(50,64,79,0.58)] tracking-[-0.25px]">
        <p className="leading-[24px] underline-offset-2 hover:underline">Volunteer Matching App</p>
      </div>
      <AwardsProjectIcon1 />
    </a>
  );
}

function AwardsEventContainer4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Awards Event Container">
      <div className="flex flex-col font-geist font-medium justify-center leading-[0] relative shrink-0 text-[#32404f] text-[16px] tracking-[-0.25px] whitespace-nowrap">
        <p className="leading-[24px]">2nd Place</p>
      </div>
      <AwardsProjectContainer2 />
    </div>
  );
}

function AwardsEventContainer5() {
  return (
    <div className="content-stretch flex flex-col font-geist font-normal gap-[2px] sm:gap-[4px] items-start sm:items-end leading-[0] relative shrink-0 text-[rgba(50,64,79,0.58)] tracking-[-0.25px] w-full sm:w-auto" data-name="Awards Event Container">
      <div className="flex flex-col justify-center relative shrink-0 text-[0px]">
        <p className="text-[13px] sm:text-[14px]">
          <span className="leading-[24px]">{`Amazon `}</span>
          <span className="font-geist font-extralight leading-[24px]">X</span>
          <span className="leading-[24px]">{` Adobe`}</span>
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[13px] sm:text-[14px]">
        <p className="leading-[24px] sm:whitespace-nowrap">Jul 2022</p>
      </div>
    </div>
  );
}

function AwardsContent2() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] items-start gap-[6px] sm:gap-[12px] relative shrink-0 w-full" data-name="Awards Content">
      <AwardsEventContainer4 />
      <AwardsEventContainer5 />
    </div>
  );
}

function AwardsProjectIcon2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Awards Project Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Awards Project Icon">
          <path d={svgPaths.p188b5880} id="Icon" stroke="var(--stroke-0, #32404F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.584" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function AwardsProjectContainer3() {
  return (
    <a
      className="content-stretch flex flex-wrap gap-[4px] items-center relative shrink-0"
      data-name="Awards Project Container"
      href="https://www.linkedin.com/feed/update/urn:li:activity:7122036303730278400/"
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex flex-col font-geist font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(50,64,79,0.58)] tracking-[-0.25px]">
        <p className="leading-[24px] underline-offset-2 hover:underline">English Learning Platform UX Improvement</p>
      </div>
      <AwardsProjectIcon2 />
    </a>
  );
}

function AwardsEventContainer6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Awards Event Container">
      <div className="flex flex-col font-geist font-medium justify-center leading-[0] relative shrink-0 text-[#32404f] text-[16px] tracking-[-0.25px] whitespace-nowrap">
        <p className="leading-[24px]">3rd Place</p>
      </div>
      <AwardsProjectContainer3 />
    </div>
  );
}

function AwardsEventContainer7() {
  return (
    <div className="content-stretch flex flex-col font-geist font-normal gap-[2px] sm:gap-[4px] items-start sm:items-end leading-[0] relative shrink-0 text-[13px] sm:text-[14px] text-[rgba(50,64,79,0.58)] tracking-[-0.25px] w-full sm:w-auto" data-name="Awards Event Container">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px] sm:whitespace-nowrap">{`Ringle  `}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px] sm:whitespace-nowrap">Jul 2022</p>
      </div>
    </div>
  );
}

function AwardsContent3() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] items-start gap-[6px] sm:gap-[12px] relative shrink-0 w-full" data-name="Awards Content">
      <AwardsEventContainer6 />
      <AwardsEventContainer7 />
    </div>
  );
}

function AwardsProjectIcon3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Awards Project Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Awards Project Icon">
          <path d={svgPaths.p188b5880} id="Icon" stroke="var(--stroke-0, #32404F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.584" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function AwardsProjectContainer4() {
  return (
    <a
      className="content-stretch flex flex-wrap gap-[4px] items-center relative shrink-0"
      data-name="Awards Project Container"
      href="https://xd.adobe.com/view/bc3d48de-8800-4e0b-910d-8712837d4410-e96e/"
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex flex-col font-geist font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(50,64,79,0.58)] tracking-[-0.25px]">
        <p className="leading-[24px] underline-offset-2 hover:underline">Trustworthy Election Content App</p>
      </div>
      <AwardsProjectIcon3 />
    </a>
  );
}

function AwardsEventContainer8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Awards Event Container">
      <div className="flex flex-col font-geist font-medium justify-center leading-[0] relative shrink-0 text-[#32404f] text-[16px] tracking-[-0.25px] whitespace-nowrap">
        <p className="leading-[24px]">Top 10 Finalist</p>
      </div>
      <AwardsProjectContainer4 />
    </div>
  );
}

function AwardsEventContainer9() {
  return (
    <div className="content-stretch flex flex-col font-geist font-normal gap-[2px] sm:gap-[4px] items-start sm:items-end leading-[0] relative shrink-0 text-[rgba(50,64,79,0.58)] tracking-[-0.25px] w-full sm:w-auto" data-name="Awards Event Container">
      <div className="flex flex-col justify-center relative shrink-0 text-[0px]">
        <p className="text-[13px] sm:text-[14px]">
          <span className="leading-[24px]">{`NYT `}</span>
          <span className="font-geist font-extralight leading-[24px]">X</span>
          <span className="leading-[24px]">{` Adobe`}</span>
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[13px] sm:text-[14px]">
        <p className="leading-[24px] sm:whitespace-nowrap">Sep 2021</p>
      </div>
    </div>
  );
}

function AwardsContent4() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] items-start gap-[6px] sm:gap-[12px] relative shrink-0 w-full" data-name="Awards Content">
      <AwardsEventContainer8 />
      <AwardsEventContainer9 />
    </div>
  );
}

function AwardsProjectIcon4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Awards Project Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Awards Project Icon">
          <path d={svgPaths.p188b5880} id="Icon" stroke="var(--stroke-0, #32404F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.584" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function AwardsProjectContainer5() {
  return (
    <a
      className="content-stretch flex flex-wrap gap-[4px] items-center relative shrink-0"
      data-name="Awards Project Container"
      href="https://xd.adobe.com/view/f5c3cb5e-757d-4348-9fca-07c2c6a8638a-a090/"
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex flex-col font-geist font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(50,64,79,0.58)] tracking-[-0.25px]">
        <p className="leading-[24px] underline-offset-2 hover:underline">Recycling Education App</p>
      </div>
      <AwardsProjectIcon4 />
    </a>
  );
}

function AwardsEventContainer10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Awards Event Container">
      <div className="flex flex-col font-geist font-medium justify-center leading-[0] relative shrink-0 text-[#32404f] text-[16px] tracking-[-0.25px] whitespace-nowrap">
        <p className="leading-[24px]">Top 10 Finalist</p>
      </div>
      <AwardsProjectContainer5 />
    </div>
  );
}

function AwardsEventContainer11() {
  return (
    <div className="content-stretch flex flex-col font-geist font-normal gap-[2px] sm:gap-[4px] items-start sm:items-end leading-[0] relative shrink-0 text-[rgba(50,64,79,0.58)] tracking-[-0.25px] w-full sm:w-auto" data-name="Awards Event Container">
      <div className="flex flex-col justify-center relative shrink-0 text-[0px]">
        <p className="text-[13px] sm:text-[14px]">
          <span className="leading-[24px]">{`Target `}</span>
          <span className="font-geist font-extralight leading-[24px]">X</span>
          <span className="leading-[24px]">{` Adobe`}</span>
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[13px] sm:text-[14px]">
        <p className="leading-[24px] sm:whitespace-nowrap">Aug 2021</p>
      </div>
    </div>
  );
}

function AwardsContent5() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] items-start gap-[6px] sm:gap-[12px] relative shrink-0 w-full" data-name="Awards Content">
      <AwardsEventContainer10 />
      <AwardsEventContainer11 />
    </div>
  );
}

function AwardsContentContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Awards Content Container">
      <AwardsContent />
      <AwardsContent1 />
      <AwardsContent2 />
      <AwardsContent3 />
      <AwardsContent4 />
      <AwardsContent5 />
    </div>
  );
}

function AwardsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start pb-[48px] relative shrink-0 w-full" data-name="Awards Container">
      <div className="flex flex-col font-geist-mono font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.15px] w-[142px]">
        <p className="leading-[24px] whitespace-pre-wrap">AWARDS</p>
      </div>
      <AwardsContentContainer />
      <div aria-hidden="true" className="absolute border-[#ebeced] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PublicSpeakingEventContainer() {
  return (
    <div className="content-stretch flex flex-col font-geist font-normal gap-[2px] sm:gap-[4px] items-start sm:items-end relative shrink-0 text-[rgba(50,64,79,0.58)] w-full sm:w-auto" data-name="Public Speaking Event Container">
      <div className="flex flex-col justify-center relative shrink-0 text-[13px] sm:text-[14px]">
        <p className="leading-[24px] sm:whitespace-nowrap">Jan 3, 2022</p>
      </div>
    </div>
  );
}

function PublicSpeakingContent() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row sm:items-start sm:justify-between gap-[4px] sm:gap-0 relative shrink-0 tracking-[-0.25px] w-full" data-name="Public Speaking Content">
      <div className="flex flex-col font-geist font-medium justify-center relative shrink-0 text-[#32404f] text-[16px]">
        <p className="leading-[24px]">Achieving Success in Design Competitions</p>
      </div>
      <PublicSpeakingEventContainer />
    </div>
  );
}

function PublicSpeakingContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start leading-[0] relative shrink-0 w-full" data-name="Public Speaking Container">
      <div className="flex flex-col font-geist-mono font-normal justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.15px] w-[142px]">
        <p className="leading-[24px] whitespace-pre-wrap">PUBLIC SPEAKING</p>
      </div>
      <PublicSpeakingContent />
    </div>
  );
}

function MentorshipContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start justify-center relative shrink-0 w-full" data-name="Mentorship Container">
      <MentorshipLine />
      <AwardsContainer />
      <PublicSpeakingContainer />
    </div>
  );
}

function ExperienceContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[70px] items-start relative shrink-0 w-full" data-name="Experience Container">
      <ExperienceHeaderContainer />
      <MentorshipContainer />
    </div>
  );
}

function WritingThumbnail() {
  return (
    <div className="relative shrink-0 size-[90px]" data-name="Writing Thumbnail">
      <div className="absolute inset-0 bg-[#e9ebef]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-normal gap-[16px] items-start leading-[0] min-h-px min-w-px relative">
      <div className="flex flex-col font-newsreader justify-center min-w-full relative shrink-0 text-[#32404f] text-[22px] tracking-[-0.64px] w-[min-content]">
        <p className="leading-[normal] whitespace-pre-wrap">The power of networking for entrepreneurs</p>
      </div>
      <div className="flex flex-col font-geist justify-center min-w-full relative shrink-0 text-[#858e97] text-[15px] w-[min-content]">
        <p className="leading-[22.5px] whitespace-pre-wrap">Lorem ipsum dolor sit amet consectetur. Tellus tempus pharetra tristique ipsum pellentesque</p>
      </div>
    </div>
  );
}

function WritingDescription() {
  return (
    <div className="content-stretch flex gap-[24px] items-center max-w-[1000px] relative shrink-0 w-full" data-name="Writing Description">
      <WritingThumbnail />
      <Frame />
    </div>
  );
}

function WritingThumbnail1() {
  return (
    <div className="relative shrink-0 size-[90px]" data-name="Writing Thumbnail">
      <div className="absolute inset-0 bg-[#e9ebef]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-normal gap-[16px] items-start leading-[0] min-h-px min-w-px relative">
      <div className="flex flex-col font-newsreader justify-center min-w-full relative shrink-0 text-[#32404f] text-[22px] tracking-[-0.64px] w-[min-content]">
        <p className="leading-[normal] whitespace-pre-wrap">The power of networking for entrepreneurs</p>
      </div>
      <div className="flex flex-col font-geist justify-center min-w-full relative shrink-0 text-[#858e97] text-[15px] w-[min-content]">
        <p className="leading-[22.5px] whitespace-pre-wrap">Lorem ipsum dolor sit amet consectetur. Tellus tempus pharetra tristique ipsum pellentesque</p>
      </div>
    </div>
  );
}

function WritingDescription1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center max-w-[1000px] relative shrink-0 w-full" data-name="Writing Description">
      <WritingThumbnail1 />
      <Frame1 />
    </div>
  );
}

function WritingThumbnail2() {
  return (
    <div className="relative shrink-0 size-[90px]" data-name="Writing Thumbnail">
      <div className="absolute inset-0 bg-[#e9ebef]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-normal gap-[16px] items-start leading-[0] min-h-px min-w-px relative">
      <div className="flex flex-col font-newsreader justify-center min-w-full relative shrink-0 text-[#32404f] text-[22px] tracking-[-0.64px] w-[min-content]">
        <p className="leading-[normal] whitespace-pre-wrap">The power of networking for entrepreneurs</p>
      </div>
      <div className="flex flex-col font-geist justify-center min-w-full relative shrink-0 text-[#858e97] text-[15px] w-[min-content]">
        <p className="leading-[22.5px] whitespace-pre-wrap">Lorem ipsum dolor sit amet consectetur. Tellus tempus pharetra tristique ipsum pellentesque</p>
      </div>
    </div>
  );
}

function WritingDescription2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center max-w-[1000px] relative shrink-0 w-full" data-name="Writing Description">
      <WritingThumbnail2 />
      <Frame2 />
    </div>
  );
}

function WritingThumbnail3() {
  return (
    <div className="relative shrink-0 size-[90px]" data-name="Writing Thumbnail">
      <div className="absolute inset-0 bg-[#e9ebef]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-normal gap-[16px] items-start leading-[0] min-h-px min-w-px relative">
      <div className="flex flex-col font-newsreader justify-center min-w-full relative shrink-0 text-[#32404f] text-[22px] tracking-[-0.64px] w-[min-content]">
        <p className="leading-[normal] whitespace-pre-wrap">The power of networking for entrepreneurs</p>
      </div>
      <div className="flex flex-col font-geist justify-center min-w-full relative shrink-0 text-[#858e97] text-[15px] w-[min-content]">
        <p className="leading-[22.5px] whitespace-pre-wrap">Lorem ipsum dolor sit amet consectetur. Tellus tempus pharetra tristique ipsum pellentesque</p>
      </div>
    </div>
  );
}

function WritingDescription3() {
  return (
    <div className="content-stretch flex gap-[24px] items-center max-w-[1000px] relative shrink-0 w-full" data-name="Writing Description">
      <WritingThumbnail3 />
      <Frame3 />
    </div>
  );
}

function WritingThumbnail4() {
  return (
    <div className="relative shrink-0 size-[90px]" data-name="Writing Thumbnail">
      <div className="absolute inset-0 bg-[#e9ebef]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-normal gap-[16px] items-start leading-[0] min-h-px min-w-px relative">
      <div className="flex flex-col font-newsreader justify-center min-w-full relative shrink-0 text-[#32404f] text-[22px] tracking-[-0.64px] w-[min-content]">
        <p className="leading-[normal] whitespace-pre-wrap">The power of networking for entrepreneurs</p>
      </div>
      <div className="flex flex-col font-geist justify-center min-w-full relative shrink-0 text-[#858e97] text-[15px] w-[min-content]">
        <p className="leading-[22.5px] whitespace-pre-wrap">Lorem ipsum dolor sit amet consectetur. Tellus tempus pharetra tristique ipsum pellentesque</p>
      </div>
    </div>
  );
}

function WritingDescription4() {
  return (
    <div className="content-stretch flex gap-[24px] items-center max-w-[1000px] relative shrink-0 w-full" data-name="Writing Description">
      <WritingThumbnail4 />
      <Frame4 />
    </div>
  );
}

function WritingsContentContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[34px] items-start relative shrink-0 w-full" data-name="Writings Content Container">
      <WritingDescription />
      <WritingDescription1 />
      <WritingDescription2 />
      <WritingDescription3 />
      <WritingDescription4 />
    </div>
  );
}

function WritingsContainer() {
  return (
    <div
      className="content-stretch hidden flex-col gap-[32px] items-start max-w-[1200px] relative shrink-0 w-full"
      data-name="Writings Container"
    >
      <div className="flex flex-col font-geist-mono font-normal justify-center leading-[0] relative shrink-0 text-[#32404f] text-[20px] tracking-[-1.04px] uppercase w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Writings</p>
      </div>
      <WritingsContentContainer />
    </div>
  );
}

function StandOutItem({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex flex-col gap-[6px] relative shrink-0 w-full">
      <div className="flex flex-col font-geist font-medium justify-center relative shrink-0 text-[#32404f] text-[16px]">
        <p className="leading-[24px]">{title}</p>
      </div>
      <div className="flex flex-col font-geist font-normal justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.15px]">
        <p className="leading-[26px]">{body}</p>
      </div>
    </div>
  );
}

function WhatMakesMeStandOut() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start pb-[48px] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.15px] uppercase">
        <p className="leading-[24px]">What makes me stand out</p>
      </div>
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
        <StandOutItem
          title="I build with AI, not just talk about it."
          body="I use Claude Code, Figma Make, Cursor, and Google AI Studio as actual workflow tools — not side experiments. I built the Figma plugin in this portfolio. I vibe-coded parts of this site. I led internal AI workshops that changed how fast the team could ship concepts."
        />
        <StandOutItem
          title="I bridge design and delivery."
          body="I've shipped design systems, written front-end code, and worked closely enough with engineers to know what 'hard to build' actually means. That makes my designs more realistic and my handoffs cleaner — feature delivery time dropped ~33% after we shipped the design system together."
        />
        <StandOutItem
          title="I've operated at enterprise scale."
          body="500+ clients, Goldman Sachs investor sign-off, C-suite alignment on product strategy. I'm comfortable in rooms where design decisions carry real business consequences."
        />
      </div>
      <div aria-hidden="true" className="absolute border-[#ebeced] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function MainFrame2() {
  return (
    <div className="content-stretch flex flex-col gap-[138px] items-start relative shrink-0 w-full" data-name="Main Frame">
      <MainContainer />
      <WhatMakesMeStandOut />
      <ExperienceContainer />
      <WritingsContainer />
    </div>
  );
}

function MainFrame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Main Frame">
      <MainFrame2 />
    </div>
  );
}

function MainFrame() {
  return (
    <div className="content-stretch flex flex-col items-start self-center max-w-[550px] mt-[120px] sm:mt-[190px] w-full px-[20px] sm:px-[32px] lg:px-0" data-name="Main Frame">
      <MainFrame1 />
    </div>
  );
}


export default function AboutPage() {
  return (
    <div className="bg-dot-grid-soft-center min-h-screen flex flex-col relative w-full" data-name="About Page">
      <MainFrame />
      <Footer maxWidthClass="max-w-[550px]" emailVariant="text" stacked paddingXClass="px-[20px] sm:px-0" />
      <NavBar />
    </div>
  );
}
