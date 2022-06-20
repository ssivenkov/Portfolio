import React from 'react';

import {Parallax} from 'react-parallax';

import Avatar from '../../assets/images/avatar.jpg';
import BackgroundImage from '../../assets/images/bg.jpg';

import styles from './Home.module.scss';

export const Home = () => {
  return (
    <div id='home'>
      <Parallax
        bgImage={BackgroundImage}
        bgImageStyle={{width: '100vw', height: '100vh', objectFit: 'cover'}}
        strength={550}
      >
        <div className={styles.generalContainer}>
          <section className={styles.contentContainer}>
            <img alt='' className={styles.photo} src={Avatar} />
            <h1 className={styles.firstLine}>Hi, I&apos;m Sergei Sivenkov</h1>
            <h2 className={styles.secondLine}>Frontend Developer</h2>
            <div className={styles.marginBlock} />
          </section>
        </div>
      </Parallax>
    </div>
  );
};
