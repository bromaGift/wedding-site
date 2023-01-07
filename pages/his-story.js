import FalseFooter from "../components/falseFooter";
import Hero from "../components/hero";
import styles from "../styles/HisStory.module.css";

export default function HisStory() {
  return (
    <>
      <Hero />

      <div className={styles.container}>
        <h1 className={styles.his}>#BecomingOG - THE #OG HIS STORY</h1>
        <div className={styles.img}>
          <img src="/images/him2.png" />
        </div>
        <div className={styles.content}>
          <h1>His Story</h1>
          <p>
            I am Godwin Jimmy Akpabio, Chief Technology Officer at Dantown and
            at Hara Africa, a native of Onna Local government Eket, Akwa Ibom,
            and a worker at the Redeemed Christian Church of. Here is a full
            rundown of how I met Miss Owanate Amachree.
          </p>
          <p>
            {" "}
            In 2019 just 4 months after starting a tech community on campus I
            partnered with the university to host a female-focused tech
            conference(Opportunities for Females in Tech) as this was in high
            demand at the time it was during this conference I met Miss Owanate
            as one of the Speakers was her friend and did not show up and in the
            heat of the moment, we needed a replacement and one of those on my
            team recommended Miss Owanate as a suitable replacement for the
            moment I quickly ask to speak to her to know if she can do it on the
            spot as she was not pre-informed.{" "}
          </p>{" "}
          <p>
            That was the first time of speaking with her and after that
            conversation, she declined to talk as a replacement and we went on
            with the event, however, in our conversation, I noticed she was
            smart and out-spoken and someone with vast knowledge as a techie and
            went ahead to connect with her via Twitter and picked up the
            conversation and exchanged contacts.
          </p>{" "}
          <p>
            During the period of our discussion covid broke out but we kept
            communicating and keeping in touch.
          </p>
        </div>
      </div>

      <FalseFooter />
    </>
  );
}
