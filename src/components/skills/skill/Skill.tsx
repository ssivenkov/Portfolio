import React from 'react';

import styles from './Skill.module.scss';
import { SkillPropsType } from './types';

export const Skill = (props: SkillPropsType) => {
  const { title, imageLink } = props;

  return (
    <div className={styles.generalContainer}>
      <div className={styles.contentContainer}>
        <img alt={`${title} icon`} className={styles.image} src={imageLink} />
        <h5 className={styles.title}>{title}</h5>
      </div>
    </div>
  );
};
