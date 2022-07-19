import React from 'react';

import scrollIntoView from 'scroll-into-view-if-needed';

import styles from './NavigationItem.module.scss';
import { NavigationButtonPropsType, EventHandlerType } from './types';

export const NavigationButton = (props: NavigationButtonPropsType) => {
  const { id, title } = props;

  const scrollToSectionId = (eventHandler: EventHandlerType) => {
    const elementId = eventHandler.currentTarget.id.replace(/Ref/gi, '');
    const element = document.getElementById(elementId);

    if (element) {
      scrollIntoView(element, { behavior: 'smooth', block: 'start' });
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
