import { useTheme } from "../context/ThemeContext";
import { Body } from "./Body";

export const Hero = () => {
  const { theme } = useTheme();

  const style = {
    dark: {
      backgroundColor: "#333",
      color: "white",
    },
    light: {
      backgroundColor: "#eee",
      color: "black",
    },
    common: {
      transition: "all is ease",
      height: "1000px",
    },
  };

  const themeStyle = {
    ...(theme === "light" ? style.light : style.dark),
    ...style.common,
  };
  return (
    <main style={themeStyle}>
      <div>
        <h1>I am Hero Section</h1>
        <Body />
      </div>
    </main>
  );
};
