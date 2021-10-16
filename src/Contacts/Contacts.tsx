import React from 'react';
import s from './Contacts.module.scss'

export const Contacts = () => {
    return (
        <div className={s.generalContainer}>
            <div className={s.contentContainer}>
                <span className={s.title}>Contacts</span>
                <form className={s.formContainer} action="">
                    <input className={s.input} type="text" placeholder={""}/>
                    <input className={s.input} type="text"/>
                    <textarea className={s.textarea} name="name" id="name" cols={20} rows={7}></textarea>
                </form>
            </div>
        </div>
    );
}