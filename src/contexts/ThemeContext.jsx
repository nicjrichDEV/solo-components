import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const BRANDS = {
  PMI: "pmi",
  PMI_HIGH_CONTRAST: "pmi-high-contrast",
  INFINITY: "infinity",
  INFINITY_HIGH_CONTRAST: "infinity-high-contrast",
};

export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
};

export function ThemeProvider({
  children,
  defaultBrand = BRANDS.PMI,
  defaultTheme = THEMES.LIGHT,
}) {
  const [brand, setBrand] = useState(defaultBrand);
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-brand", brand);
    document.documentElement.setAttribute("data-theme", theme);
  }, [brand, theme]);

  const value = {
    brand,
    theme,
    setBrand,
    setTheme,
    toggleTheme: () =>
      setTheme((prev) => (prev === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT)),
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
