import React from 'react';

import {SkillPropsType} from '@components/skills/skill/types';

import styles from './Skill.module.scss';

export const Skill = (props: SkillPropsType) => {
  const {title, imageLink} = props;

  return (
    <div className={styles.generalContainer}>
      <div className={styles.contentContainer}>
        <img alt='' className={styles.image} src={imageLink} />
        <h5 className={styles.title}>{title}</h5>
      </div>
    </div>
  );
};
