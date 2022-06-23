import TicketList from "../components/BuyTicket/TicketList";
import { MongoClient } from "mongodb";

function Buy(props) {
  return (
    <div>
      <TicketList ticketData={props.ticketData} />
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
      donateData: ticketData.map((ticket) => ({
        eventName: ticket.eventName,
        id: ticket._id.toString(),
        eventId: ticket.id,
        eventType: ticket.eventType,
        organizers: ticket.organizers,
        category: ticket.category,
        eventDate: ticket.eventDate,
        desc: ticket.desc,
        Shortdesc: ticket.Shortdesc,
      })),
    },
    revalidate: 1,
  };
}

export default Buy;
