import React from 'react';

import {
  NavigationItemPropsType,
  SectionType,
} from '@components/navigation/navigationItem/types';
import scrollIntoView from 'scroll-into-view-if-needed';

import styles from './NavigationItem.module.scss';

export const NavigationItem = (props: NavigationItemPropsType) => {
  const {id, title} = props;

  const scrollToSectionId = (el: SectionType) => {
    const elementId = el.currentTarget.id.replace(/Ref/gi, '');
    const element = document.getElementById(elementId);

    if (element) {
      scrollIntoView(element, {behavior: 'smooth', block: 'start'});
    }
  };

  return (
    <div
      className={styles.itemContainer}
      id={id}
      onClick={scrollToSectionId}
      onKeyDown={scrollToSectionId}
      role='button'
      tabIndex={0}
    >
      <span className={styles.itemText}>{title}</span>
    </div>
  );
};
