import React from "react";
import s from "./Projects.module.scss"
import { Project } from "./Project/Project";
import { Title } from "../commonComponents/Title/Title";
import Veltry from "../assets/images/Projects/veltry.jpg";
import Temp from '../assets/images/Projects/temp.png'

export const Projects = () => {
    return (
        <div className={s.generalContainer}>
            <div className={s.contentContainer}>
                <Title title={"Projects"}/>
                <div className={s.projectsContainer}>
                    <Project title={"Social network"}
                             description={"Social network"}
                             imageLink={Temp}
                             link={"https://ssivenkov.github.io/Social_network/"}
                    />
                    <Project title={"TodoList"}
                             description={"TodoList"}
                             imageLink={Temp}
                             link={"https://ssivenkov.github.io/TodoList/"}
                    />
                    <Project title={"Veltry"}
                             description={"Trip accessories store"}
                             imageLink={Veltry}
                             link={"https://veltry.site/"}
                    />
                </div>
            </div>
        </div>
    );
}