import React from 'react';
import './Null.css';
import {Header} from "./Header/Header";
import {Home} from "./Home/Home";
import {Skills} from "./Skills/Skills";
import {Projects} from "./Projects/Projects";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";

function App() {
    return (
        <div>
            <Header/>
            <Home/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
