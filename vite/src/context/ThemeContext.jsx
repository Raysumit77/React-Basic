import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    return (
<ThemeContext.Provider value= {{ theme, setTheme}}>
    {children}
</ThemeContext.Provider>

    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if( context === undefined ) throw new Error("Theme context must be valid")
    return context;
};