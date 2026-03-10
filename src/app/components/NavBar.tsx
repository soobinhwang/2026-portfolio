import { Link, useLocation } from "react-router";

const NAV_ITEMS = [
  {
    label: "Work",
    to: "/",
    isActive: (pathname: string) =>
      pathname === "/" ||
      pathname.startsWith("/engagement-platform") ||
      pathname.startsWith("/global-reward-storefront") ||
      pathname.startsWith("/design-library"),
  },
  {
    label: "AI",
    to: "/ai",
    isActive: (pathname: string) => pathname === "/ai" || pathname.startsWith("/ai/"),
  },
  {
    label: "About",
    to: "/about",
    isActive: (pathname: string) => pathname === "/about",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sue-product-dsgn/",
    isActive: () => false,
  },
];

const ACTION_ITEMS = [
  { label: "Let's Chat!", href: "https://cal.com/sue-hwang-dwcdjs" },
];

export default function NavBar() {
  const { pathname } = useLocation();

  return (
    <header className="w-full border-b border-[rgba(215,221,226,0.5)] bg-[#fbfdfd]">
      <div className="mx-auto grid w-full max-w-[1200px] gap-[18px] px-[20px] py-[18px] sm:px-[32px] sm:py-[20px] lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center lg:gap-[24px] lg:px-0">
        <Link to="/" className="flex items-center text-left no-underline">
          <span className="font-geist-mono text-[15px] font-medium tracking-[-0.45px] text-[#32404f] uppercase">
            Sue Hwang
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-x-[28px] gap-y-[10px] lg:justify-self-center">
          {NAV_ITEMS.map((item) => {
            const active = item.isActive(pathname);
            const className = `font-geist-mono text-[15px] tracking-[-0.35px] uppercase transition-colors duration-200 ${
              active ? "text-[#1700cf]" : "text-[#8a95a0] hover:text-[#1700cf]"
            }`;
            const labelContent = item.label === "AI" ? (
              <span className="relative inline-flex">
                <span>{item.label}</span>
                <span
                  aria-hidden="true"
                  className="absolute -right-[7px] top-[2px] inline-flex size-[5px] rounded-full bg-[#1700cf]/70"
                />
              </span>
            ) : (
              item.label
            );

            if (item.to) {
              return (
                <Link key={item.label} to={item.to} className={className}>
                  {labelContent}
                </Link>
              );
            }

            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={className}
              >
                {labelContent}
              </a>
            );
          })}
        </nav>

        <div className="flex flex-wrap items-center gap-x-[20px] gap-y-[10px] lg:justify-self-end">
          {ACTION_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="font-geist-mono text-[15px] tracking-[-0.35px] text-[#8a95a0] uppercase transition-colors duration-200 hover:text-[#1700cf]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
