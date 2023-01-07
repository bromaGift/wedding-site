import styles from "../styles/Story.module.css";
import Link from "next/link";

export default function Story() {
  return (
    <div className={styles.container}>
      <div className={styles.couple}>
        <div className={styles.couplediv}>
          <div className={styles.groom}>
            <img className={styles.image} src="/images/him.png" />

            <div className={styles.details}>
              <h2>
                Akpabio, Godwin <br />
                Jimmy
              </h2>
              <h3>Groom</h3>
              <div className={styles.socials}>
                <Link href="#">
                  <img src="/svg/facebook.svg" />
                </Link>
                <Link href="#">
                  <img src="/svg/instagram.svg" />
                </Link>
                <Link href="#">
                  <img src="/svg/twiter.svg" />
                </Link>
                <Link href="#">
                  <img src="/svg/tiktok.svg" />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.groom}>
            <img className={styles.image} src="/images/owas.png" />

            <div className={styles.details1}>
              <h2>Princess Owanate M. Amachree</h2>
              <h3>Bride</h3>
              <div className={styles.socials}>
                <Link href="#">
                  <img src="/svg/facebook.svg" />
                </Link>
                <Link href="#">
                  <img src="/svg/instagram.svg" />
                </Link>
                <Link href="#">
                  <img src="/svg/twiter.svg" />
                </Link>
                <Link href="#">
                  <img src="/svg/tiktok.svg" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
