import FalseFooter from "../components/falseFooter";

import Hero from "../components/hero";
import styles from "../styles/HisStory.module.css";

export default function HerStory() {
  return (
    <>
      <Hero />

      <div className={styles.container}>
        <h1 className={styles.his}>#BecomingOG - THE #OG HER STORY</h1>
        <div className={styles.img}>
          <img src="/images/her2.png" />
        </div>
        <div className={styles.content}>
          <h1>Her Story</h1>
          <p>
            It all began when I attended the &#34;Opportunities in Tech for
            Females&#34; conference hosted by Accelerate Hub which was held at
            the Rivers State University in 2019. I had recently just started my
            tech career and was looking to connect with people in the same
            field. It also happened that Godwin Jimmy Akpabio was the convener
            of said conference, although our paths didn&#39;t cross that day as
            we were not familiar with each other, it gave room for future
            correspondences to happen.
            <p>
              {" "}
              After the event, I later got a message from Godwin via Twitter DM
              asking if I got home safely and I responded in the affirmative. We
              talked about careers and that led to us exchanging contacts. Since
              then we have been in touch from time to time via whatsapp.
            </p>{" "}
            One faithful day there was a controversial topic which i posted on
            Whatsapp and he commented and gave his opinion on the matter, and we
            touched on a lot of topics that showed we had similar interests and
            ideologies during those chats, this led to further communications
            which progressed to calls, this became frequent and after a few
            weeks I felt the need to ask a most important question and begin the
            conversation to set the boundaries (sexual intimacy, timelines, etc)
            this led us to review our goals, timelines and vision for the
            relationship.
          </p>
        </div>
      </div>

      <FalseFooter />
    </>
  );
}
