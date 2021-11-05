import React, {MouseEvent} from "react";
import s from "./Nav.module.scss"
import scrollIntoView from "scroll-into-view-if-needed";

export const Nav = () => {
    const scrollToSectionId = (el: MouseEvent<HTMLDivElement>) => {
        const elementIdAsString = el.currentTarget.id.replace(/Ref/gi, "");
        const element = document.getElementById(elementIdAsString);
        scrollIntoView(element!, {
            behavior: "smooth",
            block: "start",
        })
    }

    return (
        <div className={s.generalContainer}>
            <nav className={s.contentContainer}>
                <div id={"homeRef"} onClick={scrollToSectionId} className={s.itemContainer}>
                    <span className={s.itemText}>Home</span>
                </div>
                <div id={"skillsRef"} onClick={scrollToSectionId} className={s.itemContainer}>
                    <span className={s.itemText}>Skills</span>
                </div>
                <div id={"projectsRef"} onClick={scrollToSectionId} className={s.itemContainer}>
                    <span className={s.itemText}>Projects</span>
                </div>
                <div id={"contactsRef"} onClick={scrollToSectionId} className={s.itemContainer}>
                    <span className={s.itemText}>Contacts</span>
                </div>
            </nav>
        </div>
    );
}