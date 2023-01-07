import styles from "../styles/Timer.module.css";
import { useState, useEffect, useRef } from "react";

export default function Timer() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`02/09/${year}`) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    if ((timeLeft.hours + "").length === 1) {
      timeLeft.hours = "0" + timeLeft.hours;
    }
    if ((timeLeft.minutes + "").length === 1) {
      timeLeft.minutes = "0" + timeLeft.minutes;
    }
    if ((timeLeft.seconds + "").length === 1) {
      timeLeft.seconds = "0" + timeLeft.seconds;
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1>Wedding Starts In</h1>
        <img src="/svg/love.svg" />
      </div>
      <div className={styles.timer}>
        <div className={styles.days}>
          <h2>{timeLeft.days}</h2>
          <p>Days</p>
        </div>
        <div className={styles.days}>
          <h2>{timeLeft.hours}</h2>
          <p>hours</p>
        </div>
        <div className={styles.days}>
          <h2>{timeLeft.minutes}</h2>
          <p>Minutes</p>
        </div>
        <div className={styles.days}>
          <h2>{timeLeft.seconds}</h2>
          <p>seconds</p>
        </div>
      </div>
    </div>
  );
}
