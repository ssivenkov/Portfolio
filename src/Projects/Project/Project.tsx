import React from 'react';
import s from './Project.module.scss'

type ProjectPropsType = {
    title: string
    description: string
    img: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.generalContainer}>
            <div className={s.contentContainer}>
                <div className={s.image}>
                    <a href="" className={s.linkTitle}>View</a>
                </div>
                <span className={s.title}>{props.title}</span>
            </div>
            <div className={s.descriptionContainer}>
                <span className={s.descriptionText}>{props.description}</span>
            </div>
        </div>
    );
}