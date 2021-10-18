import React from "react";
import s from "./LinkButton.module.scss"

type LinkButtonType = {
    link: string
    title: string
    iconClass: string
}

export const LinkButton: React.FC<LinkButtonType> = ({link, title, iconClass}) => {
    return <a className={s.linkButton} href={link} target="_blank">
        <span className={s.linkButtonText}>{title}</span>
        <span className={`${s.linkButtonIcon} ${s.linkButtonIconSmall} fab ${iconClass}`}></span>
    </a>
}