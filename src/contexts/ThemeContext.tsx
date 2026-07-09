import { createContext, useState, type ReactNode } from "react";

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
