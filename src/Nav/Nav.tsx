import React from "react";
import s from "./Nav.module.scss"

export const Nav = () => {
    return (
        <div className={s.generalContainer}>
            <div className={s.contentContainer}>
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
            </div>
        </div>
    );
}