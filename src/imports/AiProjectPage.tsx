import { Link as RouterLink } from "react-router";

function Header() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[755px]" data-name="Header">
      <div className="flex flex-col font-newsreader font-normal justify-center leading-[0] relative shrink-0 text-[#32404f] text-[0px] tracking-[-1.04px] w-full">
        <p className="text-[39px] whitespace-pre-wrap">
          <span className="leading-[44px] text-[#32404f]">{`I use `}</span>
          <span className="font-newsreader font-normal italic leading-[44px] text-[#32404f]">{`AI `}</span>
          <span className="leading-[44px] text-[#32404f]">as a thinking partner and productivity booster</span>
          <span className="leading-[44px] text-[#808890]">{` to move faster from ambiguity to clarity.`}</span>
        </p>
      </div>
    </div>
  );
}

function AiThumbnail() {
  return <div className="bg-[#1e242a] flex-[1_0_0] min-h-px min-w-px w-full" data-name="AI Thumbnail" />;
}

function ProjectDesc() {
  return (
    <div className="content-center flex flex-wrap font-normal gap-[8px] items-center justify-between leading-[0] relative shrink-0 w-full" data-name="Project Desc">
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#32404f] text-[22px] tracking-[-0.64px] whitespace-nowrap">
        <p className="leading-[normal]">Lorem Ipsum</p>
      </div>
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[#858e97] text-[15px] uppercase w-[162px]">
        <p className="leading-[22.5px] whitespace-pre-wrap">B2B SaaS • web app</p>
      </div>
    </div>
  );
}

function Project() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-[459px] items-start min-h-px min-w-px relative" data-name="Project">
      <div aria-hidden="true" className="absolute border-[#ebeced] border-solid border-t inset-0 pointer-events-none" />
      <AiThumbnail />
      <ProjectDesc />
    </div>
  );
}

function AiThumbnail1() {
  return <div className="bg-[#1e242a] flex-[1_0_0] min-h-px min-w-px w-full" data-name="AI Thumbnail" />;
}

function ProjectDesc1() {
  return (
    <div className="content-center flex flex-wrap font-normal gap-[8px] items-center justify-between leading-[0] relative shrink-0 w-full" data-name="Project Desc">
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#32404f] text-[22px] tracking-[-0.64px] whitespace-nowrap">
        <p className="leading-[normal]">Lorem Ipsum</p>
      </div>
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[#858e97] text-[15px] uppercase w-[162px]">
        <p className="leading-[22.5px] whitespace-pre-wrap">B2B SaaS • web app</p>
      </div>
    </div>
  );
}

function Project1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-[459px] items-start min-h-px min-w-px relative" data-name="Project">
      <div aria-hidden="true" className="absolute border-[#ebeced] border-solid border-t inset-0 pointer-events-none" />
      <AiThumbnail1 />
      <ProjectDesc1 />
    </div>
  );
}

function ProjectsRow() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Projects row">
      <Project />
      <Project1 />
    </div>
  );
}

function AiThumbnail2() {
  return <div className="bg-[#1e242a] flex-[1_0_0] min-h-px min-w-px w-full" data-name="AI Thumbnail" />;
}

function ProjectDesc2() {
  return (
    <div className="content-center flex flex-wrap font-normal gap-[8px] items-center justify-between leading-[0] relative shrink-0 w-full" data-name="Project Desc">
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#32404f] text-[22px] tracking-[-0.64px] whitespace-nowrap">
        <p className="leading-[normal]">Lorem Ipsum</p>
      </div>
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[#858e97] text-[15px] uppercase w-[162px]">
        <p className="leading-[22.5px] whitespace-pre-wrap">B2B SaaS • web app</p>
      </div>
    </div>
  );
}

function Project2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-[459px] items-start min-h-px min-w-px relative" data-name="Project">
      <div aria-hidden="true" className="absolute border-[#ebeced] border-solid border-t inset-0 pointer-events-none" />
      <AiThumbnail2 />
      <ProjectDesc2 />
    </div>
  );
}

function AiThumbnail3() {
  return <div className="bg-[#1e242a] flex-[1_0_0] min-h-px min-w-px w-full" data-name="AI Thumbnail" />;
}

function ProjectDesc3() {
  return (
    <div className="content-center flex flex-wrap font-normal gap-[8px] items-center justify-between leading-[0] relative shrink-0 w-full" data-name="Project Desc">
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#32404f] text-[22px] tracking-[-0.64px] whitespace-nowrap">
        <p className="leading-[normal]">Lorem Ipsum</p>
      </div>
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[#858e97] text-[15px] uppercase w-[162px]">
        <p className="leading-[22.5px] whitespace-pre-wrap">B2B SaaS • web app</p>
      </div>
    </div>
  );
}

function Project3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-[459px] items-start min-h-px min-w-px relative" data-name="Project">
      <div aria-hidden="true" className="absolute border-[#ebeced] border-solid border-t inset-0 pointer-events-none" />
      <AiThumbnail3 />
      <ProjectDesc3 />
    </div>
  );
}

function AiThumbnail4() {
  return <div className="bg-[#1e242a] flex-[1_0_0] min-h-px min-w-px w-full" data-name="AI Thumbnail" />;
}

function ProjectDesc4() {
  return (
    <div className="content-center flex flex-wrap font-normal gap-[8px] items-center justify-between leading-[0] relative shrink-0 w-full" data-name="Project Desc">
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#32404f] text-[22px] tracking-[-0.64px] whitespace-nowrap">
        <p className="leading-[normal]">Lorem Ipsum</p>
      </div>
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[#858e97] text-[15px] uppercase w-[162px]">
        <p className="leading-[22.5px] whitespace-pre-wrap">B2B SaaS • web app</p>
      </div>
    </div>
  );
}

function Project4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-[459px] items-start min-h-px min-w-px relative" data-name="Project">
      <div aria-hidden="true" className="absolute border-[#ebeced] border-solid border-t inset-0 pointer-events-none" />
      <AiThumbnail4 />
      <ProjectDesc4 />
    </div>
  );
}

function ProjectsRow1() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Projects row">
      <Project2 />
      <Project3 />
      <Project4 />
    </div>
  );
}

function ProjectsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Projects container">
      <ProjectsRow />
      <ProjectsRow1 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[68px] items-start left-[120px] max-w-[1200px] top-[183px] w-[1200px]" data-name="Container">
      <Header />
      <ProjectsContainer />
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

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Link1 />
    </div>
  );
}

function Link() {
  return (
    <RouterLink to="/" className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Container2 />
    </RouterLink>
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

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Link3 />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <Container3 />
    </div>
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

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Link5 />
    </div>
  );
}

function Link4() {
  return (
    <RouterLink to="/about" className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Container4 />
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

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Link7 />
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <Container5 />
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

function Container1() {
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
      <Container1 />
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

export default function AiProjectPage() {
  return (
    <div className="bg-dot-grid min-h-screen relative w-full" data-name="AI Project Page">
      <Container />
      <MainNavigation />
    </div>
  );
}
