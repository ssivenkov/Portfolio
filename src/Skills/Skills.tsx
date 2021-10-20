import React from "react";
import s from "./Skills.module.scss"
import { Skill } from "./Skill/Skill";
import { Title } from "../commonComponents/Title/Title";
import HTML from '../assets/images/Skills/HTML.svg'
import CSS from '../assets/images/Skills/CSS.svg'
import SASS from '../assets/images/Skills/SASS.svg'
import JS from '../assets/images/Skills/JS.svg'
import TS from '../assets/images/Skills/TS.svg'
import ReactJS from '../assets/images/Skills/React.svg'
import ReduxJS from '../assets/images/Skills/Redux.svg'
import Git from '../assets/images/Skills/Git.svg'
import Jest from '../assets/images/Skills/Jest.svg'

export const Skills = () => {
    return (
        <div className={s.generalContainer}>
            <section className={s.contentContainer}>
                <Title title={"Skills"}/>
                <div className={s.skillsContainer}>
                    <Skill title={"HTML"}
                           imageLink={HTML}/>
                    <Skill title={"CSS"}
                           imageLink={CSS}/>
                    <Skill title={"SASS"}
                           imageLink={SASS}/>
                    <Skill title={"JavaScript"}
                           imageLink={JS}/>
                    <Skill title={"TypeScript"}
                           imageLink={TS}/>
                    <Skill title={"React"}
                           imageLink={ReactJS}/>
                    <Skill title={"Redux"}
                           imageLink={ReduxJS}/>
                    <Skill title={"Jest"}
                           imageLink={Jest}/>
                    <Skill title={"Git"}
                           imageLink={Git}/>
                </div>
            </section>
        </div>
    );
}