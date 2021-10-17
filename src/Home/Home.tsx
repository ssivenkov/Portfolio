import React from "react";
import s from "./Home.module.scss"
import Avatar from "../assets/images/avatar.jpg";

export const Home = () => {
    return (
        <div className={s.generalContainer}>
            <div className={s.contentContainer}>
                <img className={s.photo}
                     src={Avatar}
                     alt=""/>
                <h1 className={s.firstLine}>Hi, I'm Sergei Sivenkov</h1>
                <h2 className={s.secondLine}>Front-End Developer</h2>
            </div>
        </div>
    )
}