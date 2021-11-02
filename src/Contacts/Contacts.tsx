import React from "react";
import s from "./Contacts.module.scss"
import { LinkButton } from "./LinkButton/LinkButton";
import { Title } from "../commonComponents/Title/Title";
import { ContactForm } from "./ContactForm/ContactForm";

export const Contacts = () => {
    return (
        <footer className={s.generalContainer}>
            <Title title={"Contacts"}/>
            <div className={s.contentContainer}>
                <div className={s.linksContainer}>
                    <LinkButton link={"https://www.linkedin.com/in/ssivenkov"}
                                title={"LinkedIn"}
                                iconClass={"fa-linkedin-in"}/>
                    <LinkButton link={"https://t.me/sergei_sivenkov"}
                                title={"Telegram"}
                                iconClass={"fa-telegram"}/>
                    <LinkButton link={"https://github.com/ssivenkov"}
                                title={"GitHub"}
                                iconClass={"fa-github"}/>
                    <LinkButton link={"https://wa.me/375256778073"}
                                title={"WhatsApp"}
                                iconClass={"fa-whatsapp"}/>
                </div>
                <div className={s.separator}></div>
                <ContactForm/>
                <div className={s.levelingBlock}></div>
            </div>
        </footer>
    );
}