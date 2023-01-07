import styles from "../styles/event.module.css";
import FalseFooter from "../components/falseFooter";
import Hero from "../components/hero";

export default function EventSchedule() {
  return (
    <>
      <Hero />
      <div className={styles.container}>
        <div className={styles.section}>
          <h1>TRADITIONAL WEDDING</h1>
          <h2>FEBRUARY 9TH, 2023</h2>
          <h3>12:00 PM - 8:00 PM</h3>

          <p>
            Playfield Park and Event Center by Bellcrest Shopping Mall,
            <br /> Obiri Ikwerre Flyover bridge
            <br />
            East - West Road Rumuosi Harcourt, Rivers State
          </p>

          <div className={styles.color}>
            <h4>
              Outfit of the day: <span className={styles.burg}>Native</span>{" "}
            </h4>
          </div>
        </div>
        <div className={styles.section}>
          <h1>CHURCH WEDDING</h1>
          <h2>FEBRUARY 11TH, 2023</h2>
          <h3>10:00 AM - 1:00 PM</h3>

          <p>
            Living Faith Church, Winners Chapel, Rumuodumanya <br />
            Port Harcourt Rivers State
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
          <h2>FEBRUARY 11, 2023</h2>
          <h3>2:00 PM - 7:00 PM</h3>

          <p>
            White Jade Event Center, G U Ake Road, Eliozu Eligbolo Street <br />
            Port Harcourt Rivers State
          </p>
        </div>
      </div>
      <FalseFooter />
    </>
  );
}
