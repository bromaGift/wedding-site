import styles from "../styles/event.module.css";

export default function Event() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1>Events Schedule</h1>
        <img src="/svg/love.svg" />
      </div>
      <div className={styles.group}>
        <div className={styles.info}>
          <div className={styles.frame}>
            <img src="/svg/vector.svg" />
            <div className={styles.position}>
              <p>
                3:45
                <span>pm</span>
              </p>
            </div>
          </div>
          <div className={styles.details}>
            <h3> Church Wedding</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              rutrum in orci sit amet rutrum. Nunc blandit rhoncus consequat.
            </p>
            <h4>GET DIRECTION</h4>
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.frame}>
            <img src="/svg/vector.svg" />
            <div className={styles.position}>
              <p>
                3:45
                <span>pm</span>
              </p>
            </div>
          </div>
          <div className={styles.details}>
            <h3>Reception</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              rutrum in orci sit amet rutrum. Nunc blandit rhoncus consequat.{" "}
            </p>
            <h4>GET DIRECTION</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
