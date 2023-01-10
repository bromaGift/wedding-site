import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container1}>
      <div className={styles.top}>
        <h1>Time to celebrate</h1>

        <img src="/svg/love.svg" />
      </div>
      <div className={styles.section}>
        <div className={styles.socials}>
          <p>
            Facebook: <span>@becomingogs</span>
          </p>
          <p>
            Instagram: <span>@becomingogs</span>
          </p>
          <p>
            Twitter:<span> @becomingogs</span>
          </p>
          <p>
            YouTube: <span>@becomingogs</span>
          </p>
        </div>

        <div>
          <h2>Call us on/RSVP</h2>
          <p>Opuine Kayode: +234 818 740 2148</p>
          <p>Chibuzo Madu: +234 814 041 9479</p>
        </div>

        <div>
          <h3>Email us</h3>
          <p>becomingogs@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
