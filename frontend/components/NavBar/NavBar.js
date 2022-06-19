import React from "react";
import styles from "./NavBar.module.scss";
import Link from "next/link";

function NavBar() {
  return (
    <div className={styles.container}>
      <Link href="./tickets">
        <h4 className={styles.items}>My Tickets</h4>
      </Link>
      <h4 className={styles.items}>Categories</h4>
      <h4 className={styles.items}>Contact Us</h4>
      <Link href="./create">
        <h4 className={styles.items}>Create event</h4>
      </Link>
    </div>
  );
}

export default NavBar;
