import Footer from "../components/footer";
import Hero from "../components/hero";
import styles from "../styles/HisStory.module.css";

export default function OurStory() {
  return (
    <>
      <Hero />

      <div className={styles.container}>
        <h1 className={styles.his}>#BecomingOG - THE #OG lOVE STORY</h1>
        <div className={styles.img}>
          <img src="/images/LOVE.png" />
        </div>
        <div className={styles.content}>
          <h1>This Is Our Story</h1>
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

      <Footer />
    </>
  );
}
