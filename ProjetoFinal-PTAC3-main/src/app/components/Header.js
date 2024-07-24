import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.mubi}>
        <h2>MUBI</h2>
      </div>
    </header>
  );
}
