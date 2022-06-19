import React from "react";
import AuctionedTickets from "../components/Auctioned/AuctionedTickets";
import YourTickets from "../components/YourTickets/YourTickets";

const Tickets = () => {
  return (
    <div>
      <YourTickets />
      <AuctionedTickets />
    </div>
  );
};

export default Tickets;
