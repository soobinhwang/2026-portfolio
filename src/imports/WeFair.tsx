import { Link as RouterLink } from "react-router";
import Footer from "../app/components/Footer";
import NavBar from "../app/components/NavBar";
import { Dialog, DialogContent, DialogTrigger } from "../app/components/ui/dialog";
import imgDetailThumbnail from "../assets/work/wefair/P5-Detail-Thumbnail.png";
import imgOverview from "../assets/work/wefair/Overview.png";
import imgRoadmap from "../assets/work/wefair/Roadmap.png";
import imgUserResearch from "../assets/work/wefair/user research.png";
import imgBenchmark from "../assets/work/wefair/benchmark.png";
import imgCompetitiveAnalysis from "../assets/work/wefair/comanalysis.png";
import imgPossibleSolutions from "../assets/work/wefair/possible solutions.png";
import imgIdeation from "../assets/work/wefair/ideation.png";
import imgSolution1 from "../assets/work/wefair/solution 1.png";
import imgSolution2 from "../assets/work/wefair/solution 2.png";
import imgSolution3 from "../assets/work/wefair/solution 3.png";
import imgSolution4 from "../assets/work/wefair/solution 4.png";

function ZoomableImage({ src, alt = "", darkBadge = false }: { src: string; alt?: string; darkBadge?: boolean }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" className="relative shrink-0 w-full cursor-pointer group" aria-label="Open image full view">
          <img loading="lazy" decoding="async" alt={alt} className="block w-full h-auto" src={src} />
          <div className={`absolute right-[12px] top-[12px] flex h-[24px] w-[24px] items-center justify-center rounded-[7px] border transition-opacity duration-200 group-hover:opacity-90 ${darkBadge ? "bg-[rgba(30,36,42,0.78)] border-[#1e242a]" : "bg-white/60 border-[#eceff2]"}`} aria-hidden="true">
            <svg aria-hidden="true" className="h-[14px] w-[14px]" fill="none" viewBox="0 0 24 24">
              <path d="M14 3h7v7M21 3l-7 7M10 21H3v-7M3 21l7-7" stroke={darkBadge ? "#f0f3f5" : "#6b7785"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
            </svg>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="w-[1362px] max-w-[96vw] sm:w-[1362px] sm:max-w-[96vw] p-0 border-0 bg-transparent shadow-none">
        <img loading="lazy" decoding="async" alt={alt} className="w-full h-auto max-h-[90vh] object-contain rounded-[12px]" src={src} />
      </DialogContent>
    </Dialog>
  );
}

function Divider() {
  return <div className="bg-[rgba(50,64,79,0.1)] h-px w-full shrink-0" />;
}

function SectionLabel({ text }: { text: string }) {
  return (
    <p className="font-geist-mono text-[15px] text-[rgba(50,64,79,0.58)] uppercase leading-[22.5px]">{text}</p>
  );
}

function SectionTitle({ text }: { text: string }) {
  return (
    <p className="font-newsreader text-[35px] text-[#1e242a] tracking-[-0.64px] leading-[46px]">{text}</p>
  );
}

function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-geist text-[16px] text-[rgba(50,64,79,0.58)] leading-[22.5px] whitespace-pre-wrap">{children}</p>
  );
}


function NumberedItem({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex gap-[20px] items-start w-full">
      <p className="font-geist-mono text-[13px] text-[rgba(50,64,79,0.35)] leading-[30px] shrink-0 w-[16px]">{number}</p>
      <div className="flex flex-col gap-[6px]">
        <p className="font-newsreader text-[20px] text-[#32404f] tracking-[-0.424px] leading-[30px]">{title}</p>
        <p className="font-geist text-[16px] text-[rgba(50,64,79,0.58)] leading-[22.5px]">{description}</p>
      </div>
    </div>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row gap-[8px] sm:gap-[76px] items-start sm:items-center pb-[12px] relative w-full">
      <div aria-hidden="true" className="absolute border-[#ebeced] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-geist-mono text-[15px] text-[rgba(50,64,79,0.58)] uppercase leading-[22.5px] w-full sm:w-[132px] shrink-0">{label}</p>
      <p className="font-geist text-[15px] text-[#5b6a79] leading-[24px] w-full">{value}</p>
    </div>
  );
}

