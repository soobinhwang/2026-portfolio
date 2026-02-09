import imgImpactImage from "../assets/work/reward-storefront/41b6c62844189df22142385946af124d25b436c7.png";
import imgImpactImage1 from "../assets/work/reward-storefront/0bf1aaec7b99564ebf5e726aa918a53ff79ba4b3.png";
import imgMyRole from "../assets/work/reward-storefront/My Role.png";
import imgDetailThumbnail from "../assets/work/reward-storefront/P1-Detail-Thumbnail.png";
import imgPrioritization from "../assets/work/reward-storefront/Prioritization.png";
import imgProgramStructureAnalysis from "../assets/work/reward-storefront/program structure analysis.png";
import imgSolution from "../assets/work/reward-storefront/Solution.png";
import NavBar from "../app/components/NavBar";
import Footer from "../app/components/Footer";
import { Dialog, DialogContent, DialogTrigger } from "../app/components/ui/dialog";

function Frame3() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase whitespace-nowrap">
        <p className="leading-[22.5px]">impact</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center min-w-full relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-[min-content]">
        <p className="leading-[46px] whitespace-pre-wrap">Turning complexity into confident discovery</p>
      </div>
    </div>
  );
}

function ImpactImage() {
  return (
    <div className="h-[240px] relative shrink-0 w-[242px]" data-name="Impact image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#f0f3f5] inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[67.22%] left-0 max-w-none top-[16.39%] w-full" src={imgImpactImage} />
        </div>
      </div>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute h-[13px] left-[147px] top-[129px] w-[62px]" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-newsreader font-normal justify-center leading-[0] relative shrink-0 text-[#32404f] text-[19px] text-center tracking-[-0.424px] w-full">
        <p className="leading-[31.8px] whitespace-pre-wrap">Faster path to relevant items</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center justify-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <ImpactImage />
      <Frame />
    </div>
  );
}

function ImpactImage1() {
  return (
    <div className="bg-[#f0f3f5] h-[240px] relative shrink-0 w-[242px]" data-name="Impact image">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute h-[13px] left-[147px] top-[129px] w-[62px]" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-newsreader font-normal justify-center leading-[0] relative shrink-0 text-[#32404f] text-[19px] text-center tracking-[-0.424px] w-full">
        <p className="leading-[31.8px] whitespace-pre-wrap">Consistent discovery experience</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center justify-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <ImpactImage1 />
      <Frame1 />
    </div>
  );
}

function ImpactImage2() {
  return (
    <div className="h-[240px] relative shrink-0 w-[242px]" data-name="Impact image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#f0f3f5] inset-0" />
        <img alt="" className="absolute max-w-none object-contain size-full" src={imgImpactImage1} />
      </div>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute h-[13px] left-[147px] top-[129px] w-[62px]" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-newsreader font-normal justify-center leading-[0] relative shrink-0 text-[#32404f] text-[19px] text-center tracking-[-0.424px] w-full">
        <p className="leading-[31.8px] whitespace-pre-wrap">Scalable across diverse programs</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center justify-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <ImpactImage2 />
      <Frame2 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Container />
    </div>
  );
}

function Property() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch max-w-[774px] relative row-[2] self-start shrink-0" data-name="Property">
      <Frame3 />
      <Frame11 />
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
        <p className="leading-[46px] whitespace-pre-wrap">From problem framing to system-level UI design</p>
      </div>
      <div className="flex flex-col font-geist justify-center min-w-full relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-[min-content]">
        <p className="leading-[22.5px] whitespace-pre-wrap">I led the end-to-end definition and redesign of the shopping discovery experience, from reframing the core problem to designing system-level UI solutions, working closely with product and engineering through development-ready phases.</p>
      </div>
    </div>
  );
}

function SectionImageLg() {
  return (
    <div className="bg-[#f0f3f5] h-[266px] relative shrink-0 w-[774px]" data-name="section image lg">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <img alt="" className="absolute inset-0 size-full object-cover" src={imgMyRole} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <SectionImageLg />
    </div>
  );
}

function ContentSections() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch max-w-[774px] relative row-[9] self-start shrink-0" data-name="Content Sections">
      <SectionContainer1 />
      <Frame13 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">program Structure analysis</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Understanding how discovery was structured across programs</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">{` I reviewed the end-to-end user flow across different programs to understand how the storefront was structured and where discovery broke down. This revealed that users lacked fast access to a complete view of available categories, making it difficult to grasp the full breadth of options early in the journey.`}</p>
      </div>
    </div>
  );
}

