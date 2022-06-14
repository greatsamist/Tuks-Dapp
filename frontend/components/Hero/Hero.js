import React, { Fragment } from "react";
import styles from "./Hero.module.scss";
import HeroCta from "./HeroCta";
import HeroSearch from "./HeroSearch";

function Hero() {
  return (
    <div className={styles.hero}>
      <HeroSearch />
      <HeroCta />
    </div>
  );
}

export default Hero;
