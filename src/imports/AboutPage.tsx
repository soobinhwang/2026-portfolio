import svgPaths from "./svg-81bzjcs43u";
import imgProfileContainer from "../assets/About/Profile Container.png";
import { Link as RouterLink } from "react-router";
import Footer from "../app/components/Footer";
import NavBar from "../app/components/NavBar";
import resumePdf from "../assets/Sue Hwang - Product Designer.pdf";

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
      <img alt="Sue Hwang" className="w-[300px] h-auto" src={imgProfileContainer} />
    </div>
  );
}

function ProfileDescriptionContainer() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[16px] items-start relative shrink-0 w-full" data-name="Profile Description Container">
      <div className="flex flex-col font-newsreader justify-center leading-[0] relative shrink-0 text-[#32404f] text-[39px] tracking-[-1.04px] w-full">
        <p className="leading-[44px] whitespace-pre-wrap">Sue is a Product Designer</p>
      </div>
      <div className="flex flex-col font-geist justify-center leading-[24px] relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.15px] w-full whitespace-pre-wrap">
        <p className="mb-0">who believes growth is something we do together. I love creating spaces where people can learn from each other, stay curious, and feel comfortable asking any questions.</p>
        <p className="mb-0">&nbsp;</p>
        <p>
          {`Design is how I live my values of humanity, growth, and doing my best work. I care about building products that quietly make everyday life easier, especially for people who may have fewer options or more barriers. `}
          <br aria-hidden="true" />
          <br aria-hidden="true" />I see design as a responsibility as much as a craft, and that sense of impact is what keeps me creating.
        </p>
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
    <div className="relative shrink-0 size-[24px]" data-name="LinkedIn Link">
      <LinkedInIconContainer />
    </div>
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
    <div className="relative shrink-0 size-[24px]" data-name="GitHub Link">
      <GitHubIconContainer />
    </div>
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
      <div className="flex flex-col font-geist font-medium justify-center leading-[0] relative shrink-0 text-[#32404f] text-[16px] text-center tracking-[-0.5px] whitespace-nowrap">
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

function ArrowDown({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative shrink-0 size-[20px]"} data-name="arrow-down">
      <div className="absolute inset-[20.83%]" data-name="Icon">
        <div className="absolute inset-[-8.57%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6667 13.6667">
            <path d={svgPaths.p2e1b3c60} id="Icon" stroke="var(--stroke-0, #1E242A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DownloadResumeContainer() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[24px] py-[12px] relative rounded-[24px] shrink-0 transition-colors duration-200 group-hover:bg-[#f7f8f9]" data-name="Download Resume Container">
      <div className="absolute inset-0 rounded-[24px]" data-name="Download Resume Border">
        <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[24px] transition-colors duration-200 group-hover:border-[#d6dbe0]" />
      </div>
      <DownloadResumeTextContainer />
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
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Experience Header Container">
      <div className="flex flex-col font-geist-mono font-normal justify-center leading-[0] relative shrink-0 text-[#32404f] text-[20px] tracking-[-1.04px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">experience</p>
      </div>
      <DownloadResumeLink />
    </div>
  );
}

function MentorshipEventContainer() {
  return (
    <div className="content-stretch flex flex-col font-geist font-normal gap-[4px] items-end relative shrink-0 text-[14px] text-[rgba(50,64,79,0.58)]" data-name="Mentorship Event Container">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">KOTRA Job Fair</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">Oct 2025</p>
      </div>
    </div>
  );
}

function MentorshipContent() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Mentorship Content">
      <div className="flex flex-col font-geist font-medium justify-center relative shrink-0 text-[#32404f] text-[16px]">
        <p className="leading-[24px]">Career Mentor</p>
      </div>
      <MentorshipEventContainer />
    </div>
  );
}

function MentorshipEventContainer1() {
  return (
    <div className="content-stretch flex flex-col font-geist font-normal gap-[4px] items-end relative shrink-0 text-[14px] text-[rgba(50,64,79,0.58)]" data-name="Mentorship Event Container">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">KOTRA Job Fair</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">Sep 2022</p>
      </div>
    </div>
  );
}

