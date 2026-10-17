"use client";

import { useCallback, useEffect, useState } from "react";

type Theme = "dark" | "light";

const THEME_EVENT = "themechange";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    // Syncs React state with the theme the pre-hydration inline script already
    // applied to the DOM (from localStorage), so the toggle icon matches reality.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (current === "light") setTheme("light");

    // Every useTheme() call holds its own local state, so when one component
    // toggles the theme, other components (e.g. Navbar vs. Hero) wouldn't
    // otherwise know the DOM attribute changed. This keeps every instance in sync.
    const handleThemeChange = (e: Event) => {
      const next = (e as CustomEvent<Theme>).detail;
      setTheme(next);
    };
    window.addEventListener(THEME_EVENT, handleThemeChange);
    return () => window.removeEventListener(THEME_EVENT, handleThemeChange);
  }, []);

  const toggleTheme = useCallback(() => {
    // Side effects (DOM mutation + dispatching an event that other useTheme()
    // instances synchronously handle) must not live inside a setState updater —
    // React can invoke updaters during another component's render, which is
    // exactly the "Cannot update a component while rendering a different
    // component" situation that made the toggle silently stop working.
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
    window.dispatchEvent(new CustomEvent<Theme>(THEME_EVENT, { detail: next }));
  }, [theme]);

  return { theme, toggleTheme };
}
