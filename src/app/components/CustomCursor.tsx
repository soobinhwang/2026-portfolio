import React, { useEffect, useRef, useState } from "react";

const CLICKABLE = "a, button, [role='button'], input, textarea, select, label, [onclick], [tabindex]";
const THUMBNAIL = '[data-name="Thumbnail"], [data-name="AI Thumbnail"], [data-name="Project"]';
const VISUAL = '[data-cursor="visual"]';
const COMING_SOON = '[data-cursor="coming-soon"]';
const LETS_CHAT = '[data-cursor="lets-chat"]';
const COPY_EMAIL = '[data-cursor="copy-email"]';

type CursorMode = "default" | "clickable" | "case-study" | "visual" | "coming-soon" | "lets-chat" | "copy-email";

const DOT_SIZE = 15.84;
const ICON_SIZE = 16;
const FONT_SIZE = 11;
const PILL_PADDING = "8px 16px";
const ICON_GAP = 6;

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");
  const [flashMessage, setFlashMessage] = useState<string | null>(null);
  const flashTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

      const target = e.target as Element;
      if (target?.closest(COPY_EMAIL)) {
        setMode("copy-email");
      } else if (target?.closest(LETS_CHAT)) {
        setMode("lets-chat");
      } else if (target?.closest(COMING_SOON)) {
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

  useEffect(() => {
    const onFlash = (event: Event) => {
      const customEvent = event as CustomEvent<{ text?: string }>;
      const text = customEvent.detail?.text ?? "Email copied!";
      setFlashMessage(text);
      if (flashTimeoutRef.current) {
        window.clearTimeout(flashTimeoutRef.current);
      }
      flashTimeoutRef.current = window.setTimeout(() => {
        setFlashMessage(null);
      }, 1200);
    };

    window.addEventListener("cursor-flash", onFlash as EventListener);
    return () => {
      window.removeEventListener("cursor-flash", onFlash as EventListener);
      if (flashTimeoutRef.current) {
        window.clearTimeout(flashTimeoutRef.current);
      }
    };
  }, []);

  const isCaseStudy = mode === "case-study";
  const isComingSoon = mode === "coming-soon";
  const isLetsChat = mode === "lets-chat";
  const isCopyEmail = mode === "copy-email";
  const isClickable = mode === "clickable";
  const isVisual = mode === "visual";

  const dotScale = isClickable ? 1.2 : 1;
  const baseOpacity = isClickable ? 0.6 : isVisual ? 0.5 : 1;

  const showPill = isCaseStudy || isComingSoon || isLetsChat || isCopyEmail || !!flashMessage;
  const showIcon = isCaseStudy || isCopyEmail;
  const message = flashMessage
    ? flashMessage
    : isComingSoon
      ? "Coming Soon!"
      : isLetsChat
        ? "♥ Lets Chat!"
        : isCopyEmail
          ? "Copy Email"
          : "View Case Study";

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
        gap: showIcon ? ICON_GAP : 0,
        backgroundColor: "#1700CF",
        color: "#fff",
        fontFamily: "'Geist Mono', monospace",
        fontSize: FONT_SIZE,
        fontWeight: 500,
        letterSpacing: "0.5px",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        width: showPill ? "auto" : DOT_SIZE,
        height: showPill ? "auto" : DOT_SIZE,
        padding: showPill ? PILL_PADDING : 0,
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
          opacity: isCopyEmail ? 1 : 0,
          width: isCopyEmail ? ICON_SIZE : 0,
          transition:
            "opacity 0.2s ease 0.05s, width 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
      <span
        style={{
          opacity: showPill ? 1 : 0,
          maxWidth: showPill ? 200 : 0,
          transition:
            "opacity 0.2s ease 0.06s, max-width 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
          overflow: "hidden",
        }}
      >
        {message}
      </span>
    </div>
  );
}
