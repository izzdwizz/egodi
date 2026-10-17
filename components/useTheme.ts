"use client";

import { useCallback, useEffect, useState } from "react";

type Theme = "dark" | "light";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    // Syncs React state with the theme the pre-hydration inline script already
    // applied to the DOM (from localStorage), so the toggle icon matches reality.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (current === "light") setTheme("light");
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch {}
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