function MentorshipContent1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Mentorship Content">
      <div className="flex flex-col font-geist font-medium justify-center relative shrink-0 text-[#32404f] text-[16px]">
        <p className="leading-[24px]">Career Mentor</p>
      </div>
      <MentorshipEventContainer1 />
    </div>
  );
}

function MentorshipEventContainer2() {
  return (
    <div className="content-stretch flex flex-col font-geist font-normal gap-[4px] items-end relative shrink-0 text-[14px] text-[rgba(50,64,79,0.58)]" data-name="Mentorship Event Container">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">Euonia UX Hackathon</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">May 2022</p>
      </div>
    </div>
  );
}

function MentorshipContent2() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Mentorship Content">
      <div className="flex flex-col font-geist font-medium justify-center relative shrink-0 text-[#32404f] text-[16px]">
        <p className="leading-[24px]">Hackathon Mentor</p>
      </div>
      <MentorshipEventContainer2 />
    </div>
  );
}

function MentorshipContentContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center leading-[0] relative shrink-0 tracking-[-0.25px] w-full whitespace-nowrap" data-name="Mentorship Content Container">
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
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Awards Project Container">
      <div className="flex flex-col font-geist font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(50,64,79,0.58)] tracking-[-0.25px] whitespace-nowrap">
        <p className="leading-[24px]">Metaverse Therapeutic Web App</p>
      </div>
      <ArrowNarrowUpRight />
    </div>
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
    <div className="content-stretch flex flex-col font-geist font-normal gap-[4px] items-end leading-[0] relative shrink-0 text-[14px] text-[rgba(50,64,79,0.58)] tracking-[-0.25px] whitespace-nowrap" data-name="Awards Event Container">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">Bizhacks</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">May 2022</p>
      </div>
    </div>
  );
}

function AwardsContent() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Awards Content">
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
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Awards Project Container">
      <div className="flex flex-col font-geist font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(50,64,79,0.58)] tracking-[-0.25px] whitespace-nowrap">
        <p className="leading-[24px]">Ethical Shopping App</p>
      </div>
      <AwardsProjectIcon />
    </div>
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
    <div className="content-stretch flex flex-col font-geist font-normal gap-[4px] items-end leading-[0] relative shrink-0 text-[rgba(50,64,79,0.58)] tracking-[-0.25px] whitespace-nowrap" data-name="Awards Event Container">
      <div className="flex flex-col justify-center relative shrink-0 text-[0px]">
        <p className="text-[14px]">
          <span className="leading-[24px]">{`Patagonia `}</span>
          <span className="font-geist font-extralight leading-[24px]">X</span>
          <span className="leading-[24px]">{` Adobe`}</span>
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[14px]">
        <p className="leading-[24px]">May 2022</p>
      </div>
    </div>
  );
}

function AwardsContent1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Awards Content">
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
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Awards Project Container">
      <div className="flex flex-col font-geist font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(50,64,79,0.58)] tracking-[-0.25px] whitespace-nowrap">
        <p className="leading-[24px]">Volunteer Matching App</p>
      </div>
      <AwardsProjectIcon1 />
    </div>
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
    <div className="content-stretch flex flex-col font-geist font-normal gap-[4px] items-end leading-[0] relative shrink-0 text-[rgba(50,64,79,0.58)] tracking-[-0.25px] whitespace-nowrap" data-name="Awards Event Container">
      <div className="flex flex-col justify-center relative shrink-0 text-[0px]">
        <p className="text-[14px]">
          <span className="leading-[24px]">{`Amazon `}</span>
          <span className="font-geist font-extralight leading-[24px]">X</span>
          <span className="leading-[24px]">{` Adobe`}</span>
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[14px]">
        <p className="leading-[24px]">Jul 2022</p>
      </div>
    </div>
  );
}

