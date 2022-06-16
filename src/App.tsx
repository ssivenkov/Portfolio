import React from 'react';

import './Null.scss';
import './App.scss';
import {Contacts} from './Contacts/Contacts';
import {Home} from './Home/Home';
import {Nav} from './Nav/Nav';
import {Projects} from './Projects/Projects';
import {Skills} from './Skills/Skills';

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
