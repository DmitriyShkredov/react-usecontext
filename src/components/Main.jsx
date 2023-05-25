import React, { useContext } from "react";
import { ThemeContext } from "../providers/Theme";

export const Main = () => {
  const [theme] = useContext(ThemeContext);
  return <main className={`main main--${theme}`}>main</main>;
};
