import styles from "../styles/Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <div className={styles.container}>
      <h1>BecomingOG</h1>
      <h2>OWANATE & JIMMY</h2>
      <div className={styles.date}>
        <h3>February 11, 2023</h3>
        <h3>Port Harcourt Nigeria</h3>
      </div>

      <section className={styles.section}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/our-story">Our Story</Link>
          </li>
          <li>
            <Link href="#">Our Nfts</Link>
          </li>
          <li>
            <Link href="moments">Special Moments</Link>
          </li>
          <li>
            <Link href="#">Events Schedule</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
