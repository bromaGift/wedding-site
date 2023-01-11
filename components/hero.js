import styles from "../styles/Hero.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

import { useState } from "react";

export default function Hero() {
  const router = useRouter();
  const [selected, setSelected] = useState(0);

  let navLinks = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "His Story",
      path: "/his-story",
    },
    {
      id: 3,
      title: "Her Story",
      path: "/her-story",
    },
    {
      id: 4,
      title: "Events Schedule",
      path: "/event-schedule",
    },
  ];
  return (
    <>
      <div className={styles.logo}>
        <img src="/images/logo.png" />
      </div>
      <div className={styles.container}>
        <h1>The wedding of</h1>
        <h2>OWANATE & GODWIN</h2>

        <section className={styles.section}>
          <ul>
            {navLinks.map(({ title, path }, index) => (
              <li
                key={index}
                className={`${path === router.pathname ? styles.active : ""}`}
              >
                <Link className={styles.mainLink} href={path}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
