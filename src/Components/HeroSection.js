import React , {useContext} from "react"
import ThemeToggler from "./ThemeToggler"
import ThemeContext from "../Context/ThemeContext"
import AppTheme from "../Colors"

const HeroSection = () => {
    const theme = useContext(ThemeContext)[0]
    const current = AppTheme[theme]

    return(
        <div style={{
           
            textAlign:"center",
            height:"100vh",
            backgroundColor: `${current.backgroundColor}`,
            color: `${current.textColor}`
        }}>
            <h1>Theme Toggler using Context API</h1>
            <ThemeToggler />
            <p>{theme === "light" ? "This is light Theme" : "This is dark Theme"}</p>
            <button style={{
                
                background: `${current.background}`,
                color:`${current.buttonText}`,
                padding: "10px 150px",
                fontSize: "20px",
                border: `${current.border}`,
                borderRadius : "15px",
                border:"none"
            }}>Test Button</button>
        </div>
    )
}

export default HeroSection;