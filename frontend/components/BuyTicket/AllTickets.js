import { useRouter } from "next/router";
import styles from "./AllTickets.module.scss";
function AllTickets(props) {
  const {
    eventId,
    eventName,
    eventType,
    organizers,
    category,
    eventDate,
    desc,
    Shortdesc,
  } = props;
  return <div>{eventName}</div>;
}

export default AllTickets;
