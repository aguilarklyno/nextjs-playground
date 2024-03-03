import Link from 'next/link';
import styles from './css-playground.module.css';

export default function Page() {
  return (
    <main className={styles.body}>
      <div className={styles.container}>
        <div className={styles.content}>
          <button className={styles.btn_ver01}>
            button-ver01
          </button>
        </div>
        <div className={styles.content}>
          <button className={styles.btn_ver02}>
            button-ver02
          </button>
        </div>
        <div className={styles.content}>
          aaa
        </div>
        <div className={styles.content}>
          aaa
        </div>
        <div className={styles.content}>
          <p>aaa</p>
        </div>
        <div className={styles.content}>
          aaa
        </div>
        <div className={styles.content}>
          aaa
        </div>
      </div>
    </main>
  );
}