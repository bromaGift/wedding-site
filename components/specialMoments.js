import styles from "../styles/SpecialMoments.module.css";

export default function SpecialMoments() {
  const img = [
    "/images/sp1.png",
    "/images/sp2.png",
    "/images/sp3.png",
    "/images/sp4.png",
    "/images/sp9.png",
    "/images/sp5.png",
    "/images/sp6.png",
    "/images/sp7.png",
    "/images/sp8.png",
  ];
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1>Our Special Momments</h1>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <img src="/svg/love.svg" />
      </div>

      <div className={styles.grid}>
        {img.map((i, index) => (
          <div key={index}>
            <img src={i} />
          </div>
        ))}
      </div>
    </div>
  );
}
