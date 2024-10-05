import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { MongoClient } from "mongodb";
import SignUp from "./models/SignUp.js";
import mongoose from "mongoose";
import profile from "./models/profile.js";
import Added from "./models/Add2Cart.js";
import FetchItems from "./models/ItemsFetch.js";
import { WebSocketServer } from "ws";
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);
const app = express();
const port = 3100;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post("/Login", async (req, res) => {
  const data = req.body;
  const gmail = data.gmail;
  const dbName = gmail.split("@")[0];
  if (mongoose.connection.readyState != 1) {
    await mongoose.connect(`mongodb://localhost:27017/${dbName}`, {});
  } else {
    await mongoose.disconnect();
    await mongoose.connect(`mongodb://localhost:27017/${dbName}`, {});
  }
  try {
    const userExist = await SignUp.findOne({ gmail: gmail });
    if (!userExist) {
      const newSignUp = new SignUp({ gmail });
      await newSignUp.save();
      return res.json({ created: true });
    } else {
      return res.json({ success: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

app.post("/SignUp", async (req, res) => {
  const data = req.body;
  const gmail = data.gmail[0];
  const password = data.password[0];
  const dbName = gmail.split("@")[0];
  if (mongoose.connection.readyState != 1) {
    await mongoose.connect(`mongodb://localhost:27017/${dbName}`, {});
  } else {
    await mongoose.disconnect();
    await mongoose.connect(`mongodb://localhost:27017/${dbName}`, {});
  }
  try {
    const user = await SignUp.findOne({ gmail: gmail, password: password });
    const userExist = await SignUp.findOne({ gmail: gmail });

    if (user) {
      return res.json({ success: true });
    } else if (!userExist) {
      const newSignUp = new SignUp({ gmail, password });
      await newSignUp.save();
      return res.json({ created: true });
    } else {
      return res.json({ success: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

app.post("/Profile", async (req, res) => {
  const data = req.body;
  const gmail = data.gmail;
  const MobNum = data.MobNum;
  const DOB = data.DOB;
  const Address = data.Address;

  try {
    const Exist = await profile.findOne({ gmail: gmail });
    if (Exist) {
      await profile.findOneAndUpdate(
        { gmail: gmail },
        { MobNum: MobNum, DOB: DOB, Address: Address }
      );
      return res.json({ updated: true });
    } else {
      const newProfile = new profile({ gmail, MobNum, DOB, Address });
      await newProfile.save();
      return res.json({ success: true });
    }
  } catch (error) {
    return res.json({ success: false, errorData: error });
  }
});

app.post("/DataFetch", async (req, res) => {
  const data = req.body;
  const email = data.gmail;
  const Exist = await profile.findOne({ gmail: email });
  if (Exist) {
    return res.json(Exist);
  } else {
    return res.json({ success: false });
  }
});
app.post("/Add2Cart", async (req, res) => {
  try {
    const data = req.body;
    const src = data.src;
    const Name = data.Name;
    const Price = data.Price;
    const Exist = await Added.findOne({ src: src });
    if (Exist) {
      return res.json({ exist: true });
    } else {
      const Add2Cart = new Added({ src, Name, Price });
      await Add2Cart.save();
      return res.json({ Add: true });
    }
  } catch (error) {
    return res.json({ errorData: error });
  }
});

app.post("/Remove2Cart", async (req, res) => {
  try {
    const data = req.body;
    const Name = data.Name;
    const Deleted = await Added.findOneAndDelete({ Name: Name });
    if (Deleted) {
      return res.json({ Deleted: true });
    } else {
      return res.json({ Deleted: false });
    }
  } catch (error) {
    return res.json({ errorData: error });
  }
});

// Feching Items Data....
app.get("/getCartData", async (req, res) => {
  try {
    const data = await Added.find({});
    return res.json({ success: true, Data: data });
  } catch (error) {
    return res.json({ success: false });
  }
});

app.get("/favProducts", async (req, res) => {
  async function run() {
    try {
      await client.connect();
      const db = client.db("Items_Data");
      const coll = db.collection("items");
      const cursor = coll.find({});
      const Data = await cursor.toArray();
      const data = Data[0];
      return res.json({ data });
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
});

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const wss = new WebSocketServer({server});

wss.on("connection", (ws) => {
  console.log("A client connected");

  ws.on("message", (message) => {
    console.log(`Message received: ${message}`);
    ws.send(`Good to see you client`);
  });
  
});



