import React, { useState } from "react";

import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Creations from "./components/Creations";
import Credits from "./components/Credits";
import SidebarNav from "./components/SidebarNav";
import Cursor from './components/Cursor';

import "./App.css";
import "./styles/Global.css";

//import ReactSwitch from "react-switch";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import PlaySoundDark from "./components/PlaySoundDark";
import PlaySoundLight from "./components/PlaySoundLight";



import { createContext } from "react";
export const ThemeContext = createContext(null);


function App() {

  // Theme Mode
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div classname="App" id={theme}>
        <div id="content">
          <div class="header">
            <div class="switch">
              <DarkModeSwitch style={{ width: '5vh', height: '5vh'  }} onChange={toggleTheme} checked={ theme==="dark" } />
            </div>
              {theme==="dark"
                ? <PlaySoundDark />
                : <PlaySoundLight />
              }
          </div>
          <Cursor></Cursor>
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
