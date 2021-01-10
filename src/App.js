
import React,{useState} from "react";
import ThemeContext from "./Context/ThemeContext";

import HeroSection from "./Components/HeroSection";

const App = () => {
    const ThemeHook = useState("light")

  return (
    <div>
    <ThemeContext.Provider value={ThemeHook}>
      
         <HeroSection />
     

    </ThemeContext.Provider>
    </div>
  );
}

export default App;
