import React from 'react';
import s from './Project.module.scss'

type ProjectPropsType = {
    title: string
    description: string
    technologies: string
    imageLink: string
    link: string
}

export const Project: React.FC<ProjectPropsType> = ({title, description, technologies, imageLink, link}) => {
    return (
        <div className={s.generalContainer}>
            <img className={s.image} src={imageLink} alt={`${title} project`}/>
            <div className={s.descriptionContainer}>
                <h5 className={s.title}>{title}</h5>
                <span className={s.descriptionText}>{description}</span>
                <span className={s.descriptionText}>{`Technologies: ${technologies}`}</span>
            </div>
            <a href={link} className={s.buttonTitle} target="_blank">View project</a>
        </div>
    );
}