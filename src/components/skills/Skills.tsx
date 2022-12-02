import React from 'react';

import ApolloClient from 'assets/images/skills/Apollo-client.svg';
import CSS from 'assets/images/skills/CSS.svg';
import ESLint from 'assets/images/skills/ESLint.svg';
import Firebase from 'assets/images/skills/Firebase.svg';
import Formik from 'assets/images/skills/Formik.svg';
import Git from 'assets/images/skills/Git.svg';
import GraphQL from 'assets/images/skills/GraphQL.svg';
import HTML from 'assets/images/skills/HTML.svg';
import Jest from 'assets/images/skills/Jest.svg';
import JS from 'assets/images/skills/JS.svg';
import MobXStateTree from 'assets/images/skills/MobX-State-Tree.png';
import ReactJS from 'assets/images/skills/React.svg';
import ReduxSaga from 'assets/images/skills/Redux-Saga.svg';
import ReduxJS from 'assets/images/skills/Redux.svg';
import SASS from 'assets/images/skills/SASS.svg';
import StyledComponents from 'assets/images/skills/Styled-Components.png';
import TS from 'assets/images/skills/TS.svg';
import VectorGraphics from 'assets/images/skills/VectorGraphics.svg';
import { Title } from 'components/common/title/Title';
import { Skill } from 'components/skills/skill/Skill';

import styles from './Skills.module.scss';

export const Skills = () => (
  <div className={styles.componentWrapper} id='skills'>
    <section className={styles.contentContainer}>
      <Title title='Skills' />
      <div className={styles.skillsContainer}>
        <Skill imageLink={HTML} title='HTML' />
        <Skill imageLink={CSS} title='CSS' />
        <Skill imageLink={SASS} title='SASS' />
        <Skill
          imageLink={StyledComponents}
          title='Styled components'
          withoutTopPadding={true}
        />
        <Skill imageLink={JS} title='JavaScript' />
        <Skill imageLink={TS} title='TypeScript' />
        <Skill imageLink={ReactJS} title='React' />
        <Skill imageLink={ReactJS} title='React Native' />
        <Skill imageLink={ReduxJS} title='Redux' />
        <Skill imageLink={ReduxSaga} title='Redux-Saga' />
        <Skill imageLink={MobXStateTree} title='MobX' />
        <Skill imageLink={GraphQL} title='GraphQL' />
        <Skill imageLink={ApolloClient} title='Apollo Client' />
        <Skill imageLink={Firebase} title='Firebase' />
        <Skill imageLink={ESLint} title='ESLint' />
        <Skill imageLink={Formik} title='Formik' />
        <Skill imageLink={Git} title='Git' />
        <Skill imageLink={Jest} title='Jest' />
        <Skill imageLink={VectorGraphics} title='Vector graphics' />
      </div>
    </section>
  </div>
);
