import React from 'react';

import { TitlePropsType } from '@components/common/Title/types';

import styles from './Title.module.scss';

export const Title = (props: TitlePropsType) => {
  const { title } = props;

  return <h3 className={styles.title}>{title}</h3>;
};
