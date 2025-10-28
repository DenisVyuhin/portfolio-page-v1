"use client";

import Link from 'next/link';
import styles from './Header.module.css';
import React, { useState } from 'react';


function Header() {
   const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
   const [theme, setTheme] = useState(darkMode ? "dark" : "light");

   window.addEventListener("scroll", () => {
      let pageY = window.scrollY;

      document.getElementById("navigation").style.top = pageY + "px";
      document.getElementById("dark-layer").style.top = pageY + "px";

      if (pageY >= 100) {
         document.getElementById("header").style.position = "fixed";
         document.getElementById("header").style.top = "10px";
         document.getElementById("header").style.border = "1px solid var(--panel-color)";
         document.getElementById("header").style.boxShadow = "0px 0px 15px rgba(0, 0, 0, .05)";
      } else {
         document.getElementById("header").style.position = "absolute";
         document.getElementById("header").style.top = "5px";
         document.getElementById("header").style.border = "none";
         document.getElementById("header").style.boxShadow = "none";
      }
   });

   const handleButtonClick = () => {
      const html = document.documentElement;
      let currentTheme = html.getAttribute("theme");
      let newTheme = currentTheme === "dark" ? "light" : "dark";

      setTheme(newTheme);
      html.setAttribute("theme", newTheme);
   }
   
   const point = <>
      <b style={{color: "var(--accent-color-1)"}}>&gt;</b> 
   </>

   const handleOpenNavigation = () => {
      document.getElementById("dark-layer").style.display = "block";
      document.getElementById("navigation").style.left = "0";
   }

   const handleCloseNavigation = () => {
      document.getElementById("dark-layer").style.display = "none";
      document.getElementById("navigation").style.left = "-100%";
   }

   return (
      <>
         <header id="header" className={styles.header}>
            <div onClick={handleOpenNavigation} className={styles.burger}>
               <div className={styles.line}></div>
               <div className={styles.line}></div>
               <div className={styles.line}></div>
            </div>
            <Link className={styles.logo} href="/">KodersUp</Link>
            <nav>
               <a href='#projects'>Проекты</a>
               <a href='#stack'>Стек</a>
               <a href='#reviews'>Отзывы</a>
               <a href='#about-me'>Обо мне</a>
               <a href='#contacts'>Контакты</a>
            </nav>
            <button onClick={handleButtonClick}>
               <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-sun-moon"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9.173 14.83a4 4 0 1 1 5.657 -5.657" /><path d="M11.294 12.707l.174 .247a7.5 7.5 0 0 0 8.845 2.492a9 9 0 0 1 -14.671 2.914" /><path d="M3 12h1" /><path d="M12 3v1" /><path d="M5.6 5.6l.7 .7" /><path d="M3 21l18 -18" /></svg>
            </button>
         </header>

         {/* Это затемнение заднего фона, при открытии меню навигации */}
         <div onClick={handleCloseNavigation} id="dark-layer" className={styles['dark-layer']}></div>

         <div id="navigation" className={styles.navigation}>
            <div className={styles['nav-head']}>
               <h3>KodersUp</h3>
               <button onClick={handleCloseNavigation}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
               </button>
            </div>
            <div onClick={handleCloseNavigation} className={styles['nav-content']}>
               <a href='#projects'>{point} Проекты</a>
               <a href='#stack'>{point} Стек</a>
               <a href='#reviews'>{point} Отзывы</a>
               <a href='#about-me'>{point} Обо мне</a>
               <a href='#contacts'>{point} Контакты</a>
            </div>
         </div>
      </>
   );
}

export default Header;