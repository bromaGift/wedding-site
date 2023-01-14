import FalseFooter from "../components/falseFooter";
import Hero from "../components/hero";
import styles from "../styles/GiftUs.module.css";

export default function GiftUs() {
  return (
    <>
      <Hero />
      <div className={styles.container}>
        <img src="/images/giftus.png" />

        <div>
          <p>
            Knowing that you care enough to Gift us as we begin this new Journey
            means a lot to us.
            <br /> However so some reason we will encourage you to convert all
            gift items to cash, We know you care.
          </p>
          <p>Thank you!</p>
          <br />{" "}
          <p>
            <strong>CASH GIFTS</strong>{" "}
          </p>
          <p>Naira Account</p>
          <p>
            {" "}
            Access Bank <br />
            Akpabio Godwin Jimmy <br /> 0094406932
          </p>
          <br />
          <p>
            First Bank <br />
            Owanate Mpakaboari Amachree <br />
            3093336928
          </p>
          <br />
          <p>For other Gift Items please contact</p>
          <p style={{ fontSize: "14px" }}>
            Opuine Kayode: +234 818 740 2148 <br /> Chibuzo Madu: +234 814 041
            9479
          </p>
          <br />
        </div>
      </div>
      <FalseFooter />
    </>
  );
}
