import React, {MouseEvent} from 'react';
import styles from './Nav.module.scss';
import scrollIntoView from 'scroll-into-view-if-needed';

export const Nav = () => {
  const scrollToSectionId = (el: MouseEvent<HTMLDivElement>) => {
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
    <div className={styles.generalContainer}>
      <nav className={styles.contentContainer}>
        <div id={'homeRef'} onClick={scrollToSectionId} className={styles.itemContainer}>
          <span className={styles.itemText}>Home</span>
        </div>
        <div id={'skillsRef'} onClick={scrollToSectionId} className={styles.itemContainer}>
          <span className={styles.itemText}>Skills</span>
        </div>
        <div id={'projectsRef'} onClick={scrollToSectionId} className={styles.itemContainer}>
          <span className={styles.itemText}>Projects</span>
        </div>
        <div id={'contactsRef'} onClick={scrollToSectionId} className={styles.itemContainer}>
          <span className={styles.itemText}>Contacts</span>
        </div>
      </nav>
    </div>
  );
};
