import React from 'react';

import {Title} from '@components/common/Title/Title';
import {ContactForm} from '@components/contacts/contactForm/ContactForm';
import {LinkButton} from '@components/contacts/linkButton/LinkButton';

import styles from './Contacts.module.scss';

export const Contacts = () => (
  <footer className={styles.componentWrapper} id='contacts'>
    <Title title='Contacts' />
    <div className={styles.contentContainer}>
      <div className={styles.linksContainer}>
        <LinkButton
          FontawesomeIconClass='fa-linkedin-in'
          link='https://www.linkedin.com/in/ssivenkov'
          title='LinkedIn'
        />
        <LinkButton
          FontawesomeIconClass='fa-telegram'
          link='https://t.me/sergei_sivenkov'
          title='Telegram'
        />
        <LinkButton
          FontawesomeIconClass='fa-github'
          link='https://github.com/ssivenkov'
          title='GitHub'
        />
        <LinkButton
          FontawesomeIconClass='fa-skype'
          link='https://join.skype.com/invite/cdkkYBX1uutB'
          title='Skype'
        />
      </div>
      <div className={styles.separator} />
      <ContactForm />
      <div className={styles.marginBlock} />
    </div>
  </footer>
);
