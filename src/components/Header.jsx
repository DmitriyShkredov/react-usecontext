import React, { useContext } from "react";
import { ThemeContext } from "../providers/Theme";

export const Header = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className={`header header--${theme}`}>
      <button className="button" onClick={changeTheme}>
        {theme}
      </button>
    </header>
  );
};
