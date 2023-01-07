import Footer from "../components/falseFooter";
import Hero from "../components/hero";
import styles from "../styles/Moments.module.css";

export default function Moments() {
  const img = [
    "/images/1.png",
    "/images/3.png",
    "/images/2.png",
    "/images/5.png",
    "/images/4.png",
  ];

  const image1 = [
    "/images/cop1.png",
    "/images/cop2.png",
    "/images/cop3.png",
    "/images/cop4.png",
    "/images/cop5.png",
    "/images/cop6.png",
  ];

  const image2 = [
    "/images/cas1.png",
    "/images/cas2.png",
    "/images/cas3.png",
    "/images/cas4.png",
    "/images/cas5.png",
    "/images/cas6.png",
  ];
  return (
    <>
      <Hero />
      <div className={styles.container}>
        <div className={styles.top}>
          <h1>Moments of Love</h1>
        </div>

        <div className={styles.grid}>
          {img.map((i, index) => (
            <div key={index}>
              <img src={i} />
            </div>
          ))}
        </div>

        <div className={styles.grid2}>
          {image1.map((i, index) => (
            <div key={index}>
              <img src={i} />
            </div>
          ))}
        </div>

        <div className={styles.grid3}>
          {image2.map((i, index) => (
            <div key={index}>
              <img src={i} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
