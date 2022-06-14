import React from 'react';
import styles from './Home.module.scss';
import Avatar from '../assets/images/avatar.jpg';
import BackgroundImage from '../assets/images/bg.jpg';
import {Parallax} from 'react-parallax';

export const Home = () => {
  return (
    <div id={'home'}>
      <Parallax
        bgImage={BackgroundImage}
        strength={550}
        bgImageStyle={{width: '100vw', height: '100vh', objectFit: 'cover'}}
      >
        <div className={styles.generalContainer}>
          <section className={styles.contentContainer}>
            <img className={styles.photo} src={Avatar} alt='' />
            <h1 className={styles.firstLine}>Hi, I&apos;m Sergei Sivenkov</h1>
            <h2 className={styles.secondLine}>Frontend Developer</h2>
            <div className={styles.marginBlock}></div>
          </section>
        </div>
      </Parallax>
    </div>
  );
};
