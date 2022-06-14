import React from 'react';
import styles from './Contacts.module.scss';
import {LinkButton} from './LinkButton/LinkButton';
import {Title} from '../commonComponents/Title/Title';
import {ContactForm} from './ContactForm/ContactForm';

export const Contacts = () => {
  return (
    <footer id={'contacts'} className={styles.generalContainer}>
      <Title title={'Contacts'} />
      <div className={styles.contentContainer}>
        <div className={styles.linksContainer}>
          <LinkButton link={'https://www.linkedin.com/in/ssivenkov'} title={'LinkedIn'} iconClass={'fa-linkedin-in'} />
          <LinkButton link={'https://t.me/sergei_sivenkov'} title={'Telegram'} iconClass={'fa-telegram'} />
          <LinkButton link={'https://github.com/ssivenkov'} title={'GitHub'} iconClass={'fa-github'} />
          <LinkButton link={'https://join.skype.com/invite/cdkkYBX1uutB'} title={'Skype'} iconClass={'fa-skype'} />
        </div>
        <div className={styles.separator}></div>
        <ContactForm />
        <div className={styles.levelingBlock}></div>
      </div>
    </footer>
  );
};