function SectionImageLg1() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="bg-[#f0f3f5] h-[346px] relative shrink-0 w-[774px] cursor-pointer group"
          data-name="section image lg"
          aria-label="Open program structure analysis full view"
        >
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <img alt="" className="absolute inset-0 size-full object-cover" src={imgProgramStructureAnalysis} />
          </div>
          <div
            className="absolute right-[12px] top-[12px] flex h-[24px] w-[24px] items-center justify-center rounded-[7px] bg-white/60 border border-[#eceff2] transition-opacity duration-200 group-hover:opacity-80"
            aria-hidden="true"
          >
            <svg aria-hidden="true" className="h-[14px] w-[14px]" fill="none" viewBox="0 0 24 24">
              <path
                d="M14 3h7v7M21 3l-7 7M10 21H3v-7M3 21l7-7"
                stroke="#6b7785"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.4"
              />
            </svg>
          </div>
          <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
        </button>
      </DialogTrigger>
      <DialogContent className="w-[1362px] max-w-[96vw] sm:w-[1362px] sm:max-w-[96vw] p-0 border-0 bg-transparent shadow-none">
        <img
          alt=""
          className="w-full h-auto max-h-[90vh] object-contain rounded-[12px]"
          src={imgProgramStructureAnalysis}
        />
      </DialogContent>
    </Dialog>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <SectionImageLg1 />
    </div>
  );
}

function Property1() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start max-w-[774px] relative row-[10] self-start shrink-0 w-[774px]" data-name="Property">
      <Frame5 />
      <Frame14 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">User Behaviour analysis</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Rewards shopping follows a different exploration pattern</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col font-geist font-normal gap-[10px] items-center justify-center leading-[0] p-[24px] relative text-[16px] w-full">
          <div className="flex flex-col justify-center relative shrink-0 text-[#32404f] w-full">
            <p className="leading-[22.5px] whitespace-pre-wrap">Rewards users arrive without purchase intent</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-[#858e97] w-full">
            <p className="leading-[22.5px] whitespace-pre-wrap">Unlike traditional e-commerce, rewards users don’t visit with a specific product in mind. Infrequent visits to spend accumulated points make exploration more important than search.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col font-geist font-normal gap-[10px] items-center justify-center leading-[0] p-[24px] relative text-[16px] w-full">
          <div className="flex flex-col justify-center relative shrink-0 text-[#32404f] w-full">
            <p className="leading-[22.5px] whitespace-pre-wrap">Infrequent visits weaken product awareness</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-[#858e97] w-full">
            <p className="leading-[22.5px] whitespace-pre-wrap">Because users don’t visit often, they don’t have a clear sense of what the store offers. Over time, it becomes hard to understand the full range of rewards.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#f0f3f5] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col font-geist font-normal gap-[10px] items-center justify-center leading-[0] p-[24px] relative text-[16px] w-full">
          <div className="flex flex-col justify-center relative shrink-0 text-[#32404f] w-full">
            <p className="leading-[22.5px] whitespace-pre-wrap">Search fails without prior exploration</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-[#858e97] w-full">
            <p className="leading-[22.5px] whitespace-pre-wrap">Search only works once users know what exists. Without upfront visibility into available options, users don’t know what to search for and disengage early.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame19 />
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[774px] relative shrink-0 w-full">
      <Frame23 />
      <Frame22 />
    </div>
  );
}

function Property2() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start max-w-[774px] relative row-[11] self-start shrink-0 w-[774px]" data-name="Property">
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Prioritization</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Starting small, learning fast within constraints</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">With these insights in place, I prioritized changes that would create the most impact with minimal complexity. Rather than over-engineering the experience, the team aligned on shipping high-impact, low-effort improvements quickly, allowing us to learn, validate, and iterate within scope.</p>
      </div>
    </div>
  );
}

function SectionImageLg2() {
  return (
    <div className="bg-[#f0f3f5] h-[316px] relative shrink-0 w-[774px]" data-name="section image lg">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <img alt="" className="absolute inset-0 size-full object-cover" src={imgPrioritization} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <SectionImageLg2 />
    </div>
  );
}

