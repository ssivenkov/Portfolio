import React from "react";
import "./Null.scss";
import "./App.scss";
import { Nav } from "./Nav/Nav";
import { Home } from "./Home/Home";
import { Skills } from "./Skills/Skills";
import { Projects } from "./Projects/Projects";
import { Contacts } from "./Contacts/Contacts";

function App() {
    return (
        <div>
            <Nav/>
            <Home/>
            <Skills/>
            <Projects/>
            <Contacts/>
        </div>
    )
}

export default App;
