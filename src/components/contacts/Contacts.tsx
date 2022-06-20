import React from 'react';

import {Title} from '../common/Title/Title';

import {ContactForm} from './contactForm/ContactForm';
import styles from './Contacts.module.scss';
import {LinkButton} from './linkButton/LinkButton';

export const Contacts = () => {
  return (
    <footer className={styles.generalContainer} id='contacts'>
      <Title title='Contacts' />
      <div className={styles.contentContainer}>
        <div className={styles.linksContainer}>
          <LinkButton
            iconClass='fa-linkedin-in'
            link='https://www.linkedin.com/in/ssivenkov'
            title='LinkedIn'
          />
          <LinkButton
            iconClass='fa-telegram'
            link='https://t.me/sergei_sivenkov'
            title='Telegram'
          />
          <LinkButton
            iconClass='fa-github'
            link='https://github.com/ssivenkov'
            title='GitHub'
          />
          <LinkButton
            iconClass='fa-skype'
            link='https://join.skype.com/invite/cdkkYBX1uutB'
            title='Skype'
          />
        </div>
        <div className={styles.separator} />
        <ContactForm />
        <div className={styles.levelingBlock} />
      </div>
    </footer>
  );
};
