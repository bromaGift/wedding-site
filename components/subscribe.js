import styles from "../styles/Celebrate.module.css";
import React, { useState, useRef } from "react";
import axios from "axios";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async () => {
    setState("LOADING");
    setErrorMessage(null);

    try {
      const response = await axios.post("/api/subscribe", {
        email,
        firstName,
        lastName,
      });
      setState("SUCCESS");
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState("ERROR");
    }
    setEmail("");
    setFirstName("");
    setLastName("");
  };

  return (
    <div className={styles.container} id="rsvp">
      <form className={styles.form}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button
          className={`${styles.btn} 
          ${state === "LOADING" ? `${styles.btnloading}` : ""}`}
          type="button"
          disabled={state === "LOADING"}
          onClick={subscribe}
        >
          RSVP
        </button>

        {state === "ERROR" && <p className={styles.err}>{errorMessage}</p>}
        {state === "SUCCESS" && (
          <p className={styles.success}>
            Thanks for reserving a seat, we will be in contacct with you via
            Email.
          </p>
        )}
      </form>
    </div>
  );
}
