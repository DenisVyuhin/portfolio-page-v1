import styles from './Footer.module.css'


function Footer() {
   return (
      <footer className={styles.footer}>
         <div className={styles.container}>
            &copy;KodersUp {new Date().getFullYear()} ⠀<b>•</b>⠀ Разработано на React ⠀<b>•</b>⠀ <a href="https://github.com/DenisVyuhin/portfolio-page-v1">Этот проекта на GitHub</a>
         </div>
      </footer>
   );
}

export default Footer;