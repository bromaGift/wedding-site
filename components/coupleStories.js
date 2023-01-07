import styles from "../styles/CoupleStories.module.css";
import FalseFooter from "./falseFooter";

export default function CoupleStories() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1>Stories We Share</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <img src="/svg/love.svg" />
      </div>

      <section className={styles.section}>
        <div className={styles.line}></div>
        <div className={styles.circle1}>
          <img src="/svg/ellipse.svg" />
        </div>
        <div className={styles.circle2}>
          <img src="/svg/ellipse.svg" />
        </div>
        <div className={styles.circle3}>
          <img src="/svg/ellipse.svg" />
        </div>
        <div className={styles.circle4}>
          <img src="/svg/ellipse.svg" />
        </div>
        <div className={styles.circle5}>
          <img src="/svg/ellipse.svg" />
        </div>

        <div className={styles.card}>
          <div className={styles.image}>
            <img src="/images/str1.png" />
          </div>
          <div className={styles.info}>
            <h2>Our first date (18th July, 2020)</h2>
            <p>
              After several days of texting and calling via WhatsApp, we
              scheduled to meet at M and I Restaurant in Port Harcourt, Nigeria.
            </p>
          </div>
          <div className={styles.arrow}>
            <img src="svg/arrow1.svg" />
          </div>
        </div>

        <div className={styles.card2}>
          <div className={styles.image}>
            <img src="/images/sp8.png" />
          </div>
          <div className={styles.info}>
            <h2>DevFest Port Harcourt (Dec, 2021)</h2>
            <p>This is us at DevFest Port Harcourt in 2021.</p>
          </div>
          <div className={styles.arrow2}>
            <img src="svg/arrow2.svg" />
          </div>
        </div>

        <div className={styles.card3}>
          <div className={styles.image}>
            <img src="" />
          </div>
          <div className={styles.info}>
            <h2>The Engagement (12th June, 2022)</h2>
            <p>
              The surprise engagement took place at South 66 Port Harcourt,
              where we celebrated with close friends.
            </p>
          </div>
          <div className={styles.arrow}>
            <img src="svg/arrow1.svg" />
          </div>
        </div>

        <div className={styles.card4}>
          <div className={styles.image}>
            <img src="/images/str2.png" />
          </div>
          <div className={styles.info}>
            <h2>Tech for Good (October, 2022)</h2>
            <p>Here&#39;s us at Tech for Good 2021 organized by Techrity. </p>
          </div>
          <div className={styles.arrow2}>
            <img src="svg/arrow2.svg" />
          </div>
        </div>

        <div className={styles.card5}>
          <div className={styles.image}>
            <img src="/images/str3.png" />
          </div>
          <div className={styles.info}>
            <h2>At a mutual friends wedding</h2>
            <p>
              Here is us at Gospel Ononwi&#39;s wedding, where we were
              co-groomsmen{" "}
            </p>
          </div>
          <div className={styles.arrow}>
            <img src="svg/arrow1.svg" />
          </div>
        </div>
      </section>
    </div>
  );
}
