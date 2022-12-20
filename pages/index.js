import Head from "next/head";
import Celebrate from "../components/celebrate";
import CoupleStories from "../components/coupleStories";
import Event from "../components/event";
import Hero from "../components/hero";
import Moments from "../components/moments";
import Nfts from "../components/nfts";
import SeeYou from "../components/seeYou";
import Story from "../components/story";
import Timer from "../components/timer";
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
      <Nfts />
      <Moments />
      <CoupleStories />
      <Timer />
      <Event />
      <Celebrate />
      <SeeYou />
    </>
  );
}
