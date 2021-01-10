import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext"


const ThemeToggler = () => {
    const [themeMode,setThemeMode] = useContext(ThemeContext)

    return(
        <div >
            <button onClick={() => {
            setThemeMode(themeMode === "light" ? "dark" : "light")
        }}
        
        style={{
                border:"none",
                cursor:"pointer",
                padding:"15px",
                borderRadius:"15px",
                background:"#00D84A"
            }} >{themeMode === "light" ? "Dark Theme" : "Light Theme"}</button>
        </div>
    )
}

export default ThemeToggler;