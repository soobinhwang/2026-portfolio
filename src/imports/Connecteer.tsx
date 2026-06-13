import { Link as RouterLink } from "react-router";
import Footer from "../app/components/Footer";
import NavBar from "../app/components/NavBar";
import imgDetailThumbnail from "../assets/work/connecteer/P6-Detail-Thumbnail.png";
import imgOverview from "../assets/work/connecteer/Overview.png";
import imgSecondaryResearch from "../assets/work/connecteer/secondary research.png";
import imgUserResearch from "../assets/work/connecteer/user research.png";
import imgIdeation from "../assets/work/connecteer/ideation.png";
import imgUserFlow1 from "../assets/work/connecteer/user flow 1.png";
import imgUserFlow2 from "../assets/work/connecteer/user flow 2.png";
import imgSolution1 from "../assets/work/connecteer/Solution 1.png";
import imgSolution2 from "../assets/work/connecteer/Solution 2.png";
import imgSolution3 from "../assets/work/connecteer/Solution 3.png";
import imgSolution4 from "../assets/work/connecteer/Solution 4.png";
import imgSolution5 from "../assets/work/connecteer/Solution 5.png";
import imgSolution6 from "../assets/work/connecteer/Solution 6.png";

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
        Volunteer Matching App Connecteer
      </p>
      <p className="font-geist text-[16px] text-[#5b6a79] leading-[22.5px]">
        An inclusive experience for high school students looking for volunteer opportunities, no matter what their background or ability.
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
      <MetaRow label="Timeline" value="Oct 20 – Nov 4, 2021 (2 weeks)" />
      <MetaRow label="Role" value="UX UI Designer" />
      <MetaRow label="Team" value="UX UI Designer · UX UI Designer" />
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
        Design an inclusive experience for high school students looking for opportunities to volunteer to help their local community, no matter their background or ability. Tailored volunteer recommendations based on interests. Filters for locations, durations, ratings, and categories. Accessibility settings for personalized assistance.{"\n\n"}Got 89/100 and landed on 2nd place of 432 competitors.
      </BodyText>
      <PrototypeLink />
      <img loading="lazy" decoding="async" alt="" className="block w-full h-auto" src={imgOverview} />
    </div>
  );
}

// ── Secondary Research ────────────────────────────────────

function SecondaryResearchSection() {
  return (
    <div className="flex flex-col gap-[16px] w-full">
      <SectionLabel text="Secondary Research" />
      <SectionTitle text="How can we accommodate Inclusivity and Accessibility concepts in our design?" />
      <BodyText>
        {`"...Not everyone is the same when it comes to vision, hearing, cognitive and motor abilities, language, environment, race, culture, and literacy. Equitable design is aimed to accommodate differences in the contexts of students' identities, access, and experiences, not to treat all of them the same. Design with excluded and diverse communities, not for them, and that will help contribute to more inclusive technology."`}
      </BodyText>
      <img loading="lazy" decoding="async" alt="" className="block w-full h-auto" src={imgSecondaryResearch} />
    </div>
  );
}

// ── User Research ─────────────────────────────────────────

function UserResearchSection() {
  return (
    <div className="flex flex-col gap-[16px] w-full">
      <SectionLabel text="User Research" />
      <SectionTitle text="What type of students would like to use this service?" />
      <BodyText>
        We asked a few people who just turned their 20s to see what features they might want it to be added. We got 4 pain points based on user interview.
      </BodyText>
      <img loading="lazy" decoding="async" alt="" className="block w-full h-auto" src={imgUserResearch} />
    </div>
  );
}

// ── Ideation ──────────────────────────────────────────────

function IdeationSection() {
  return (
    <div className="flex flex-col gap-[16px] w-full">
      <SectionLabel text="Ideation" />
      <SectionTitle text="Explore potential features designed to meet users' needs" />
      <BodyText>
        Based on our understanding of what users need, we developed our ideas and made a list of goals of our app and possible features that can solve users' pain points and make our app stand out from competitors as well.
      </BodyText>
      <img loading="lazy" decoding="async" alt="" className="block w-full h-auto" src={imgIdeation} />
    </div>
  );
}

// ── Competitive Analysis ──────────────────────────────────

function CompetitiveAnalysisSection() {
  return (
    <div className="flex flex-col gap-[16px] w-full">
      <SectionLabel text="Competitive Analysis" />
      <SectionTitle text="Crafted the sitemap and user flow" />
      <img loading="lazy" decoding="async" alt="" className="block w-full h-auto" src={imgUserFlow1} />
      <img loading="lazy" decoding="async" alt="" className="block w-full h-auto" src={imgUserFlow2} />
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
      <img loading="lazy" decoding="async" alt="" className="block w-full h-auto" src={image} />
    </div>
  );
}

function FinalDesignsSection() {
  return (
    <div className="flex flex-col gap-[64px] sm:gap-[80px] w-full">
      <FinalDesign
        number="Solution 1"
        title="Various ways to find volunteer works that are suitable for users"
        description="Connecteer recommends volunteer programs based on the user's interests and creates a group of lists that help users find the programs that match with them easier with how much it matches with their interests. Users are able to filter all out by locations, durations, ratings and categories."
        image={imgSolution1}
      />
      <FinalDesign
        number="Solution 2"
        title="More options to express users themselves to feel safe and included"
        description="Give users options to choose the pronouns they want to be called. Instead of using profile pictures, they can choose or customize their own avatars. This is to not show guessable information like their age, country, or race."
        image={imgSolution2}
      />
      <FinalDesign
        number="Solution 3"
        title="Community for assistance or find a member to join"
        description="Create a community for users looking for assistance or find a member to join the volunteer programs together. The purpose is to let high school students help each other so that students with disabilities can also join the programs."
        image={imgSolution3}
      />
      <FinalDesign
        number="Solution 4"
        title="Customizable accessibility settings"
        description="Enable users to customize the accessible settings depending on the supports they need such as vision, hearing, cognitive, motor abilities, and language."
        image={imgSolution4}
      />
      <FinalDesign
        number="Solution 5"
        title="Voice records and text-to-speech features"
        description="Provide users with voice records and text-to-speech features. People who have difficulty writing or reading can post and read the posts with text to speech features. Automatic reply is available on chat feature."
        image={imgSolution5}
      />
      <FinalDesign
        number="Solution 6"
        title="Easy to check the volunteer process"
        description="To make the volunteer confirmation process easy, users can check and track their history, and download the form. They also can simply check the attendance with QR code."
        image={imgSolution6}
      />
    </div>
  );
}

// ── Prototype Link ────────────────────────────────────────

function PrototypeLink() {
  return (
    <div className="flex w-full">
      <a
        href="https://xd.adobe.com/view/0de6016a-1473-42c4-a20b-83e972fb0ad5-58b5/"
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

export default function Connecteer() {
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
          <SecondaryResearchSection />
          <UserResearchSection />
          <IdeationSection />
          <CompetitiveAnalysisSection />
          <Divider />
          <FinalDesignsSection />
        </div>
      </div>
      <Footer maxWidthClass="max-w-[774px]" emailVariant="text" paddingXClass="px-[20px] sm:px-0" />
      <NavBar />
    </div>
  );
}