// ── Page Header ──────────────────────────────────────────

function PageHeader() {
  return (
    <div className="flex flex-col gap-[16px] w-full pt-[48px] sm:pt-[48px]">
      <p className="font-geist-mono text-[13px] text-[#858e97] uppercase tracking-wide leading-[22.5px]">
        Hackathon · 2nd Place
      </p>
      <p className="font-newsreader text-[42px] text-[#1e242a] tracking-[-1.04px] leading-[normal]">
        Ethical Shopping App WeFair
      </p>
      <p className="font-geist text-[16px] text-[#5b6a79] leading-[22.5px]">
        A mobile app that informs consumer segment about brands who support living wages directly benefiting workers and their families.
      </p>
    </div>
  );
}

function HeroThumbnail() {
  return (
    <div className="relative shrink-0 w-full overflow-clip">
      <img loading="eager" fetchPriority="high" decoding="async" alt="" className="block w-full h-auto object-cover" src={imgDetailThumbnail} />
    </div>
  );
}

function MetaTable() {
  return (
    <div className="flex flex-col gap-[12px] w-full">
      <MetaRow label="Timeline" value="Dec 10–16, 2021 (1 week)" />
      <MetaRow label="Role" value="UX Designer" />
      <MetaRow label="Team" value="2 UX Designers" />
      <MetaRow label="Contribution" value="Project Management · Articulating Vague Concepts · UX Research · UI Design" />
      <MetaRow label="Deliverables" value="Mobile App Prototype" />
    </div>
  );
}

function OverviewSection() {
  return (
    <div className="flex flex-col gap-[16px] w-full">
      <SectionLabel text="Overview" />
      <BodyText>
        Inform consumer segment about brands who support living wages directly benefiting workers and their families. Provide transparent information on brands and allow users to learn more about fair trade, shop items from ethical brands or support them through diverse activities.{"\n\n"}Got 90/100 and landed on 🥈 2nd place of 432 competitors.
      </BodyText>
      <PrototypeLink />
      <img loading="lazy" decoding="async" alt="" className="block w-full h-auto" src={imgOverview} />
    </div>
  );
}

// ── Roadmap ───────────────────────────────────────────────

function RoadmapSection() {
  return (
    <div className="flex flex-col gap-[16px] w-full">
      <SectionLabel text="Roadmap" />
      <SectionTitle text="How we managed our time within the allocated timeframe" />
      <BodyText>
        We aimed to achieve a work flow that was compatible for both of our schedules and we also had daily meetings in order to check in and coordinate with each other. From day 1 to 3, we spent our time outlining the project and brainstorming effective solutions.
      </BodyText>
      <img loading="lazy" decoding="async" alt="" className="block w-full h-auto" src={imgRoadmap} />
    </div>
  );
}

// ── Secondary Research ────────────────────────────────────

function SecondaryResearchSection() {
  return (
    <div className="flex flex-col gap-[16px] w-full">
      <SectionLabel text="Secondary Research" />
      <SectionTitle text="Current issues in fashion industry" />
      <div className="flex flex-col gap-[24px] w-full">
        <NumberedItem
          number="1"
          title="Wage Inequality"
          description="Clean Clothes Campaign calculated that wages for garment production are rarely more than 3% of the final retail price of a garment."
        />
        <NumberedItem
          number="2"
          title="Transparency Issues"
          description="Most of clothing companies have a lack of transparency on communities or factories where revenue is distributed."
        />
        <NumberedItem
          number="3"
          title="Pollution Concerns"
          description="Fast fashion is one of the highest polluting industries, aside from oil and gas. The toxic chemicals in these types of fabric also cause negative effects to the planet and threatens our oceans."
        />
      </div>
    </div>
  );
}

// ── User Research ─────────────────────────────────────────

