import React from "react";
import styles from "./CreateForm.module.scss";

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
      </form>
    </div>
  );
}

export default CreateForm;
