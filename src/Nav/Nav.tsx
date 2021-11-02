import React from "react";
import s from "./Nav.module.scss"

export const Nav = () => {
    return (
        <div className={s.generalContainer}>
            <nav className={s.contentContainer}>
                <div className={s.itemContainer}>
                    <span className={s.itemText}>Home</span>
                </div>
                <div className={s.itemContainer}>
                    <span className={s.itemText}>Skills</span>
                </div>
                <div className={s.itemContainer}>
                    <span className={s.itemText}>Projects</span>
                </div>
                <div className={s.itemContainer}>
                    <span className={s.itemText}>Contacts</span>
                </div>
            </nav>
        </div>
    );
}