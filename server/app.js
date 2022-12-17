const express = require('express')
const {connectToDb,test} = require('./db/dbConnect.js')
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
connectToDb();

app.get("/", (req, res) => {
  res.json("hello world!")
})

app.get("/flowers", async (req, res) => {
  const flower = await test();
  res.json(flower)
})

app.listen(5000, () => { console.log("listening on port 5000") })