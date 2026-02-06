import { Link as RouterLink } from "react-router";
import Footer from "../app/components/Footer";
import NavBar from "../app/components/NavBar";

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
      <RouterLink to="/ai/project-1" className="flex-[1_0_0] min-h-px min-w-px" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Project />
      </RouterLink>
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
    <div className="content-stretch flex flex-col gap-[68px] items-start ml-[120px] max-w-[1200px] mt-[183px] w-[1200px]" data-name="Container">
      <Header />
      <ProjectsContainer />
    </div>
  );
}


export default function AiProjectPage() {
  return (
    <div className="bg-dot-grid min-h-screen relative w-full" data-name="AI Project Page">
      <Container />
      <Footer />
      <NavBar />
    </div>
  );
}
