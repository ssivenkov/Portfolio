import React from 'react';
import s from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={s.generalContainer}>
            <div className={s.contentContainer}>
                <span className={s.title}>Sergei Sivenkov</span>
                <div className={s.iconsContainer}>
                    <a className={`${s.link} fab fa-linkedin`} href="https://www.linkedin.com/in/ssivenkov" target="_blank"></a>
                    <a className={`${s.link} fab fa-github`} href="https://github.com/ssivenkov" target="_blank"></a>
                    <a className={`${s.link} fab fa-telegram`} href="https://t.me/sergei_sivenkov" target="_blank"></a>
                </div>
            </div>
        </div>
    );
}