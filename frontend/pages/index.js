import Head from "next/head";
import AvailEvents from "../components/AvailableEvents/AvailEvents";
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tuks</title>
        <meta name="Tuks" content="initial-scale=1" width="device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <AvailEvents />
      <HowItWorks />
    </div>
  );
}
