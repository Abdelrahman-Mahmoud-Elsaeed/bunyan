import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer
      className={
        `d-flex align-items-center justify-content-center position-relative  ${styles.footer} `
      }
    >
      <div className="d-flex align-items-center justify-content-center  ">
        <span className={styles.span}> 2026 Copyrights ©</span>
        <p> Abdelrahman</p>
      </div>
    </footer>
  );
}

export default Footer;
