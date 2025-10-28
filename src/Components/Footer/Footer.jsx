import styles from './Footer.module.css'


function Footer() {
   return (
      <footer className={styles.footer}>
         <div className={styles.container}>
            &copy;KodersUp {new Date().getFullYear()} | Разработано на React | <a href="https://github.com/">Этот проекта на GitHub</a>
         </div>
      </footer>
   );
}

export default Footer;