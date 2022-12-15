import Head from "next/head";
import CoupleStories from "../components/coupleStories";
import Hero from "../components/hero";
import Moments from "../components/moments";
import Nft from "../components/Nft";
import Story from "../components/story";
import styles from "../styles/Home.module.css";

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
      <Hero />
      <Story />
      <Nft />
      <Moments />
      <CoupleStories />
    </>
  );
}
