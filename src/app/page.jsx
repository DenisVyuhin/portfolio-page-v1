"use client";

import { FiDownload } from "react-icons/fi";
import Footer from "@/Components/Footer/Footer.jsx";
import ProjectCard from "@/Components/ProjectCard/ProjectsCard.jsx";
import TextType from "@/Components/Animations/TextType.jsx";
import Image from "next/image";


function Home() {
   return (
      <main>
         {/* Header in the layout.jsx */}

         <div className="hero-wrapper">
            <div className="hero-content">
               <Image className="hero-image" src="/hero-logo-brain.png" alt="hero image" width="400" height="400" priority />
               <div className="hero-text">
                  <h1>
                     <TextType className="text-type"
                        text={["Fullstack разработчик, спортсмен"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="_"
                     />
                  </h1>
                  <p>{
                        new Date().getFullYear() - 2006 - (
                           new Date().getMonth() + 1 < 7 ||
                           (new Date().getMonth() + 1 === 7 && new Date().getDate() < 16)
                        )
                     }-летний программист с {new Date().getFullYear() - 2021}-и летним опытом, рекордсмен России по пауэрлифтингу, победитель в YandexCup</p>
               </div>
            </div>
         </div>

         <div className="projects-wrapper">
            <hr />
            <h1 id="projects" className="block-name">Проекты</h1>
            <div className="projects-grid">
               <ProjectCard
                     name="Telegram бот"
                     description="Telegram-бот для поиска ГДЗ. Есть возможность публикации своих ответов, а также ежегодные призы. Стек: Python, Aiogram, SQLAlchemy, Mistral AI API"
                     img="telegram-bot.jpg"
                     link="https://t.me/iu_helper_bot"
                     gitlink="https://github.com/DenisVyuhin/IU-Helper-v2.0"
               />

               <ProjectCard
                     name="Интернет-магазин"
                     description="Многостраничный сайт по продаже разных сборок ПК. На сайте есть контактная форма, анимации и база данных с товарами. Стек: Next JS, Tailwind, Rest API, PostrgeSQL"
                     img="renneo.png"
                     link="https://renneo.ru/"
                     gitlink="https://github.com/DenisVyuhin/"
               />

               <ProjectCard
                     name="Сайт-портфолио"
                     description="Динамический сайт-портфолио для Hevxel'a. Есть разные режимы тем, UI/UX элементы, а также фоновая музыка. Стек: React JS, SCSS, React Bits"
                     img="hexvel.png"
                     link="https://hexvel.vercel.app/"
                     gitlink="https://github.com/DenisVyuhin/"
               />

               <ProjectCard
                     name="Boston Dynamics"
                     description="Лендинг для компании Boston Dymanics. Boston Dynamics разрабатывает серию динамичных, высокомобильных роботов, включая BigDog, Spot, Atlas и Handle. Стек: HTML, CSS, PHP, JS, SQL"
                     img="boston-dynamics.png"
                     link="https://bostondynamics.com/products/atlas/"
                     gitlink="https://github.com/DenisVyuhin/"
               />

               <ProjectCard
                     name="Соцсеть"
                     description="Twitblit - ействительно социальная сеть, сочетающая лучшие качества Reddit и Twitter. В сети активно участвуют ИИ боты, которые могут писать посты и обсуждать интересные темы."
                     img="twitblit.jpg"
                     link="https://twitblit.ru/"
                     gitlink="https://github.com/DenisVyuhin/"
               />

               <ProjectCard
                     name="Игровой телеграм-бот"
                     description="Проект развлекательного бота для пользователей Telegram. Игровая валюта, множество игр. Интеграции ИИ и ежегодные розыгрыши. Стек: Python, Aiogram, PostgreSQL, SLQAlchemy, Gemini AI"
                     img="kazinkov-bot.jpg"
                     link="/projects"
                     gitlink="https://github.com/DenisVyuhin/"
               />

               <ProjectCard
                     name="NeuroGPT"
                     description="Чат с разными нейросетями: Gemini, ChatGPT, DeepSeek, Claude AI. Приложение написано прямо на телефоне, ИИ модели - установлены локально, поэтому интернет не требуется. Стек: Processing (Java library)"
                     img="project_1.jpg"
                     link="/projects"
                     gitlink="https://github.com/DenisVyuhin/"
               />

            </div>
         </div>


         <div className="stack-wrapper">
            <hr />
            <h1 id="stack" className="block-name">Стек</h1>
            <div className="stack-container">
               <div className="stack-block">
                  <div className="text-content">
                     <h3>Фронтенд</h3>
                     <div className="technology-container">
                        <p className="technology html">HTML5</p>
                        <p className="technology css">CSS3</p>
                        <p className="technology js">JavaScript</p>
                        <p className="technology p5js">P5JS</p>
                        <p className="technology react">ReactJS</p>
                        <p className="technology next">NextJS</p>
                        <p className="technology tailwind">Tailwind</p>
                     </div>
                  </div>
                  <div id="frontend-image" className="stack-image"></div>
               </div>
               <div className="stack-block">
                  <div className="text-content">
                     <h3>Бекенд</h3>
                     <div className="technology-container">
                        <p className="technology python">Python</p>
                        <p className="technology django">Django</p>
                        <p className="technology mysql">MySQL</p>
                        <p className="technology mongodb">MongoDB</p>
                        <p className="technology node">NodeJS</p>
                     </div>
                  </div>
                  <div id="backend-image" className="stack-image"></div>
               </div>
               <div className="stack-block">
                  <div className="text-content">
                     <h3>Остальное</h3>
                     <div className="technology-container">
                        <p className="technology docker">Docker</p>
                        <p className="technology github">GitHub</p>
                        <p className="technology figma">Figma</p>
                        <p className="technology ai">AI instruments</p>
                     </div>
                  </div>
                  <div id="another-image" className="stack-image"></div>
               </div>
            </div>
         </div>

         <div className="about-me-wrapper">
            <hr />
            <h1 id="about-me" className="block-name">Обо мне</h1>
            <div className="about-me-container">
               <p>
                  👋 <b style={{color: 'var(--main-text)'}}>Меня зовут Денис</b> — я любознательный, настойчивый и творческий человек, который с детства любит разбираться, как всё устроено. Ещё с ранних лет я увлекался LEGO, роботами и самостоятельно конструировал и программировал своих роботов без инструкций. Позже занялся авиа-моделированием и создал уникальный глиссер, который был включён в программу обучения. Я рекордсмен своего города по пауэрлифтингу и имею официальные корочки.
                  <br />
                  <br />
                  Помимо спорта я активно развиваюсь в IT: самостоятельно заработал 300.000₽ на MacBook, создал полноценного Telegram-бота-помощника с ИИ-ассистентом, который принёс мне более 50.000₽. Сегодня я продолжаю изучать нейросети, программирование, разработку игр и сайтов, используя Java, Processing, Python и другие.
               </p>
               <hr />
               <div className="resume-container">
                  <a href="backend-image.png" download>
                     <FiDownload size={20} />
                     Скачать резюме
                  </a>
               </div>
            </div>
         </div>

         <div className="contacts-wrapper">
            <hr />
            <h1 id="contacts" className="block-name">Контакты</h1>
            <div className="contacts-content">
               <div className="contacts-container">
                  <h4>Отвечаю в течении 30 минут</h4>
                  <a href="https://t.me/KodersUp" target="_blank" className="contact-block telegram">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" /></svg>
                     Telegram
                  </a>
                  <a href="https://github.com/DenisVyuhin/" target="_blank" className="contact-block github">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                     GitHub
                  </a>
                  <a href="https://vk.com/kodersUp" target="_blank" className="contact-block vk">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 19h-4a8 8 0 0 1 -8 -8v-5h4v5a4 4 0 0 0 4 4h0v-9h4v4.5l.03 0a4.531 4.531 0 0 0 3.97 -4.496h4l-.342 1.711a6.858 6.858 0 0 1 -3.658 4.789h0a5.34 5.34 0 0 1 3.566 4.111l.434 2.389h0h-4a4.531 4.531 0 0 0 -3.97 -4.496v4.5z" /></svg>
                     VKontakte
                  </a>
                  <a href="https://mail.google.com/mail/denisvuhin16" target="_blank" className="contact-block email">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                     Email
                  </a>
               </div>
            </div>
         </div>
         
         {/* Футер в main - глупо, я в курсе */}
         <Footer />
      </main>
   );
}

export default Home;