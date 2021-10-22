import React from "react";
import s from "./Projects.module.scss"
import { Project } from "./Project/Project";
import { Title } from "../commonComponents/Title/Title";
import Veltry from "../assets/images/Projects/veltry.jpg";
import Social_network from "../assets/images/Projects/Social network.png"
import Todolist from "../assets/images/Projects/Todolist.png"
import Temp from "../assets/images/Projects/temp.png"

export const Projects = () => {
    return (
        <div className={s.generalContainer}>
            <section className={s.contentContainer}>
                <Title title={"Projects"}/>
                <div className={s.projectsContainer}>
                    <Project title={"Social network"}
                             description={"Social network"}
                             imageLink={Social_network}
                             link={"https://ssivenkov.github.io/Social_network"}
                    />
                    <Project title={"TodoList"}
                             description={"TodoList"}
                             imageLink={Todolist}
                             link={"https://ssivenkov.github.io/TodoList"}
                    />
                    <Project title={"Veltry"}
                             description={"Trip accessories store. Implemented: mobile first method, responsive design, PHP modular file system, SQL for product items and search items, sorting button for items, 404 page, hiding of pages file extensions, send mail script, custom scroll, modal window for enlarged product images, tooltips for buy buttons, search product items scripts(uses session storage to save scroll state for scroll to product type), cart scripts(uses local storage to save a list of cart items)."}
                             imageLink={Veltry}
                             link={"https://veltry.site"}
                    />
                </div>
            </section>
        </div>
    );
}