import { useRouter } from "next/router";
import styles from "./AllEvents.module.scss";
import moment from "moment";
moment().format();

function AllTickets(props) {
  const router = useRouter();
  const { id, eventName, image, organizers, amount, eventDate, Shortdesc } =
    props;

  const newAmount = () => {
    if (amount === 0) {
      return "Free";
    } else return amount;
  };

  const daysFn = () => {
    const getDays = moment(eventDate).diff(moment(), "days");
    if (getDays < 0) {
      return "ended";
    } else {
      return getDays + " days left";
    }
  };

  function showDetailsHandler() {
    router.push("/" + ids);
  }

  if (daysFn() === "ended") {
    return;
  }

  return (
    <div className={styles.card__container} onClick={showDetailsHandler}>
      <div className={styles.card__content}>
        <h2 className={styles.card__heading}>{eventName}</h2>
        <div className={styles.card__details}>
          <p className={styles.card__para}>{newAmount()}</p>
          <p className={styles.card__para}>{daysFn()}</p>
        </div>
      </div>
      <div className={styles.card__image}>
        <img className={styles.card__img} src={image} alt={eventName} />
      </div>
      <div className={styles.card__cta}>
        <button className={styles.card__btn}>Show Details</button>
      </div>
    </div>
  );
}

export default AllTickets;
