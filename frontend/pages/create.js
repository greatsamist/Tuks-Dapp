import { useContext, useState } from "react";
import CreateForm from "../components/Create/CreateForm";
import { Web3Context } from "../contexts/Web3Context";
import { useRouter } from "next/router";
import FormTwo from "../components/Create/FormTwo";

function Create() {
  const { provider, connect, tuksContractInstance } = useContext(Web3Context);
  const [submitting, setSubmitting] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [showFormOne, setShowFormOne] = useState(true);
  const [showFormTwo, setShowFormTwo] = useState(false);
  const [formOneData, setFormOneData] = useState();

  const router = useRouter();

  const onClickContinue = (e) => {
    e.preventDefault();

    let formOne = {
      eventName: e.target.eventName.value, // string
      eventType: e.target.eventType.value, // string
      organizers: e.target.organizers.value, // string
      PartiNum: Number(e.target.PartiNum.value), // number
      category: e.target.category.value, // string
      eventDate: e.target.eventDate.value, // number
      StartTime: e.target.StartTime.value, // number
      EndTime: e.target.EndTime.value, // number
      desc: e.target.desc.value, // string
      Shortdesc: e.target.Shortdesc.value, // string
    };

    setFormOneData(formOne);
    setShowFormOne(false);
    setShowFormTwo(true);
  };

  const onClickCreate = async (e) => {
    e.preventDefault();
    try {
      if (!provider) {
        alert("connect wallet to mumbai network and try again");
        await connect();
        return;
      }
      let formTwo = {
        image: e.target.image.value, // string
        amount: Number(e.target.amount.value), // number
      };

      setSubmitting(true);

      const createEvent = await tuksContractInstance.createEvent(
        formOneData.PartiNum,
        formTwo.amount
      );

      const receipt = await createEvent.wait(1);
      // Get the eventsId
      const eventsId = Number(receipt?.events[0].args[0]);
      // add formOne into the data
      let id = {
        id: eventsId,
      };

      let pushData = { ...id, ...formOneData, ...formTwo };

      console.log(pushData);

      //////////////////////////////////////////////////
      // Sending data to our backend
      const response = await fetch("/api/new-event", {
        method: "POST",
        body: JSON.stringify(pushData),
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
      router.push("/");
    } catch (error) {
      console.error(error);
    }
    return undefined;
  };
  return (
    <div>
      {showFormOne ? <CreateForm onClickContinue={onClickContinue} /> : ""}
      {showFormTwo ? (
        <FormTwo submitting={submitting} onClickCreate={onClickCreate} />
      ) : (
        ""
      )}
    </div>
  );
}

export default Create;
