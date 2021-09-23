import React from 'react';
import s from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={s.generalContainer}>
            <a href={""} className={s.item}>Home</a>
            <a href={""} className={s.item}>Skills</a>
            <a href={""} className={s.item}>Projects</a>
            <a href={""} className={s.item}>Contacts</a>
        </div>
    );
}