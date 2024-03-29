import { useTheme } from "../context/ThemeContext";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  const { theme } = useTheme();

  const headerStyle = {
    dark: {
      color: "white",
      backgroundColor: "black",
    },
    light: {
      color: "dark",
      backgroundColor: "#c0c0c0",
    },
    common: {
      transition: "all is ease",
    },
  };

  const themeStyle = {
    ...(theme === "light" ? headerStyle.light : headerStyle.dark),
    ...headerStyle.common,
  };
  return (
    <header style={themeStyle}>
      <span> My App [{theme}]</span>
      <ThemeToggle />
    </header>
  );
};
