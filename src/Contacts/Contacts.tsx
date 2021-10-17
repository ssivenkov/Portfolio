import React from "react";
import s from "./Contacts.module.scss"

export const Contacts = () => {
    return (
        <div className={s.generalContainer}>
            <span className={s.title}>Contacts</span>
            <div className={s.contentContainer}>
                <div className={s.linksContainer}>
                    <a className={s.link} href="https://www.linkedin.com/in/ssivenkov" target="_blank">
                        <span className={s.linkText}>LinkedIn</span>
                        <span className={`${s.linkIcon} ${s.linkIconSmall} fab fa-linkedin-in`}></span>
                    </a>
                    <a className={s.link} href="https://t.me/sergei_sivenkov" target="_blank">
                        <span className={s.linkText}>Telegram</span>
                        <span className={`${s.linkIcon} fab fa-telegram`}></span>
                    </a>
                    <a className={s.link} href="https://github.com/ssivenkov" target="_blank">
                        <span className={s.linkText}>GitHub</span>
                        <span className={`${s.linkIcon} fab fa-github`}></span>
                    </a>
                    <a className={s.link} href="https://wa.me/375256778073" target="_blank">
                        <span className={s.linkText}>WhatsApp</span>
                        <span className={`${s.linkIcon} fab fa-whatsapp`}></span>
                    </a>
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