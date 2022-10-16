import React from "react";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Creations from "./components/Creations";
import Credits from "./components/Credits";
import SidebarNav from "./components/SidebarNav";
import "./App.css";
import "./styles/main.css";
// import "rsuite/src/styles/themes/default/index.less"

function App() {
  return (
    <div classname="App">
      <div id="content">
        <Intro></Intro>
        <About></About>
        <Experience></Experience>
        <Creations></Creations>
        <Credits></Credits>
      </div>
      <SidebarNav />
    </div>
  );
}

export default App;
