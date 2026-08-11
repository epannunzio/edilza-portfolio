"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia(
      "(pointer: fine)",
    ).matches;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!isFinePointer || prefersReducedMotion) {
      return;
    }

    document.body.classList.add("has-custom-cursor");

    let mouseX = 0;
    let mouseY = 0;

    let followerX = 0;
    let followerY = 0;

    const moveCursor = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.14;
      followerY += (mouseY - followerY) * 0.14;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
      }

      requestAnimationFrame(animateFollower);
    };

    const handlePointerOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      const interactive = target.closest(
        "a, button, [data-cursor='interactive']",
      );

      if (interactive) {
        followerRef.current?.classList.add("cursor-hover");
      }
    };

    const handlePointerOut = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      const interactive = target.closest(
        "a, button, [data-cursor='interactive']",
      );

      if (interactive) {
        followerRef.current?.classList.remove("cursor-hover");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handlePointerOver);
    document.addEventListener("mouseout", handlePointerOut);

    const animationFrame = requestAnimationFrame(animateFollower);

    return () => {
      document.body.classList.remove("has-custom-cursor");

      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handlePointerOver);
      document.removeEventListener("mouseout", handlePointerOut);

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-200 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--foreground)"
      />

      <div
        ref={followerRef}
        className="pointer-events-none fixed left-0 top-0 z-199 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-(--foreground) opacity-40 transition-[width,height,background-color,opacity] duration-300"
      />

      <style jsx global>{`
        .cursor-hover {
          width: 52px;
          height: 52px;
          opacity: 0.9;
          background: var(--border);
        }
      `}</style>
    </>
  );
}