function Property3() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start max-w-[774px] relative row-[12] self-start shrink-0 w-[774px]" data-name="Property">
      <Frame7 />
      <Frame15 />
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] relative shrink-0 w-full" data-name="Section Header">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[#858e97] text-[13px] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">B2B SaaS • web app • Ecommerce</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[42px] tracking-[-1.04px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Global Reward Storefront</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[#5b6a79] text-[16px] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Improving discoverability in a high-choice shopping platform</p>
      </div>
    </div>
  );
}

function Thumbnail() {
  return (
    <div className="bg-[#f0f3f5] h-[440px] shrink-0 w-[774px] overflow-clip relative" data-name="Detail Thumbnail">
      <img alt="" className="absolute inset-0 size-full object-cover" src={imgDetailThumbnail} />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[76px] items-center pb-[12px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ebeced] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-geist-mono font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-[72px]">
        <p className="leading-[22.5px] whitespace-pre-wrap">Role</p>
      </div>
      <div className="flex flex-col font-geist font-normal justify-center leading-[0] relative shrink-0 text-[#5b6a79] text-[15px] whitespace-nowrap">
        <p>
          <span className="leading-[24px]">{`UX `}</span>
          <span className="font-geist font-normal leading-[24px]">•</span>
          <span className="leading-[24px]">{` Product Designer`}</span>
        </p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[76px] items-center pb-[12px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ebeced] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-geist-mono font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-[72px]">
        <p className="leading-[22.5px] whitespace-pre-wrap">Timeline</p>
      </div>
      <div className="flex flex-col font-geist font-normal justify-center leading-[0] relative shrink-0 text-[#5b6a79] text-[15px] whitespace-nowrap">
        <p className="leading-[24px]">4 months · Jan - Apr 2025</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[76px] items-center pb-[12px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ebeced] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-geist-mono font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-[72px]">
        <p className="leading-[22.5px] whitespace-pre-wrap">Team</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-geist font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#5b6a79] text-[15px]">
        <p className="leading-[24px] whitespace-pre-wrap">{`Product Lead · UX Lead · 2 UX Designers · 1 Developer · CS Team · Business Analysts `}</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex font-normal gap-[76px] items-center leading-[0] relative shrink-0 text-[15px] w-full" data-name="Container">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[rgba(50,64,79,0.58)] uppercase w-[72px]">
        <p className="leading-[22.5px] whitespace-pre-wrap">Skills</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[#5b6a79] whitespace-nowrap">
        <p className="leading-[24px]">{`Problem Framing · Solution Scoping ·  UI Design`}</p>
      </div>
    </div>
  );
}

function Property4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[774px]" data-name="Property">
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
    </div>
  );
}

function ContentSections1() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start max-w-[774px] pt-[110px] relative row-[1] self-start shrink-0 w-[774px]" data-name="Content Sections">
      <SectionHeader />
      <Thumbnail />
      <Property4 />
    </div>
  );
}

function SectionContainer2() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] relative shrink-0 w-full" data-name="Section Container">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Background</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">A global storefront for employee rewards</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">The Global Rewards Storefront (GRS) is a points-based rewards store where employees redeem earned points for products, gift cards, or experiences, with global availability and client-specific branding.</p>
      </div>
    </div>
  );
}

function Property5() {
  return (
    <div className="bg-[#f0f3f5] h-[351px] relative shrink-0 w-[774px]" data-name="Property">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bg-[#f0f3f5] h-[33px] left-[332px] top-[105px] w-[86px]" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ContentSections2() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch max-w-[774px] relative row-[3] self-start shrink-0" data-name="Content Sections">
      <SectionContainer2 />
      <Property5 />
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
      <div className="content-stretch grid grid-cols-3 gap-[36px] items-start w-full">
        <SectionContainer8 />
        <SubsectionContainer5 />
        <SubsectionContainer7 />
      </div>
    </div>
  );
}

function ContentSections3() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch max-w-[774px] relative row-[14] self-start shrink-0" data-name="Content Sections">
      <SectionContainer6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Challenge</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">A fragmented discovery experience</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">The storefront lacked a scalable discovery system. Users struggled to form a clear mental model of where they were and what value they could use, while key shopping options remained hidden. This led to unnecessary steps and prevented users from fully experiencing the program’s breadth and value.</p>
      </div>
    </div>
  );
}

