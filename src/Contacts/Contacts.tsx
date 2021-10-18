import React from "react";
import s from "./Contacts.module.scss"
import { LinkButton } from "./LinkButton/LinkButton";
import { Title } from "../commonComponents/Title/Title";

export const Contacts = () => {
    return (
        <div className={s.generalContainer}>
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

                <form className={s.formContainer} action="">
                    <div className={s.inputContainer}>
                        <input className={`${s.input} ${s.inputLeft}`} type="text" placeholder={"YOUR NAME"}/>
                        <input className={`${s.input} ${s.inputRight}`} type="text" placeholder={"YOUR EMAIL"}/>
                    </div>
                    <textarea className={s.textarea} name="name" id="name" placeholder={"YOUR MESSAGE"}
                              rows={6}></textarea>
                    <button className={s.sendButton}
                            type={"submit"}>Send message
                    </button>
                </form>
            </div>
        </div>
    );
}