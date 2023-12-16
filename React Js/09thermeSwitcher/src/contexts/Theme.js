import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode : "light",                    // default light theme rahega
    darkTheme : () => {},                   // 2 option rahenge dark and light
    lightTheme : () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}