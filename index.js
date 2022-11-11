const express = require("express");
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello World vai ji! i love you");
});

const users = [
  { id: 1, name: "mukul", number: "0184645555" },
  { id: 2, name: "krikul", number: "0184645555" },
  { id: 3, name: "Shipul", number: "0184645555" },
  { id: 4, name: "babul", number: "0184645555" },
];

app.get("/home", (req, res) => {
  res.send(users);
});

app.get("/home/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  const user = users.find(users => users.id == id);
  res.send(user);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
