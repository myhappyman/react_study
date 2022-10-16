import styles from "./Common.module.css";

function LeftNavigatorBar() {
  return (
    <div className={styles.lnb}>
      <div className={styles.title}>SIFF</div>
      <div>
        <ul className={styles.menu}>
          <li>2022 SIFF</li>
          <li>Community SIFF</li>
          <li>Forum</li>
          <li>FAQ</li>
          <li>Archive</li>
        </ul>
      </div>
    </div>
  );
}

export default LeftNavigatorBar;
