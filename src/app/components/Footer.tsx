type FooterProps = {
  maxWidthClass?: string;
  emailVariant?: "pill" | "text";
};

export default function Footer({
  maxWidthClass = "max-w-[1200px]",
  emailVariant = "pill",
}: FooterProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText("soobinhwang317@gmail.com");
    window.dispatchEvent(
      new CustomEvent("cursor-flash", { detail: { text: "Email copied!" } }),
    );
  };

  return (
    <footer className="content-stretch flex flex-col items-center relative shrink-0 w-full pt-[100px]" data-name="Footer">
      <div className={`flex flex-col gap-[16px] py-[48px] relative w-full px-[16px] font-geist-mono sm:flex-row sm:items-center sm:justify-between ${maxWidthClass}`}>
        <div className="flex flex-col font-normal justify-center leading-[0] text-[#32404f] text-[16px] tracking-[-0.2px]">
          <p className="leading-[24px]">Designed + vibe coded by Sue</p>
        </div>
        <div className="flex flex-col gap-[12px] items-start sm:flex-row sm:items-center sm:gap-[20px]">
          {emailVariant === "pill" ? (
            <div className="flex items-center gap-[10px] bg-[#f0f3f5] rounded-full px-[16px] py-[8px] text-[#32404f] text-[14px]">
              <span className="leading-[20px]">soobinhwang317@gmail.com</span>
              <button
                className="bg-white text-[#32404f] text-[13px] leading-[20px] rounded-full px-[12px] py-[4px] hover:bg-[#eef1f4] hover:text-[#1e242a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#32404f]/30 transition-colors"
                type="button"
                data-cursor="lets-chat"
                onClick={handleCopy}
                aria-label="Copy email"
              >
                Copy
              </button>
            </div>
          ) : (
            <button
              className="text-[#32404f] text-[13px] uppercase tracking-[0.06em] hover:text-[#1e242a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#32404f]/30"
              type="button"
              data-cursor="copy-email"
              onClick={handleCopy}
              aria-label="Copy email"
            >
              Email
            </button>
          )}
          <div className="flex items-center gap-[16px] text-[13px] uppercase tracking-[0.06em] text-[#32404f]">
            <a className="hover:text-[#1e242a] transition-colors" href="https://github.com/soobinhwang" target="_blank" rel="noreferrer">
              Github
            </a>
            <a className="hover:text-[#1e242a] transition-colors" href="https://www.linkedin.com/in/sue-uxdesigner/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
