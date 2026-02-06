import React, { useEffect, useState } from "react";

const CLICKABLE = "a, button, [role='button'], input, textarea, select, label, [onclick], [tabindex]";
const THUMBNAIL = '[data-name="Thumbnail"], [data-name="AI Thumbnail"], [data-name="Project"]';

type CursorMode = "default" | "clickable" | "case-study";

const DOT_SIZE = 15.84;

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

      const target = e.target as Element;
      if (target?.closest(THUMBNAIL)) {
        setMode("case-study");
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
  const isClickable = mode === "clickable";

  const dotScale = isClickable ? 1.2 : 1;
  const baseOpacity = isClickable ? 0.6 : 1;

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
        gap: isCaseStudy ? 6 : 0,
        backgroundColor: "#1700CF",
        color: "#fff",
        fontFamily: "'Geist Mono', monospace",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "0.5px",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        width: isCaseStudy ? "auto" : DOT_SIZE,
        height: isCaseStudy ? "auto" : DOT_SIZE,
        padding: isCaseStudy ? "8px 16px" : 0,
        borderRadius: 999,
        pointerEvents: "none",
        zIndex: 99999,
        opacity: visible ? baseOpacity : 0,
        overflow: "hidden",
        willChange: "transform, opacity",
        transition:
          "transform 0.18s ease-out, width 0.35s cubic-bezier(0.4, 0, 0.2, 1), height 0.35s cubic-bezier(0.4, 0, 0.2, 1), padding 0.35s cubic-bezier(0.4, 0, 0.2, 1), gap 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.18s ease-out",
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          flexShrink: 0,
          opacity: isCaseStudy ? 1 : 0,
          width: isCaseStudy ? 16 : 0,
          transition:
            "opacity 0.3s ease 0.1s, width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
      <span
        style={{
          opacity: isCaseStudy ? 1 : 0,
          maxWidth: isCaseStudy ? 200 : 0,
          transition:
            "opacity 0.3s ease 0.12s, max-width 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          overflow: "hidden",
        }}
      >
        View Case Study
      </span>
    </div>
  );
}
