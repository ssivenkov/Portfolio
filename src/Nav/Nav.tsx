import React, {MouseEvent, KeyboardEvent} from 'react';

import scrollIntoView from 'scroll-into-view-if-needed';

import styles from './Nav.module.scss';

type NavItemType = {
  id: string;
  title: string;
};

const NavItem = (props: NavItemType) => {
  const {id, title} = props;

  const scrollToSectionId = (
    el: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>,
  ) => {
    const elementIdAsString = el.currentTarget.id.replace(/Ref/gi, '');
    const element = document.getElementById(elementIdAsString);

    if (element) {
      scrollIntoView(element, {
        behavior: 'smooth',
        block: 'start',
      });
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

export const Nav = () => {
  return (
    <div className={styles.generalContainer}>
      <nav className={styles.contentContainer}>
        <NavItem id='homeRef' title='Home' />
        <NavItem id='skillsRef' title='Skills' />
        <NavItem id='projectsRef' title='Projects' />
        <NavItem id='contactsRef' title='Contacts' />
      </nav>
    </div>
  );
};
