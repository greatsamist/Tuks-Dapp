import AuctionedTickets from "../components/Auctioned/AuctionedTickets";
import YourTickets from "../components/YourTickets/YourTickets";

function Tickets(props) {
  return (
    <div>
      <YourTickets />
      <AuctionedTickets />
    </div>
  );
}

export default Tickets;
