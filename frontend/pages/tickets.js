import { MongoClient } from "mongodb";
import TicketsList from "../components/Donate/DonateList";

function Tickets(props) {
  return (
    <div>
      <TicketsList ticketsData={props.ticketsData} />
    </div>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MongoURi);

  const db = client.db();

  const ticketCollection = db.collection("tickets");

  const ticketsData = await ticketCollection.find().toArray();

  client.close();

  return {
    props: {
      ticketsData: ticketsData.map((ticket) => ({
        name: ticket.name,
        id: ticket._id.toString(),
        image: ticket.image,
        desc: ticket.desc,
        period: ticket.period,
        amount: ticket.amount,
        address: ticket.address,
      })),
    },
    revalidate: 1,
  };
}

export default Tickets;
