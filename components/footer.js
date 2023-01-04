import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      {/* <div className={styles.top}>
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
      </div> */}
      <h1>BecomingOG</h1>
      <svg
        width="182"
        height="3"
        viewBox="0 0 182 3"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1.8291H181"
          stroke="#2C1A18"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
      <h2>11. 02. 23</h2>
    </div>
  );
}
