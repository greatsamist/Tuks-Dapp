import React from "react";
import styles from "./HeroSearch.module.scss";
import btn from "../../styles/button.module.scss";

export default function HeroSearch() {
  return (
    <div className={styles.heroSearch}>
      <div className={styles.heroSearch__inputBox}>
        <input
          className={styles.heroSearch__input}
          type="text"
          placeholder="Search for events"
        />
      </div>
      <div className={styles.heroSearch__btn}>
        <button
          className={`${btn.btn} ${btn.btn__animated} ${btn.btn__primary} ${styles.btn}`}
        >
          Search
        </button>
      </div>
    </div>
  );
}
