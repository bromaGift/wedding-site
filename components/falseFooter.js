import styles from "../styles/Footer.module.css";

export default function FalseFooter() {
  return (
    <div className={styles.container}>
      <h1>BecomingOG</h1>
      <svg
        width="182"
        height="3"
        viewBox="0 0 182 3"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1.8291H181"
          stroke="#2C1A18"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <h2>11. 02. 23</h2>
    </div>
  );
}
