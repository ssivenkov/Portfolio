import React from 'react';

import {LinkButtonPropsType} from '@components/contacts/linkButton/types';

import styles from './LinkButton.module.scss';

export const LinkButton = (props: LinkButtonPropsType) => {
  const {link, title, FontawesomeIconClass} = props;

  return (
    <a className={styles.linkButton} href={link} rel='noreferrer' target='_blank'>
      <span className={styles.linkButtonText}>{title}</span>
      <span
        className={`${styles.linkButtonIcon} ${styles.linkButtonIconSmall} fab ${FontawesomeIconClass}`}
      />
    </a>
  );
};