function AwardsContent2() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Awards Content">
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
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Awards Project Container">
      <div className="flex flex-col font-geist font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(50,64,79,0.58)] tracking-[-0.25px] whitespace-nowrap">
        <p className="leading-[24px]">English Learning Platform UX Improvement</p>
      </div>
      <AwardsProjectIcon2 />
    </div>
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
    <div className="content-stretch flex flex-col font-geist font-normal gap-[4px] items-end leading-[0] relative shrink-0 text-[14px] text-[rgba(50,64,79,0.58)] tracking-[-0.25px] whitespace-nowrap" data-name="Awards Event Container">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">{`Ringle  `}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">Jul 2022</p>
      </div>
    </div>
  );
}

function AwardsContent3() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Awards Content">
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
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Awards Project Container">
      <div className="flex flex-col font-geist font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(50,64,79,0.58)] tracking-[-0.25px] whitespace-nowrap">
        <p className="leading-[24px]">Trustworthy Election Content App</p>
      </div>
      <AwardsProjectIcon3 />
    </div>
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
    <div className="content-stretch flex flex-col font-geist font-normal gap-[4px] items-end leading-[0] relative shrink-0 text-[rgba(50,64,79,0.58)] tracking-[-0.25px] whitespace-nowrap" data-name="Awards Event Container">
      <div className="flex flex-col justify-center relative shrink-0 text-[0px]">
        <p className="text-[14px]">
          <span className="leading-[24px]">{`NYT `}</span>
          <span className="font-geist font-extralight leading-[24px]">X</span>
          <span className="leading-[24px]">{` Adobe`}</span>
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[14px]">
        <p className="leading-[24px]">Sep 2021</p>
      </div>
    </div>
  );
}

function AwardsContent4() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Awards Content">
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
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Awards Project Container">
      <div className="flex flex-col font-geist font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(50,64,79,0.58)] tracking-[-0.25px] whitespace-nowrap">
        <p className="leading-[24px]">Recycling Educating App</p>
      </div>
      <AwardsProjectIcon4 />
    </div>
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
    <div className="content-stretch flex flex-col font-geist font-normal gap-[4px] items-end leading-[0] relative shrink-0 text-[rgba(50,64,79,0.58)] tracking-[-0.25px] whitespace-nowrap" data-name="Awards Event Container">
      <div className="flex flex-col justify-center relative shrink-0 text-[0px]">
        <p className="text-[14px]">
          <span className="leading-[24px]">{`Target `}</span>
          <span className="font-geist font-extralight leading-[24px]">X</span>
          <span className="leading-[24px]">{` Adobe`}</span>
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[14px]">
        <p className="leading-[24px]">Aug 2021</p>
      </div>
    </div>
  );
}

function AwardsContent5() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Awards Content">
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
    <div className="content-stretch flex flex-col font-geist font-normal gap-[4px] items-end relative shrink-0 text-[rgba(50,64,79,0.58)]" data-name="Public Speaking Event Container">
      <div className="flex flex-col justify-center relative shrink-0 text-[0px]">
        <p className="text-[14px]">
          <span className="leading-[24px]">{`Target `}</span>
          <span className="font-geist font-extralight leading-[24px]">X</span>
          <span className="leading-[24px]">{` Adobe`}</span>
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[14px]">
        <p className="leading-[24px]">Oct 2021</p>
      </div>
    </div>
  );
}

function PublicSpeakingContent() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 tracking-[-0.25px] w-full whitespace-nowrap" data-name="Public Speaking Content">
      <div className="flex flex-col font-geist font-medium justify-center relative shrink-0 text-[#32404f] text-[16px]">
        <p className="leading-[24px]">Thriving Success in Design Competitions</p>
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

function MainFrame2() {
  return (
    <div className="content-stretch flex flex-col gap-[138px] items-start relative shrink-0 w-full" data-name="Main Frame">
      <MainContainer />
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
    <div className="content-stretch flex flex-col items-start self-center max-w-[550px] mt-[190px] w-[550px]" data-name="Main Frame">
      <MainFrame1 />
    </div>
  );
}


export default function AboutPage() {
  return (
    <div className="bg-dot-grid min-h-screen flex flex-col relative w-full" data-name="About Page">
      <MainFrame />
      <Footer maxWidthClass="max-w-[550px]" emailVariant="text" paddingXClass="px-0" />
      <NavBar />
    </div>
  );
}
