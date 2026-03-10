import { useEffect, useRef, useState } from "react";
import { Link as RouterLink } from "react-router";
import resumePdf from "../../assets/About/Sue Hwang - Resume.pdf";

type FooterProps = {
  maxWidthClass?: string;
  emailVariant?: "pill" | "text";
  stacked?: boolean;
  swapOrder?: boolean;
  paddingXClass?: string;
};

type FooterLinkItem = {
  href?: string;
  label: string;
  onClick?: () => void;
  to?: string;
};

export default function Footer({
  maxWidthClass = "max-w-[1200px]",
  emailVariant = "pill",
  stacked = false,
  swapOrder = false,
  paddingXClass = "px-[20px] sm:px-[32px] lg:px-0",
}: FooterProps) {
  const [copied, setCopied] = useState(false);
  const copyTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        window.clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  const handleCopy = () => {
    void navigator.clipboard.writeText("soobinhwang317@gmail.com");
    setCopied(true);
    if (copyTimeoutRef.current) {
      window.clearTimeout(copyTimeoutRef.current);
    }
    copyTimeoutRef.current = window.setTimeout(() => setCopied(false), 1400);
    window.dispatchEvent(
      new CustomEvent("cursor-flash", { detail: { text: "Email copied!" } }),
    );
  };

  const currentYear = new Date().getFullYear();
  const useTextColumnsLayout = maxWidthClass === "max-w-[1200px]" && emailVariant === "pill" && !stacked;
  const footerGroups: Array<{ items: FooterLinkItem[]; title: string }> = [
    {
      title: "Connect",
      items: [
        { label: "Send a Message", href: "mailto:soobinhwang317@gmail.com" },
        { label: "Schedule a Call", href: "https://cal.com/sue-hwang-dwcdjs" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/sue-product-dsgn/" },
      ],
    },
    {
      title: "About",
      items: [
        { label: "About", to: "/about" },
        { label: "Resume", href: resumePdf },
      ],
    },
    {
      title: "Projects",
      items: [
        { label: "Work", to: "/" },
        { label: "AI", to: "/ai" },
      ],
    },
  ];
  const containerClassName = `flex flex-col items-center text-center ${stacked ? "gap-[20px]" : "gap-[16px] sm:flex-row sm:items-center sm:justify-between sm:text-left"} py-[18px] sm:py-[20px] relative w-full mx-auto ${paddingXClass} font-geist-mono ${maxWidthClass}`;
  const groupDesktopOrderClass = stacked ? "sm:order-1" : swapOrder ? "sm:order-1" : "sm:order-2";
  const textDesktopOrderClass = stacked ? "sm:order-2" : swapOrder ? "sm:order-2" : "sm:order-1";
  const leftOrderClass = swapOrder ? "lg:order-2" : "lg:order-1";
  const rightOrderClass = swapOrder ? "lg:order-1" : "lg:order-2";

  return (
    <footer
      className="content-stretch mt-[100px] flex w-full shrink-0 flex-col items-center border-t border-[rgba(215,221,226,0.5)] bg-[#fbfdfd]"
      data-name="Footer"
    >
      {useTextColumnsLayout ? (
        <div
          className={`mx-auto grid w-full ${maxWidthClass} ${paddingXClass} gap-[32px] py-[18px] sm:py-[20px] lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-[56px]`}
        >
          <div className={`flex flex-col gap-[6px] ${leftOrderClass}`}>
            <div className="font-geist-mono text-[15px] leading-[24px] tracking-[-0.35px] text-[#32404f]">
              <p>Designed + vibe coded by Sue</p>
            </div>
            <div className="font-geist-mono text-[15px] leading-[24px] tracking-[-0.35px] text-[#5b6a79]">
              <p>© {currentYear} Sue Hwang. All Rights Reserved.</p>
            </div>
          </div>

          <div className={`grid grid-cols-2 gap-x-[32px] gap-y-[24px] sm:grid-cols-3 ${rightOrderClass}`}>
            {footerGroups.map((group) => (
              <div key={group.title} className="flex min-w-[112px] flex-col gap-[10px]">
                <p className="font-geist-mono text-[15px] leading-[24px] tracking-[-0.35px] text-[#32404f]">
                  {group.title}
                </p>
                <div className="flex flex-col gap-[8px]">
                  {group.items.map((item) => {
                    const itemClassName = "font-geist-mono text-[15px] leading-[24px] tracking-[-0.35px] text-[#5b6a79] transition-colors duration-200 hover:text-[#1700cf]";

                    if (item.to) {
                      return (
                        <RouterLink key={item.label} to={item.to} className={itemClassName}>
                          {item.label}
                        </RouterLink>
                      );
                    }

                    if (item.onClick) {
                      return (
                        <button
                          key={item.label}
                          type="button"
                          onClick={item.onClick}
                          className={`${itemClassName} w-fit border-0 bg-transparent p-0 text-left`}
                          aria-label="Copy email"
                        >
                          {item.label}
                        </button>
                      );
                    }

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className={itemClassName}
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={containerClassName}>
          <div className={`order-1 ${groupDesktopOrderClass} flex flex-row flex-wrap gap-[16px] sm:gap-[20px] items-center`}>
            {emailVariant === "pill" ? (
              <>
                <div className="hidden sm:flex items-center gap-[10px] bg-[#f0f3f5] rounded-full px-[16px] py-[8px] text-[#32404f] text-[14px]">
                  <span className="leading-[20px]">soobinhwang317@gmail.com</span>
                  <button
                    className="bg-white text-[#32404f] text-[13px] sm:text-[15px] uppercase leading-[20px] rounded-full px-[12px] py-[4px] hover:bg-[#eef1f4] hover:text-[#1e242a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#32404f]/30 transition-colors"
                    type="button"
                    data-cursor="lets-chat"
                    onClick={handleCopy}
                    aria-label="Copy email"
                  >
                    COPY
                  </button>
                </div>
                <div className="relative sm:hidden">
                  {copied ? (
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-[8px] inline-flex items-center rounded-full bg-[#1700CF] px-[12px] py-[5px] font-geist-mono text-[11px] font-medium uppercase tracking-[0.04em] text-white whitespace-nowrap">
                      Email copied!
                    </span>
                  ) : null}
                  <button
                    className="border-0 bg-transparent m-0 p-0 font-normal text-[#32404f] text-[13px] sm:text-[15px] uppercase tracking-[0.06em] hover:text-[#1e242a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#32404f]/30"
                    type="button"
                    data-cursor="copy-email"
                    onClick={handleCopy}
                    aria-label="Copy email"
                  >
                    Email
                  </button>
                </div>
              </>
            ) : (
              <div className="relative">
                {copied ? (
                  <span className="sm:hidden absolute bottom-full left-1/2 -translate-x-1/2 mb-[8px] inline-flex items-center rounded-full bg-[#1700CF] px-[12px] py-[5px] font-geist-mono text-[11px] font-medium uppercase tracking-[0.04em] text-white whitespace-nowrap">
                    Email copied!
                  </span>
                ) : null}
                <button
                  className="border-0 bg-transparent m-0 p-0 font-normal text-[#32404f] text-[13px] sm:text-[15px] uppercase tracking-[0.06em] hover:text-[#1e242a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#32404f]/30"
                  type="button"
                  data-cursor="copy-email"
                  onClick={handleCopy}
                  aria-label="Copy email"
                >
                  Email
                </button>
              </div>
            )}
            <div className="flex items-center gap-[16px] text-[13px] sm:text-[15px] uppercase tracking-[0.06em] text-[#32404f]">
              <a className="hover:text-[#1e242a] transition-colors" href="https://github.com/soobinhwang" target="_blank" rel="noreferrer">
                Github
              </a>
              <a className="hover:text-[#1e242a] transition-colors" href="https://www.linkedin.com/in/sue-product-dsgn/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
          <div className={`order-2 ${textDesktopOrderClass} flex flex-col items-center font-normal justify-center leading-[0] text-[#32404f] text-[16px] sm:text-[15px] text-center tracking-[-0.2px] sm:items-start sm:text-left`}>
            <p className="font-geist-mono leading-[24px] uppercase">Designed + vibe coded by Sue</p>
          </div>
        </div>
      )}
    </footer>
  );
}
