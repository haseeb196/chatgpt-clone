import React, { createContext, useState } from "react";

interface ThemeContextType {
  dark: boolean;
  setDark: (value: boolean) => void;
}

interface Props {
  children: React.ReactNode;
}

const defaultThemeContext: ThemeContextType = {
  dark: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDark: () => {},
};

export const ThemeContext =
  createContext<ThemeContextType>(defaultThemeContext);

export const ThemeProvider = ({ children }: Props) => {
  const [dark, setDark] = useState(true);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
