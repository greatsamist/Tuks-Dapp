import React from "react";
import styles from "./CreateForm.module.scss";
import btn from "../../styles/button.module.scss";

function CreateForm({ onClickCreate, submitting, completed }) {
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onClickCreate}>
        <div className={styles.form__create}>
          <p className={styles.form__head}>Fill details appropriately</p>
          <input
            className={styles.form__input}
            required
            name="eventName"
            id="eventName"
            type="text"
            placeHolder="Name of event"
          />
          {/* ///////////////////// */}
          {/* ////////////////// */}
          <input
            className={styles.form__input}
            required
            name="eventType"
            id="eventType"
            type="text"
            placeHolder="Event Type"
          />
          {/* ///////////// */}
          <input
            className={styles.form__input}
            required
            name="Organizers"
            id="Organizers"
            type="text"
            placeHolder="Organizers"
          />
          {/* /////////////// */}
          Choose preferred date for the event
          <input
            className={styles.form__input}
            required
            name="eventDate"
            id="eventDate"
            type="date"
            placeHolder="Choose event date"
          />
          {/* //////////////////////// */}
          <input
            className={styles.form__input}
            required
            name="PartiNum"
            id="PartiNum"
            type="number"
            placeHolder="Maximum number of participants"
          />
          {/* //////////////////////// */}
          <input
            className={styles.form__input}
            required
            name="amount"
            id="amount"
            type="number"
            placeHolder="Ticket price"
          />
          {/* ////////////////////// */}
          Start Time
          <input
            className={styles.form__input}
            required
            name="StartTime"
            id="StartTime"
            type="time"
            placeHolder="Start time"
          />
          {/* ///////////////////// */}
          Image(url)
          <input
            className={styles.form__input}
            required
            name="image"
            id="image"
            type="url"
          />
          End Time
          <input
            className={styles.form__input}
            required
            name="EndTime"
            id="EndTime"
            type="time"
            placeHolder="End time"
          />
        </div>

        <div className={styles.form__desc}>
          <textarea
            className={styles.form__full}
            required
            name="desc"
            id="desc"
            type="text"
            placeHolder="Enter Description, explain in details"
          />
          <textarea
            className={styles.form__short}
            required
            name="Shortdesc"
            id="Shortdesc"
            type="text"
            placeHolder="Give a brief description, make it catchy"
          />
        </div>
        <button
          className={`${btn.btn} ${btn.btn__animated} ${btn.btn__primary} ${styles.form__btn}`}
        >
          Continue
        </button>
      </form>
    </div>
  );
}

export default CreateForm;
