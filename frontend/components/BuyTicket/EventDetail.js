import styles from "./EventDetail.module.scss";
import { useContext, useState, useRef } from "react";
import { Web3Context } from "../../contexts/Web3Context";
import { ethers } from "ethers";
import { newAmount, daysFn } from "../utils/Helpers";

function EventDetail({
  eventId,
  eventName,
  eventType,
  organizers,
  amount,
  category,
  desc,
  image,
  eventDate,
  PartiNum,
}) {
  const {
    provider,
    connect,
    wallet,
    customContractInstance,
    contractInstance,
  } = useContext(Web3Context);
  const [submitting, setSubmitting] = useState(false);

  const [status, setStatus] = useState(false);
  const [err, setErr] = useState("");
  const tagInputRef = useRef();

  const checkStatus = async () => {
    const enteredTag = tagInputRef.current.value;
    try {
      const status = await contractInstance.checkInEventAttendees(
        Number(eventId),
        wallet.address,
        Number(enteredTag)
      );

      const receipt = await status.wait(1);
      const tagStatus = receipt?.events[0].args[2];
      setStatus(tagStatus);
    } catch (e) {
      if (e && e.reason) {
        setErr(
          "Tag Id check in failed with: " +
            e.reason +
            " You have already checked in"
        );
      }
    }
  };

  const onBuyTicket = async (e) => {
    e.preventDefault();

    if (!provider) {
      alert("connect wallet to mumbai network and try again");
      await connect();
      return;
    }

    setSubmitting(true);

    const Buy = await contractInstance.buyTicket(Number(eventId), {
      value: ethers.utils.parseEther(amount.toString()),
    });
    const receipt = await Buy.wait(1);
    const eventTag = Number(receipt?.events[0].args[2]);

    alert("Transaction successfully");
    alert("Your tag number is " + eventTag);
    setSubmitting(false);
  };

  return (
    <section className={styles.event}>
      <h2 className={styles.event__heading}>
        Event <span>Detail</span>
      </h2>

      <div className={styles.card}>
        <img className={styles.card__img} src={image} alt={eventName} />
        <div className={styles.card__content}>
          <h3 className={styles.card__header}>{eventName}</h3>
          <div className={styles.card__divide}>
            <p className={styles.card__amount}>{newAmount(amount)}</p>
          </div>
          <p className={styles.card__category}>{category}</p>
          <div className={styles.card__divide}>
            <p className={styles.card__partNum}>
              <span className={styles.card__bold}>Total Tickets:</span>{" "}
              {PartiNum}
            </p>
            <p className={styles.card__date}>
              <span className={styles.card__bold}>Type: </span>
              {eventType}
            </p>
          </div>
          <p className={styles.card__desc}>{desc}</p>
          {!submitting ? (
            <button className={styles.card__btn} onClick={onBuyTicket}>
              Buy Ticket <span>For {newAmount(amount)}</span>
            </button>
          ) : (
            "Processing ..."
          )}
          <h4 className={styles.card__org}>Powered by {organizers}</h4>
          <div className={styles.check}>
            <button className={styles.check__btn} onClick={checkStatus}>
              Check In Event
            </button>
            <input
              className={styles.check__num}
              required
              type="number"
              id="amount"
              min="0"
              placeholder="Input tag number"
              ref={tagInputRef}
            />
          </div>
          {status ? (
            <p className={styles.card__date}>
              Tag Number Found: Event Check in successfully
            </p>
          ) : (
            err
          )}
        </div>
      </div>
    </section>
  );
}

export default EventDetail;
