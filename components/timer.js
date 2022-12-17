import styles from "../styles/Timer.module.css";

export default function Timer() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1>Wedding Starts In</h1>
        <img src="/svg/love.svg" />
      </div>
      <div className={styles.timer}>
        <div className={styles.days}>
          <h2>05</h2>
          <p>Days</p>
        </div>
        <div className={styles.days}>
          <h2>00:00</h2>
          <p>hours</p>
        </div>
        <div className={styles.days}>
          <h2>00:00</h2>
          <p>Minutes</p>
        </div>
      </div>
    </div>
  );
}
