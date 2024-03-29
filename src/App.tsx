import React from 'react';

import './Null.module.scss';
import './App.module.scss';

import { Contacts } from 'components/contacts/Contacts';
import { Home } from 'components/home/Home';
import { Navigation } from 'components/navigation/Navigation';
import { Projects } from 'components/projects/Projects';
import { Skills } from 'components/skills/Skills';

const App = () => (
  <div>
    <Navigation />
    <Home />
    <Skills />
    <Projects />
    <Contacts />
  </div>
);

export default App;
