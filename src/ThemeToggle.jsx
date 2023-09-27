import React from "react";
import { useGlobalContext } from "./AppContext";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const ThemeToggle = () => {
  const { isThemDark, themeToggle } = useGlobalContext();

  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={themeToggle}>
        {isThemDark ? (
          <BsFillSunFill className="toggle-icon" />
        ) : (
          <BsFillMoonFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
