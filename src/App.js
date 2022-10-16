import React, { useState } from "react";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Creations from "./components/Creations";
import Credits from "./components/Credits";
import SidebarNav from "./components/SidebarNav";
import "./App.css";
import "./styles/main.css";
import ReactSwitch from "react-switch";

import { createContext } from "react";
export const ThemeContext = createContext(null);
// import "rsuite/src/styles/themes/default/index.less"

function App() {

  const [theme, setTheme] = useState("dark");
    
    const toggleTheme = () => {
      setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div classname="App" id={theme}>
        <div id="content">
          <div class="switch">
            <ReactSwitch onChange={toggleTheme} checked={ theme==="dark" } />
          </div>
          <Intro></Intro>
          <About></About>
          <Experience></Experience>
          <Creations></Creations>
          <Credits></Credits>
        </div>
        <SidebarNav />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
