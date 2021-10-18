import React from 'react';
import s from './Project.module.scss'

type ProjectPropsType = {
    title: string
    description: string
    imageLink: string
    link: string
}

export const Project: React.FC<ProjectPropsType> = ({title, description, imageLink, link}) => {
    return (
        <div className={s.generalContainer}>
            <div className={s.imageContainer}>
                <img className={s.image} src={imageLink} alt={`${title} project`}/>
            </div>
            <div className={s.descriptionContainer}>
                <span className={s.title}>{title}</span>
                <span className={s.descriptionText}>{description}</span>
                <a href={link} className={s.buttonTitle} target="_blank">View project</a>
            </div>
        </div>
    );
}