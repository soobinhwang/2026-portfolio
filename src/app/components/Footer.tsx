import { useEffect, useRef, useState } from "react";

type FooterProps = {
  maxWidthClass?: string;
  paddingXClass?: string;
};

const linkClass = "font-inter font-normal text-[16px] text-[#32404f] tracking-[-0.5px] leading-[24px] underline underline-offset-2 decoration-transparent hover:decoration-current transition-[text-decoration-color] duration-200";

function EmailButton() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => { if (timeoutRef.current) window.clearTimeout(timeoutRef.current); };
  }, []);

  const handleCopy = () => {
    void navigator.clipboard.writeText("soobinhwang317@gmail.com");
    setCopied(true);
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setCopied(false), 1400);
    window.dispatchEvent(new CustomEvent("cursor-flash", { detail: { text: "Email copied!" } }));
  };

  return (
    <div className="relative">
      {copied && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-[8px] inline-flex items-center rounded-full bg-[#1700CF] px-[12px] py-[5px] font-inter text-[11px] font-medium tracking-[0.04em] text-white whitespace-nowrap pointer-events-none">
          Email copied!
        </span>
      )}
      <button type="button" onClick={handleCopy} className={linkClass} aria-label="Copy email address">
        Email
      </button>
    </div>
  );
}

export default function Footer({
  maxWidthClass = "max-w-[1200px]",
  paddingXClass = "px-[20px] sm:px-[32px] lg:px-0",
}: FooterProps) {
  return (
    <footer className="content-stretch flex flex-col items-center relative shrink-0 w-full pt-[80px]" data-name="Footer">
      <div className={`flex flex-col items-center text-center gap-[16px] py-[48px] relative w-full mx-auto font-inter ${paddingXClass} ${maxWidthClass}`}>
        <div className="flex flex-row flex-wrap gap-[20px] items-center justify-center">
          <a className={linkClass} href="https://www.linkedin.com/in/sue-product-dsgn/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className={linkClass} href="https://github.com/soobinhwang" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <EmailButton />
        </div>
        <p className="font-inter font-normal text-[16px] text-[rgba(50,64,79,0.58)] tracking-[-0.5px] leading-[24px]">
          Vibecoded by Sue © 2026
        </p>
      </div>
    </footer>
  );
}
