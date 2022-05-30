import React from "react";
import s from "./Projects.module.scss"
import { Project } from "./Project/Project";
import { Title } from "../commonComponents/Title/Title";
import Temp from "../assets/images/Projects/temp.png"
import Surface1 from "../assets/images/Projects/Surface1.jpg"
import Veltry from "../assets/images/Projects/veltry.jpg";
import Todolist from "../assets/images/Projects/Todolist.png"
import Social_network from "../assets/images/Projects/Social network.png"
import PlayingCards from "../assets/images/Projects/PlayingCards.png"
import PasswordGenerator from "../assets/images/Projects/PasswordGenerator.png"

export const Projects = () => {
    return (
        <div id={"projects"} className={s.generalContainer}>
            <section className={s.contentContainer}>
                <Title title={"Projects"}/>
                <div className={s.projectsContainer}>
                    <Project title={"ToDo List"}
                             description={"Mobile task management application for Android and iOS. Implemented: add task or task list, remove task or task list, rename task or task list, marking the completed task, screens for todo tasks and for done tasks, receiving notifications at a certain date and time for tasks, sign in with Google or Facebook, internet connection checking, delete account button, change app language buttons, user data storage and synchronizing with Firebase Realtime Database, dark theme mode, splash screen."}
                             technologies={"JavaScript, TypeScript, React Native, Redux, Redux-Saga, ESLint, Prettier, Firebase, i18next, Font Awesome"}
                             imageLink={Temp}
                             link={"https://github.com/ssivenkov/ToDoList-React-Native"}
                    />
                    <Project title={"Password generator"}
                             description={"SPA for generation secure random passwords. Implemented: create random password page with password settings(length, uppercase letters, lowercase letters, numbers, symbols) and copy password button, recommendations page, change color theme bar on all pages."}
                             technologies={"JavaScript, TypeScript, React, Redux, SCSS, ESLint, Prettier"}
                             imageLink={PasswordGenerator}
                             link={"https://github.com/ssivenkov/Password-generator"}
                    />
                    <Project title={"Playing cards"}
                             description={"SPA for learning by cards. Implemented: login page with validation; register page with validation; reset password page with validation; 404 page; profile page with abilities to: edit your profile information (change avatar and nickname), add a new card pack and edit, search, sort, view, remove and learn your card packs; packs list page with abilities to: search, sort, view and learn any card packs; learn page with abilities to answer a question and evaluate your answer."}
                             technologies={"JavaScript, TypeScript, React, Redux, Redux-thunk, Axios, Classnames, SCSS, ESLint, Prettier"}
                             imageLink={PlayingCards}
                             link={"https://github.com/ssivenkov/Playing-cards"}
                    />
                    <Project title={"Social network"}
                             description={"SPA for social actions - messaging and blogging. Implemented: login page with validation, error displaying and captcha; 404 page; profile page with abilities to: view the information of the selected user, edit your profile information, change avatar, add a new post and view your published posts; dialogs page with the ability to send a message; users page and friends page with abilities to: view the list of users using pagination, subscribe and unsubscribe to any user, view any user profile."}
                             technologies={"JavaScript, TypeScript, React, Redux, Redux-thunk, Redux-form, Axios, Reselect, SCSS"}
                             imageLink={Social_network}
                             link={"https://github.com/ssivenkov/Social_network"}
                    />
                    <Project title={"TodoList"}
                             description={"SPA for managing to-do lists and their items. Implemented: add todolist / task, remove todolist / task, rename todolist / task, marking the completed task, displaying all / active / confirmed tasks in todolist."}
                             technologies={"JavaScript, TypeScript, React, Redux, Material UI, SCSS"}
                             imageLink={Todolist}
                             link={"https://github.com/ssivenkov/TodoList"}
                    />
                    <Project title={"Veltry"}
                             description={"Trip goods store website. Implemented: mobile first method, responsive design, PHP modular file system, SQL for product items and search items, sorting button for items, 404 page, hiding of pages file extensions, send mail script, custom scroll, modal window for enlarged product images, tooltips for buy buttons, search product items scripts(uses session storage to save scroll state for scroll to product type), cart scripts(uses local storage to save a list of cart items)."}
                             technologies={"HTML, SCSS, Gulp, JavaScript, PHP, SQL"}
                             imageLink={Veltry}
                             link={"https://github.com/ssivenkov/Veltry"}
                    />
                    <Project title={"Surface1"}
                             description={"Landing page on sports topics. Implemented: desktop first method, responsive design."}
                             technologies={"HTML, CSS"}
                             imageLink={Surface1}
                             link={"https://github.com/ssivenkov/surface1"}
                    />
                </div>
            </section>
        </div>
    );
}