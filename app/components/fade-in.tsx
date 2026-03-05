"use client";

import { ReactNode } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

/** Smooth scroll-reveal: trigger once, engaging ease. */
const REVEAL_EASING = "cubic-bezier(0.22, 1, 0.36, 1)";
const REVEAL_DURATION_MS = 900;

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "fade";
}

export default function FadeIn({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: FadeInProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.08,
    rootMargin: "0px 0px -40px 0px",
  });

  const directionClasses = {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "translate-x-10",
    right: "-translate-x-10",
    fade: "",
  };

  return (
    <div
      ref={ref}
      className={`${isIntersecting ? "opacity-100 translate-y-0 translate-x-0 scale-100" : `opacity-0 ${directionClasses[direction]} scale-[0.98]`} ${className}`}
      style={{
        transition: `opacity ${REVEAL_DURATION_MS}ms ${REVEAL_EASING}, transform ${REVEAL_DURATION_MS}ms ${REVEAL_EASING}`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
