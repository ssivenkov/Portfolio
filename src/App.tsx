import React from 'react';
import './Null.scss';
import './fonts.scss';
import {Nav} from "./Nav/Nav";
import {Home} from "./Home/Home";
import {Skills} from "./Skills/Skills";
import {Projects} from "./Projects/Projects";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";

function App() {
    return (
        <div>
            <Nav/>
            <Home/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
