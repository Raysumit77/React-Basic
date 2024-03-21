import { useTheme } from "../context/ThemeContext";
import { Body } from "./Body";

export const Hero = () => {
    const { theme } = useTheme();

    const style = {
        dark: {
            backgroundColor: "#333",
            color:"white",
        },
        light: {
            backgroundColor: "#eee",
            color: "black",
        },
        common: {
            Transition: "all is ease",
            height:"1000px",
        },

    };

    const themeStyle = {
        ...(theme === "light " ? style.light : style.dark),
        ...style.common, 
    };

    return (
        <main style={themeStyle}>
            <div>
                <h1>I am the Hero section</h1>
                <body />
            </div>
        </main>
    );
};