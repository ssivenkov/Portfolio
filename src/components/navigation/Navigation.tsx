import React from 'react';

import { NavigationButton } from '@components/navigation/navigationItem/NavigationButton';

import styles from './Navigation.module.scss';

export const Navigation = () => (
  <div className={styles.componentWrapper}>
    <nav className={styles.contentContainer}>
      <NavigationButton id='homeRef' title='Home' />
      <NavigationButton id='skillsRef' title='Skills' />
      <NavigationButton id='projectsRef' title='Projects' />
      <NavigationButton id='contactsRef' title='Contacts' />
    </nav>
  </div>
);
