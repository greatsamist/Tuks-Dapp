import React from "react";
import styles from "./CreateForm.module.scss";
import btn from "../../styles/button.module.scss";

function CreateForm() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
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
          <select required className={styles.form__input} name="token">
            <option className={styles.form__option}>
              Select Token to stake
            </option>
            <option value="option1" id="op1" className={styles.li}>
              Zarel Tokens
            </option>
          </select>
          {/* ////////////////// */}
          <select required className={styles.form__input} name="token">
            <option className={styles.form__option}>Event type</option>
            <option value="option1" id="op1" className={styles.li}>
              Online
            </option>
            <option value="option1" id="op1" className={styles.li}>
              Offline
            </option>
          </select>
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
            placeHolder="Enter Description, explain in details"
          />
          <textarea
            className={styles.form__short}
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
