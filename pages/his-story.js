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
