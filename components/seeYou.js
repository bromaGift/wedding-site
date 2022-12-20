import styles from "../styles/SeeYou.module.css";

export default function SeeYou() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1>See You There</h1>
        <p>Lorem ipsum dolor sit amet</p>
        <img src="/svg/love.svg" />
      </div>
      <div className={styles.section}>
        <div>
          <h2>Our Location</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum
            in orci sit amet rutrum. Nunc blandit rhoncus consequat.{" "}
          </p>
        </div>

        <div>
          <h2>Call us on</h2>
          <p>094 2482 9249</p>
        </div>

        <div>
          <h2>Email us</h2>
          <p>jsf3@fja.com</p>
        </div>
      </div>
    </div>
  );
}
