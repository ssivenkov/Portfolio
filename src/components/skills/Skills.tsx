import React from 'react';

import CSS from '@assets/images/skills/CSS.svg';
import Formik from '@assets/images/skills/Formik.svg';
import Git from '@assets/images/skills/Git.svg';
import HTML from '@assets/images/skills/HTML.svg';
import Jest from '@assets/images/skills/Jest.svg';
import JS from '@assets/images/skills/JS.svg';
import Postman from '@assets/images/skills/Postman.svg';
import ReactJS from '@assets/images/skills/React.svg';
import ReduxJS from '@assets/images/skills/Redux.svg';
import SASS from '@assets/images/skills/SASS.svg';
import TS from '@assets/images/skills/TS.svg';
import VectorGraphics from '@assets/images/skills/VectorGraphics.svg';
import {Title} from '@components/common/Title/Title';
import {Skill} from '@components/skills/skill/Skill';

import styles from './Skills.module.scss';

export const Skills = () => (
  <div className={styles.componentWrapper} id='skills'>
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
