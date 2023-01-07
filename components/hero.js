import styles from "../styles/Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className={styles.logo}>
        <img src="/images/logo.png" />
      </div>
      <div className={styles.container}>
        <h1>The wedding of</h1>
        <h2>OWANATE & JIMMY</h2>

        <section className={styles.section}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/his-story">His Story</Link>
            </li>
            <li>
              <Link href="/her-story">Her Story</Link>
            </li>

            <li>
              <Link href="/event-schedule">Events Schedule</Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
