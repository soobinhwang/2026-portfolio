import { Link, useLocation } from "react-router";
import resumePdf from "../../assets/About/Sue Hwang - Resume.pdf";

const NAV_ITEMS = [
  { label: "Work", to: "/" },
  { label: "AI", to: "/ai" },
  { label: "About", to: "/about" },
  { label: "Resume", href: resumePdf },
];

function isActive(pathname: string, to: string) {
  if (to === "/") return pathname === "/";
  return pathname.startsWith(to);
}

export default function NavBar() {
  const { pathname } = useLocation();
  const isTopLevelPage = pathname === "/" || pathname === "/ai" || pathname === "/about";

  return (
    <>
    <style>{`
      @keyframes ai-shine-slide {
        0%   { transform: translateX(-150%); }
        25%  { transform: translateX(150%); }
        100% { transform: translateX(150%); }
      }
      .ai-shine-container {
        overflow: hidden;
      }
      .ai-shine-container::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.65) 50%, rgba(255,255,255,0) 100%);
        transform: translateX(-150%);
        animation: ai-shine-slide 5s ease-in-out 2s infinite;
        pointer-events: none;
        z-index: 1;
      }
    `}</style>
    <div className="-translate-x-1/2 fixed content-stretch flex flex-col items-start left-1/2 top-[40px] z-50">
      <div className="content-stretch flex flex-col items-end justify-center relative shrink-0">
        <div className="bg-white content-stretch flex items-center justify-center overflow-clip px-[24px] py-[12px] relative rounded-[24px] shrink-0 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
          <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0">
            {NAV_ITEMS.map((item) => {
              const active = item.to ? isActive(pathname, item.to) : false;
              const disabled = Boolean(item.disabled);
              const textColor = active ? "#1700CF" : disabled ? "#9aa3ad" : "#32404f";

              const inner = (
                <div
                  className={`flex items-center justify-center relative shrink-0 group${item.label === "AI" && !active && isTopLevelPage ? " ai-shine-container" : ""}`}
                  data-cursor={disabled ? "coming-soon" : undefined}
                >
                  <div
                    className="flex flex-col font-geist-mono font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center tracking-[-0.5px] whitespace-nowrap transition-colors duration-200 uppercase"
                    style={{ color: textColor }}
                    onMouseEnter={(e) => {
                      if (!active && !disabled) e.currentTarget.style.color = "#1700CF";
                    }}
                    onMouseLeave={(e) => {
                      if (!active && !disabled) e.currentTarget.style.color = "#32404f";
                    }}
                  >
                    <p className="leading-[24px]">{item.label}</p>
                  </div>
                </div>
              );

              if (item.to && !disabled) {
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {inner}
                  </Link>
                );
              }

              if (item.href && !disabled) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {inner}
                  </a>
                );
              }

              return (
                <div
                  key={item.label}
                  className="content-stretch flex flex-col items-start relative shrink-0"
                  style={{ cursor: disabled ? "not-allowed" : "default", opacity: disabled ? 0.7 : 1 }}
                >
                  {inner}
                </div>
              );
            })}
          </div>
          <div className="absolute inset-0 rounded-[24px] pointer-events-none">
            <div
              aria-hidden="true"
              className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[24px]"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
