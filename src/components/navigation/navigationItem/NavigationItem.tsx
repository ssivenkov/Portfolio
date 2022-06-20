import React from 'react';

import styles from '@components/navigation/navigationItem/NavigationItem.module.scss';
import {
  NavigationItemPropsType,
  ScrollToSectionIdParamsType,
} from '@components/navigation/navigationItem/types';
import scrollIntoView from 'scroll-into-view-if-needed';

export const NavigationItem = (props: NavigationItemPropsType) => {
  const {id, title} = props;

  const scrollToSectionId = (el: ScrollToSectionIdParamsType) => {
    const elementIdAsString = el.currentTarget.id.replace(/Ref/gi, '');
    const element = document.getElementById(elementIdAsString);

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
