import styles from "../styles/CoupleStories.module.css";

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

        <div className={styles.card}>
          <div className={styles.image}>
            <img src="" />
          </div>
          <div className={styles.info}>
            <h2>Our First Date</h2>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className={styles.arrow}>
            <img src="svg/arrow1.svg" />
          </div>
        </div>

        <div className={styles.card2}>
          <div className={styles.image}>
            <img src="" />
          </div>
          <div className={styles.info}>
            <h2>Winter 2012</h2>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
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
            <h2>Winter 2012</h2>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className={styles.arrow}>
            <img src="svg/arrow1.svg" />
          </div>
        </div>

        <div className={styles.card4}>
          <div className={styles.image}>
            <img src="" />
          </div>
          <div className={styles.info}>
            <h2>The Proposal</h2>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className={styles.arrow2}>
            <img src="svg/arrow2.svg" />
          </div>
        </div>
      </section>
    </div>
  );
}
