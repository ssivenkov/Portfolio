import React from "react";
import s from "./Title.module.scss"

type TitleType = {
    title: string
}

export const Title: React.FC<TitleType> = ({title}) => {
    return <span className={s.title}>{title}</span>
}