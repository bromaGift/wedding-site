import styles from "../styles/Celebrate.module.css";

export default function Celebrate() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1>Time to Celebrate</h1>
        <img src="/svg/love.svg" />
      </div>
      <form>
        <div>
          <div className={styles.label}>
            <label>Full Name</label>
          </div>
          <div className={styles.input}>
            <input type="text" />
          </div>
        </div>
        <div>
          <div className={styles.label}>
            <label>Email Address</label>
          </div>
          <div className={styles.input}>
            <input type="email" />
          </div>
        </div>
        <div>
          <div className={styles.label}>
            <label>No of Guests</label>
          </div>
          <div className={styles.input}>
            <input type="number" />
          </div>
        </div>
        <div className={styles.button}>
          <button>RSVP</button>
        </div>
      </form>
    </div>
  );
}
