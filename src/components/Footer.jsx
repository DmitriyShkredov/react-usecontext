import React, { useContext } from "react";
import { ThemeContext } from "../providers/Theme";

export const Footer = () => {
  const [theme] = useContext(ThemeContext);
  return <footer className={`footer footer--${theme}`}></footer>;
};
