import Head from "next/head";
import Subscribe from "../components/subscribe";
import CoupleStories from "../components/coupleStories";
import Event from "../components/event";
import Hero from "../components/hero";
import Story from "../components/story";
import Timer from "../components/timer";
import styles from "../styles/Home.module.css";
import Footer from "../components/footer";
import SpecialMoments from "../components/specialMoments";
import FalseFooter from "../components/falseFooter";

export default function Home() {
  return (
    <>
      <Head>
        <title>Becoming OG</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="welcome to the Becoming OG wedding site"
        />
      </Head>
      <Hero actInd={0} />
      <div className={styles.img}>
        <img src="/images/hero image.png" />
      </div>
      <Timer />
      <Story />
      <SpecialMoments />
      <CoupleStories />
      <Event />
      <FalseFooter />
      <Subscribe />
      <Footer />
    </>
  );
}
