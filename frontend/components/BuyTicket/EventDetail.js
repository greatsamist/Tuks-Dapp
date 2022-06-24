import styles from "./EventDetail.module.scss";
import { useContext, useState, useRef, useEffect } from "react";
import { Web3Context } from "../../contexts/Web3Context";
import { ethers, utils } from "ethers";

function EventDetail({
  eventId,
  eventName,
  organizers,
  image,
  eventDate,
  PartiNum,
}) {
  const { provider, connect, customContractInstance, contractInstance } =
    useContext(Web3Context);
  const [submitting, setSubmitting] = useState(false);
  const [amountGen, setAmountGen] = useState();
  const [status, setStatus] = useState();
  const amountInputRef = useRef();

  const beneficiaryStatus = async () => {
    const status = await customContractInstance.getBeneficiaryStatus(eventId);
    setStatus(status);
  };

  const onBuyTicket = async (e) => {
    e.preventDefault();

    if (!provider) {
      alert("connect wallet to mumbai network and try again");
      await connect();
      return;
    }
  };

  return (
    <section className={styles.event}>
      <h2 className={styles.event}>Event Detail</h2>
      <div className={styles.card}></div>
    </section>
  );
}

export default EventDetail;
