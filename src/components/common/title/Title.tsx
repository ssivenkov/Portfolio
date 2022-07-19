import React from 'react';

import styles from './Title.module.scss';
import { TitlePropsType } from './types';

export const Title = (props: TitlePropsType) => {
  const { title } = props;

  return <h3 className={styles.title}>{title}</h3>;
};
