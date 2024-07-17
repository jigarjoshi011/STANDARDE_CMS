"use client";
import { useEffect, useState } from "react";

export const useScreenDetector = (): {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
} => {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      // Set initial state
      setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowSizeChange);

      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }
  }, []);

  const isMobile = width !== null && width <= 768;
  const isTablet = width !== null && width <= 1024;
  const isDesktop = width !== null && width > 1024;

  return { isMobile, isTablet, isDesktop };
};
