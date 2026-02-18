import { Link as RouterLink } from "react-router";
import Footer from "../app/components/Footer";
import NavBar from "../app/components/NavBar";

function HeaderContainer() {
  return (
    <div className="content-stretch flex flex-col items-start mt-[120px] sm:mt-[160px] mx-auto max-w-[1200px] w-full px-[20px] sm:px-[32px] lg:px-0" data-name="Header Container">
      <div className="flex flex-col font-newsreader font-normal justify-center leading-[0] relative shrink-0 text-[#32404f] text-[0px] tracking-[-1.04px] w-full text-left">
        <p className="text-[32px] sm:text-[39px] whitespace-pre-wrap">
          <span className="leading-[36px] sm:leading-[44px] text-[#32404f]">{`I use `}</span>
          <span className="font-newsreader font-normal italic leading-[36px] sm:leading-[44px] text-[#32404f]">{`AI `}</span>
          <span className="leading-[36px] sm:leading-[44px] text-[#32404f]">as a thinking partner and productivity booster</span>
          <span className="leading-[36px] sm:leading-[44px]">
            <br aria-hidden="true" />
          </span>
          <span className="leading-[36px] sm:leading-[44px] text-[#808890]">{`To move faster from ambiguity to clarity.`}</span>
        </p>
      </div>
    </div>
  );
}

function AiThumbnail() {
  return <div className="bg-[#1e242a] w-full aspect-[16/9]" data-name="AI Thumbnail" />;
}

function ProjectInfo({ title, tags }: { title: string; tags: string }) {
  return (
    <div
      className="content-stretch flex flex-col min-[1120px]:flex-row font-normal items-start min-[1120px]:items-center justify-start min-[1120px]:justify-between gap-[6px] min-[1120px]:gap-0 leading-[0] relative shrink-0 w-full"
      data-name="Info Container"
    >
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#32404f] text-[18px] sm:text-[20px] tracking-[-0.64px]">
        <p className="leading-[28px] sm:leading-[38px]">{title}</p>
      </div>
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[13px] sm:text-[15px] text-[rgba(50,64,79,0.58)] uppercase">
        <p className="leading-[20px] sm:leading-[22.5px]">{tags}</p>
      </div>
    </div>
  );
}

function ProjectCard({ to, title, tags, showTopBorder = true }: { to?: string; title: string; tags: string; showTopBorder?: boolean }) {
  const inner = (
    <>
      {showTopBorder && <div aria-hidden="true" className="absolute border-[#ebeced] border-solid border-t inset-0 pointer-events-none" />}
      <AiThumbnail />
      <ProjectInfo title={title} tags={tags} />
    </>
  );

  if (to) {
    return (
      <RouterLink
        to={to}
        className="content-stretch flex flex-col gap-[12px] items-start relative group w-full transition-opacity duration-300 ease-in-out hover:opacity-60"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {inner}
      </RouterLink>
    );
  }

  return (
    <div
      className="content-stretch flex flex-col gap-[12px] items-start relative group w-full"
      data-cursor="coming-soon"
    >
      {inner}
    </div>
  );
}

function ProjectsGrid() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] sm:gap-[40px] items-start relative shrink-0 w-full" data-name="Projects Grid">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] sm:gap-[32px] items-start relative w-full">
        <ProjectCard to="/ai/project-1" title="Lorem Ipsum" tags="AI • Web App" />
        <ProjectCard title="Lorem Ipsum" tags="AI • Web App" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] sm:gap-[32px] items-start relative w-full">
        <ProjectCard title="Lorem Ipsum" tags="AI • Web App" />
        <ProjectCard title="Lorem Ipsum" tags="AI • Web App" />
      </div>
    </div>
  );
}

function MainFrame() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] sm:gap-[120px] items-start max-w-[1200px] mt-[40px] sm:mt-[60px] mx-auto w-full px-[20px] sm:px-[32px] lg:px-0" data-name="Main Frame">
      <ProjectsGrid />
    </div>
  );
}

export default function AiProjectPage() {
  return (
    <div className="bg-dot-grid min-h-screen flex flex-col relative w-full" data-name="AI Project Page">
      <HeaderContainer />
      <MainFrame />
      <Footer />
      <NavBar />
    </div>
  );
}
