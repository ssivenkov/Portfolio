import React from 'react';
import s from './Home.module.css'

export const Home = () => {
    return (
        <div className={s.generalContainer}>
            <div className={s.contentContainer}>
                <div className={s.text}>
                    <span>Hello!</span>
                    <br/>
                    <h1>My name is Sergei Sivenkov. I'm Frontend developer</h1>
                </div>
                <div>
                    <img className={s.photo} src="https://i.piccy.info/i9/a10dc9a163e91dd82fa635fa0684c0f4/1632417297/115257/1442702/il_794xN_1446841885_9l2j.jpg" alt=""/>
                </div>

            </div>
        </div>
    );
}