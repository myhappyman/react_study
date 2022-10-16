import styles from "./Common.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.title}>2022 SIFF</div>
      <div className={styles.menu}>
        <span>2022 SIFF</span>
        <span>Community SIFF</span>
        <span>Forum</span>
        <span>Archive</span>
      </div>
    </div>
  );
}

export default Header;
