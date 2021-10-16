import React from 'react';
import s from './Skills.module.scss'
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={s.generalContainer}>
            <div className={s.contentContainer}>
                <span className={s.title}>Skills</span>
                <div className={s.skillsContainer}>
                    <Skill title={"JavaScript"}
                           description={"Description"}
                           img={"https://pbs.twimg.com/media/D175HjBX0AE8RWD.png"}/>
                    <Skill title={"React"}
                           description={"Description"}
                           img={"https://cs8.pikabu.ru/avatars/1577/x1577866-1311855869.png"}/>
                    <Skill title={"Redux"}
                           description={"Description"}
                           img={"https://uploads-ssl.webflow.com/5eacc8815c6b73d93d13b2f5/5ed819a41bec6275eade8334_Redux-p-500.jpeg"}/>
                </div>
            </div>
        </div>
    );
}