import React from 'react';
import s from './Skill.module.css'

type SkillPropsType = {
    title: string
    description: string
    img: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.generalContainer}>
            <div className={s.contentContainer}>
                <img className={s.image} src={props.img} alt=""/>
                <span className={s.title}>{props.title}</span>
            </div>
            <div className={s.descriptionContainer}>
                <span className={s.descriptionText}>{props.description}</span>
            </div>
        </div>
    );
}