import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const getInitialMode = () => {
    const prefersDarkMode = window.matchMedia(
      "prefers-color-scheme:dark"
    ).matches;

    return prefersDarkMode;
  };
  const [isThemDark, setIsThemeDark] = useState(getInitialMode());
  const [searchTerm, setSearchTerm] = useState("cat");

  const themeToggle = () => {
    const newTheme = !isThemDark;
    setIsThemeDark(newTheme);
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme", newTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isThemDark);
  }, [isThemDark]);

  return (
    <AppContext.Provider
      value={{ isThemDark, themeToggle, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
