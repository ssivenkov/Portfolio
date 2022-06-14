import React from 'react';
import styles from './LinkButton.module.scss';

type LinkButtonType = {
  link: string;
  title: string;
  iconClass: string;
};

export const LinkButton: React.FC<LinkButtonType> = ({link, title, iconClass}) => {
  return (
    <a className={styles.linkButton} href={link} target='_blank' rel='noreferrer'>
      <span className={styles.linkButtonText}>{title}</span>
      <span className={`${styles.linkButtonIcon} ${styles.linkButtonIconSmall} fab ${iconClass}`}></span>
    </a>
  );
};
