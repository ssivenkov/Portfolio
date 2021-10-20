import React from "react";
import s from "./Title.module.scss"

type TitleType = {
    title: string
}

export const Title: React.FC<TitleType> = ({title}) => {
    return <h3 className={s.title}>{title}</h3>
}