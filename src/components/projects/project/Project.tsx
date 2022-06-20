import React from 'react';

import styles from './Project.module.scss';

type ProjectPropsType = {
  title: string;
  description: string;
  technologies: string;
  imageLink: string;
  link: string;
};

export const Project: React.FC<ProjectPropsType> = ({
  title,
  description,
  technologies,
  imageLink,
  link,
}) => {
  return (
    <div className={styles.generalContainer}>
      <img alt={`${title} project`} className={styles.image} src={imageLink} />
      <div className={styles.descriptionContainer}>
        <h5 className={styles.title}>{title}</h5>
        <span className={styles.descriptionText}>{description}</span>
        <span className={styles.descriptionText}>{`Technologies: ${technologies}`}</span>
      </div>
      <a className={styles.buttonTitle} href={link} rel='noreferrer' target='_blank'>
        View project
      </a>
    </div>
  );
};
