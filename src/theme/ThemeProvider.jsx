import {
  createContext,
  use,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ initial = {}, children }) {
  const [brand, setBrand] = useState(initial.brand ?? "pmi");
  const [mode, setMode] = useState(initial.mode ?? "light");
  const [experience, setExperience] = useState(initial.experience ?? "product");
  const [density, setDensity] = useState(initial.density ?? "cozy");

  useEffect(() => {
    const el = document.documentElement;
    el.setAttribute("data-brand", brand);
    el.setAttribute("data-mode", mode);
    el.setAttribute("data-experience", experience);
    el.setAttribute("data-density", density);
  }, [brand, mode, experience, density]);

  const value = useMemo(
    () => ({
      brand,
      mode,
      experience,
      density,
      setBrand,
      setExperience,
      setDensity,
    }),
    [brand, mode, experience, density],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

export function ThemeScope({
  brand,
  mode,
  experience,
  density,
  as: Comp = "div",
  children,
}) {
  const attrs = {};
  if (brand) attrs["data-brand"] = brand;
  if (mode) attrs["data-mode"] = mode;
  if (experience) attrs["data-experience"] = experience;
  if (density) attrs["data-density"] = density;

  return <Comp {...attrs}>{children}</Comp>;
}
