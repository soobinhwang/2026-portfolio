import React, { useEffect, useState } from "react";

const CLICKABLE = "a, button, [role='button'], input, textarea, select, label, [onclick], [tabindex]";
const THUMBNAIL = '[data-name="Thumbnail"], [data-name="AI Thumbnail"], [data-name="Project"]';
const VISUAL = '[data-cursor="visual"]';
const COMING_SOON = '[data-cursor="coming-soon"]';

type CursorMode = "default" | "clickable" | "case-study" | "visual" | "coming-soon";

const DOT_SIZE = 15.84;
const ICON_SIZE = 16;
const FONT_SIZE = 11;
const PILL_PADDING = "8px 16px";
const CASE_STUDY_GAP = 6;

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

      const target = e.target as Element;
      if (target?.closest(COMING_SOON)) {
        setMode("coming-soon");
      } else if (target?.closest(THUMBNAIL)) {
        setMode("case-study");
      } else if (target?.closest(VISUAL)) {
        setMode("visual");
      } else if (target?.closest(CLICKABLE)) {
        setMode("clickable");
      } else {
        setMode("default");
      }
    };

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [visible]);

  const isCaseStudy = mode === "case-study";
  const isComingSoon = mode === "coming-soon";
  const isClickable = mode === "clickable";
  const isVisual = mode === "visual";

  const dotScale = isClickable ? 1.2 : 1;
  const baseOpacity = isClickable ? 0.6 : isVisual ? 0.5 : 1;

  return (
    <div
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        transform: `translate(-50%, -50%) scale(${isCaseStudy ? 1 : dotScale})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: isCaseStudy ? CASE_STUDY_GAP : 0,
        backgroundColor: "#1700CF",
        color: "#fff",
        fontFamily: "'Geist Mono', monospace",
        fontSize: FONT_SIZE,
        fontWeight: 500,
        letterSpacing: "0.5px",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        width: isCaseStudy || isComingSoon ? "auto" : DOT_SIZE,
        height: isCaseStudy || isComingSoon ? "auto" : DOT_SIZE,
        padding: isCaseStudy || isComingSoon ? PILL_PADDING : 0,
        borderRadius: 999,
        pointerEvents: "none",
        zIndex: 99999,
        opacity: visible ? baseOpacity : 0,
        overflow: "hidden",
        willChange: "transform, opacity",
        transition:
          "transform 0.1s ease-out, width 0.25s cubic-bezier(0.4, 0, 0.2, 1), height 0.25s cubic-bezier(0.4, 0, 0.2, 1), padding 0.25s cubic-bezier(0.4, 0, 0.2, 1), gap 0.25s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.1s ease-out",
      }}
    >
      <svg
        width={ICON_SIZE}
        height={ICON_SIZE}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          flexShrink: 0,
          opacity: isCaseStudy ? 1 : 0,
          width: isCaseStudy ? ICON_SIZE : 0,
          transition:
            "opacity 0.2s ease 0.05s, width 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
      <span
        style={{
          opacity: isCaseStudy || isComingSoon ? 1 : 0,
          maxWidth: isCaseStudy || isComingSoon ? 200 : 0,
          transition:
            "opacity 0.2s ease 0.06s, max-width 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
          overflow: "hidden",
        }}
      >
        {isComingSoon ? "Coming Soon!" : "View Case Study"}
      </span>
    </div>
  );
}
