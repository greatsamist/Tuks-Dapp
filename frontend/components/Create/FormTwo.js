import styles from "./FormTwo.module.scss";
import btn from "../../styles/button.module.scss";
import Image from "next/image";
import imgIcon from "../../public/imageicon.png";

function FormTwo({ onClickCreate, submitting }) {
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onClickCreate}>
        <div className={styles.form__tickets}>
          <input
            type="file"
            id="myFile"
            name="myFile"
            className={styles["form__tickets-white"]}
            placeHolder="Add image"
          />
          <button className={styles["form__tickets-blue"]}>
            Auto generate NFT
          </button>
        </div>
        <div className={styles.form__drop}>
          <div className={styles.form__image}>
            <Image src={imgIcon} alt="upload event image here" width={100} />
          </div>
          <p className={styles.form__primary}>
            Drag and drop media here or click to add image{" "}
          </p>
          <p>Only jpegs, png or svg, must not exceed 10mb </p>
        </div>
        <div className={styles.form__others}>
          <div className={styles.form__box}>
            <p className={styles.form__head}>Billing</p>
            <div className={styles.form__boxContainer}>
              {/* ////////////////// */}
              <input
                className={styles.form__input}
                disabled
                name="network"
                id="network"
                type="text"
                placeHolder="Network: MATIC"
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

              {/* ///////////// */}
              <input
                className={styles.form__input}
                required
                name="image"
                id="image"
                type="url"
                placeHolder="Image url"
              />
            </div>
          </div>
          <div className={styles.form__box}>
            <p className={styles.form__head}>Terms & conditions</p>

            <div className={styles.form__boxContainer}>
              <p>
                Organizers of event can customize event details and set prices
                also with also proper provision to track the statistics of each
                event
              </p>
              <p>
                Organizers of event can customize event details and set prices
                also with also proper provision to track the statistics of each
                event
              </p>
              <div className={styles.form__termsBox}>
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked
                  readOnly
                />
                <label htmlFor="terms">
                  I agree to all terms and conditions
                </label>
              </div>
            </div>
          </div>
        </div>
        {!submitting ? (
          <button
            type="submit"
            className={`${btn.btn} ${btn.btn__animated} ${btn.btn__primary} ${styles.form__btn}`}
          >
            Create Event
          </button>
        ) : (
          "Creating Event"
        )}
      </form>
    </div>
  );
}

export default FormTwo;
