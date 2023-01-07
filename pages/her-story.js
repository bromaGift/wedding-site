import FalseFooter from "../components/FalseFooter";

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
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex
            duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt
            mollit dolore cillum minim tempor enim. Elit aute irure tempor
            cupidatat incididunt sint deserunt ut voluptate aute id deserunt
            nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
            Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
            tempor enim. Elit aute irure tempor cupidatat incididunt sint
            deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud
            irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis
            deserunt mollit dolore cillum minim tempor enim. Elit aute irure
            tempor cupidatat incididunt sint deserunt ut voluptate aute id
            deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis
            ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum
            minim tempor enim. Elit aute irure tempor cupidatat incididunt sint
            deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud
            irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis
            deserunt mollit dolore cillum minim tempor enim. Elit aute irure
            tempor cupidatat incididunt sint deserunt ut voluptate aute id
            deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis
            ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum
            minim tempor enim. Elit aute irure tempor cupidatat incididunt sint
            deserunt ut voluptate aute id deserunt nisi.
          </p>
        </div>
      </div>

      <FalseFooter />
    </>
  );
}
