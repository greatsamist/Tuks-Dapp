import React from "react";
import Image from "next/image";
import styles from "./HowItWorks.module.scss";
import brush from "../../public/brush.png";
import event from "../../public/event.png";
function HowItWorks() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h5 className={styles.head__heading}>How it works</h5>
      </div>

      <div className={styles.card}>
        {/* ////////////////////// */}
        <div className={styles.card__container}>
          <div className={styles.card__image}>
            <Image src={brush} width={375} />
          </div>
          <div className={styles.card__details}>
            <h5 className={styles.card__heading}>Create an event</h5>
            <p className={styles.card__desc}>
              Organizers of event can customize event details and set prices
              also with also proper provision to track the statistics of each
              event
            </p>
          </div>
        </div>
        {/* ///////////////////////// */}

        {/* ////////////////////// */}
        <div className={styles.card__container}>
          <div className={styles.card__image}>
            <Image src={brush} width={375} />
          </div>
          <div className={styles.card__details}>
            <h5 className={styles.card__heading}>
              Users can re-auction tickets
            </h5>
            <p className={styles.card__desc}>
              Organizers of event can customize event details and set prices
              also with also proper provision to track the statistics of each
              event
            </p>
          </div>
        </div>
        {/* ///////////////////////// */}

        {/* ////////////////////// */}
        <div className={styles.card__container}>
          <div className={styles.card__image}>
            <Image src={event} width={375} />
          </div>
          <div className={styles.card__details}>
            <h5 className={styles.card__heading}>Manage events</h5>
            <p className={styles.card__desc}>
              Organizers of event can customize event details and set prices
              also with also proper provision to track the statistics of each
              event
            </p>
          </div>
        </div>
        {/* ///////////////////////// */}

        {/* ////////////////////// */}
        <div className={styles.card__container}>
          <div className={styles.card__image}>
            <Image src={brush} width={375} />
          </div>
          <div className={styles.card__details}>
            <h5 className={styles.card__heading}>Auto Generate NFT tickets</h5>
            <p className={styles.card__desc}>
              Organizers of event can customize event details and set prices
              also with also proper provision to track the statistics of each
              event
            </p>
          </div>
        </div>
        {/* ///////////////////////// */}
      </div>
    </div>
  );
}

export default HowItWorks;