function SectionImageLg3() {
  return (
    <div className="bg-[#f0f3f5] h-[310px] relative shrink-0 w-[774px]" data-name="section image lg">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bg-[#f0f3f5] h-[33px] left-[332px] top-[105px] w-[86px]" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <SectionImageLg3 />
    </div>
  );
}

function Property6() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch max-w-[774px] relative row-[4] self-start shrink-0" data-name="Property">
      <Frame4 />
      <Frame12 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Solution</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Designing discoverability as a layered system</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">To reduce unnecessary steps in discovery, I designed discoverability as a system with two layers: establishing a clear mental model to anchor users in context, followed by early exposure of product breadth to accelerate exploration.</p>
      </div>
    </div>
  );
}

function SectionImageLg4() {
  return (
    <div className="bg-[#f0f3f5] h-[266px] relative shrink-0 w-[774px]" data-name="section image lg">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <img alt="" className="absolute inset-0 size-full object-cover" src={imgSolution} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <SectionImageLg4 />
    </div>
  );
}

function Property7() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch max-w-[774px] relative row-[5] self-start shrink-0" data-name="Property">
      <Frame8 />
      <Frame16 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Solution 1</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Establishing a clear mental model</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">To remove this cognitive friction, I redesigned the master header and points display to create a consistent orientation layer across the storefront. This clarified program context, applicable points, and pathways across storefronts.</p>
      </div>
    </div>
  );
}

function SectionImageLg5() {
  return (
    <div className="bg-[#f0f3f5] h-[310px] relative shrink-0 w-[774px]" data-name="section image lg">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bg-[#f0f3f5] h-[33px] left-[332px] top-[105px] w-[86px]" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <SectionImageLg5 />
    </div>
  );
}

function Property8() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch max-w-[774px] relative row-[6] self-start shrink-0" data-name="Property">
      <Frame9 />
      <Frame17 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[10px] items-start leading-[0] max-w-[774px] relative shrink-0 w-full">
      <div className="flex flex-col font-geist-mono justify-center relative shrink-0 text-[15px] text-[rgba(50,64,79,0.58)] uppercase w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">Solution 2</p>
      </div>
      <div className="flex flex-col font-newsreader justify-center relative shrink-0 text-[#1e242a] text-[35px] tracking-[-0.64px] w-full">
        <p className="leading-[46px] whitespace-pre-wrap">Making product breadth visible upfront</p>
      </div>
      <div className="flex flex-col font-geist justify-center relative shrink-0 text-[16px] text-[rgba(50,64,79,0.58)] w-full">
        <p className="leading-[22.5px] whitespace-pre-wrap">To remove navigational friction, I surfaced category structures early through upfront category displays and a mega-menu. This allowed users to scan available options quickly and jump directly to relevant areas while showcasing the platform’s breadth as a competitive strength.</p>
      </div>
    </div>
  );
}

function SectionImageLg6() {
  return (
    <div className="bg-[#f0f3f5] h-[310px] relative shrink-0 w-[774px]" data-name="section image lg">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bg-[#f0f3f5] h-[33px] left-[332px] top-[105px] w-[86px]" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <SectionImageLg6 />
    </div>
  );
}

function Property9() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch max-w-[774px] relative row-[7] self-start shrink-0" data-name="Property">
      <Frame10 />
      <Frame18 />
    </div>
  );
}

function SectionContainer() {
  return (
    <div className="gap-[170px] grid-cols-[repeat(1,_fit-content(100%))] grid-rows-[repeat(14,_fit-content(100%))] inline-grid max-w-[774px] pb-[48px] relative shrink-0" data-name="Section Container">
      <Property />
      <ContentSections />
      <div className="bg-[rgba(50,64,79,0.1)] col-[1] h-px justify-self-stretch row-[8] shrink-0" data-name="Horizontal Divider" />
      <div className="bg-[rgba(50,64,79,0.1)] col-[1] h-px justify-self-stretch row-[13] shrink-0" data-name="Horizontal Divider" />
      <Property1 />
      <Property2 />
      <Property3 />
      <ContentSections1 />
      <ContentSections2 />
      <ContentSections3 />
      <Property6 />
      <Property7 />
      <Property8 />
      <Property9 />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex items-center max-w-[774px] relative shrink-0" data-name="Content Container">
      <SectionContainer />
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex gap-[32px] items-start max-w-[774px] relative shrink-0 w-[774px]" data-name="Main Content">
      <ContentContainer />
    </div>
  );
}

export default function GlobalRewardStorefront() {
  return (
    <div className="bg-[#fbfdfd] content-stretch flex flex-col items-center min-h-screen relative w-full" data-name="Global Reward Storefront">
      <MainContent />
      <Footer />
      <NavBar />
    </div>
  );
}
