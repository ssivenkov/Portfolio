import React from 'react';

import styles from './Project.module.scss';
import { ProjectPropsType } from './types';

export const Project = (props: ProjectPropsType) => {
  const { title, description, technologies, imageLink, projectLink } = props;

  return (
    <div className={styles.generalContainer}>
      <img alt={`${title} project`} className={styles.image} src={imageLink} />
      <div className={styles.descriptionContainer}>
        <h5 className={styles.title}>{title}</h5>
        <span className={styles.descriptionText}>{description}</span>
        <span className={styles.descriptionText}>{`Technologies: ${technologies}`}</span>
      </div>
      <a
        className={styles.buttonTitle}
        href={projectLink}
        rel='noreferrer'
        target='_blank'
      >
        View project
      </a>
    </div>
  );
};
