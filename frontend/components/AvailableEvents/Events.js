import React from "react";
import Image from "next/image";
import falz from "../../public/falz.png";
import styles from "./Events.module.scss";

function Events() {
  return (
    <div className={styles.events}>
      {/* ////////////////////////////// */}
      <div className={styles.event}>
        <div className={styles.event__name}>
          <h4 className={styles.event__head}>Falz festa</h4>
        </div>
        <div className={styles.event__details}>
          <p className={styles.event__price}>$500</p>
          <p className={styles.event__time}>30 days left</p>
        </div>
        <div className={styles.event__img}>
          <Image src={falz} height={375} width={301} />
        </div>
        <button className={styles.event__btn}>
          Purchase <span>$500</span>
        </button>
      </div>
      {/* ////////////////////////////////////// */}

      {/* ////////////////////////////// */}
      <div className={styles.event}>
        <div className={styles.event__name}>
          <h4 className={styles.event__head}>Falz festa</h4>
        </div>
        <div className={styles.event__details}>
          <p className={styles.event__price}>$500</p>
          <p className={styles.event__time}>30 days left</p>
        </div>
        <div className={styles.event__img}>
          <Image src={falz} height={375} width={301} />
        </div>
        <button className={styles.event__btn}>
          Purchase <span>$500</span>
        </button>
      </div>
      {/* ////////////////////////////////////// */}

      {/* ////////////////////////////// */}
      <div className={styles.event}>
        <div className={styles.event__name}>
          <h4 className={styles.event__head}>Falz festa</h4>
        </div>
        <div className={styles.event__details}>
          <p className={styles.event__price}>$500</p>
          <p className={styles.event__time}>30 days left</p>
        </div>
        <div className={styles.event__img}>
          <Image src={falz} height={375} width={301} />
        </div>
        <button className={styles.event__btn}>
          Purchase <span>$500</span>
        </button>
      </div>
      {/* ////////////////////////////////////// */}

      {/* ////////////////////////////// */}
      <div className={styles.event}>
        <div className={styles.event__name}>
          <h4 className={styles.event__head}>Falz festa</h4>
        </div>
        <div className={styles.event__details}>
          <p className={styles.event__price}>$500</p>
          <p className={styles.event__time}>30 days left</p>
        </div>
        <div className={styles.event__img}>
          <Image src={falz} height={375} width={301} />
        </div>
        <button className={styles.event__btn}>
          Purchase <span>$500</span>
        </button>
      </div>
      {/* ////////////////////////////////////// */}
    </div>
  );
}

export default Events;
