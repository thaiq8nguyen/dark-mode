import React, {useEffect} from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
    
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", true);
    
    useEffect(() => {
        const body = document.body;
        darkMode ? body.classList.add("dark-mode") : body.classList.remove("dark-mode");

    }, [darkMode])

    return [darkMode, setDarkMode];
    
}

export default useDarkMode;