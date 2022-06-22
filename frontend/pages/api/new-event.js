import { MongoClient } from "mongodb";

// POST /api/new-donation

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(process.env.MongoURi);

    const db = client.db();

    const ticketCollection = db.collection("tickets");
    const result = await ticketCollection.insertOne(data);

    console.log(result);

    client.close();

    // 201 indicate successful addiction
    res.status(201).json({ message: "Event inserted" });
  }
}

export default handler;
