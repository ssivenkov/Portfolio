import React from 'react';

import {NavigationItem} from '@components/navigation/navigationItem/NavigationItem';

import styles from './Navigation.module.scss';

export const Navigation = () => (
  <div className={styles.generalContainer}>
    <nav className={styles.contentContainer}>
      <NavigationItem id='homeRef' title='Home' />
      <NavigationItem id='skillsRef' title='Skills' />
      <NavigationItem id='projectsRef' title='Projects' />
      <NavigationItem id='contactsRef' title='Contacts' />
    </nav>
  </div>
);
