import { useContext, useState } from "react";
import CreateForm from "../components/Create/CreateForm";

import { tuksAddr, tuksContractAbi } from "../constants";
import { Web3Context } from "../contexts/Web3Context";
import { Contract, ethers } from "ethers";
import { useRouter } from "next/router";
function Create() {
  const { provider, connect, wallet } = useContext(Web3Context);
  const [submitting, setSubmitting] = useState(false);
  const [completed, setCompleted] = useState(false);

  const router = useRouter();

  const onClickCreate = async (e) => {
    e.preventDefault();
    try {
      if (!provider) {
        alert("connect wallet to mumbai network and try again");
        await connect();
        return;
      }
      let data = {
        eventName: e.target.eventName.value, // string
        Organizers: e.target.Organizers.value, // string
        eventType: e.target.eventType.value, // string
        amount: Number(e.target.amount.value), // number
        image: e.target.image.value, // string
        desc: e.target.desc.value, // string
        Shortdesc: e.target.Shortdesc.value, // string
        PartiNum: e.target.PartiNum.value, // number
        eventDate: e.target.eventDate.value, // number
        StartTime: e.target.StartTime.value, // number
        EndTime: e.target.EndTime.value, // number
      };

      setSubmitting(true);

      const signer = provider.getSigner();
      const tuksContractInstance = new Contract(
        tuksAddr,
        tuksContractAbi,
        signer
      );

      const createEvent = await tuksContractInstance.createEvent(
        data.eventName,
        data.amount
      );

      const receipt = await createEvent.wait(1);
      // Get the eventsId
      // const eventsId = receipt?.events[0].args[3].toString();
      // push Id into the data
      let addAddr = {
        address: wallet.address,
        date: date,
      };

      let pushIdData = { ...addAddr, ...data };

      console.log(pushIdData);

      //////////////////////////////////////////////////
      // Sending data to our backend
      const response = await fetch("/api/new-donation", {
        method: "POST",
        body: JSON.stringify(pushIdData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // const dataBackend = await response.json();
      // console.log(dataBackend);

      setCompleted(true);
      alert("Event created successfully");
      setSubmitting(false);
      e.target.reset();
      router.push("/donate");
    } catch (error) {
      console.error(error);
    }
    return undefined;
  };
  return (
    <div>
      <CreateForm
        submitting={submitting}
        completed={completed}
        onClickCreate={onClickCreate}
      />
    </div>
  );
}

export default Create;
