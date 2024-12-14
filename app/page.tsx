import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Hello World</h1>
        <h2>From NextJS 15 App</h2>
        <h3>Hosted by Azure</h3>
      </main>
      
    </div>
  );
}
