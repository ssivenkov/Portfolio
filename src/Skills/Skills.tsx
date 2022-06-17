import React from 'react';

import CSS from '../assets/images/Skills/CSS.svg';
import Formik from '../assets/images/Skills/Formik.svg';
import Git from '../assets/images/Skills/Git.svg';
import HTML from '../assets/images/Skills/HTML.svg';
import Jest from '../assets/images/Skills/Jest.svg';
import JS from '../assets/images/Skills/JS.svg';
import Postman from '../assets/images/Skills/Postman.svg';
import ReactJS from '../assets/images/Skills/React.svg';
import ReduxJS from '../assets/images/Skills/Redux.svg';
import SASS from '../assets/images/Skills/SASS.svg';
import TS from '../assets/images/Skills/TS.svg';
import VectorGraphics from '../assets/images/Skills/VectorGraphics.svg';
import {Title} from '../commonComponents/Title/Title';

import {Skill} from './Skill/Skill';
import styles from './Skills.module.scss';

export const Skills = () => {
  return (
    <div className={styles.generalContainer} id='skills'>
      <section className={styles.contentContainer}>
        <Title title='Skills' />
        <div className={styles.skillsContainer}>
          <Skill imageLink={HTML} title='HTML' />
          <Skill imageLink={CSS} title='CSS' />
          <Skill imageLink={SASS} title='SASS' />
          <Skill imageLink={JS} title='JavaScript' />
          <Skill imageLink={TS} title='TypeScript' />
          <Skill imageLink={ReactJS} title='React' />
          <Skill imageLink={ReduxJS} title='Redux' />
          <Skill imageLink={Jest} title='Jest' />
          <Skill imageLink={Git} title='Git' />
          <Skill imageLink={VectorGraphics} title='Vector graphics' />
          <Skill imageLink={Formik} title='Formik' />
          <Skill imageLink={Postman} title='Postman' />
        </div>
      </section>
    </div>
  );
};
