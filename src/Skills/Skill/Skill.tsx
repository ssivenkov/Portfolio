import React from 'react';
import s from './Skill.module.scss'

type SkillPropsType = {
    title: string
    imageLink: string
}

export const Skill: React.FC<SkillPropsType> = ({title, imageLink}) => {
    return (
        <div className={s.generalContainer}>
            <div className={s.contentContainer}>
                <img className={s.image} src={imageLink} alt=""/>
                <h5 className={s.title}>{title}</h5>
            </div>
        </div>
    );
}