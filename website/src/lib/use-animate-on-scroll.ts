"use client";

import { useEffect, useRef } from "react";

interface AnimateOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useAnimateOnScroll<T extends HTMLElement>(
  options: AnimateOptions = {}
) {
  const ref = useRef<T>(null);
  const { threshold = 0.15, rootMargin = "0px 0px -60px 0px" } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}

export function useScrollHeader() {
  const scrolled = useRef(false);

  useEffect(() => {
    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const isScrolled = window.scrollY > 80;

        if (isScrolled !== scrolled.current) {
          scrolled.current = isScrolled;
          const header = document.getElementById("site-header");
          if (header) {
            if (isScrolled) {
              header.classList.remove("header-transparent");
              header.classList.add("header-solid");
              header.dataset.scrolled = "true";
            } else {
              header.classList.remove("header-solid");
              header.classList.add("header-transparent");
              header.dataset.scrolled = "false";
            }
          }
        }

        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
