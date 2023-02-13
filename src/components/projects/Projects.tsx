import React from 'react';

import PasswordGenerator from 'assets/images/projects/PasswordGenerator.png';
import PlayingCards from 'assets/images/projects/PlayingCards.png';
import SocialNetwork from 'assets/images/projects/SocialNetwork.png';
import Surface1 from 'assets/images/projects/Surface1.jpg';
import Todolist from 'assets/images/projects/Todolist.png';
import TodolistRN from 'assets/images/projects/ToDoListReactNative.png';
import Veltry from 'assets/images/projects/Veltry.jpg';
import { Title } from 'components/common/title/Title';
import { Project } from 'components/projects/project/Project';
// import Temp from 'assets/images/projects/temp.png';

import styles from './Projects.module.scss';

export const Projects = () => (
  <div className={styles.componentWrapper} id='projects'>
    <section className={styles.contentContainer}>
      <Title title='Projects' />
      <div className={styles.projectsContainer}>
        <Project
          description='Mobile task management application for Android and iOS. Implemented: task management, screens for todo tasks and for done tasks, receiving tasks notification at a certain date and time, notepad, sign in with Google and Facebook, user data storage and synchronizing with cloud database, internet connection checking, app accent color picker, account deleting, changing app language, dark mode, ability to share and rate app, splash screen.'
          googlePlayLink='https://play.google.com/store/apps/details?id=com.jetteam.todolist'
          imageLink={TodolistRN}
          projectLink='https://github.com/ssivenkov/ToDoList-React-Native'
          stack='JavaScript, TypeScript, React Native, Redux, Redux-Saga, ESLint, Prettier, Firebase, i18next, Font Awesome'
          title='ToDo List'
        />
        <Project
          description='SPA for generation secure random passwords. Implemented: create random password page with password settings(length, uppercase letters, lowercase letters, numbers, symbols) and copy password button, recommendations page, change color theme bar on all pages.'
          imageLink={PasswordGenerator}
          projectLink='https://github.com/ssivenkov/Password-generator'
          stack='JavaScript, TypeScript, React, Redux, SCSS, ESLint, Prettier'
          title='Password generator'
        />
        <Project
          description='SPA for learning by cards. Implemented: login page with validation; register page with validation; reset password page with validation; 404 page; profile page with abilities to: edit your profile information (change avatar and nickname), add a new card pack and edit, search, sort, view, remove and learn your card packs; packs list page with abilities to: search, sort, view and learn any card packs; learn page with abilities to answer a question and evaluate your answer.'
          imageLink={PlayingCards}
          projectLink='https://github.com/ssivenkov/Playing-cards'
          stack='JavaScript, TypeScript, React, Redux, Redux-thunk, Axios, Classnames, SCSS, ESLint, Prettier'
          title='Playing cards'
        />
        <Project
          description='SPA for social actions - messaging and blogging. Implemented: login page with validation, error displaying and captcha; 404 page; profile page with abilities to: view the information of the selected user, edit your profile information, change avatar, add a new post and view your published posts; dialogs page with the ability to send a message; users page and friends page with abilities to: view the list of users using pagination, subscribe and unsubscribe to any user, view any user profile.'
          imageLink={SocialNetwork}
          projectLink='https://github.com/ssivenkov/Social_network'
          stack='JavaScript, TypeScript, React, Redux, Redux-thunk, Redux-form, Axios, Reselect, SCSS'
          title='Social network'
        />
        <Project
          description='SPA for managing to-do lists and their items. Implemented: add todolist / task, remove todolist / task, rename todolist / task, marking the completed task, displaying all / active / confirmed tasks in todolist.'
          imageLink={Todolist}
          projectLink='https://github.com/ssivenkov/TodoList'
          stack='JavaScript, TypeScript, React, Redux, Material UI, SCSS'
          title='TodoList'
        />
        <Project
          description='Trip goods store website. Implemented: mobile first method, responsive design, PHP modular file system, SQL for product items and search items, sorting button for items, 404 page, hiding of pages file extensions, send mail script, custom scroll, modal window for enlarged product images, tooltips for buy buttons, search product items scripts(uses session storage to save scroll state for scroll to product type), cart scripts(uses local storage to save a list of cart items).'
          imageLink={Veltry}
          projectLink='https://github.com/ssivenkov/Veltry'
          stack='HTML, SCSS, Gulp, JavaScript, PHP, SQL'
          title='Veltry'
        />
        <Project
          description='Landing page on sports topics. Implemented: desktop first method, responsive design.'
          imageLink={Surface1}
          projectLink='https://github.com/ssivenkov/surface1'
          stack='HTML, CSS'
          title='Surface1'
        />
      </div>
    </section>
  </div>
);
