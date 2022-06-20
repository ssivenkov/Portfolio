import React from 'react';

import styles from './Skill.module.scss';

type SkillPropsType = {
  title: string;
  imageLink: string;
};

export const Skill: React.FC<SkillPropsType> = ({title, imageLink}) => {
  return (
    <div className={styles.generalContainer}>
      <div className={styles.contentContainer}>
        <img alt='' className={styles.image} src={imageLink} />
        <h5 className={styles.title}>{title}</h5>
      </div>
    </div>
  );
};
