import React from "react";
import styles from "./AuctionedTicket.module.scss";

const AuctionedTickets = () => {
  return (
    <div className={styles.container}>
      <h4>Auctioned tickets</h4>
      <div className={styles.wrapper}>
        <div className={styles.flex}>
          <p>Event Name</p>
          <p>Date Purchased</p>
          <p>Amount Bought</p>
          <p>Amount Sold</p>
        </div>

        <div className={styles.event__flex}>
          <p>Falz Fiesta</p>
          <p>12-04-22</p>
          <p>$500</p>
          <p>$750</p>
        </div>
        <div className={styles.event__flex}>
          <p>Falz Fiesta</p>
          <p>12-04-22</p>
          <p>$500</p>
          <p>$750</p>
        </div>
        <div className={styles.event__flex}>
          <p>Falz Fiesta</p>
          <p>12-04-22</p>
          <p>$500</p>
          <p>$750</p>
        </div>
        <div className={styles.event__flex}>
          <p>Falz Fiesta</p>
          <p>12-04-22</p>
          <p>$500</p>
          <p>$750</p>
        </div>
      </div>
    </div>
  );
};

export default AuctionedTickets;
