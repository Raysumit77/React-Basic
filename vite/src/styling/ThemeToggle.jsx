import { useTheme } from "../context/ThemeContext";
import Switch from "react-switch";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <Switch onChange={handleThemeToggle} checked={theme === "light"} />
    </div>
  );
};
