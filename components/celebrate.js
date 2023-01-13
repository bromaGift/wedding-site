import styles from "../styles/Celebrate.module.css";

export default function Celebrate() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div>
          <label>Full Name</label>
          <input type="text" />
        </div>

        <div>
          <label>Email</label>
          <input type="text" />
        </div>

        <button className={styles.btn}>RSVP</button>
      </form>
    </div>
  );
}
