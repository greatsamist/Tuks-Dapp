import Head from "next/head";
import AvailEvents from "../components/AvailableEvents/AvailEvents";
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import styles from "../styles/Home.module.scss";
import { MongoClient } from "mongodb";

function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tuks - Homepage</title>
        <meta
          name="Tuks - Homepage"
          content="initial-scale=1"
          width="device-width"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <AvailEvents ticketData={props.ticketData} />
      <HowItWorks />
    </div>
  );
}
export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MongoURi);

  const db = client.db();

  const ticketCollection = db.collection("tickets");

  const ticketData = await ticketCollection.find().toArray();

  client.close();

  return {
    props: {
      ticketData: ticketData.map((ticket) => ({
        eventName: ticket.eventName,
        id: ticket._id.toString(),
        eventId: ticket.id,
        image: ticket.image,
        organizers: ticket.organizers,
        amount: ticket.amount,
        eventDate: ticket.eventDate,
        Shortdesc: ticket.Shortdesc,
      })),
    },
    revalidate: 1,
  };
}
export default Home;
