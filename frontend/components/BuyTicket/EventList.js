import AllEvents from "./AllEvents";
import styles from "./EventList.module.scss";

function EventList(props) {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h2 className={styles.head__heading}>
          Available <span>Events</span>
        </h2>
      </div>
      <div className={styles.list}>
        {props.ticketData.map((ticket) => (
          <AllEvents
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
    </div>
  );
}

export default EventList;
