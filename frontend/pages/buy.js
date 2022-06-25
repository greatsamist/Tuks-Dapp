import EventList from "../components/BuyTicket/EventList";
import { MongoClient } from "mongodb";

function Buy(props) {
  return (
    <div>
      <EventList ticketData={props.ticketData} />
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

export default Buy;
