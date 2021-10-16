import React from 'react';
import s from './Projects.module.scss'
import {Project} from "./Project/Project";

export const Projects = () => {
    return (
        <div className={s.generalContainer}>
            <div className={s.contentContainer}>
                <span className={s.title}>Projects</span>
                <div className={s.projectsContainer}>
                    <Project title={"Social network"}
                           description={"Description"}
                           img={"https://pbs.twimg.com/media/D175HjBX0AE8RWD.png"}/>
                    <Project title={"TodoList"}
                           description={"Description"}
                           img={"https://cs8.pikabu.ru/avatars/1577/x1577866-1311855869.png"}/>
                </div>
            </div>
        </div>
    );
}