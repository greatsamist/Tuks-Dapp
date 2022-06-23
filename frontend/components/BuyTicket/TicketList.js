import AllTickets from "./AllTickets";
import styles from "./TicketList.module.scss";
function TicketList(props) {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h2 className={styles.head__heading}>Available Events</h2>
      </div>
      <div className={styles.list}>
        {props.ticketData.map((ticket) => (
          <AllTickets
            key={ticket.id}
            eventId={ticket.eventId}
            eventName={ticket.eventName}
            eventType={ticket.eventType}
            organizers={ticket.organizers}
            category={ticket.category}
            eventDate={ticket.eventDate}
            Shortdesc={ticket.Shortdesc}
          />
        ))}
      </div>
    </div>
  );
}

export default TicketList;
