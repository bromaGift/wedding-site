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
              <h2>Godwin Jimmy</h2>
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
              </div>
            </div>
            <div className={styles.btn}>
              <Link href="/his-story">His Story</Link>
            </div>
          </div>

          <div className={styles.groom}>
            <img className={styles.image} src="/images/her.png" />

            <div className={styles.details}>
              <h2>Owanate Amachree</h2>
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
              </div>
            </div>
            <div className={styles.btn}>
              <Link href="/her-story">Her Story</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
