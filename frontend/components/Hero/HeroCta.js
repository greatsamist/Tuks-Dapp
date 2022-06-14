import React from "react";
import styles from "./HeroCta.module.scss";
import btn from "../../styles/button.module.scss";
import Link from "next/link";
function HeroCta() {
  return (
    <div className={styles.cta}>
      <div className={styles.cta__text}>
        <h3 className={styles.cta__heading}>
          Be in control of all your activities and <span>events</span>
        </h3>
      </div>
      <div className={styles.cta__btn}>
        <Link href="./create">
          <button
            className={`${btn.btn} ${btn.btn__animated} ${btn.btn__white}`}
          >
            Create Event
          </button>
        </Link>
        <button
          className={`${btn.btn} ${btn.btn__animated} ${btn.btn__primary}`}
        >
          Buy Ticket
        </button>
      </div>
    </div>
  );
}

export default HeroCta;
