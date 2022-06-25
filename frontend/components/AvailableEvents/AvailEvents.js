import Link from "next/link";
import React from "react";
import styles from "./AvailEvents.module.scss";
import Events from "./Events";

function AvailEvents(props) {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h3 className={styles.head__heading}>Available Events</h3>
      </div>
      <div className={styles.list}>
        {props.ticketData.map((ticket) => (
          <Events
            key={ticket.id}
            id={ticket.id}
            eventName={ticket.eventName}
            organizers={ticket.organizers}
            amount={ticket.amount}
            image={ticket.image}
            eventDate={ticket.eventDate}
            Shortdesc={ticket.Shortdesc}
          />
        ))}
      </div>
      <Link href="./buy">
        <p className={styles.para}>See all events &rarr;</p>
      </Link>
    </div>
  );
}

export default AvailEvents;