function UserResearchSection() {
  return (
    <div className="flex flex-col gap-[16px] w-full">
      <SectionLabel text="User Research" />
      <SectionTitle text="Who would like to know about fair trade brands?" />
      <BodyText>
        A lot of consumers are actively consuming fast fashion brands but were not aware of how their purchase decisions impact on the environment, apparel workers, and the supply chain. The core issue was that the users were not familiar with basic fair trade concepts and lacked the ability to find this information which we intent to address through our app.
      </BodyText>
      <img loading="lazy" decoding="async" alt="" className="block w-full h-auto" src={imgUserResearch} />
    </div>
  );
}

// ── Bench Marking ─────────────────────────────────────────

function BenchMarkingSection() {
  return (
    <div className="flex flex-col gap-[16px] w-full">
      <SectionLabel text="Bench Marking" />
      <SectionTitle text="Benchmarked from the Patagonia website" />
      <BodyText>
        It was quite challenging to find the product on the market that had the same goal with what we were trying to make.{"\n\n"}However, Patagonia website was a good example to see how to deliver a consistent message by telling customers the stories behind each product. So we benchmarked their way of conveying message with the products.
      </BodyText>
      <ZoomableImage src={imgBenchmark} />
    </div>
  );
}

// ── Competitive Analysis ──────────────────────────────────

function CompetitiveAnalysisSection() {
  return (
    <div className="flex flex-col gap-[16px] w-full">
      <SectionLabel text="Competitive Analysis" />
      <SectionTitle text="Brands who are aware of their impact" />
      <BodyText>
        I was quite surprised there are many good brands out there that I didn't know before. In this analysis step, we focused on their pros and cons as these four competitors have their own unique ways to tell their stories of their manufacturing process, but there wasn't enough supporting data so it was hard to tell if that's reliable resources.
      </BodyText>
      <ZoomableImage src={imgCompetitiveAnalysis} />
    </div>
  );
}

// ── Key Takeaways ─────────────────────────────────────────

function KeyTakeawaysSection() {
  return (
    <div className="flex flex-col gap-[16px] w-full">
      <SectionLabel text="Key Takeaways" />
      <div className="flex flex-col gap-[24px] w-full">
        <NumberedItem
          number="1"
          title="Current Issues"
          description="Fast fashion is a popular and exploitative business model based on replicating high-fashion designs, mass-producing them at low cost. Apparel workers are among the lowest paid people in the world. Mass-production is also causing significant environmental damage."
        />
        <NumberedItem
          number="2"
          title="User Analysis"
          description="Fast fashion consumers are defined as women under the age of 35, but largely aged 18 and 24 who are often students with low incomes. Users' main goal is to learn about fair trade brands and make a wise purchase decision in order to create a better supply chain."
        />
        <NumberedItem
          number="3"
          title="Benchmarking"
          description="Educate and inform users by delivering consistent message and providing information and the stories of what's happening behind the scenes. Their main focus was the environmental impact not the workers or their families."
        />
        <NumberedItem
          number="4"
          title="Competitive Analysis"
          description="The detailed information mostly is provided with text and images — needs visual data that is easy to understand. None of the websites is providing activities that customers can participate in."
        />
      </div>
    </div>
  );
}

// ── Problems ──────────────────────────────────────────────

function ProblemsSection() {
  return (
    <div className="flex flex-col gap-[16px] w-full">
      <SectionLabel text="Problems" />
      <SectionTitle text="4 main problems" />
      <div className="flex flex-col gap-[24px] w-full">
        <NumberedItem
          number="1"
          title="Lack of transparent information"
          description="Uneasy access on information about the impact of employment and manufacturing process of fashion brands."
        />
        <NumberedItem
          number="2"
          title="Not familiar with the concept and issues"
          description="Consumers are not fully aware of what fair trade is."
        />
        <NumberedItem
          number="3"
          title="Need more attention from consumers"
          description="To make better supply chain, we need more participation from the consumers."
        />
        <NumberedItem
          number="4"
          title="Vicious circle of consume practices"
          description="Mass production results in mass consumption which creates a vicious circle."
        />
      </div>
    </div>
  );
}

