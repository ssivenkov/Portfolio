import React from "react";
import s from "./Home.module.scss"

export const Home = () => {
    return (
        <div className={s.generalContainer}>
            <div className={s.contentContainer}>
                <div>
                    <img className={s.photo}
                         src="https://i.piccy.info/i9/a10dc9a163e91dd82fa635fa0684c0f4/1632417297/115257/1442702/il_794xN_1446841885_9l2j.jpg"
                         alt=""/>
                </div>
                <h1 className={s.firstLine}>Hi, I'm Sergei Sivenkov</h1>
                <h2 className={s.secondLine}>Front-End Developer</h2>
            </div>
        </div>
    )
}