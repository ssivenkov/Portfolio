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
    <div id={'skills'} className={styles.generalContainer}>
      <section className={styles.contentContainer}>
        <Title title={'Skills'} />
        <div className={styles.skillsContainer}>
          <Skill title={'HTML'} imageLink={HTML} />
          <Skill title={'CSS'} imageLink={CSS} />
          <Skill title={'SASS'} imageLink={SASS} />
          <Skill title={'JavaScript'} imageLink={JS} />
          <Skill title={'TypeScript'} imageLink={TS} />
          <Skill title={'React'} imageLink={ReactJS} />
          <Skill title={'Redux'} imageLink={ReduxJS} />
          <Skill title={'Jest'} imageLink={Jest} />
          <Skill title={'Git'} imageLink={Git} />
          <Skill title={'Vector graphics'} imageLink={VectorGraphics} />
          <Skill title={'Formik'} imageLink={Formik} />
          <Skill title={'Postman'} imageLink={Postman} />
        </div>
      </section>
    </div>
  );
};
