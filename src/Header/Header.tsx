import React from 'react';
import s from './Header.module.css'
import {Nav} from "../Nav/Nav";

export const Header = () => {
    return (
        <div className={s.generalContainer}>
            <Nav/>
        </div>
    );
}