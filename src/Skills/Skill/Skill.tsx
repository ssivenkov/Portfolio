import React from 'react';
import s from './Skill.module.scss'

type SkillPropsType = {
    title: string
    description: string
    imageLink: string
}

export const Skill: React.FC<SkillPropsType> = ({title, description, imageLink}) => {
    return (
        <div className={s.generalContainer}>
            <div className={s.contentContainer}>
                <img className={s.image} src={imageLink} alt=""/>
                <span className={s.title}>{title}</span>
            </div>
            {/*<div className={s.descriptionContainer}>
                <span className={s.descriptionText}>{description}</span>
            </div>*/}
        </div>
    );
}