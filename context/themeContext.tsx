import { createContext, useContext, useState } from "react";

interface Theme {
    themeColor: string,
}

const themeContext = createContext<[theme: Theme, setTheme: React.Dispatch<React.SetStateAction<Theme>>] | undefined>(undefined)

export function ThemeProvider({children}: {children: React.ReactNode}) {

const [theme, setTheme] = useState<Theme>({ themeColor: "light" })
    return(
        <themeContext.Provider value ={[theme, setTheme]}>
            {children}
        </themeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(themeContext)
    if (context === undefined || !context) {
        throw new Error("useTheme must be used within a themeProvider")
    }
    return context
}


