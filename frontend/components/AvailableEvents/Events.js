import { useRouter } from "next/router";
import styles from "./Events.module.scss";
import { newAmount, daysFn } from "../utils/Helpers";

function Events(props) {
  const router = useRouter();
  const { id, eventName, image, organizers, amount, eventDate, Shortdesc } =
    props;

  function showDetailsHandler() {
    router.push("/" + id);
  }

  if (daysFn(eventDate) === "ended") {
    return;
  }

  return (
    <div className={styles.card__container} onClick={showDetailsHandler}>
      <div className={styles.card__content}>
        <h2 className={styles.card__heading}>{eventName}</h2>
        <div className={styles.card__details}>
          <p className={styles.card__para}>{newAmount(amount)}</p>
          <p className={styles.card__para}>{daysFn(eventDate)}</p>
        </div>
      </div>
      <div className={styles.card__image}>
        <img className={styles.card__img} src={image} alt={eventName} />
      </div>
      <div className={styles.card__cta}>
        <p className={styles.card__organizers}>Powered by: {organizers}</p>
      </div>
    </div>
  );
}

export default Events;
