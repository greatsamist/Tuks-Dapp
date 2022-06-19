import React from "react";
import styles from "./YourTicket.module.scss";

const YourTickets = () => {
  return (
    <div className={styles.container}>
      <h4>Your tickets</h4>
      <div className={styles.wrapper}>
        <div className={styles.flex}>
          <p>Event Name</p>
          <p>Date Purchased</p>
          <p>Amount</p>
          <p>Event Date</p>
          <p>Participants</p>
          <p></p>
        </div>

        <div className={styles.event__flex}>
          <p>Falz Fiesta</p>
          <p>12-04-22</p>
          <p>$500</p>
          <p>29-07-22</p>
          <p>12,000</p>
          <p className={styles.btn}>Auction</p>
        </div>
        <div className={styles.event__flex}>
          <p>Falz Fiesta</p>
          <p>12-04-22</p>
          <p>$500</p>
          <p>29-07-22</p>
          <p>12,000</p>
          <p className={styles.btn}>Auction</p>
        </div>
      </div>
    </div>
  );
};

export default YourTickets;
