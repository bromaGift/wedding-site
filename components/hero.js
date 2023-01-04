import styles from "../styles/Hero.module.css";

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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/our-story">Our Story</a>
          </li>
          <li>
            <a href="#">Our Nfts</a>
          </li>
          <li>
            <a href="#">Special Moments</a>
          </li>
          <li>
            <a href="#">Events Schedule</a>
          </li>
        </ul>
      </section>
    </div>
  );
}
