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
            <div className={s.contentContainer}>
                <Title title={"Skills"}/>
                <div className={s.skillsContainer}>
                    <Skill title={"HTML"}
                           description={"Description"}
                           imageLink={HTML}/>
                    <Skill title={"CSS"}
                           description={"Description"}
                           imageLink={CSS}/>
                    <Skill title={"SASS"}
                           description={"Description"}
                           imageLink={SASS}/>
                    <Skill title={"JavaScript"}
                           description={"Description"}
                           imageLink={JS}/>
                    <Skill title={"TypeScript"}
                           description={"Description"}
                           imageLink={TS}/>
                    <Skill title={"React"}
                           description={"Description"}
                           imageLink={ReactJS}/>
                    <Skill title={"Redux"}
                           description={"Description"}
                           imageLink={ReduxJS}/>
                    <Skill title={"Jest"}
                           description={"Description"}
                           imageLink={Jest}/>
                    <Skill title={"Git"}
                           description={"Description"}
                           imageLink={Git}/>
                </div>
            </div>
        </div>
    );
}