import React from "react";
import styles from "./AvailEvents.module.scss";
import Events from "./Events";

function AvailEvents() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h3 className={styles.head__heading}>Available Events</h3>
      </div>
      <Events />
    </div>
  );
}

export default AvailEvents;
