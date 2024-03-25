import { useEffect, useState } from "react"

const useTheme = () => {
    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    const [theme, setTheme] = useState("");
    const getStoredTheme = localStorage.getItem("theme");

    useEffect(() => {
        if (getStoredTheme) {
            setTheme(getStoredTheme);
            return;
        }
        setTheme(preference.matches ? "dark" : "light");
        preference.addEventListener("change", (event) => {
            setTheme(event.matches ? "dark" : "light")
        }) 
        
    }, [preference]);
    
    return [theme, setTheme]
}

export default useTheme;