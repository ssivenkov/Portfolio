import React from 'react';

import styles from './LinkButton.module.scss';
import { LinkButtonPropsType } from './types';

export const LinkButton = (props: LinkButtonPropsType) => {
  const { link, title, FontawesomeIconClass } = props;

  return (
    <a className={styles.linkButton} href={link} rel='noreferrer' target='_blank'>
      <span className={styles.linkButtonText}>{title}</span>
      <span
        className={`${styles.linkButtonIcon} ${styles.linkButtonIconSmall} fab ${FontawesomeIconClass}`}
      />
    </a>
  );
};
