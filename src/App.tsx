import React from 'react';
import './Null.css';
import {Header} from "./Header/Header";
import {Home} from "./Home/Home";
import {Skills} from "./Skills/Skills";
import {Projects} from "./Projects/Projects";

function App() {
    return (
        <div>
            <Header/>
            <Home/>
            <Skills/>
            <Projects/>
        </div>
    );
}

export default App;
