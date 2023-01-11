import { useContext, createContext, useState, useEffect, ReactNode} from "react";

interface SomeProps {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

interface childrenProps {
    children: ReactNode;
}

const ThemeContext = createContext<SomeProps>(null!);

export default function ThemeContextProvider({ children }:childrenProps) {
    const [theme, setTheme] = useState(localStorage.getItem("theme") !== "dark" ? "light" : "dark");

    useEffect(() => {
        const root = window.document.documentElement;
        const removeTheme = theme === "dark" ? "light" : "dark"

        root.classList.remove(removeTheme);
        root.classList.add(theme);
        
        localStorage.setItem("theme", theme);
    }, [theme]);

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext)
}