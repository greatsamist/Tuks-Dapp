import React from "react";
import styles from "./CreateForm.module.scss";
import btn from "../../styles/button.module.scss";

function CreateForm({ onClickContinue }) {
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onClickContinue}>
        <div className={styles.form__create}>
          <p className={styles.form__head}>Fill details appropriately</p>
          <input
            className={styles.form__input}
            required
            name="eventName"
            id="eventName"
            type="text"
            maxLength={32}
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
            placeHolder="Event Type (e.g online)"
          />
          {/* ///////////// */}
          <input
            className={styles.form__input}
            required
            name="organizers"
            id="organizers"
            type="text"
            placeHolder="Organizers"
          />
          {/* /////////////// */}
          <input
            className={styles.form__input}
            required
            name="PartiNum"
            id="PartiNum"
            type="number"
            placeHolder="Maximum number of participants"
          />
          {/* ///////////// */}
          <input
            className={styles.form__input}
            required
            name="category"
            id="category"
            type="text"
            placeHolder="Category"
          />
          {/* ////////////////////// */}
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
            minLength={100}
            placeHolder="Enter Description, explain in details"
          />
          <textarea
            className={styles.form__short}
            required
            name="Shortdesc"
            id="Shortdesc"
            type="text"
            maxLength={100}
            placeHolder="Give a brief description, make it catchy. Max 100 words"
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
