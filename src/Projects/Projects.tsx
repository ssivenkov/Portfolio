import React from "react";
import s from "./Projects.module.scss"
import { Project } from "./Project/Project";
import { Title } from "../commonComponents/Title/Title";
import Veltry from "../assets/images/Projects/veltry.jpg";
import Social_network from "../assets/images/Projects/Social network.png"
import Todolist from "../assets/images/Projects/Todolist.png"
import Surface1 from "../assets/images/Projects/Surface1.jpg"
import Temp from "../assets/images/Projects/temp.png"

export const Projects = () => {
    return (
        <div id={"projects"} className={s.generalContainer}>
            <section className={s.contentContainer}>
                <Title title={"Projects"}/>
                <div className={s.projectsContainer}>
                    <Project title={"Social network"}
                             description={"SPA for social actions - messaging and blogging. Implemented: login page with validation, logout button, profile page with the ability to view the information of the selected user, add a new post and view published posts, message page with the ability to send a message with validation, users page with the ability to view the list of users using pagination, subscribe and unsubscribe to any user, view the user profile."}
                             technologies={"SCSS, JavaScript, TypeScript, React, Redux, Redux-form, Axios"}
                             imageLink={Social_network}
                             link={"https://ssivenkov.github.io/Social_network"}
                    />
                    <Project title={"TodoList"}
                             description={"SPA for managing to-do lists and their items. Implemented: add todolist / task, remove todolist / task, rename todolist / task, marking the completed task, displaying all / active / confirmed tasks in todolist."}
                             technologies={"SCSS, JavaScript, TypeScript, React, Redux"}
                             imageLink={Todolist}
                             link={"https://ssivenkov.github.io/TodoList"}
                    />
                    <Project title={"Veltry"}
                             description={"Trip goods store website. Implemented: mobile first method, responsive design, PHP modular file system, SQL for product items and search items, sorting button for items, 404 page, hiding of pages file extensions, send mail script, custom scroll, modal window for enlarged product images, tooltips for buy buttons, search product items scripts(uses session storage to save scroll state for scroll to product type), cart scripts(uses local storage to save a list of cart items)."}
                             technologies={"HTML, SCSS, Gulp, JavaScript, PHP, SQL"}
                             imageLink={Veltry}
                             link={"https://veltry.site"}
                    />
                    <Project title={"Surface1"}
                             description={"Landing page on sports topics. Implemented: desktop first method, responsive design."}
                             technologies={"HTML, CSS"}
                             imageLink={Surface1}
                             link={"https://surfaceone.site"}
                    />
                </div>
            </section>
        </div>
    );
}