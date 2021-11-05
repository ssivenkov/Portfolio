import React from "react";
import s from "./Home.module.scss"
import Avatar from "../assets/images/avatar.jpg";
import BackgroundImage from "../assets/images/bg.jpg";
import { Parallax } from "react-parallax";

export const Home = () => {
    return (
        <div id={"home"}>
            <Parallax
                bgImage={BackgroundImage}
                strength={500}
                bgImageStyle={{width: "100vw", height: "100vh", objectFit: "cover"}}
            >
                <div className={s.generalContainer}>
                    <section className={s.contentContainer}>
                        <img className={s.photo}
                             src={Avatar}
                             alt=""/>
                        <h1 className={s.firstLine}>Hi, I'm Sergei Sivenkov</h1>
                        <h2 className={s.secondLine}>Frontend Developer</h2>
                        <div className={s.marginBlock}></div>
                    </section>
                </div>
            </Parallax>
        </div>
    )
}