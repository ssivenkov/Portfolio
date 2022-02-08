import React from "react";
import "./Null.scss";
import 'simplebar/dist/simplebar.css';
import "./App.scss";
import { Nav } from "./Nav/Nav";
import { Home } from "./Home/Home";
import { Skills } from "./Skills/Skills";
import { Projects } from "./Projects/Projects";
import { Contacts } from "./Contacts/Contacts";
import SimpleBar from "simplebar-react";

function App() {
    return (
        <SimpleBar style={{ maxHeight: "100vh" }}>
            <div>
                <Nav/>
                <Home/>
                <Skills/>
                <Projects/>
                <Contacts/>
            </div>
        </SimpleBar>
    )
}

export default App;