// ── Solutions ─────────────────────────────────────────────

function SolutionsSection() {
  return (
    <div className="flex flex-col gap-[16px] w-full">
      <SectionLabel text="Approach" />
      <SectionTitle text="4 possible solutions" />
      <img loading="lazy" decoding="async" alt="" className="block w-full h-auto" src={imgPossibleSolutions} />
    </div>
  );
}

// ── Ideation ──────────────────────────────────────────────

function IdeationSection() {
  return (
    <div className="flex flex-col gap-[16px] w-full">
      <SectionLabel text="Ideation" />
      <SectionTitle text="Low fidelity Wireframes" />
      <ZoomableImage src={imgIdeation} />
    </div>
  );
}

// ── Final Designs ─────────────────────────────────────────

function FinalDesign({ number, title, description, image }: {
  number: string; title: string; description: string; image: string;
}) {
  return (
    <div className="flex flex-col gap-[16px] w-full">
      <div className="flex flex-col gap-[16px] w-full">
        <SectionLabel text={number} />
        <SectionTitle text={title} />
        <BodyText>{description}</BodyText>
      </div>
      <ZoomableImage src={image} darkBadge />
    </div>
  );
}

function FinalDesignsSection() {
  return (
    <div className="flex flex-col gap-[64px] sm:gap-[80px] w-full">
      <FinalDesign
        number="Solution 1"
        title="Transparency on fashion brands and factories"
        description="Provide visually well-organized detail information about brands such as footprints, price & wage transparency, how they support living wage and what benefits the company offers to workers."
        image={imgSolution1}
      />
      <FinalDesign
        number="Solution 2"
        title="Educate customers on fair trade"
        description="Reading materials about what's happening in fashion industry sorted by key words. Recommend related actions at the end of the articles so that it encourages users to take actions."
        image={imgSolution2}
      />
      <FinalDesign
        number="Solution 3"
        title="Encourage consumers to take actions"
        description="The four actions include events, donations, petitions, and volunteer programs. Users can find the activities based on their location and interests."
        image={imgSolution3}
      />
      <FinalDesign
        number="Solution 4"
        title="Make better supply chain practices"
        description="Inform them how their purchase affects apparel workers and suggest buying secondhand items."
        image={imgSolution4}
      />
    </div>
  );
}

// ── Prototype Link ────────────────────────────────────────

function PrototypeLink() {
  return (
    <div className="flex w-full">
      <a
        href="https://xd.adobe.com/view/598ea877-14df-4db4-b859-6ade634b6b45-0cdd/"
        target="_blank"
        rel="noreferrer"
        className="font-geist text-[16px] text-[#1700cf] leading-[22.5px] hover:opacity-70 transition-opacity"
      >
        View interactive prototype →
      </a>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────

export default function WeFair() {
  return (
    <div className="bg-[#fbfdfd] min-h-screen flex flex-col items-center pt-[96px] sm:pt-[110px] px-[20px]">
      <div className="flex flex-col items-start w-full max-w-[774px]">
        <div className="flex flex-col gap-[16px] w-full">
          <PageHeader />
          <HeroThumbnail />
          <MetaTable />
        </div>
        <div className="flex flex-col gap-[110px] sm:gap-[170px] w-full py-[110px] sm:py-[170px]">
          <OverviewSection />
          <Divider />
          <RoadmapSection />
          <SecondaryResearchSection />
          <UserResearchSection />
          <BenchMarkingSection />
          <CompetitiveAnalysisSection />
          <Divider />
          <KeyTakeawaysSection />
          <ProblemsSection />
          <SolutionsSection />
          <IdeationSection />
          <Divider />
          <FinalDesignsSection />
        </div>
      </div>
      <Footer maxWidthClass="max-w-[774px]" emailVariant="text" paddingXClass="px-[20px] sm:px-0" />
      <NavBar />
    </div>
  );
}
