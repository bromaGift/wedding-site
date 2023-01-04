import styles from "../styles/event.module.css";

export default function Event() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h1>CHURCH WEDDING</h1>
        <h2>FEBRUARY 11, 2021</h2>
        <h3>10:00 AM - 1:00 PM</h3>

        <p>
          Living Faith Church Rumuokwurisi <br />
          Road 3 Port Harcourt Rivers State
        </p>

        <div className={styles.color}>
          <h4>
            Colors of the day:{" "}
            <span className={styles.burg}>Dark Burgundy</span>{" "}
            <span className={styles.peach}>Peach</span>{" "}
            <span className={styles.coffee}>Coffee Brown</span>{" "}
            <span className={styles.lilac}> Lilac</span>{" "}
          </h4>
        </div>
      </div>

      <div className={styles.section}>
        <h1>RECEPTION</h1>
        <h2>FEBRUARY 11, 2021</h2>
        <h3>2:00 PM - 7:00 PM</h3>

        <p>
          Presidential Hotel GRA <br />
          Port Harcourt Rivers State
        </p>
      </div>

      <div className={styles.section}>
        <h1>TRADITIONAL WEDDING</h1>
        <h2>FEBRUARY 11, 2021</h2>
        <h3>10:00 AM - 3:00 PM</h3>

        <p>
          Living Faith Church Rumuokwurisi <br />
          Road 3 Port Harcourt Rivers State
        </p>

        <div className={styles.color}>
          <h4>
            Outfit of the day: <span className={styles.burg}>Native</span>{" "}
          </h4>
        </div>
      </div>
    </div>
  );
}
